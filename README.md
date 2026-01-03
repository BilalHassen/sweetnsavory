# Sweet & Savoury (Client Site)

This repo is the marketing site for **Sweet & Savoury** (South African pies). It’s a small React site built with Vite + Sass and a simple component structure so it’s easy to tweak during client feedback.

## Run it locally

From the `sweetnsavory/` folder:

```bash
npm install
npm run dev
```

## Handy scripts

- **`npm run dev`**: start the dev server
- **`npm run build`**: build for production (outputs to `dist/`)
- **`npm run preview`**: preview the production build locally
- **`npm run lint`**: run ESLint

## Where to make changes

If the client asks for wording/layout changes, these are the files you’ll touch most:

- **Hero content + CTA buttons**: `src/components/Main/Main.jsx`
- **Hero styling**: `src/components/Main/Main.scss`
- **Nav links / menu data**: `src/components/Nav/navMenuData.js`
- **Overall page wrapper**: `src/LayOut/Layout.jsx`

## Images (logo, hero, product photos)

Images are served from:

- `public/assets/images/`

This project uses Vite’s `BASE_URL` when building image paths so it still works if the site is deployed under a sub-path (not just `/`). Example:

```js
const heroBg = `${import.meta.env.BASE_URL}assets/images/hero.jpg`
```

Easiest way to swap an image is to **keep the same filename** (e.g. replace `logo.png` with a new `logo.png`). Otherwise, update the path where it’s used.

## Folder map (quick)

```text
src/
  components/        Reusable UI + page sections (Nav, Main, etc.)
  LayOut/            App layout wrapper
  styles/            Global Sass + partials (variables/mixins)
public/
  assets/images/     Static images served as-is
```

## Deploy notes

- Vite outputs the production build to `dist/`.
- If you deploy under a subpath, make sure the host is configured for SPA routing + the correct base path.


