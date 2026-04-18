# Personal Website

Structured portfolio and click-through resume built with Next.js, TypeScript, and Tailwind CSS.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Local typed content model for projects

## Main Sections

- Home
- Project Management
- Product / UX
- Creative / Content
- Film / Production
- Resume
- Contact

## Content Structure

Project entries live in `src/content/projects.ts` and are rendered into:

- filterable project cards
- dynamic detail pages
- resume-linked project references

## Local Development

```bash
npm install
npm run dev
```

## Local Preview As `jonathanbrent.ca`

Use this when you want the site to render locally with the real domain instead
of `localhost`.

1. Start the app with the preview URL override:

```bash
npm run dev:preview
```

2. Open a Chrome window with `jonathanbrent.ca` mapped to your local machine:

```bash
npm run open:preview
```

This opens `http://jonathanbrent.ca:3100` against your local Next server without
changing the live DNS record.

If you want the domain to resolve locally in every browser instead of Chrome
only, add this once to `/etc/hosts`:

```txt
127.0.0.1 jonathanbrent.ca
127.0.0.1 www.jonathanbrent.ca
```

Then open `http://jonathanbrent.ca:3100` normally.

## Validation

```bash
npm run lint
npx next build --webpack
```

Note: in this sandbox, `npm run build` hits a Turbopack environment issue, but the webpack production build passes.
