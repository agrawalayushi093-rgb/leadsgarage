# Hosting the website

Run `npm install` (or `npm ci` with the supplied lockfile), then `npm run build`.
Upload **all contents of `dist/`** to the hosting folder, including `assets/` and `image/`. Do not upload only the HTML file.

The same build supports a domain root or a subfolder, such as `https://example.com/` or `https://example.com/site/`. Use the folder URL with its trailing slash or `index.html`. No production Node.js process is required: Apache, Nginx, IIS, cPanel, and static hosting can serve the generated files over HTTP/HTTPS.

Serve `.js` as JavaScript and `.css` as CSS. Keep `index.html` uncached or revalidated so updates load the matching scripts. Hashed files inside `assets/` may use long caching; revalidate unversioned images when replacing them. Animation libraries are bundled into the build and do not require a CDN script.

For a local production check, run `npm run preview`. This is a preview command, not the production hosting setup.

Verification: root and nested-subfolder hosting are tested against a local static server that checks filename case. Actual hosting configuration should be checked once a host is selected.
