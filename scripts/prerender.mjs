// Emits one static HTML file per route with:
//   - route-specific <head> meta (title, description, canonical, OG/Twitter cards),
//   - the page itself rendered to HTML (dist-ssr/entry-server.js, built by `npm run build`),
//   - the page's own structured data (JSON-LD from its <Helmet>).
// So crawlers and link scrapers that don't run JavaScript still get the full page.
// The browser app hydrates this HTML (src/main.jsx).
import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { SITE, routes } from './routes.mjs';

const { render } = await import(pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href);

// Put the rendered page into #root and drop the generic <noscript> summary (the real page is there now).
// React 19 renders each page's <Helmet> tags inline. Title, meta and canonical are hoisted by React
// (it does not expect them in place when hydrating) and applyMeta already sets them in <head>, so they
// are removed from the body; image preloads move to <head>. JSON-LD <script>s stay where React put
// them: hydration expects them there, and crawlers read JSON-LD anywhere in the page.
function withPage(html, url) {
  let { html: body } = render(url);
  const head = [];
  body = body.replace(/<link rel="preload"[^>]*\/?>/g, (m) => {
    head.push(m);
    return '';
  });
  body = body.replace(/<title>[\s\S]*?<\/title>|<meta [^>]*\/?>|<link rel="canonical"[^>]*\/?>/g, '');
  html = html.replace(/<noscript>[\s\S]*?<\/noscript>\s*/, '');
  html = html.replace('<div id="root"></div>', () => `<div id="root" data-ssr>${body}</div>`);
  if (head.length) html = html.replace('</head>', () => `    ${head.join('\n    ')}\n  </head>`);
  if (!html.includes('data-ssr')) throw new Error(`Could not insert the rendered page for ${url}`);
  return html;
}

const DIST = process.env.VITE_DIST_DIR || path.resolve('dist');

function escapeHtml(s = '') {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildHeadBlock(route) {
  const absUrl = SITE.origin + (route.path === '/' ? '/' : route.path);
  const image = SITE.origin + SITE.defaultImage;
  const t = escapeHtml(route.title);
  const d = escapeHtml(route.description);
  const u = escapeHtml(absUrl);
  const i = escapeHtml(image);
  return [
    `<title>${t}</title>`,
    `<meta name="description" content="${d}" />`,
    `<link rel="canonical" href="${u}" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta property="og:url" content="${u}" />`,
    `<meta property="og:image" content="${i}" />`,
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
    `<meta name="twitter:image" content="${i}" />`,
  ].join('\n    ');
}

function applyMeta(html, route) {
  // Replace <title>
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(route.title)}</title>`);
  // Replace or insert description
  if (/<meta\s+name="description"[^>]*>/i.test(html)) {
    html = html.replace(
      /<meta\s+name="description"[^>]*>/i,
      `<meta name="description" content="${escapeHtml(route.description)}" />`
    );
  }
  // Replace canonical
  const absUrl = SITE.origin + (route.path === '/' ? '/' : route.path);
  if (/<link\s+rel="canonical"[^>]*>/i.test(html)) {
    html = html.replace(
      /<link\s+rel="canonical"[^>]*>/i,
      `<link rel="canonical" href="${escapeHtml(absUrl)}" />`
    );
  } else {
    html = html.replace('</head>', `    <link rel="canonical" href="${escapeHtml(absUrl)}" />\n  </head>`);
  }
  // Replace OG/Twitter title + description + url
  const pairs = [
    [/<meta\s+property="og:title"[^>]*>/i, `<meta property="og:title" content="${escapeHtml(route.title)}" />`],
    [/<meta\s+property="og:description"[^>]*>/i, `<meta property="og:description" content="${escapeHtml(route.description)}" />`],
    [/<meta\s+property="og:url"[^>]*>/i, `<meta property="og:url" content="${escapeHtml(absUrl)}" />`],
    [/<meta\s+name="twitter:title"[^>]*>/i, `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`],
    [/<meta\s+name="twitter:description"[^>]*>/i, `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`],
  ];
  for (const [re, val] of pairs) {
    if (re.test(html)) html = html.replace(re, val);
  }
  return html;
}

async function main() {
  const src = path.join(DIST, 'index.html');
  const template = await fs.readFile(src, 'utf8');
  // npm runs this automatically after `build`; a second run would read an already-filled page.
  if (template.includes('data-ssr')) throw new Error('dist/index.html is already prerendered; run `npm run build` again');

  for (const route of routes) {
    const html = withPage(applyMeta(template, route), route.path);
    const outDir = route.path === '/' ? DIST : path.join(DIST, route.path);
    await fs.mkdir(outDir, { recursive: true });
    const outFile = path.join(outDir, 'index.html');
    await fs.writeFile(outFile, html, 'utf8');
    console.log('prerendered', route.path, '→', path.relative(DIST, outFile));
  }

  // 404.html: served by Vercel with a 404 status for unknown paths; the app then shows NotFound.
  let notFound = template
    .replace(/<title>[\s\S]*?<\/title>/, '<title>Page not found | M Rupesh Kumar Yadav</title>')
    .replace(/<link\s+rel="canonical"[^>]*>\s*/i, '')
    .replace(/<meta\s+name="robots"[^>]*>/i, '<meta name="robots" content="noindex, follow" />')
    .replace(/<meta\s+name="googlebot"[^>]*>\s*/i, '');
  notFound = withPage(notFound, '/404');
  await fs.writeFile(path.join(DIST, '404.html'), notFound, 'utf8');
  console.log('prerendered 404 → 404.html');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
