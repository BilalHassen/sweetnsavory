import { useEffect } from 'react'

const SDK_URL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js'

// Storefront credentials are public by design (read-only, rate-limited).
// Sourced from Vite env vars so the shop owner can rotate them in Netlify
// without a code change. Hard-coded fallbacks keep dev builds working
// when no .env file is present.
const DOMAIN =
  import.meta.env.VITE_SHOPIFY_DOMAIN ?? 'qhznk7-jc.myshopify.com'
const TOKEN =
  import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN ?? 'c70daba489071f3d055a367c1545d2c1'
const COLLECTION_ID =
  import.meta.env.VITE_SHOPIFY_COLLECTION_ID ?? '500044103927'

let sdkPromise = null
let shopifyClient = null
let uiRef = null
let initialized = false

// Resolves once the cart UI is mounted and ready to accept items.
// Lets `addToShopifyCart` await readiness when a user clicks before the SDK loads.
let resolveReady
let rejectReady
const readyPromise = new Promise((resolve, reject) => {
  resolveReady = resolve
  rejectReady = reject
})

function loadSDK() {
  if (sdkPromise) return sdkPromise
  sdkPromise = new Promise((resolve, reject) => {
    if (window.ShopifyBuy?.UI) return resolve(window.ShopifyBuy)
    const existing = document.querySelector(`script[src="${SDK_URL}"]`)
    if (existing) {
      existing.addEventListener('load', () => resolve(window.ShopifyBuy))
      existing.addEventListener('error', reject)
      return
    }
    const script = document.createElement('script')
    script.async = true
    script.src = SDK_URL
    script.onload = () => resolve(window.ShopifyBuy)
    script.onerror = reject
    ;(document.head || document.body).appendChild(script)
  })
  return sdkPromise
}

function getCart() {
  return uiRef?.components?.cart?.[0] ?? null
}

export async function addToShopifyCart(variantId, quantity = 1) {
  if (!variantId) {
    console.warn('addToShopifyCart called without a variantId')
    return
  }

  // Wait up to 8s for the Shopify Buy SDK to finish loading. Covers the case
  // where a user clicks "Add to cart" while the SDK is still bootstrapping.
  try {
    await Promise.race([
      readyPromise,
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Shopify SDK load timed out')), 8000),
      ),
    ])
  } catch (err) {
    console.error('Shopify cart unavailable:', err)
    return
  }

  const cart = getCart()
  if (!shopifyClient || !cart) {
    console.warn('Shopify cart not ready yet — SDK still loading')
    return
  }

  const gid = `gid://shopify/ProductVariant/${variantId}`

  // addVariantToCart is the cart's own internal method — it updates the model,
  // re-renders the iframe, and refreshes the toggle badge in one shot.
  if (typeof cart.addVariantToCart === 'function') {
    return cart.addVariantToCart({ id: gid }, quantity)
  }

  // Fallback for any SDK version that doesn't expose addVariantToCart
  const lineItems = [{ variantId: gid, quantity }]
  try {
    const checkoutId = cart.model?.id ?? (await shopifyClient.checkout.create()).id
    const checkout = await shopifyClient.checkout.addLineItems(checkoutId, lineItems)
    cart.model = checkout
    cart.render()
    cart.open()
  } catch (err) {
    console.error('Add to cart failed, retrying with fresh checkout:', err)
    try {
      const fresh = await shopifyClient.checkout.create()
      const checkout = await shopifyClient.checkout.addLineItems(fresh.id, lineItems)
      cart.model = checkout
      cart.render()
      cart.open()
    } catch (err2) {
      console.error('Shopify checkout error:', err2)
    }
  }
}

