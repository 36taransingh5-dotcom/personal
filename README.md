# Taran Pal Singh — Spatial Portfolio

A 3D spatial portfolio ("Mixed Media / Spatial Canvas") built with React Three Fiber.

## Stack

- **Vite + React 19**
- **three / @react-three/fiber / @react-three/drei** — 3D rendering
- **framer-motion** — DOM/HTML animations
- **Tailwind CSS v4** — styling, themed via CSS variables in `src/index.css`

## Run

```bash
npm install
npm run dev      # local dev server
npm run build    # production build
npm run lint     # eslint
```

## Structure

- `src/App.jsx` — fixed full-screen `<Canvas>` (dpr [1,2], touch-action: none) + 2D DOM overlay
- `src/components/Experience.jsx` — scene contents: lighting, `city` environment, springy `PresentationControls`, hero `Text3D`
- `public/fonts/` — typeface JSON for `Text3D` (served locally, no CDN)

## Theming

Swap the palette by editing the three CSS variables at the top of `src/index.css`
(`--background`, `--foreground`, `--accent`).
