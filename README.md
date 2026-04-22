# X Style Barber

Next.js 16 projekat za premium barber brend sa 3D vizuelima, animacijama i PWA strukturom.

## Tehnologije

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- GSAP + Three.js (`@react-three/fiber`, `@react-three/drei`)

## Struktura

- `src/app/`: rute i global layout
- `src/components/`: UI, sekcije, 3D i animacije
- `src/lib/`: shared helperi
- `public/`: staticki assets
- `x.svilenkovic.rs.conf`: produkcioni nginx primer

## Lokalni razvoj

```bash
npm install
npm run dev
```

## Build i provera

```bash
npm run build
npm run lint
```

## Live Preview

- https://x.svilenkovic.rs

## Deploy

Projekat koristi `output: "export"`, pa je deploy flow:

1. `npm run build`
2. Deploy `out/` sadrzaja na produkcioni web root
3. Provera routing-a i statickih asset-a na produkciji
