# Sweet & Savoury — Client Website

Marketing website for **Sweet & Savoury** (South African pies). Built as a client project with **React + Vite** and **Sass**.

## Tech stack

- **Frontend**: React
- **Build tool**: Vite
- **Styling**: Sass (`.scss`)
- **Icons/UI**: `lucide-react`, `@headlessui/react`

## Getting started (local dev)

From the project directory:

```bash
npm install
npm run dev
```

## Scripts

- **dev**: `npm run dev` — start local development server
- **build**: `npm run build` — production build (outputs to `dist/`)
- **preview**: `npm run preview` — preview the production build locally
- **lint**: `npm run lint` — run ESLint

## Editing site content

Common places you’ll update during client iterations:

- **Hero section (headline, buttons, flag)**: `src/components/Main/Main.jsx`
- **Hero styles**: `src/components/Main/Main.scss`
- **Navigation/menu items**: `src/components/Nav/navMenuData.js`
- **Layout wrapper**: `src/LayOut/Layout.jsx`

### Images (logos, hero, product photos)

Static images live in:

- `public/assets/images/`

They can be referenced via Vite’s `BASE_URL` so deployments under a subpath still work. Example pattern used in the app:

```js
const heroBg = `${import.meta.env.BASE_URL}assets/images/hero.jpg`
```

To replace an image, keep the same filename (e.g. `logo.png`, `hero.jpg`) to avoid touching code, or update the import/path where it’s used.

## Project structure (high level)

```text
src/
  components/        Reusable UI + page sections (Nav, Main, etc.)
  LayOut/            App layout wrapper
  styles/            Global Sass + partials (variables/mixins)
public/
  assets/images/     Static images served as-is
```

## Deployment notes

This is a standard Vite app:

- Build output is generated in `dist/`
- If you deploy under a subpath (not a root domain), ensure your host is configured to serve the app from the correct base path.

## Client handoff

If you’re handing this off to another developer, provide:

- The deployment target (Netlify/Vercel/custom hosting)
- Any required environment/base path details
- Where content updates will be coming from (static edits vs CMS later)
