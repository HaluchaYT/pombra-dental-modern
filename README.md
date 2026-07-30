# Pombra Dental Excellence — Modern Redesign

A modern Next.js 14 redesign of [drpombra.com](https://www.drpombra.com) — the practice website for Pombra Dental Excellence in San Bruno, CA.

Same content, same imagery, same voice — reimagined with a modern design system, a proper home page, and a full page architecture.

## Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS 3** with a custom teal/gold/cream palette
- **Fraunces** display serif + **Inter** sans body

## Pages

- `/` — Full-height animated home with hero, service grid, about teaser, "how it works," testimonial wall, and membership preview
- `/services/invisalign` — Diamond 1% Invisalign Provider details
- `/services/fotona-laser` — All 5 Fotona laser treatments
- `/services/healthystart` — Pediatric wellness program
- `/services/general-dentistry` — Preventive, restorative, and technology
- `/about` — Dr. Hema Pombra bio + credentials
- `/team` — Full staff (Jessica, Guilla, Jaime, Graciella)
- `/in-office-plan` — Membership tiers
- `/referring-offices` — Info for referring specialists
- `/contact` — Form + Google Maps embed
- `/disclaimer` — Legal

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Notes

- Imagery is pulled from the current Wix CDN via `next/image` remote patterns
- All pages statically pre-render (~87 KB shared JS)
- Mobile-first responsive layouts throughout
