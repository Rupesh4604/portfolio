// Build-time renderer: scripts/prerender.mjs calls render(path) for every route so the
// static HTML that crawlers and link scrapers fetch contains the real page, not an empty <div>.
// It renders the default (light, wide) layout; the browser app then takes over (src/main.jsx).
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import { Shell } from "./App.jsx";

export function render(url) {
  const helmetContext = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <Shell />
      </StaticRouter>
    </HelmetProvider>
  );
  return { html, helmet: helmetContext.helmet };
}
