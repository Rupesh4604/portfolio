// Page titles and descriptions come from scripts/routes.mjs, the same list the
// prerender and sitemap use, so the static HTML and the live page never disagree.
import { routes } from "../../scripts/routes.mjs";

export const routeMeta = (path) => {
  const r = routes.find((x) => x.path === path);
  if (!r) throw new Error(`No route meta for ${path}`);
  return { title: r.title, description: r.description };
};
