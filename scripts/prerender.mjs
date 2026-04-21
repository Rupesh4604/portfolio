// Emits per-route index.html copies with route-specific <head> meta.
// This gives crawlers and social-scrapers correct titles, descriptions,
// canonical URLs, and OG/Twitter cards without requiring full SSR.
import fs from 'node:fs/promises';
import path from 'node:path';
import { SITE, routes } from './routes.mjs';

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

  for (const route of routes) {
    const html = applyMeta(template, route);
    const outDir = route.path === '/' ? DIST : path.join(DIST, route.path);
    await fs.mkdir(outDir, { recursive: true });
    const outFile = path.join(outDir, 'index.html');
    await fs.writeFile(outFile, html, 'utf8');
    console.log('prerendered', route.path, '→', path.relative(DIST, outFile));
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
