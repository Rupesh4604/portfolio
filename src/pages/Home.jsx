import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { featuredProjects } from "../data/projectsData";
import { publications } from "../data/publicationsData";
import { site, links } from "../data/siteData";
import { home } from "../data/homeData";
import {
  paperCount,
  currentRole,
  credentials,
  articles,
  fmtDate,
  paperCollections,
  venueShort,
} from "../lib/derived";
import useVariant from "../hooks/useVariant";
import { slugify } from "../lib/slug";
import Page from "../components/site/Page.jsx";
import SiteLink from "../components/site/SiteLink.jsx";
import RotatingWord from "../components/site/RotatingWord.jsx";
import Marquee from "../components/site/Marquee.jsx";
import SpotlightCard from "../components/site/SpotlightCard.jsx";
import { ArrowRight } from "../components/site/Icons.jsx";
import { ArtCarousel } from "../components/site/ProjectArt.jsx";
import ScrollCue from "../components/site/ScrollCue.jsx";
import { glass } from "../data/glassCopy";
import { routeMeta } from "../lib/seo";

// The three featured projects lead Home in every mode (same titles and text everywhere).
const selected = featuredProjects.map((p) => {
  const paper = p.featured.paper && publications.find((x) => x.title === p.featured.paper);
  return { ...p, href: `/projects#${slugify(p.title)}`, paper: paper ? paper.link || paper.doi : null };
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "M Rupesh Kumar Yadav",
  alternateName: ["Rupesh Mediboyina", "Rupesh Kumar Yadav"],
  url: "https://rupeshmediboyina.dev/",
  jobTitle: "AI Engineer, Data Scientist & Researcher",
  affiliation: { "@type": "Organization", name: "Esri R&D Center" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Indian Institute of Technology Bombay" },
    { "@type": "CollegeOrUniversity", name: "National Institute of Technology Andhra Pradesh" },
  ],
  sameAs: [links.github, links.linkedin, links.orcid, "https://medium.com/@rupesh32003", links.scholar],
  knowsAbout: [
    "Multimodal AI",
    "Vision-language models",
    "Agentic AI systems",
    "Computer vision",
    "Geospatial intelligence",
    "Remote sensing",
  ],
};

const META = routeMeta("/");

function Meta() {
  return (
    <Helmet>
      <title>{META.title}</title>
      <meta
        name="description"
        content={META.description}
      />
      <link rel="canonical" href="https://rupeshmediboyina.dev/" />
      <meta property="og:title" content={META.title} />
      <meta
        property="og:description"
        content={META.description}
      />
      <meta property="og:url" content="https://rupeshmediboyina.dev/" />
      <meta name="twitter:title" content={META.title} />
      <meta
        name="twitter:description"
        content={META.description}
      />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}


/* ───────────────────────── A · Editorial ───────────────────────── */
// Layout from the hybrid mock (rupesh_hybrid_portfolio.html): hero with portrait, three focus
// areas, project cards, research list, writing notes. Facts (projects, papers, posts) come from src/data.

// Three most recent papers, as in the mock; the full list lives on /research.
const papersA = [...publications].sort((a, b) => Number(b.year) - Number(a.year)).slice(0, 3);

const FOCUS = [
  {
    title: "AI Systems",
    text: "LLMs, agentic systems, multimodal AI and foundation models.",
    icon: (
      <>
        <rect x="7" y="7" width="10" height="10" rx="1.5" />
        <path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4" />
      </>
    ),
  },
  {
    title: "Research",
    to: "/research",
    text: "Computer vision, remote sensing, geospatial AI and quantum ML.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
      </>
    ),
  },
  {
    title: "Engineering",
    text: "Model development, evaluation, optimization and deployment.",
    icon: <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />,
  },
];

const outlineBtn =
  "inline-flex min-h-11 items-center gap-2 rounded-full border border-[#9BBDB4] px-[18px] text-sm font-medium text-ac transition-colors hover:border-ac hover:bg-tint";

function GithubMark() {
  return (
    // Sized to the text's cap height and nudged up 1px so the mark sits on the same optical line as "GitHub".
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="block flex-none -translate-y-px">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
    </svg>
  );
}

const h2A = "display m-0 text-[clamp(30px,3.4vw,42px)] leading-[1.05] tracking-[-0.01em]";

function HomeA() {
  return (
    <>
      <section className="wrap max-w-[1240px] pt-[clamp(24px,min(6vw,5vh),72px)]">
        <div className="grid items-center gap-7 md:grid-cols-[minmax(0,1fr)_minmax(200px,270px)] md:gap-10 lg:gap-16">
          <div className="min-w-0">
            {/* Phones and small tablets: a small round photo beside the badge keeps the headline on the first screen. */}
            <div className="flex items-center gap-4">
              <img
                src="/profile.jpg"
                alt={`Portrait of ${site.name}`}
                width="96"
                height="96"
                className="h-24 w-24 flex-none rounded-full border-[3px] border-white bg-white object-cover object-[50%_12%] shadow-[0_10px_24px_rgba(28,41,32,.14)] md:hidden"
              />
              {currentRole && (
                <>
                  {/* Phones: two short lines beside the photo (the pill would wrap). */}
                  <span className="block md:hidden">
                    <span className="flex items-center gap-2 text-[15px] font-medium text-acink">
                      <span className="pulse-dot" aria-hidden="true" />
                      {currentRole.role}
                    </span>
                    <span className="mt-0.5 block pl-4 text-sm text-mu">{currentRole.org} · GeoAI</span>
                  </span>
                  <span className="hidden items-center gap-2 whitespace-nowrap rounded-full bg-tint px-3 py-1 text-xs font-medium text-acink md:inline-flex">
                    <span className="pulse-dot" aria-hidden="true" />
                    {currentRole.role} @ {currentRole.org} · GeoAI
                  </span>
                </>
              )}
            </div>
            <h1 className="display m-0 mt-[clamp(14px,2.2vh,20px)] text-[clamp(38px,min(5.4vw,7.4vh),74px)] leading-[1.02] tracking-[-0.02em]">
              I build{" "}
              <RotatingWord words={home.rotatingA} className="italic text-ac" suffix="," />
              <br />
              and the systems that run them.
            </h1>
            <p className="m-0 mt-[clamp(14px,2.6vh,24px)] text-[17px] font-medium text-ink">
              Data scientist and AI engineer{" "}
              <span className="font-normal text-mu">| Esri R&amp;D, GeoAI Division</span>
            </p>
            <p className="m-0 mt-1 max-w-[620px] text-base leading-[1.6] text-i2">
              M.Tech from IIT Bombay. I work on multimodal AI, geospatial intelligence and foundation models.
            </p>
            <div className="mt-[clamp(16px,3vh,28px)] flex flex-wrap items-center gap-x-6 gap-y-2">
              <Link
                to="/projects"
                className="inline-flex h-[50px] items-center gap-2.5 rounded-btn bg-ink px-6 text-[15px] font-medium text-bg transition hover:-translate-y-px hover:bg-ac"
              >
                View my work <ArrowRight />
              </Link>
              <SiteLink to={site.cv} className="inline-flex min-h-11 items-center text-[15px] font-medium text-ac hover:text-ac-hover">CV</SiteLink>
              <SiteLink to={links.github} className="inline-flex min-h-11 items-center text-[15px] font-medium text-ac hover:text-ac-hover">GitHub</SiteLink>
              <SiteLink to={links.linkedin} className="inline-flex min-h-11 items-center text-[15px] font-medium text-ac hover:text-ac-hover">LinkedIn</SiteLink>
              <SiteLink to={links.scholar} className="inline-flex min-h-11 items-center text-[15px] font-medium text-ac hover:text-ac-hover">Scholar</SiteLink>
            </div>
          </div>
          <div className="hidden md:block md:w-full md:max-w-[min(270px,44vh)] md:justify-self-end">
            <div className="overflow-hidden rounded-[15px] bg-white pt-[11%] shadow-[0_14px_36px_rgba(28,41,32,.10)]">
              <img
                src="/profile.jpg"
                alt={`Portrait of ${site.name}`}
                width="346"
                height="486"
                className="block aspect-[346/474] w-full object-cover object-bottom mix-blend-multiply [filter:brightness(1.03)_contrast(1.02)]"
              />
            </div>
          </div>
        </div>

        <ul id="focus-a" className="m-0 mt-[clamp(28px,min(5vw,5vh),64px)] grid list-none p-0 md:grid-cols-3">
          {FOCUS.map((f, i) => (
            <li
              key={f.title}
              className={`relative flex gap-4 py-5 md:py-2 md:pr-6 ${f.to ? "group" : ""} ${i > 0 ? "border-t border-ln md:border-l md:border-t-0 md:pl-7" : ""}`}
            >
              <span className="grid h-11 w-11 flex-none place-items-center rounded-full bg-tint text-ac" aria-hidden="true">
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {f.icon}
                </svg>
              </span>
              <div>
                <h2 className="display m-0 text-[22px] leading-tight">
                  {f.to ? (
                    // Whole item is clickable through the stretched link.
                    <Link to={f.to} className="text-ink transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-ac">
                      {f.title}
                    </Link>
                  ) : (
                    f.title
                  )}
                </h2>
                <p className="m-0 mt-1 text-sm leading-[1.55] text-mu">{f.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <ScrollCue target="work-a" avoid="focus-a" />

      <section aria-labelledby="work-a" className="wrap max-w-[1240px] pt-[clamp(56px,7vw,88px)]">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 id="work-a" className={h2A}>Selected projects</h2>
          <Link to="/projects" className="inline-flex min-h-11 items-center whitespace-nowrap text-sm font-medium text-ac hover:text-ac-hover">View all projects →</Link>
        </div>
        <ul className="m-0 grid list-none gap-5 p-0 md:grid-cols-3">
          {selected.map((p) => (
            <li
              key={p.title}
              className="group overflow-hidden rounded-[13px] border border-ln bg-sf shadow-[0_5px_18px_rgba(28,41,32,.03)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(28,41,32,.08)]"
            >
              <ArtCarousel title={p.title} className="m-2 mb-0 h-[170px]" />
              <div className="px-5 pb-3 pt-[18px]">
                <h3 className="display m-0 text-[21px] leading-[1.2]">
                  <Link to={p.href} className="text-ink transition-colors hover:text-ac">{p.title}</Link>
                </h3>
                <p className="m-0 mt-2 text-sm leading-[1.55] text-mu">{p.description}</p>
                <div className="mt-2 flex flex-wrap gap-x-5 text-[13px] text-mu">
                  {/* Same order on every card: external links with ↗, then Details → (on this site). */}
                  {p.site && (
                    <SiteLink to={p.site} className="inline-flex min-h-10 items-center gap-1.5 hover:text-ac">
                      Website <span aria-hidden="true">↗</span>
                    </SiteLink>
                  )}
                  {p.link?.includes("github.com") && (
                    <SiteLink to={p.link} className="inline-flex min-h-10 items-center gap-1.5 hover:text-ac">
                      <GithubMark />
                      <span>GitHub</span>
                      <span aria-hidden="true">↗</span>
                    </SiteLink>
                  )}
                  {p.paper && (
                    <SiteLink to={p.paper} className="inline-flex min-h-10 items-center gap-1.5 hover:text-ac">
                      Paper <span aria-hidden="true">↗</span>
                    </SiteLink>
                  )}
                  <Link to={p.href} className="inline-flex min-h-10 items-center gap-1.5 hover:text-ac">
                    Details <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="research-a" className="wrap max-w-[1240px] pt-[clamp(56px,7vw,88px)]">
        <div className="grid gap-7 border-t border-ln pt-10 md:grid-cols-[minmax(0,.8fr)_minmax(0,1.5fr)] md:gap-0">
          <div className="md:border-r md:border-ln md:pr-10">
            <h2 id="research-a" className={h2A}>
              Research &amp;
              <br />
              Publications
            </h2>
            <p className="m-0 mt-4 max-w-[300px] text-[15px] leading-[1.6] text-i2">
              Advancing foundation models, geospatial AI and efficient ML systems.
            </p>
            <Link to="/research" className={`${outlineBtn} mt-5`}>View publications →</Link>
          </div>
          <ul className="m-0 list-none p-0 md:pl-10">
            {papersA.map((x, i) => (
              <li key={x.title} className={`grid grid-cols-[14px_minmax(0,1fr)] gap-4 py-3.5 ${i > 0 ? "border-t border-ln" : "pt-1"}`}>
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-ac shadow-[0_0_0_5px_var(--tint)]" aria-hidden="true" />
                <div>
                  <h3 className="display m-0 text-[18px] font-normal leading-[1.35]">
                    <SiteLink to={x.link || x.doi || "/research"} className="text-ink hover:text-ac">{x.title}</SiteLink>
                  </h3>
                  <p className="m-0 mt-0.5 text-[13px] text-mu">
                    {venueShort(x.venue)} · {x.year}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="writing-a" className="wrap max-w-[1240px] pt-[clamp(48px,6vw,72px)]">
        {/* Three columns only on wide screens; narrower, the posts are full-width rows ending in an arrow. */}
        <div className="grid gap-7 border-t border-ln pt-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] xl:gap-10">
          <div>
            <h2 id="writing-a" className={h2A}>Writing &amp; Technical Notes</h2>
            <p className="m-0 mt-3 text-[15px] leading-[1.6] text-i2">In-depth notes, research reviews and tutorials.</p>
            <Link to="/blog" className={`${outlineBtn} mt-5`}>Explore blog →</Link>
          </div>
          <ul className="m-0 grid list-none border-b border-ln p-0 xl:grid-cols-3 xl:border-b-0">
            {articles.slice(0, 3).map((a) => (
              <li key={a.title} className="border-t border-ln xl:border-l xl:border-t-0 xl:px-5">
                <SiteLink
                  to={a.url}
                  className="row-indent group flex items-center justify-between gap-6 py-4 text-ink xl:block xl:py-1 xl:hover:pl-0"
                >
                  <span className="min-w-0">
                    <span className="row-title display block text-[18px] leading-[1.35] transition-colors group-hover:text-ac">{a.title}</span>
                    <span className="mt-2 block text-[13px] text-mu">{fmtDate(a.date)}</span>
                  </span>
                  <span className="row-arrow flex-none text-lg text-mu xl:hidden" aria-hidden="true">↗</span>
                </SiteLink>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

/* ───────────────────────── C · Glass ───────────────────────── */

const lb = "text-[13px] tracking-[.01em] text-ac";

function HomeC() {
  return (
    <div className="wrap pt-[clamp(48px,7vw,96px)]">
      <div className="grid gap-4 min-[900px]:grid-cols-3">
        <SpotlightCard className="p-2 min-[900px]:col-span-2 min-[900px]:row-span-2">
          <div className="gl-inner flex h-full min-h-[300px] flex-col min-[900px]:min-h-[460px] justify-between gap-10 p-[clamp(28px,4vw,52px)]">
            <div className="text-[15px] text-mu">{site.name}</div>
            <div>
              <h1 className="m-0 max-w-[15ch] text-[clamp(36px,4.2vw,62px)] font-medium leading-[1.06] tracking-[-0.03em]">
                {home.role} building <RotatingWord words={home.rotatingA} gradient every={2800} />
              </h1>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="inline-flex h-[46px] items-center gap-2 rounded-full bg-[#ECEDEA] px-[22px] text-[15px] font-medium text-[#0A0D10] transition hover:-translate-y-px hover:shadow-[0_8px_30px_-8px_rgba(79,179,169,.55)]"
                >
                  See my work <ArrowRight />
                </Link>
                <SiteLink
                  to={site.cv}
                  className="inline-flex h-[46px] items-center rounded-full border border-white/[.14] bg-white/[.06] px-[22px] text-[15px] text-ink transition-colors hover:bg-white/[.12]"
                >
                  CV
                </SiteLink>
              </div>
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard className="p-2">
          <div className="gl-inner flex h-full flex-col p-7">
            <div className={lb}>Now</div>
            <p className="m-0 mt-3 text-lg leading-[1.5] text-i2">
              {glass.home.now}
            </p>
            <div className="mt-auto flex items-center gap-2.5 pt-6 text-sm text-ac">
              <span className="pulse-dot" aria-hidden="true" />
              {glass.home.status}
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard className="p-2">
          <div className="gl-inner flex h-full flex-col p-7">
            <div className={lb}>Research</div>
            <div className="mt-2 flex items-baseline gap-3">
              <span className="text-[76px] font-medium leading-none tracking-[-0.04em]">{paperCount}</span>
              <span className="text-base text-mu">{glass.home.research}</span>
            </div>
            <div className="mt-auto flex flex-wrap items-center gap-x-2 pt-5 text-sm text-mu">
              <SiteLink to={links.scholar} className="inline-flex min-h-6 items-center hover:text-ink">Scholar</SiteLink>
              {paperCollections.map((c) => (
                <span key={c.title} className="contents">
                  <span aria-hidden="true">·</span>
                  <SiteLink to={c.url} className="inline-flex min-h-6 items-center hover:text-ink">{c.title}</SiteLink>
                </span>
              ))}
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard as="section" aria-labelledby="work-c" className="p-2 min-[900px]:col-span-3">
          <div className="relative z-[1] flex items-baseline justify-between px-5 pb-3.5 pt-[18px]">
            <h2 id="work-c" className="m-0 text-[22px] font-medium tracking-[-0.02em]">Selected work</h2>
            <Link to="/projects" className="text-sm text-mu hover:text-ink">All projects →</Link>
          </div>
          <div className="grid gap-2 md:grid-cols-3">
            {selected.map((w) => (
              <div key={w.title} className="gl-inner gl-lift relative block px-3.5 pb-[22px] pt-3.5 text-ink">
                <ArtCarousel title={w.title} className="relative z-10 mb-[18px] h-[200px]" />
                <div className="px-1.5">
                  <div className={lb}>{w.tag}</div>
                  <Link
                    to={w.href}
                    className="mt-1.5 block text-xl font-medium tracking-[-0.01em] text-ink after:absolute after:inset-0 after:rounded-[inherit] after:content-['']"
                  >
                    {w.title}
                  </Link>
                  <div className="mt-1.5 text-sm leading-[1.5] text-mu">{w.description}</div>
                </div>
              </div>
            ))}
          </div>
        </SpotlightCard>

        {articles[0] && (
          <SpotlightCard as="div" className="p-2 min-[900px]:col-span-3">
            <div className="gl-inner flex flex-wrap items-center justify-between gap-6 px-7 py-[26px]">
              <SiteLink to={articles[0].url} className="group min-w-0 text-ink">
                <span className={`block ${lb}`}>Latest post</span>
                <span className="mt-2 block text-2xl font-medium tracking-[-0.02em] transition-colors group-hover:text-ac">
                  {articles[0].title}
                </span>
                <span className="mt-1 block text-sm text-mu">
                  {fmtDate(articles[0].date)}
                </span>
              </SiteLink>
              <Link to="/blog" className="whitespace-nowrap text-sm text-mu hover:text-ink">All posts →</Link>
            </div>
          </SpotlightCard>
        )}
      </div>
    </div>
  );
}

/* ───────────────────────── D · Bold (phone) ───────────────────────── */

// "Journal of X, pp. 1–14" -> "Journal of X"
const shortVenue = (v) => v.split(",")[0];

// Phone home shows two papers: the quantum journal article as the card, the PReMI chapter as the row.
const papersD = [
  publications.find((p) => p.title.startsWith("Quantum Convolutional")),
  publications.find((p) => p.venue.includes("PReMI")),
].filter(Boolean);

function HomeD() {
  const [open, setOpen] = useState(null);
  return (
    <div className="pt-8">
      <h1 className="m-0 px-5 text-[clamp(44px,13vw,50px)] font-semibold leading-[0.98] tracking-[-0.046em]">
        Data scientist.
        <br />
        AI engineer.
        <RotatingWord words={home.rotatingD} mode="slide" className="text-ac" />
      </h1>
      <p className="m-0 mt-[18px] px-5 text-i2">
        {home.introD} Currently at {currentRole?.org ?? "Esri R&D"}.
      </p>
      <div className="mt-[22px] px-5">
        <SiteLink
          to="/contact"
          className="inline-flex min-h-[52px] items-center gap-2 rounded-full border border-[#3A3F44] px-[22px] text-[15px] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-bg"
        >
          Get in touch →
        </SiteLink>
      </div>

      <Marquee items={credentials} className="mt-[34px] border-y border-ln py-3.5 text-sm text-mu" />

      <section aria-labelledby="work-d" className="px-5">
        <h2 id="work-d" className="m-0 mb-2.5 mt-11 text-sm font-normal text-mu">Selected work</h2>
        <ul className="m-0 list-none p-0">
          {/* Each row opens in place: short description, tools, and the project's own links. */}
          {selected.map((p, n) => {
            const id = `work-d-${slugify(p.title)}`;
            const isOpen = open === p.title;
            return (
              <li key={p.title} className="border-t border-ln">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={id}
                  onClick={() => setOpen(isOpen ? null : p.title)}
                  className="group grid w-full cursor-pointer grid-cols-[30px_minmax(0,1fr)_24px] items-center gap-3 border-0 bg-transparent py-4 text-left text-ink"
                >
                  <span className="self-start pt-[5px] text-[13px] text-mu">{String(n + 1).padStart(2, "0")}</span>
                  <span className="min-w-0">
                    <span className="block text-[13px] text-ac">{p.tag}</span>
                    <span className={`mt-0.5 block text-[21px] font-medium leading-[1.3] tracking-[-0.03em] group-hover:text-ac ${isOpen ? "text-ac" : ""}`}>
                      {p.title}
                    </span>
                  </span>
                  <span className="chev justify-self-end text-mu" aria-hidden="true" />
                </button>
                <div id={id} className={`disc ${isOpen ? "is-open" : ""}`} inert={!isOpen ? true : undefined}>
                  <div>
                    <div className="pb-5 pl-[42px]">
                      <p className="m-0 text-[15px] leading-[1.55] text-i2">{p.description}</p>
                      {p.techStack?.length > 0 && (
                        <ul className="m-0 mt-3 flex list-none flex-wrap gap-2 p-0">
                          {p.techStack.map((t) => (
                            <li key={t} className="tag-line">{t}</li>
                          ))}
                        </ul>
                      )}
                      <div className="mt-3 flex flex-wrap gap-x-5">
                        {p.site && (
                          <SiteLink to={p.site} className="inline-flex min-h-11 items-center text-[15px] font-medium text-ac">
                            Visit website&nbsp;<span aria-hidden="true">↗</span>
                          </SiteLink>
                        )}
                        {p.link?.includes("github.com") && (
                          <SiteLink to={p.link} className="inline-flex min-h-11 items-center gap-1.5 text-[15px] font-medium text-ac">
                            <GithubMark /> View on GitHub <span aria-hidden="true">↗</span>
                          </SiteLink>
                        )}
                        {p.paper && (
                          <SiteLink to={p.paper} className="inline-flex min-h-11 items-center text-[15px] font-medium text-ac">
                            Read the paper&nbsp;<span aria-hidden="true">↗</span>
                          </SiteLink>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
          <li className="border-y border-ln">
            <Link to="/projects" className="grid grid-cols-[minmax(0,1fr)_24px] items-center gap-3 py-4 text-base font-medium text-ac">
              All projects <span aria-hidden="true">›</span>
            </Link>
          </li>
        </ul>
      </section>

      {/* Publications: the quantum paper as a card, the PReMI paper as a row, same pattern as Latest writing. */}
      <section aria-labelledby="papers-d" className="px-5">
        <h2 id="papers-d" className="m-0 mb-2.5 mt-11 text-sm font-normal text-mu">Top publications</h2>
        <SiteLink
          to={papersD[0].link}
          className="group block rounded-card border border-ln bg-sf p-5 text-ink transition-colors hover:border-ac"
        >
          <span className="block text-[13px] text-ac">{papersD[0].status}</span>
          <span className="mt-2 block text-[22px] font-semibold leading-[1.2] tracking-[-0.03em] group-hover:text-ac">
            {papersD[0].title}
          </span>
          <span className="mt-2.5 block text-[15px] leading-[1.5] text-i2">{papersD[0].description}</span>
          <span className="mt-4 flex items-center justify-between gap-3 text-sm text-mu">
            {shortVenue(papersD[0].venue)} · {papersD[0].year}
            <span aria-hidden="true" className="text-ac">↗</span>
          </span>
        </SiteLink>
        <ul className="m-0 mt-3 list-none p-0">
          {papersD.slice(1).map((p) => (
            <li key={p.title} className="border-t border-ln">
              <SiteLink
                to={p.link}
                className="group grid grid-cols-[minmax(0,1fr)_24px] items-center gap-3 py-4 text-ink transition-[padding] duration-300 hover:pl-6"
              >
                <span className="min-w-0">
                  <span className="block text-[18px] font-medium leading-[1.3] tracking-[-0.02em] group-hover:text-ac">{p.title}</span>
                  <span className="mt-1 block text-[13px] text-mu">{shortVenue(p.venue)} · {p.year}</span>
                </span>
                <span aria-hidden="true" className="text-mu">↗</span>
              </SiteLink>
            </li>
          ))}
          <li className="border-y border-ln">
            <Link to="/research" className="grid grid-cols-[minmax(0,1fr)_24px] items-center gap-3 py-4 text-base font-medium text-ac">
              All publications <span aria-hidden="true">›</span>
            </Link>
          </li>
        </ul>
      </section>

      {/* Writing: the latest post as a card (like the Glass home), then the next posts as rows. */}
      {articles.length > 0 && (
        <section aria-labelledby="writing-d" className="px-5 pb-4">
          <h2 id="writing-d" className="m-0 mb-2.5 mt-11 text-sm font-normal text-mu">Latest writing</h2>
          <SiteLink
            to={articles[0].url}
            className="group block rounded-card border border-ln bg-sf p-5 text-ink transition-colors hover:border-ac"
          >
            <span className="block text-[13px] text-ac">Latest post</span>
            <span className="mt-2 block text-[24px] font-semibold leading-[1.15] tracking-[-0.035em] group-hover:text-ac">
              {articles[0].title}
            </span>
            {articles[0].summary && (
              <span className="mt-2.5 block text-[15px] leading-[1.5] text-i2">{articles[0].summary}</span>
            )}
            <span className="mt-4 flex items-center justify-between text-sm text-mu">
              {fmtDate(articles[0].date)}
              <span aria-hidden="true" className="text-ac">↗</span>
            </span>
          </SiteLink>
          <ul className="m-0 mt-3 list-none p-0">
            {articles.slice(1, 3).map((a) => (
              <li key={a.title} className="border-t border-ln">
                <SiteLink
                  to={a.url}
                  className="group grid grid-cols-[minmax(0,1fr)_24px] items-center gap-3 py-4 text-ink transition-[padding] duration-300 hover:pl-6"
                >
                  <span className="min-w-0">
                    <span className="block text-[18px] font-medium leading-[1.3] tracking-[-0.02em] group-hover:text-ac">{a.title}</span>
                    <span className="mt-1 block text-[13px] text-mu">{fmtDate(a.date)}</span>
                  </span>
                  <span aria-hidden="true" className="text-mu">↗</span>
                </SiteLink>
              </li>
            ))}
            <li className="border-y border-ln">
              <Link to="/blog" className="grid grid-cols-[minmax(0,1fr)_24px] items-center gap-3 py-4 text-base font-medium text-ac">
                All posts <span aria-hidden="true">›</span>
              </Link>
            </li>
          </ul>
        </section>
      )}
    </div>
  );
}

export default function Home() {
  const { variant } = useVariant();
  return (
    <Page bleed>
      <Meta />
      {variant === "C" ? <HomeC /> : variant === "D" ? <HomeD /> : <HomeA />}
    </Page>
  );
}
