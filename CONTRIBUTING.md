# Contributing to CSSly

Thanks for considering adding a piece — CSSly's whole folder structure exists to make that easy, so this guide is the important one. If you get stuck, open an issue.

## The rules

Every artwork must be **HTML and CSS only**:

- No JavaScript. No `<script>` tags, no inline event handlers, nothing.
- No images (no `<img>`, no `background-image: url(...)` pointing at a file).
- No external assets or CDN links — no `https://`, `http://`, or protocol-relative (`//`) URLs anywhere in your `index.html` or `style.css`. Everything the piece needs must be self-contained.

`npm run validate:art` enforces most of this, and runs automatically as the first step of `npm run build` — so a PR with a `<script>` tag or an external URL fails before anyone reviews it. Run it yourself before opening the PR.

One thing it can't catch: a local file committed alongside your artwork and referenced relatively (`./texture.png`). That's checked by hand at review, so please don't — the three files listed below are all a piece should need.

## Folder shape

Add a new folder at:

```
public/preview/<slug>/
├── meta.json
├── index.html
└── style.css
```

All three files are required. The slug (your folder name) must be URL-safe: lowercase letters and digits, with single hyphens between words (e.g. `aurora-veil`, `pulse-rings-2`). No uppercase, no underscores, no doubled or leading/trailing hyphens, and it can't collide with an existing slug (case-insensitively).

## `meta.json` fields

| Field | Type | Notes |
| --- | --- | --- |
| `title` | string | Non-empty. The artwork's display name. |
| `description` | string | Non-empty. Shown under the title on the artwork's page. |
| `tags` | string[] | Non-empty array of non-empty strings. Used for filtering in the gallery. |
| `date` | string | Non-empty, must parse as a date (e.g. `"2026-08-20"`). |
| `featured` | boolean | Whether the piece is highlighted as featured. |
| `viewport` | `{ width: number, height: number }` | The pixel size you composed the piece at. Both must be positive numbers. |
| `author` | `{ name: string, github: string }` | Your display name and GitHub username. Shown on the artwork's page. |

### Explaining `viewport`

`viewport` isn't a display constraint — it's the exact canvas size you designed against. The gallery cards and the fullscreen view read `width`/`height` to scale your piece down (or up) to fit their box while preserving its proportions. If you report a viewport that doesn't match what your CSS actually assumes, your piece will be cropped or letterboxed everywhere it's shown. Set it to the size you were looking at while you built it.

### Worked example

```json
{
  "title": "Aurora Veil",
  "description": "A still night sky rendered from three blurred conic gradients in screen-blend, with a hand-placed starfield and a fine grain overlay to keep the color bands from looking flat.",
  "tags": ["gradient", "landscape", "static", "night-sky"],
  "date": "2026-08-10",
  "featured": false,
  "viewport": { "width": 1200, "height": 800 },
  "author": { "name": "Ada Lovelace", "github": "ada-lovelace" }
}
```

## Previewing locally

```bash
npm install
npm run dev
```

- Gallery: [http://localhost:3000/gallery](http://localhost:3000/gallery) — your piece should appear as a card once its folder exists.
- Artwork page: `http://localhost:3000/art/<slug>`

Before opening a PR, run:

```bash
npm run validate:art
```

It must pass. It checks the same rules described above, plus that `index.html` and `style.css` are present and that `meta.json` is valid JSON with all required fields.

## What happens next

- One artwork per PR, please — it makes review straightforward.
- The `author` details in your `meta.json` show up on the artwork's page, linking to your GitHub profile.
- By submitting, you keep copyright on your work, and it's published to everyone under CC BY 4.0 — see [LICENSE-ARTWORKS](./LICENSE-ARTWORKS) and the [Terms of Service](https://cssly.vercel.app/terms) for the full details. This is a curated gallery, so not every submission will be published.
