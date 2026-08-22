# CSSly

A gallery of artwork built purely in HTML and CSS — no JavaScript, no images, no external assets. Every piece runs live in the browser, straight from its source.

## Running locally

Requires Node.js 20.9+ (`.nvmrc` pins 22).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Starts the dev server |
| `npm run build` | Runs `validate:art`, then builds for production — a malformed artwork fails the build |
| `npm run start` | Serves the production build |
| `npm run lint` | Runs ESLint |
| `npm run validate:art` | Checks every artwork in `public/preview/` against the rules in `scripts/validate-artworks.mjs` |

## Project layout

- `app/` — Next.js App Router pages and routes (gallery, artwork pages, about, contact, terms, privacy)
- `components/` — shared UI, including `ArtworkFrame`, the sandboxed iframe that renders each piece
- `lib/` — artwork loading (`artworks.ts`), shared types (`types.ts`), site config (`site.ts`)
- `public/preview/<slug>/` — one folder per artwork: `meta.json`, `index.html`, `style.css`
- `scripts/validate-artworks.mjs` — the artwork validator that `build` runs first

## How artworks work

Each artwork lives in its own folder under `public/preview/<slug>/`. Its gallery page is served at `/art/<slug>`, and the raw files are reachable directly at `/preview/<slug>/`. The artwork is rendered inside a sandboxed `<iframe>` (`components/artwork-frame.tsx`), so its CSS can never leak into the rest of the site.

Want to add one? See [CONTRIBUTING.md](./CONTRIBUTING.md).

## Deployment

Deployed on Vercel, with a Netlify mirror. `NEXT_PUBLIC_SITE_URL` (see `.env.example`) drives `metadataBase`, the sitemap (`app/sitemap.ts`) and `robots.txt` (`app/robots.ts`) — set it to the site's public origin.

## Licence

- Code: [MIT](./LICENSE)
- Artworks (`public/preview/**`): [CC BY 4.0](./LICENSE-ARTWORKS)
