# missions-site

Monochrome cyberpunk public site for [missions.md](https://github.com/earth2travis/substrate/blob/main/missions/missions.md).

Built on [cloudflare/vinext](https://github.com/cloudflare/vinext) and deployable to Cloudflare Workers.

---

## Stack

- **Framework:** vinext v0.1.1 (Next.js API surface on Vite + Cloudflare Workers)
- **Styling:** Pure CSS, grayscale tokens only. No Tailwind, no UI framework.
- **Runtime:** Cloudflare Workers (Workers + Pages compatible)
- **Dev:** Local Vite dev server

---

## Commands

### Dev

```sh
npm run dev
```

Starts the Vite dev server at `http://localhost:5173` (or the next available port).

### Build

```sh
npm run build
```

Runs `vinext build`. Produces `dist/` with a self-contained Worker bundle. Zero warnings required.

### Preview production build

```sh
npm run start
```

Starts the built Worker locally (uses `miniflare`).

### Deploy

> **Human gate.** Credentials live in 1Password vault `Operations`, item `Cloudflare`.
> Set `CLOUDFLARE_API_TOKEN` before deploying.

```sh
# Preview to dev namespace (no credentials needed for local preview)
npx wrangler dev

# Preview to staging namespace
CLOUDFLARE_API_TOKEN=<token> npx wrangler deploy --env staging

# Production deploy (human gate required)
CLOUDFLARE_API_TOKEN=<token> npx wrangler deploy --env production
```

`wrangler.toml` is pre-configured for all three environments. No hardcoded URLs.

---

## Content slots

This scaffold contains placeholder pages with clearly marked slots for downstream lanes.

| Route | File | Slots |
|-------|------|-------|
| `/` | `app/page.tsx` | `HERO_SLOT`, `FEATURES_SLOT`, `TAG_SLOT`, `CTA_SLOT` |
| `/about` | `app/about/page.tsx` | `ABOUT_PROSE_SLOT`, `ABOUT_PRINCIPLES_SLOT`, `ABOUT_TEAM_SLOT` |
| `/missions` | `app/missions/page.tsx` | `MISSIONS_GRID_SLOT`, `DATA_SLOT`, `PAGINATION_SLOT` |
| `/contact` | `app/contact/page.tsx` | `CONTACT_INFO_SLOT`, `FORM_SLOT` |
| root layout | `app/layout.tsx` | `META_SLOT`, `NAV_LINKS_SLOT`, `FOOTER_SLOT` |

All content in `app/` is marked for replacement by the build and copy lanes.
No production copy has been written yet.

---

## Design system

Strictly monochrome. Grayscale tokens defined in `app/globals.css`.

```
--color-bg          #f2f2f2
--color-surface     #e8e8e8
--color-border      #cccccc
--color-muted       #999999
--color-body-text   #1a1a1a
--color-button-bg   #1a1a1a
```

No chromatic color in any computed style.

---

## Branch convention

Branch from `origin/main`. One PR per logical unit. Use conventional commits (`feat:`, `fix:`, `docs:`).

---

## vinext notes

vinext v0.1.1 is young software. Known sharp edges:

- Route classification is conservative. Dynamic API usage (headers(), cookies()) is reported as `Unknown` at build time. This is expected and not a build failure. Classification will improve in future releases.
- The `vinext deploy` shorthand is available but unused here; `wrangler deploy` with the pre-configured `wrangler.toml` is preferred for Cloudflare Workers deploys to keep environment parity.

If `vinext build` breaks, repair in place. If the break survives one repair attempt, comment + block rather than swapping frameworks.