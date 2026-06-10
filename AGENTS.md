<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Neurotecnologías — Repo Guide

## Commands
```bash
yarn dev       # dev server (Turbopack)
yarn build     # production build
yarn start     # production server
yarn lint      # ESLint check (flat config: eslint.config.mjs)
```
Uses **yarn** (not npm). Lockfile: `yarn.lock`.

## Stack
- **Next.js 16.2.6** (Turbopack in dev) — read `node_modules/next/dist/docs/` before writing code
- **Tailwind CSS v4** — no `tailwind.config.js`; config is CSS-based via `@tailwindcss/postcss`
- **shadcn/ui** — components in `@/components/ui/`
- **Animations**: GSAP, Swiper, Lottie
- **TypeScript** — strict mode, `@/*` path alias → `./src/*`
- **Fonts**: Inter (sans) — local files in `src/fonts/`, loaded via `next/font/local`. Fallback: `"Helvetica Neue", Arial, sans-serif`

## Project structure
```
src/
├── app/               # Next.js App Router pages
│   ├── layout.tsx     # Root layout (metadata, fonts, header/footer, nebula bg, chatbot)
│   └── page.tsx       # Home page (all sections inline)
├── components/
│   ├── ui/            # shadcn/ui primitives
│   ├── header.tsx     # Client component with GSAP animated title
│   ├── footer.tsx
│   ├── chatbot.tsx
│   ├── brands-carousel.tsx
│   ├── logo-slider.tsx
│   └── nebula-background.tsx   # Canvas particle effect (used in layout.tsx)
└── lib/
    └── constants.ts   # SITE, NAV_LINKS, CLINICAL_AREAS, PRODUCTS, FAQS, CLINICAL_APPLICATIONS, SPECIALTY_SOLUTIONS, SPECIALTIES
```

## Conventions
- All routes are Spanish slugs (`/nosotros`, `/productos`, `/areas-clinicas`, etc.)
- Homepage is a single `"use client"` page with many inline sections (hero SEO, logos, confianza, áreas clínicas, productos, aplicaciones médicas, marcas, soporte, congresos, FAQ, CTA final)
- `constants.ts` is the single source of truth for content — edit there to change site text, products, FAQ, etc.
- Brand colors use custom gradient classes (`btn-gradient`, `text-gradient`, `chip`, `glass-card`, `card-hover`, `badge`) defined in `globals.css`

## Testing
No tests exist in this repo.

## Deployment
App entry: `src/app/layout.tsx`. Metadata, JSON-LD schemas (Organization, WebSite), and analytics are set there.
