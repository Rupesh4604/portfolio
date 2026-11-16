import '@fontsource-variable/geist/wght.css'
import '@fontsource/instrument-serif/latin-400.css'
import '@fontsource/instrument-serif/latin-400-italic.css'
import './input.css'
import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'

// Built pages arrive with the page already rendered (scripts/prerender.mjs marks #root with
// data-ssr): hydrate it. The dev server serves an empty #root: mount fresh.
const el = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)
if (el.hasAttribute('data-ssr')) hydrateRoot(el, app)
else createRoot(el).render(app)
