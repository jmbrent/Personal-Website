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

## Validation

```bash
npm run lint
npx next build --webpack
```

Note: in this sandbox, `npm run build` hits a Turbopack environment issue, but the webpack production build passes.
