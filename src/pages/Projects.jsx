import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import DOMPurify from "dompurify";
import { projects } from "../data/projectsData";
import { slugify } from "../lib/slug";
import Page from "../components/site/Page.jsx";
import PageHeader from "../components/site/PageHeader.jsx";
import ChipGroup from "../components/site/ChipGroup.jsx";
import SiteLink from "../components/site/SiteLink.jsx";
import { SearchIcon } from "../components/site/Icons.jsx";
import GridPanel from "../components/site/GridPanel.jsx";
import useVariant from "../hooks/useVariant";
import { glass } from "../data/glassCopy";
import { publications } from "../data/publicationsData";

const ALL = "All";
const featured = projects.slice(0, 3);
const years = projects.map((p) => Number(p.year)).filter(Boolean);
const span = years.length ? `${Math.min(...years)} to ${Math.max(...years)}` : "";
// Newest first; ties keep the curated order from projectsData.
const sorted = projects
  .map((p, i) => ({ ...p, slug: slugify(p.title), i }))
  .sort((a, b) => Number(b.year || 0) - Number(a.year || 0) || a.i - b.i);
const categories = [...new Set(projects.map((p) => p.category).filter(Boolean))];

function Meta() {
  return (
    <Helmet>
      <title>Projects | M Rupesh Kumar Yadav</title>
      <meta
        name="description"
        content="Selected AI/ML engineering projects by M Rupesh Kumar Yadav across agentic systems, geospatial AI, remote sensing, computer vision, and full-stack ML applications."
      />
      <link rel="canonical" href="https://rupeshmediboyina.dev/projects" />
      <meta property="og:title" content="Projects | M Rupesh Kumar Yadav" />
      <meta
        property="og:description"
        content="Selected AI/ML engineering projects across agentic systems, geospatial AI, remote sensing, computer vision, and full-stack ML applications."
      />
      <meta property="og:url" content="https://rupeshmediboyina.dev/projects" />
      <meta name="twitter:title" content="Projects | M Rupesh Kumar Yadav" />
      <meta
        name="twitter:description"
        content="Selected AI/ML engineering projects across agentic systems, geospatial AI, remote sensing, computer vision, and full-stack ML applications."
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://rupeshmediboyina.dev/" },
            { "@type": "ListItem", position: 2, name: "Projects", item: "https://rupeshmediboyina.dev/projects" },
          ],
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: projects.slice(0, 20).map((project, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "CreativeWork",
              name: project.title,
              description: project.description,
              url: project.link || undefined,
              image: project.image || undefined,
              dateCreated: project.year || undefined,
              keywords: [project.category, ...(project.techStack ?? [])].filter(Boolean).join(", "),
              author: { "@type": "Person", name: "M Rupesh Kumar Yadav" },
            },
          })),
        })}
      </script>
    </Helmet>
  );
}

// Featured cards. Default: data + image. Glass: template wording, grid panel instead of an image.
const featuredDefault = featured.map((p) => ({
  key: p.title,
  to: p.link || `/projects#${slugify(p.title)}`,
  image: p.image,
  tag: p.category,
  title: p.title,
  desc: p.description,
  cta: p.link ? "View on GitHub" : "",
}));
const featuredGlass = glass.projects.featured.map((f) => {
  const p = projects.find((x) => x.title === f.key);
  const paper = f.paper && publications.find((x) => x.title === f.paper);
  const to =
    f.cta === "Read the paper" ? paper?.link || paper?.doi || "/publications"
    : f.cta === "View on GitHub" ? p.link
    : `/projects#${slugify(p.title)}`;
  return { key: f.key, to, glass: true, tag: f.tag, title: f.title, desc: f.desc, cta: f.cta };
});

function FeaturedCard({ p }) {
  return (
    <SiteLink to={p.to} className="cd cd-lift group block w-[276px] p-2.5 text-ink md:w-auto">
      {p.glass ? (
        <GridPanel className="h-[150px] md:h-[220px]" />
      ) : (
        <div className="h-[150px] overflow-hidden rounded-[calc(var(--radius-card)-4px)] bg-tint md:h-[220px]">
          {p.image && <img src={p.image} alt="" loading="lazy" className="h-full w-full object-cover" />}
        </div>
      )}
      <div className="px-2.5 pb-3 pt-[18px]">
        <span className="tag">{p.tag}</span>
        <div className="mt-3 text-[22px] font-medium leading-[1.2] tracking-[-0.02em]">{p.title}</div>
        <div className="mt-2 text-[15px] leading-[1.5] text-i2">{p.desc}</div>
        {p.cta && (
          <div className="mt-4 text-sm text-ac">
            {p.cta}{" "}
            <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-[5px]">
              →
            </span>
          </div>
        )}
      </div>
    </SiteLink>
  );
}

