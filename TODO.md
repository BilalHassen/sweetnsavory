# Sweet & Savoury — Production TODO

Manual work that remains after the production audit. Code-side fixes are already
done; everything below requires you (Shopify Admin, Netlify dashboard, DNS,
or local commands).

---

## Shopify Admin

- [ ] **Verify variant IDs in `src/data/data.js`.**
      Open each product in Shopify Admin → check the variant URL
      (`...variants/<ID>`) for both the baked/fresh variant and the frozen
      variant. Replace any IDs that have rotated.
- [ ] **Confirm all 7 products are in the collection** referenced by
      `VITE_SHOPIFY_COLLECTION_ID=500044103927`. Products outside the collection
      can still be added to cart but won't show in any Shopify-rendered surfaces.
- [ ] **Customise the order confirmation email**
      (Settings → Notifications → Order confirmation). Mention pickup-only and
      the Stouffville address.
- [ ] **Enable Local Pickup, disable shipping**
      (Settings → Shipping & delivery → Local pickup) for the Stouffville
      location, so checkout can't quote a delivery rate.
- [ ] *(Optional but recommended)* **Rotate the storefront token**
      (Apps → Headless / Buy Button channel). Then update Netlify env vars and
      delete the hard-coded fallback in `src/hooks/useShopifyCart.js`
      (lines 9–14).

## Netlify

- [ ] **Set environment variables** (Site settings → Environment variables):
      - `VITE_SHOPIFY_DOMAIN`
      - `VITE_SHOPIFY_STOREFRONT_TOKEN`
      - `VITE_SHOPIFY_COLLECTION_ID`

      Trigger a redeploy after saving.
- [ ] **Verify HTTPS / HSTS** is on (Site settings → Domain management).

## Custom domain

When pointing a real domain at the site, update **all** of these:

- [ ] `og:url`, `og:image`, and `twitter:image` in `index.html`
- [ ] `SITE_URL` constant in `src/pages/PieDetail/PieDetail.jsx`
- [ ] All `<loc>` entries in `public/sitemap.xml`
- [ ] `Sitemap:` line in `public/robots.txt`
- [ ] `url` and `image` fields in the `Bakery` JSON-LD inside `index.html`

## SEO / Search Console

- [ ] **Submit the sitemap** to Google Search Console:
      `https://<your-domain>/sitemap.xml`
- [ ] **Confirm `/robots.txt`** is reachable at the root after deploy.
- [ ] **Update the Bakery JSON-LD address** in `index.html` once you publish a
      real shop address: add `streetAddress`, `postalCode`.

## Email / Domain (only if you switch off Gmail)

- [ ] If you move from `sweetandsavouryca@gmail.com` to a custom-domain
      mailbox, configure SPF + DKIM + DMARC at your DNS provider.

## Footer / social links

- [ ] Replace placeholder URLs in `src/components/Sections/Footer/Footer.jsx`
      (`facebook.com`, `instagram.com`, `twitter.com`) with real profile URLs,
      or remove the icons until you have a presence.

## Dependencies / security

- [ ] Run `npm audit fix` in a branch and re-test cart + navigation.
      Patches 3 high-severity react-router advisories (XSS via open redirect,
      CSRF, ScrollRestoration SSR XSS) and one transitive picomatch issue.

## Optional cleanup

- [ ] Delete `public/assets/images/home.png` (~2.0 MB, unreferenced).
- [ ] Delete `public/assets/images/about-larger.png` (~2.4 MB, only used as
      a non-AVIF fallback — virtually no modern browser hits this path).
      Consider replacing with a smaller WebP fallback first.
- [ ] Delete `src/index.css` — not imported anywhere.
- [ ] Consolidate the duplicate `useWidth` hooks
      (`hooks/useWidth.js` default export vs. `src/hooks/useWidth.js` named
      export). Both work; pick one and update imports.

## Known weak points (no action required, just FYI)

- Variant IDs and prices are duplicated between `data.js` and Shopify. If
  Shopify changes, the displayed value drifts until `data.js` is edited.
  The cart still charges whatever Shopify says, so this is a display-mismatch
  risk, not an overcharge risk.
- Nav links (`SubMenu`, `MobileMenu`, `Footer`) use `<a href="/#menu">` rather
  than `<Link>`, so navigating from a product page to a hash on `/` causes a
  full page reload. Functional but slower than SPA navigation.
- The fresh/frozen radio group is keyboard-accessible (Tab + Space/Enter)
  but doesn't support arrow-key navigation between options.
- Cart drawer is rendered in an iframe by Shopify — its a11y is out of your
  control short of building a custom checkout.
- No analytics or error tracking. Worth adding Plausible/Umami/PostHog and
  Sentry once you launch.
