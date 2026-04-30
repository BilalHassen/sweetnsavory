import { useEffect, useRef } from 'react'

const SDK_URL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js'
const NODE_ID = 'collection-component-1777306971539'
const SHOP_DOMAIN = 'qhznk7-jc.myshopify.com'
const STOREFRONT_ACCESS_TOKEN = 'c70daba489071f3d055a367c1545d2c1'
const COLLECTION_ID = '500044103927'

let sdkPromise = null
function loadShopifySDK() {
  if (window.ShopifyBuy && window.ShopifyBuy.UI) return Promise.resolve(window.ShopifyBuy)
  if (sdkPromise) return sdkPromise

  sdkPromise = new Promise((resolve, reject) => {
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

export default function ShopifyCollection() {
  const containerRef = useRef(null)
  const mountedRef = useRef(false)

  useEffect(() => {
    if (mountedRef.current) return
    mountedRef.current = true

    let cancelled = false
    const node = containerRef.current

    loadShopifySDK()
      .then((ShopifyBuy) => {
        if (cancelled || !node) return
        const client = ShopifyBuy.buildClient({
          domain: SHOP_DOMAIN,
          storefrontAccessToken: STOREFRONT_ACCESS_TOKEN,
        })
        return ShopifyBuy.UI.onReady(client).then((ui) => {
          if (cancelled || !node) return
          node.innerHTML = ''
          ui.createComponent('collection', {
            id: COLLECTION_ID,
            node,
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
              product: {
                styles: {
                  product: {
                    '@media (min-width: 601px)': {
                      'max-width': 'calc(33.33333% - 30px)',
                      'margin-left': '30px',
                      'margin-bottom': '50px',
                      width: 'calc(33.33333% - 30px)',
                    },
                    img: {
                      height: 'calc(100% - 15px)',
                      position: 'absolute',
                      left: '0',
                      right: '0',
                      top: '0',
                    },
                    imgWrapper: {
                      'padding-top': 'calc(75% + 15px)',
                      position: 'relative',
                      height: '0',
                    },
                  },
                  title: {
                    'font-family': 'Open Sans, sans-serif',
                    color: '#569066',
                  },
                  button: {
                    'font-family': 'Open Sans, sans-serif',
                    ':hover': { 'background-color': '#ba6f15' },
                    'background-color': '#cf7b17',
                    ':focus': { 'background-color': '#ba6f15' },
                    'border-radius': '12px',
                  },
                  price: {
                    'font-family': 'Open Sans, sans-serif',
                    'font-weight': 'bold',
                    color: '#cf7b17',
                  },
                  compareAt: {
                    'font-family': 'Open Sans, sans-serif',
                    'font-weight': 'bold',
                    color: '#cf7b17',
                  },
                  unitPrice: {
                    'font-family': 'Open Sans, sans-serif',
                    'font-weight': 'bold',
                    color: '#cf7b17',
                  },
                },
                text: { button: 'Add to cart' },
                googleFonts: ['Open Sans'],
              },
              productSet: {
                styles: {
                  products: {
                    '@media (min-width: 601px)': { 'margin-left': '-30px' },
                  },
                },
              },
              modalProduct: {
                contents: {
                  img: false,
                  imgWithCarousel: true,
                  button: false,
                  buttonWithQuantity: true,
                },
                styles: {
                  product: {
                    '@media (min-width: 601px)': {
                      'max-width': '100%',
                      'margin-left': '0px',
                      'margin-bottom': '0px',
                    },
                  },
                  button: {
                    'font-family': 'Open Sans, sans-serif',
                    ':hover': { 'background-color': '#ba6f15' },
                    'background-color': '#cf7b17',
                    ':focus': { 'background-color': '#ba6f15' },
                    'border-radius': '12px',
                  },
                  title: {
                    'font-family': 'Helvetica Neue, sans-serif',
                    'font-weight': 'bold',
                    'font-size': '26px',
                    color: '#4c4c4c',
                  },
                  price: {
                    'font-family': 'Helvetica Neue, sans-serif',
                    'font-weight': 'normal',
                    'font-size': '18px',
                    color: '#4c4c4c',
                  },
                  compareAt: {
                    'font-family': 'Helvetica Neue, sans-serif',
                    'font-weight': 'normal',
                    'font-size': '15.299999999999999px',
                    color: '#4c4c4c',
                  },
                  unitPrice: {
                    'font-family': 'Helvetica Neue, sans-serif',
                    'font-weight': 'normal',
                    'font-size': '15.299999999999999px',
                    color: '#4c4c4c',
                  },
                },
                googleFonts: ['Open Sans'],
                text: { button: 'Add to cart' },
              },
              option: {},
              cart: {
                styles: {
                  button: {
                    'font-family': 'Open Sans, sans-serif',
                    ':hover': { 'background-color': '#ba6f15' },
                    'background-color': '#cf7b17',
                    ':focus': { 'background-color': '#ba6f15' },
                    'border-radius': '12px',
                  },
                  title: { color: '#3e3e3e' },
                  header: { color: '#3e3e3e' },
                  lineItems: { color: '#3e3e3e' },
                  subtotalText: { color: '#3e3e3e' },
                  subtotal: { color: '#3e3e3e' },
                  notice: { color: '#3e3e3e' },
                  currency: { color: '#3e3e3e' },
                  close: { color: '#3e3e3e', ':hover': { color: '#3e3e3e' } },
                  empty: { color: '#3e3e3e' },
                  noteDescription: { color: '#3e3e3e' },
                  discountText: { color: '#3e3e3e' },
                  discountIcon: { fill: '#3e3e3e' },
                  discountAmount: { color: '#3e3e3e' },
                  cart: { 'background-color': '#fafafa' },
                  footer: { 'background-color': '#fafafa' },
                },
                text: { total: 'Subtotal', button: 'Checkout' },
                googleFonts: ['Open Sans'],
              },
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
              lineItem: {
                styles: {
                  variantTitle: { color: '#3e3e3e' },
                  title: { color: '#3e3e3e' },
                  price: { color: '#3e3e3e' },
                  fullPrice: { color: '#3e3e3e' },
                  discount: { color: '#3e3e3e' },
                  discountIcon: { fill: '#3e3e3e' },
                  quantity: { color: '#3e3e3e' },
                  quantityIncrement: { color: '#3e3e3e', 'border-color': '#3e3e3e' },
                  quantityDecrement: { color: '#3e3e3e', 'border-color': '#3e3e3e' },
                  quantityInput: { color: '#3e3e3e', 'border-color': '#3e3e3e' },
                },
              },
            },
          })
        })
      })
      .catch((err) => {
        console.error('Shopify Buy Button failed to load:', err)
      })

    return () => {
      cancelled = true
      if (node) node.innerHTML = ''
      mountedRef.current = false
    }
  }, [])

  return <div id={NODE_ID} ref={containerRef} />
}
