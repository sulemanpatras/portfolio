# Suleman Patras Khan — Portfolio

A from-scratch personal portfolio built with React + Vite. Single-page, dark-themed,
designed around an "API dashboard" concept — sections are framed as endpoints
(`GET /about`, `GET /experience`, `GET /skills`, `GET /projects`, `POST /contact`)
to match a backend-focused developer's world.

## Stack

- React 19 + Vite
- Plain CSS with design tokens (no UI framework) — see `src/index.css`
- [lucide-react](https://lucide.dev) for icons, plus a few hand-drawn brand icons
  (GitHub / LinkedIn / Facebook / Instagram) in `src/components/BrandIcons.jsx`

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## Editing content

Everything text/data-related lives in **`src/data.js`**: profile info, social
links, work experience, education, skills, projects, and services. Update that
file and the whole site updates — no need to touch component files for content
changes.

## Replacing images

- `public/suleman.jpg` — profile photo
- `public/projects/*.png` — project screenshots. `gms.png` and `tutorbugs.png`
  are designed placeholder cards (no live screenshot was available at build
  time) — swap in real screenshots with the same filenames whenever you have
  them.
- `public/Suleman_Patras_Khan_Resume.pdf` — the file behind the "Resume"
  download button in the hero.

## Deploying

This is a static site after `npm run build` (output in `dist/`). It deploys
as-is to Vercel, Netlify, GitHub Pages, or any static host.
