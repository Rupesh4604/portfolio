# Personal Portfolio

Production site: [https://rupesh-dev.vercel.app](https://rupesh-dev.vercel.app)

Modern portfolio website for M Rupesh Kumar Yadav, built with React + Vite and styled using Tailwind CSS. The project includes SEO-focused prerendering, sitemap generation, and Vercel-ready configuration.

## Highlights

- Multi-page portfolio with client-side routing:
  - Home
  - Projects
  - Internships
  - Publications
  - Achievements
  - OpenSourceEnv
- Dark mode support
- SEO metadata management via `react-helmet-async`
- Route-aware static prerender output after build
- Auto sitemap generation
- Performance telemetry using Vercel Speed Insights

## Tech Stack

- React 19
- React Router DOM 7
- Vite 8
- Tailwind CSS 4
- PostCSS + Autoprefixer
- ESLint 9

## Project Structure

```text
.
├─ public/                     # Static assets (robots, manifest, sitemap source files)
├─ scripts/
│  ├─ routes.mjs               # Central route + SEO metadata registry
│  ├─ prerender.mjs            # Emits route-specific dist/**/index.html
│  └─ generate-sitemap.mjs     # Generates sitemap.xml
├─ src/
│  ├─ components/              # Reusable UI components
│  ├─ data/                    # Page data sources
│  ├─ pages/                   # Route-level pages
│  ├─ App.jsx                  # Router, layout, footer
│  ├─ input.css                # Tailwind import + custom CSS layers
│  └─ main.jsx                 # App bootstrap
├─ vercel.json                 # Rewrites + security/cache headers
└─ package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: latest LTS)
- npm 9+

### Install

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

This runs:

1. `vite build`
2. `npm run postbuild` (prerender + sitemap generation)

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Available Scripts

- `npm run dev`: Start Vite dev server
- `npm run build`: Create production build and run postbuild steps
- `npm run postbuild`: Generate prerendered route files and sitemap
- `npm run preview`: Preview the built site locally
- `npm run lint`: Run ESLint checks

## SEO + Prerendering Notes

- Route metadata is maintained in `scripts/routes.mjs`.
- Postbuild prerender creates route-specific `index.html` files in `dist/` for better crawler/social-preview support.
- `sitemap.xml` is generated automatically during postbuild.

## Deployment

Configured for Vercel using `vercel.json`:

- SPA rewrite fallback for app routes
- Security headers (CSP, HSTS, frame protections, etc.)
- Cache headers for assets and metadata files

Typical deploy flow:

1. Push to `main`
2. Vercel runs install + build
3. Built files from `dist/` are deployed

## Contact

- GitHub: [Rupesh4604](https://github.com/Rupesh4604)
- LinkedIn: [M Rupesh Kumar Yadav](https://www.linkedin.com/in/mediboyina-rupesh-kumar-yadav-8b7a14205/)
- X: [@RupeshKumar4604](https://x.com/RupeshKumar4604)
- Email: rupesh32003@gmail.com
