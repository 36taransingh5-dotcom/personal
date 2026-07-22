# Taran Pal Singh — Spatial Portfolio

A 3D spatial portfolio built with React Three Fiber. A full-screen WebGL canvas renders a lit 3D scene — a bevelled `Text3D` name mark that floats gently and can be dragged/rotated via presentation controls — with a small 2D text overlay ("Full-Stack Software Engineer") layered on top.

## Stack

- **Vite + React 19** — build tooling and UI runtime
- **three / @react-three/fiber / @react-three/drei** — WebGL scene, renderer, and helper components (`Environment`, `PresentationControls`, `Float`, `Text3D`, `Center`)
- **Tailwind CSS v4** (via `@tailwindcss/vite`) — styling, themed through CSS variables in `src/index.css`
- **framer-motion** — available for DOM/HTML animations
- **ESLint** — linting (`eslint.config.js`, React Hooks + React Refresh plugins)

## Project structure

- `index.html` — Vite entry point
- `src/main.jsx` — React root, mounts `<App />`
- `src/App.jsx` — fixed full-screen `<Canvas>` (dpr `[1, 2]`, shadows on) plus the 2D overlay text
- `src/components/Experience.jsx` — scene contents: ambient/directional lighting, `city` environment preset, springy `PresentationControls`, floating bevelled `Text3D` name
- `src/index.css` — global styles and theme CSS variables
- `public/fonts/helvetiker_bold.typeface.json` — typeface JSON used by `Text3D`, served locally (no CDN)

## Setup

```bash
npm install
```

## Usage

```bash
npm run dev      # start local dev server
npm run build    # production build
npm run preview  # preview the production build locally
npm run lint     # run eslint
```

## Theming

Swap the palette by editing the CSS variables (`--background`, `--foreground`, `--accent`) at the top of `src/index.css`.
