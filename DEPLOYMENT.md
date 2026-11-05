# Hosting the website

Run `npm install` (or `npm ci` with the supplied lockfile), then `npm run build`.
Upload **all contents of `dist/`** to the hosting folder, including `assets/` and `image/`. Do not upload only the HTML file.

Pages have separate clean URLs: `/` (Home) and `/partnerships/buyers` (Buyers) and `/partnerships/advertisers` (Advertisers). All pages use the shared header in `App.jsx`. Add future page paths in `src/utils/pageRoutes.js` and their page components to the registry in `App.jsx`.

The default build is for domain-root hosting. For subfolder hosting, set `VITE_BASE_PATH=/site/` when running `npm run build`, replacing `/site/` with the actual folder. The host must serve `index.html` for page URLs such as `/partnerships/buyers` (or `/site/partnerships/buyers`) while serving existing asset files normally. `vercel.json` includes the partnership page rewrites for Vercel. For Apache, Nginx, IIS or cPanel, configure the equivalent SPA fallback. No production Node.js process is required.

Old `?page=buyers` links are normalized to `/partnerships/buyers`; `/index.html` and `/#hero` normalize to `/`.

Serve `.js` as JavaScript and `.css` as CSS. Keep `index.html` uncached or revalidated so updates load the matching scripts. Hashed files inside `assets/` may use long caching; revalidate unversioned images when replacing them. Animation libraries are bundled into the build and do not require a CDN script.

For a local production check, run `npm run preview`. This is a preview command, not the production hosting setup.

Verify direct page visits, refresh, navigation and asset loading after changing the host configuration.
