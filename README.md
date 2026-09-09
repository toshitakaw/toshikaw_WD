# WOFI'S - The Artisan Pizza

A responsive four-page restaurant website built from the supplied WOFI'S brief and image assets.

## Pages

- Home
- Menu
- About
- Visit

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Production build

```bash
pnpm build
```

## Content updates

- Business details and external links: `lib/business.ts`
- Menu categories, dishes and prices: `lib/menu-data.ts`
- Theme and responsive layout: `app/globals.css`
- Supplied images: `public/assets/`

Set `NEXT_PUBLIC_SITE_URL` to the final public origin when a hosting destination is approved.

## GitHub Pages

The project is configured for the `toshitakaw.github.io` repository. Every push
to `main` builds and publishes the static website through GitHub Actions.

- Repository: `https://github.com/toshitakaw/toshitakaw.github.io`
- Live site: `https://toshitakaw.github.io`
