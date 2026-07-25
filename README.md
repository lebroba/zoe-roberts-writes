# zoesbooks.com

Book promotion and email-list site for **Zoe Roberts**, author of
*Power-Up Your Mind: Growth Mindset Strategies and Activities for Tweens*.

The site's primary job is building an email list. The book sells on Amazon;
this site converts parent, teacher, and counsellor traffic into subscribers by
offering a free printable journal. Purchase links are the secondary action.

## Stack

Vite 5 · React 18 · TypeScript · Tailwind · shadcn/ui (button only) · i18next
Deployed as a static SPA on Vercel.

## Getting started

```sh
npm install
cp .env.example .env.local   # optional, see Configuration
npm run dev                  # http://localhost:8080
```

| Script | Does |
|---|---|
| `npm run dev` | Dev server on :8080 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the built output |
| `npm run lint` | ESLint |

Typecheck with `npx tsc --noEmit -p tsconfig.app.json`.

## Configuration

Two environment variables, both public — the endpoints are designed for
public HTML form posts, so no API key ships in the bundle.

| Variable | Used by | Where to find it |
|---|---|---|
| `VITE_KIT_FORM_ID` | Email capture (hero, free guide, quiz) | Kit → edit a form → numeric id in the URL |
| `VITE_FORMSPREE_ID` | Contact form | Formspree → the 8-char hash in your endpoint |

**Unset is a supported state.** Forms render disabled with a visible notice
rather than pretending to submit. Set both in the Vercel dashboard for all
environments.

## Content

All copy lives in `src/content/` — components hold no content literals.

| File | Holds |
|---|---|
| `book.ts` | Title, description, highlights, editions (Kindle/paperback), cover map |
| `about.ts` | Zoe's biography and portrait |
| `reviews.ts` | Reader reviews |
| `site.ts` | Domain, socials, contact, enabled languages, form endpoints |

### The rule for this directory

**Never invent a value to fill a gap.** Unknown values are `null`, and the UI
omits them. Reviews render nothing while the list is empty; social icons are
omitted rather than linked to a platform homepage; the portrait is skipped
until a real photograph exists.

This site previously shipped fabricated awards, a stock photo captioned as the
author, and invented testimonials attributed to named professionals. Empty is
correct. Invented is not.

Reviews must be quoted from the real Amazon listing and attributed as shown
there.

## Internationalisation

English only at launch. The es/fr/it/pt machinery is intact — localised covers
and regional Amazon lockups are wired and working.

To enable a language: add it to `ENABLED_LANGUAGES` in `src/content/site.ts`
and add a reviewed `public/locales/<lng>/translation.json`. The switcher hides
itself while only one language is enabled, and `supportedLngs` derives from
that list, so a disabled language can't be reached by browser detection or a
`?lng=` query string.

Note that page copy is currently written directly into the components rather
than threaded through `t()`. Enabling a second language means re-threading it.

## Deployment

Vercel, framework preset **Vite**, build `npm run build`, output `dist`.

`vercel.json` rewrites everything to `/index.html`. Without it, loading
`/book` directly returns 404 even though in-app navigation works.

One consequence worth knowing: with a catch-all rewrite, a **missing asset
returns 200 with the HTML page**, not a 404. Broken images will not appear as
errors in logs.

## Design

Palette is sampled from the book cover — `ink`, `sunshine`, `hero-blue`,
`slate`, `paper`. Headings Nunito, body Inter, both self-hosted via
`@fontsource` (latin + latin-ext only).

The base layer applies `text-ink` to every heading, so **headings on dark
sections need an explicit `text-white`** or they render navy on navy.

The full design rationale is in
`docs/superpowers/specs/2026-07-24-zoesbooks-relaunch-design.md`.
