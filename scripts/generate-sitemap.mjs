// Regenerates dist/sitemap.xml with today's lastmod and the routes registry.
import fs from 'node:fs/promises';
import path from 'node:path';
import { SITE, routes } from './routes.mjs';

const DIST = process.env.VITE_DIST_DIR || path.resolve('dist');

function todayIso() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

function xmlEscape(s = '') {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

async function main() {
  const lastmod = todayIso();
  const urls = routes
    .map((r) => {
      const loc = SITE.origin + (r.path === '/' ? '/' : r.path);
      const imageBlock =
        r.path === '/'
          ? `    <image:image>\n      <image:loc>${SITE.origin + SITE.defaultImage}</image:loc>\n      <image:title>${xmlEscape(r.title)}</image:title>\n    </image:image>\n`
          : '';
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority.toFixed(1)}</priority>\n${imageBlock}  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n        xmlns:image="http://www.google.com/schemas/sitemap-image/0.9">\n${urls}\n</urlset>\n`;

  const out = path.join(DIST, 'sitemap.xml');
  await fs.writeFile(out, xml, 'utf8');
  console.log('sitemap written:', out);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
