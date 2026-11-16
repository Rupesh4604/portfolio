import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { clean } from "../lib/sanitize";
import { projects, projectTags, featuredProjects } from "../data/projectsData";
import { slugify } from "../lib/slug";
import Page from "../components/site/Page.jsx";
import PageHeader from "../components/site/PageHeader.jsx";
import ChipGroup from "../components/site/ChipGroup.jsx";
import SiteLink from "../components/site/SiteLink.jsx";
import { SearchIcon } from "../components/site/Icons.jsx";
import { ArtCarousel } from "../components/site/ProjectArt.jsx";
import { publications } from "../data/publicationsData";
import { routeMeta } from "../lib/seo";

const ALL = "All";
// Curated order from projectsData; the same titles, tags and text in every mode.
const items = projects.map((p) => ({ ...p, slug: slugify(p.title) }));

const META = routeMeta("/projects");

function Meta() {
  return (
    <Helmet>
      <title>{META.title}</title>
      <meta
        name="description"
        content={META.description}
      />
      <link rel="canonical" href="https://rupeshmediboyina.dev/projects" />
      <meta property="og:title" content={META.title} />
      <meta
        property="og:description"
        content={META.description}
      />
      <meta property="og:url" content="https://rupeshmediboyina.dev/projects" />
      <meta name="twitter:title" content={META.title} />
      <meta
        name="twitter:description"
        content={META.description}
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
              keywords: [project.tag, ...(project.techStack ?? [])].filter(Boolean).join(", "),
              author: { "@type": "Person", name: "M Rupesh Kumar Yadav" },
            },
          })),
        })}
      </script>
    </Helmet>
  );
}

// Featured cards: same text in every mode. Glass draws a grid panel where the others show the image.
const featured = featuredProjects.map((p) => {
  const paper = p.featured.paper && publications.find((x) => x.title === p.featured.paper);
  const to =
    p.featured.cta === "Read the paper" ? paper?.link || paper?.doi || "/research"
    : p.featured.cta === "View on GitHub" ? p.link
    : `/projects#${slugify(p.title)}`;
  return { key: p.title, to, image: p.image, tag: p.tag, title: p.title, desc: p.description, cta: p.featured.cta };
});

// The whole card is clickable through a stretched title link; the illustration's dot buttons sit above it.
function FeaturedCard({ p }) {
  return (
    <div className="cd cd-lift group relative w-[276px] p-2.5 text-ink md:w-auto">
      <ArtCarousel title={p.key} className="relative z-10 h-[170px] md:h-[220px]" />
      <div className="px-2.5 pb-3 pt-[18px]">
        <span className="tag">{p.tag}</span>
        <SiteLink
          to={p.to}
          className="mt-3 block text-[22px] font-medium leading-[1.2] tracking-[-0.02em] text-ink after:absolute after:inset-0 after:rounded-[inherit] after:content-['']"
        >
          {p.title}
        </SiteLink>
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
    </div>
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
        className="row-indent grid w-full cursor-pointer grid-cols-[minmax(0,1fr)_24px] items-baseline gap-5 border-0 bg-transparent py-6 text-left text-ink md:grid-cols-[minmax(0,1fr)_160px_28px]"
      >
        <span className="min-w-0">
          <span className="row-title block text-[clamp(18px,1.6vw,20px)] font-medium tracking-[-0.01em]">{p.title}</span>
          <span className="mt-1 block text-sm text-mu">
            <span className="text-ac md:hidden">{p.tag} · </span>
            {p.stack}
          </span>
        </span>
        <span className="hidden text-sm text-ac md:block">{p.tag}</span>
        <span className="chev justify-self-end text-mu" aria-hidden="true" />
      </button>
      <div id={`${p.slug}-details`} className={`disc ${open ? "is-open" : ""}`} inert={!open ? true : undefined}>
        <div>
          <div className="max-w-[760px] pb-7">
            <div
              className="rich text-base leading-[1.65] text-i2"
              dangerouslySetInnerHTML={{ __html: clean(p.longDescription || p.description) }}
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

  const chips = useMemo(
    () => [
      { value: ALL, label: "All", count: items.length },
      ...projectTags.map((c) => ({ value: c, label: c, count: items.filter((p) => p.tag === c).length })),
    ],
    []
  );

  const rows = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return items.filter(
      (p) =>
        (cat === ALL || p.tag === cat) &&
        (!needle ||
          [p.title, p.stack, p.description, p.tag, ...(p.techStack ?? [])]
            .join(" ")
            .toLowerCase()
            .includes(needle))
    );
  }, [cat, q]);

  return (
    <Page className="page-enter">
      <Meta />
      <PageHeader
        title="Projects"
        lead="Things I've built, sorted into models, the systems that run them, and tools for other builders."
        aside={<div className="text-[15px] text-mu">{projects.length} projects</div>}
      />

      <section aria-labelledby="featured" className="mt-[clamp(48px,6vw,88px)]">
        <h2 id="featured" className="m-0 mb-4 text-sm font-normal text-mu">Featured</h2>
        <div className="snap-row md:mx-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:p-0">
          {featured.map((p) => (
            <FeaturedCard key={p.key} p={p} />
          ))}
        </div>
      </section>

      <section aria-labelledby="all" className="mt-[clamp(72px,9vw,128px)]">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
          <h2 id="all" className="display m-0 text-[clamp(30px,3.4vw,40px)] tracking-[-0.02em]">All projects</h2>
          <div className="flex w-full flex-wrap items-center gap-2 md:w-auto">
          <ChipGroup label="Filter by area" options={chips} value={cat} onChange={setCat} />
          <div className="relative w-full md:ml-2 md:w-[260px]">
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
        </div>

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

      </section>
    </Page>
  );
}
