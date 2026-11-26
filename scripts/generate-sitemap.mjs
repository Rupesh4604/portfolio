// Regenerates dist/sitemap.xml with today's lastmod and the routes registry.
// Plain sitemap only: an image extension needs the sitemap-image/1.1 namespace and adds nothing here.
import fs from 'node:fs/promises';
import path from 'node:path';
import { SITE, routes } from './routes.mjs';

const DIST = process.env.VITE_DIST_DIR || path.resolve('dist');

function todayIso() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

async function main() {
  const lastmod = todayIso();
  const urls = routes
    .map((r) => {
      const loc = SITE.origin + (r.path === '/' ? '/' : r.path);
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority.toFixed(1)}</priority>\n  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  const out = path.join(DIST, 'sitemap.xml');
  await fs.writeFile(out, xml, 'utf8');
  console.log('sitemap written:', out);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
