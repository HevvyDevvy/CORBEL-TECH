# Corbel Tech — Digital Products Library

**Corbel Tech** — a corbel is the architectural bracket that carries
the load of everything built on top of it. The tagline in the masthead
("load bearers for the infrastructure you build on") is doing the work
of explaining that on sight, so the name reads as intentional rather
than a name-drop.

To rename later anyway, three places: `index.html` (`<title>` and the
masthead text), `manifest.json` (`name`/`short_name`/`description`).

## What this is

A static PWA — no backend, no build step. Every product tab (Quick
Deploy Servers, Shell Hardening Audit, Secure Comms Protocol, and all
8 command bundles) is defined in `products.js`, and every actual
downloadable file already lives in `downloads/`.

## Run it locally

```bash
cd site
python3 -m http.server 8080
# visit http://localhost:8080
```

(PWA install prompts require being served over `http://localhost` or
real HTTPS — `file://` won't trigger them.)

## Deploy it

Any static host works — GitHub Pages, Netlify, Vercel, S3+CloudFront,
or your own nginx (there's a config for exactly this in the
Integrated-Service/Static-Server bundles). Push the whole `site/`
folder as-is.

## "Standalone" — what that means here

This is already installable as a standalone app on desktop and mobile
via the browser's "Install app" prompt (the banner that appears is
built in, `app.js`'s `beforeinstallprompt` handler) — no app-store
submission, no separate codebase. That covers "standalone" for most
purposes.

If you later want a true native wrapper (its own `.exe`/`.app`/`.apk`,
not just an installed PWA), the two standard paths are:
- **Tauri** — wraps this exact HTML/CSS/JS in a native shell, small binary size
- **Capacitor** — same idea, more mobile-app-store-focused

Both would point at this same `site/` folder with no rewrite needed —
worth doing later, not now.

## Adding a new product later

Add one object to `PRODUCTS` in `products.js`, drop the file in
`downloads/`. No other code changes needed — the index and reading
pane both render from that one array.
