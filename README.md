# X Style Barber

Next.js 16 project for a premium barber brand, featuring 3D visuals, cinematic motion, and PWA-ready structure.

## Tech Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- GSAP + Three.js (`@react-three/fiber`, `@react-three/drei`)

## Project Structure

- `src/app/`: routes and global layout
- `src/components/`: UI, sections, 3D, and animation components
- `src/lib/`: shared utilities
- `public/`: static assets
- `x.svilenkovic.rs.conf`: example production Nginx config

## Local Development

```bash
npm install
npm run dev
```

## Build & Lint

```bash
npm run build
npm run lint
```

## Live Site

- https://x.svilenkovic.rs

## Deployment

This project uses static export (`output: "export"`).
Deployment flow:

1. `npm run build`
2. Deploy `out/` contents to production web root
3. Validate routing and static asset loading in production