export function useShopifyCart() {
  useEffect(() => {
    if (initialized) return
    initialized = true

    // The SDK needs a real DOM node for the collection component.
    // We mount it in a hidden zero-size div so cart + toggle still init properly.
    const hiddenNode = document.createElement('div')
    hiddenNode.setAttribute('aria-hidden', 'true')
    hiddenNode.style.cssText =
      'position:absolute;width:0;height:0;overflow:hidden;pointer-events:none;visibility:hidden'
    document.body.appendChild(hiddenNode)

    loadSDK()
      .then((ShopifyBuy) => {
        shopifyClient = ShopifyBuy.buildClient({ domain: DOMAIN, storefrontAccessToken: TOKEN })
        return ShopifyBuy.UI.onReady(shopifyClient).then((ui) => {
          uiRef = ui
          return ui.createComponent('collection', {
            id: COLLECTION_ID,
            node: hiddenNode,
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
              // Disable all product UI — we only want the cart + toggle
              product: {
                contents: {
                  img: false,
                  imgWithCarousel: false,
                  title: false,
                  variantTitle: false,
                  price: false,
                  unitPrice: false,
                  options: false,
                  quantity: false,
                  quantityIncrement: false,
                  quantityDecrement: false,
                  quantityInput: false,
                  button: false,
                  buttonWithQuantity: false,
                  description: false,
                },
              },
              cart: {
                styles: {
                  // ── CHECKOUT BUTTON (inside cart footer) ──────────────────
                  button: {
                    'font-family': 'Open Sans, sans-serif',
                    'font-size': '16px',
                    'font-weight': '700',
                    'letter-spacing': '0.04em',
                    'background-color': '#cf7b17',
                    'border-radius': '12px',
                    ':hover': { 'background-color': '#ba6f15' },
                    ':focus': { 'background-color': '#ba6f15' },
                  },

                  // ── CART PANEL CONTAINER (size, position, background) ─────
                  cart: {
                    'background-color': '#fafafa',
                    // mobile: full width, full height
                    width: '100vw',
                    'max-width': '100vw',
                    height: '100vh',
                    'max-height': '100vh',
                    // tablet: narrower, leaves room on the left
                    '@media (min-width: 600px)': {
                      width: '420px',
                      'max-width': '420px',
                      height: '100vh',
                      'max-height': '100vh',
                    },
                    // desktop: fixed width, not full height
                    '@media (min-width: 1024px)': {
                      width: '400px',
                      'max-width': '400px',
                      height: '55vh',
                      'max-height': '55vh',
                    },
                  },

                  // ── HEADER (top bar with "Cart" title) ────────────────────
                  header: {
                    color: '#2a1f1a',
                    'font-family': 'Open Sans, sans-serif',
                  },

                  // ── "CART" TITLE TEXT ─────────────────────────────────────
                  title: {
                    color: '#2a1f1a',
                    'font-family': 'Open Sans, sans-serif',
                    'font-size': '22px',
                    'font-weight': '700',
                    'letter-spacing': '0.02em',
                  },

                  // ── CLOSE (X) BUTTON ──────────────────────────────────────
                  close: {
                    color: '#7e6f67',
                    ':hover': { color: '#2a1f1a' },
                  },

                  // ── LINE ITEMS SECTION (scrollable list area) ─────────────
                  lineItems: { color: '#2a1f1a' },

                  // ── "YOUR CART IS EMPTY" TEXT ─────────────────────────────
                  empty: {
                    color: '#7e6f67',
                    'font-family': 'Open Sans, sans-serif',
                    'font-size': '16px',
                  },

                  // ── FOOTER (subtotal + checkout button strip) ─────────────
                  footer: { 'background-color': '#f5f0eb' },

                  // ── SUBTOTAL LABEL ("Subtotal") ───────────────────────────
                  subtotalText: {
                    color: '#2a1f1a',
                    'font-family': 'Open Sans, sans-serif',
                    'font-size': '16px',
                    'font-weight': '600',
                  },

                  // ── SUBTOTAL AMOUNT ($26.00) ──────────────────────────────
                  subtotal: {
                    color: '#cf7b17',
                    'font-family': 'Open Sans, sans-serif',
                    'font-size': '18px',
                    'font-weight': '700',
                  },

                  // ── CURRENCY SYMBOL ───────────────────────────────────────
                  currency: {
                    color: '#cf7b17',
                    'font-weight': '700',
                  },

                  // ── SHIPPING NOTICE TEXT ──────────────────────────────────
                  notice: {
                    color: '#7e6f67',
                    'font-family': 'Open Sans, sans-serif',
                    'font-size': '13px',
                  },

                  // ── ORDER NOTE DESCRIPTION ────────────────────────────────
                  noteDescription: {
                    color: '#7e6f67',
                    'font-family': 'Open Sans, sans-serif',
                  },

                  // ── DISCOUNT CODE TEXT ────────────────────────────────────
                  discountText: { color: '#cf7b17', 'font-family': 'Open Sans, sans-serif' },
                  discountIcon: { fill: '#cf7b17' },
                  discountAmount: { color: '#cf7b17', 'font-weight': '700' },
                },

                // ── BUTTON + LABEL TEXT ───────────────────────────────────
                text: { total: 'Subtotal', button: 'Checkout' },
                googleFonts: ['Open Sans'],
              },

              // ── FLOATING CART TOGGLE BUTTON (bottom-right icon) ──────────
              toggle: {
                styles: {
                  toggle: {
                    'font-family': 'Open Sans, sans-serif',
                    'background-color': '#cf7b17',
                    ':hover': { 'background-color': '#ba6f15' },
                    ':focus': { 'background-color': '#ba6f15' },
                  },
                },
                googleFonts: ['Open Sans'],
              },

              // ── EACH ITEM ROW IN THE CART ─────────────────────────────────
              lineItem: {
                styles: {
                  // Product name
                  title: {
                    color: '#2a1f1a',
                    'font-family': 'Open Sans, sans-serif',
                    'font-size': '15px',
                    'font-weight': '600',
                  },
                  variantTitle: {
                    color: '#7e6f67',
                    'font-family': 'Open Sans, sans-serif',
                    'font-size': '13px',
                  },

                  // Price
                  price: {
                    color: '#cf7b17',
                    'font-family': 'Open Sans, sans-serif',
                    'font-size': '15px',
                    'font-weight': '700',
                  },
                  fullPrice: {
                    color: '#cf7b17',
                    'font-family': 'Open Sans, sans-serif',
                    'font-weight': '700',
                  },

                  // Discount
                  discount: { color: '#7e6f67', 'font-family': 'Open Sans, sans-serif' },
                  discountIcon: { fill: '#7e6f67' },

                  // Quantity controls
                  quantity: {
                    color: '#2a1f1a',
                    'font-family': 'Open Sans, sans-serif',
                    'font-size': '15px',
                  },
                  quantityIncrement: { color: '#cf7b17', 'border-color': '#cf7b17' },
                  quantityDecrement: { color: '#cf7b17', 'border-color': '#cf7b17' },
                  quantityInput: {
                    color: '#2a1f1a',
                    'border-color': '#cf7b17',
                    'font-size': '15px',
                  },
                },
              },
            },
          })
        })
      })
      .then(() => resolveReady?.())
      .catch((err) => {
        console.error('Shopify init failed:', err)
        rejectReady?.(err)
      })
  }, [])
}