function ProjectRow({ p, open, onToggle }) {
  return (
    <li id={p.slug} className="scroll-mt-28 border-t border-ln">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`${p.slug}-details`}
        onClick={onToggle}
        className="row-indent grid w-full cursor-pointer grid-cols-[minmax(0,1fr)_24px] items-baseline gap-5 border-0 bg-transparent py-6 text-left text-ink md:grid-cols-[minmax(0,1fr)_200px_60px_28px]"
      >
        <span className="min-w-0">
          <span className="row-title block text-[clamp(18px,1.6vw,20px)] font-medium tracking-[-0.01em]">{p.shownTitle}</span>
          <span className="mt-1 block text-sm text-mu">
            <span className="md:hidden">{p.shownTag} · {p.year} · </span>
            {p.stackLine}
          </span>
        </span>
        <span className="hidden text-sm text-ac md:block">{p.shownTag}</span>
        <span className="hidden text-right text-sm text-mu md:block">{p.year}</span>
        <span className="chev justify-self-end text-mu" aria-hidden="true">⌄</span>
      </button>
      <div id={`${p.slug}-details`} className={`disc ${open ? "is-open" : ""}`} inert={!open ? true : undefined}>
        <div>
          <div className="max-w-[760px] pb-7">
            {p.period && <div className="text-sm text-mu">{p.period}</div>}
            <div
              className="rich mt-2 text-base leading-[1.65] text-i2"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(p.longDescription || p.description) }}
            />
            {p.techStack?.length > 0 && (
              <ul className="m-0 mt-4 flex list-none flex-wrap gap-2 p-0">
                {p.techStack.map((t) => (
                  <li key={t} className="tag-line">{t}</li>
                ))}
              </ul>
            )}
            {p.link && (
              <SiteLink to={p.link} className="lk mt-2">
                View on GitHub ↗
              </SiteLink>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default function Projects() {
  const { hash } = useLocation();
  const { variant } = useVariant();
  const isGlass = variant === "C";
  const [cat, setCat] = useState(ALL);
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(() => (hash ? { [hash.slice(1)]: true } : {}));

  // Deep link from Home (/projects#slug): open and scroll to that row.
  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    // A deep link must be visible: drop any filter or search that would hide it.
    setCat(ALL);
    setQ("");
    setOpen((o) => ({ ...o, [id]: true }));
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ block: "start" }));
  }, [hash]);

  // Glass uses the template's titles, Models/Systems/Tools tags and stack lines; years stay from the data.
  const items = useMemo(
    () =>
      sorted.map((p) => {
        const g = glass.projects.rows[p.title] || {};
        return isGlass
          ? { ...p, shownTitle: g.title || p.title, shownTag: g.tag || p.category, stackLine: g.stack || (p.techStack ?? []).slice(0, 2).join(", ") }
          : { ...p, shownTitle: p.title, shownTag: p.category, stackLine: (p.techStack ?? []).slice(0, 4).join(" · ") };
      }),
    [isGlass]
  );
  const groups = isGlass ? glass.projects.tags : categories;

  // Tag sets differ between variants, so a switch resets the filter.
  useEffect(() => setCat(ALL), [isGlass]);

  const chips = useMemo(
    () => [
      { value: ALL, label: "All", count: items.length },
      ...groups.map((c) => ({ value: c, label: c, count: items.filter((p) => p.shownTag === c).length })),
    ],
    [items, groups]
  );

  const rows = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return items.filter(
      (p) =>
        (cat === ALL || p.shownTag === cat) &&
        (!needle ||
          [p.shownTitle, p.title, p.description, p.shownTag, p.category, ...(p.techStack ?? [])]
            .join(" ")
            .toLowerCase()
            .includes(needle))
    );
  }, [items, cat, q]);

  return (
    <Page className="page-enter">
      <Meta />
      <PageHeader
        title="Projects"
        lead={isGlass ? glass.projects.lead : "Things I've built, from research models to the systems and tools around them."}
        aside={
          <div className="text-[15px] text-mu">
            {projects.length} projects · {span}
          </div>
        }
      />

      <section aria-labelledby="featured" className="mt-[clamp(48px,6vw,88px)]">
        <h2 id="featured" className="m-0 mb-4 text-sm font-normal text-mu">Featured</h2>
        <div className="snap-row md:mx-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:p-0">
          {(isGlass ? featuredGlass : featuredDefault).map((p) => (
            <FeaturedCard key={p.key} p={p} />
          ))}
        </div>
      </section>

      <section aria-labelledby="all" className="mt-[clamp(72px,9vw,128px)]">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
          <h2 id="all" className="display m-0 text-[clamp(30px,3.4vw,40px)] tracking-[-0.02em]">All projects</h2>
          <div className="relative w-full md:w-[260px]">
            <label htmlFor="pq" className="sr-only">Search projects</label>
            <SearchIcon size={17} className="pointer-events-none absolute left-4 top-[13px] text-mu" />
            <input
              id="pq"
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search projects"
              className="h-11 w-full rounded-full border border-ln bg-transparent pl-[42px] pr-[18px] text-base text-ink placeholder:text-mu md:text-[15px]"
            />
          </div>
        </div>
        <ChipGroup label="Filter by area" options={chips} value={cat} onChange={setCat} className="mb-5" />

        {rows.length > 0 ? (
          <ul className="m-0 list-none border-b border-ln p-0">
            {rows.map((p) => (
              <ProjectRow key={p.slug} p={p} open={!!open[p.slug]} onToggle={() => setOpen((o) => ({ ...o, [p.slug]: !o[p.slug] }))} />
            ))}
          </ul>
        ) : (
          <div className="py-8" role="status">
            <p className="m-0 text-base text-mu">No projects match that search. Try another word or clear the filter.</p>
            <button
              type="button"
              onClick={() => {
                setQ("");
                setCat(ALL);
              }}
              className="lk mt-3"
            >
              Clear search and filter
            </button>
          </div>
        )}

        <p className="mt-10 text-[15px] text-i2">
          Looking for learning resources? See{" "}
          <Link to="/open-source-env" className="text-ac underline underline-offset-[3px] hover:text-ac-hover">OpenSourceEnv</Link>.
        </p>
      </section>
    </Page>
  );
}
