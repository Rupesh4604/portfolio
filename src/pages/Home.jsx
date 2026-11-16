import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { projects } from "../data/projectsData";
import { site, links } from "../data/siteData";
import { home } from "../data/homeData";
import {
  paperCount,
  paperYears,
  paperSplit,
  currentRole,
  credentials,
  articles,
  fmtDate,
  paperCollections,
} from "../lib/derived";
import useVariant from "../hooks/useVariant";
import { slugify } from "../lib/slug";
import Page from "../components/site/Page.jsx";
import SiteLink from "../components/site/SiteLink.jsx";
import RotatingWord from "../components/site/RotatingWord.jsx";
import Marquee from "../components/site/Marquee.jsx";
import SpotlightCard from "../components/site/SpotlightCard.jsx";
import { ArrowRight } from "../components/site/Icons.jsx";
import GridPanel from "../components/site/GridPanel.jsx";
import { glass } from "../data/glassCopy";

const selected = projects.slice(0, 3).map((p) => ({ ...p, href: `/projects#${slugify(p.title)}` }));

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "M Rupesh Kumar Yadav",
  alternateName: ["Rupesh Mediboyina", "Rupesh Kumar Yadav"],
  url: "https://rupeshmediboyina.dev/",
  jobTitle: "AI/ML Engineer & Researcher",
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

function Meta() {
  return (
    <Helmet>
      <title>M Rupesh Kumar Yadav - AI/ML Engineer &amp; Researcher | Esri R&amp;D</title>
      <meta
        name="description"
        content="AI/ML engineer and researcher at Esri R&D working on multimodal AI, geospatial intelligence, vision-language models, agentic systems, computer vision, and remote sensing."
      />
      <link rel="canonical" href="https://rupeshmediboyina.dev/" />
      <meta property="og:title" content="M Rupesh Kumar Yadav - AI/ML Engineer & Researcher" />
      <meta
        property="og:description"
        content="AI/ML engineer and researcher at Esri R&D working across multimodal AI, geospatial intelligence, agentic systems, computer vision, and remote sensing."
      />
      <meta property="og:url" content="https://rupeshmediboyina.dev/" />
      <meta name="twitter:title" content="M Rupesh Kumar Yadav - AI/ML Engineer & Researcher" />
      <meta
        name="twitter:description"
        content="AI/ML engineer and researcher at Esri R&D working across multimodal AI, geospatial intelligence, agentic systems, computer vision, and remote sensing."
      />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}

const intro = `${home.role}. Currently at ${currentRole?.org ?? "Esri R&D"}, previously IIT Bombay.`;

/* ───────────────────────── A · Editorial ───────────────────────── */

function SectionHeadA({ id, title, to, cta }) {
  return (
    <div className="flex items-baseline justify-between gap-4 pb-6">
      <h2 id={id} className="display m-0 text-[clamp(32px,3.4vw,40px)] leading-none tracking-[-0.01em]">{title}</h2>
      <SiteLink to={to} className="whitespace-nowrap text-[15px] text-ac hover:text-ac-hover">
        {cta} →
      </SiteLink>
    </div>
  );
}

function HomeA() {
  return (
    <>
      <section className="wrap max-w-[1240px] pb-2 pt-[clamp(40px,10vw,150px)]">
        <h1 className="display m-0 text-[clamp(40px,5.8vw,86px)] leading-[1.04]">
          I build{" "}
          <RotatingWord words={home.rotatingA} className="italic text-ac" suffix="," />
          <br />
          and the systems that run them.
        </h1>
        <div className="mt-[clamp(28px,4vw,56px)] grid items-end gap-10 md:gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
          <div>
            <p className="m-0 max-w-[520px] text-[clamp(16px,1.4vw,19px)] leading-[1.6] text-i2">{intro}</p>
            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-2">
              <Link
                to="/projects"
                className="inline-flex h-[50px] items-center gap-2.5 rounded-btn bg-ink px-6 text-[15px] font-medium text-bg transition hover:-translate-y-px hover:bg-ac"
              >
                See my work <ArrowRight />
              </Link>
              <SiteLink to={site.cv} className="inline-flex min-h-11 items-center text-[15px] text-ac hover:text-ac-hover">CV</SiteLink>
              <SiteLink to={links.github} className="inline-flex min-h-11 items-center text-[15px] text-i2 hover:text-ink">GitHub</SiteLink>
              <SiteLink to={links.scholar} className="hidden min-h-11 items-center text-[15px] text-i2 hover:text-ink md:inline-flex">Scholar</SiteLink>
            </div>
          </div>
          {currentRole && (
            <div className="rounded-card border border-ln bg-sf px-7 py-6 shadow-[0_1px_0_rgba(17,20,24,.02),0_12px_32px_-18px_rgba(17,20,24,.18)]">
              <div className="flex items-center justify-between gap-2.5">
                <span className="flex items-center gap-2.5">
                  <span className="pulse-dot" aria-hidden="true" />
                  <span className="display text-2xl italic text-ac">Now</span>
                </span>
                <span className="text-[13px] text-mu">Since {currentRole.since}</span>
              </div>
              <p className="m-0 mt-3 text-base leading-[1.55] text-i2">
                {currentRole.role} at {currentRole.orgFull}.
              </p>
            </div>
          )}
        </div>
      </section>

      <section aria-labelledby="work-a" className="wrap max-w-[1240px] pt-[var(--section)]">
        <SectionHeadA id="work-a" title="Selected work" to="/projects" cta="All projects" />
        <ul className="m-0 list-none border-b border-ln p-0">
          {selected.map((p) => (
            <li key={p.title} className="border-t border-ln">
              <Link
                to={p.href}
                className="wk-row group grid grid-cols-[minmax(0,1fr)_24px] items-baseline gap-6 py-[30px] text-ink md:grid-cols-[200px_minmax(0,1fr)_80px_32px]"
              >
                <span className="hidden text-sm text-ac md:block">{p.category}</span>
                <span>
                  <span className="block text-sm text-ac md:hidden">{p.category}</span>
                  <span className="block text-[clamp(20px,2vw,24px)] tracking-[-0.01em] transition-colors group-hover:text-ac">
                    {p.title}
                  </span>
                  <span className="wk-desc block text-[15px] text-mu">{p.description}</span>
                </span>
                <span className="hidden text-sm text-mu md:block">{p.year}</span>
                <span
                  aria-hidden="true"
                  className="justify-self-end text-mu transition-[transform,color] duration-300 ease-[var(--ease-out)] group-hover:translate-x-1.5 group-hover:text-ac"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="wrap grid max-w-[1240px] gap-[clamp(64px,7vw,112px)] pt-[var(--section)] md:grid-cols-2">
        <div>
          <SectionHeadA title="Writing" to="/beyond" cta="Blog" />
          <ul className="m-0 list-none border-b border-ln p-0">
            {articles.slice(0, 2).map((p) => (
              <li key={p.url} className="border-t border-ln">
                <SiteLink to={p.url} className="group block py-[22px] text-ink">
                  <span className="display block text-[28px] leading-[1.2] transition-colors group-hover:text-ac">{p.title}</span>
                  <span className="mt-1.5 block text-sm text-mu">
                    {fmtDate(p.date)} · {p.readMin} min read
                  </span>
                </SiteLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionHeadA title="Research" to="/publications" cta="Publications" />
          <div className="border-t border-ln py-[22px]">
            <div className="flex items-baseline gap-3.5">
              <span className="display text-[72px] leading-none">{paperCount}</span>
              <span className="text-lg text-i2">peer-reviewed papers</span>
            </div>
            <div className="mt-2 text-sm text-mu">
              {paperSplit}, {paperYears}
            </div>
          </div>
          {paperCollections.length > 0 && (
            <p className="m-0 border-y border-ln py-[22px] text-base text-i2">
              Curated paper collections:{" "}
              {paperCollections.map((c, n) => (
                <span key={c.title}>
                  {n > 0 && ", "}
                  <SiteLink to={c.url} className="text-ac underline underline-offset-[3px] hover:text-ac-hover">{c.title}</SiteLink>
                </span>
              ))}
            </p>
          )}
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
          <div className="gl-inner flex h-full min-h-[460px] flex-col justify-between gap-10 p-[clamp(28px,4vw,52px)]">
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
            {glass.home.work.map((w) => (
              <Link key={w.key} to={`/projects#${slugify(w.key)}`} className="gl-inner gl-lift block px-3.5 pb-[22px] pt-3.5 text-ink">
                <GridPanel className="mb-[18px] h-[200px]" />
                <div className="px-1.5">
                  <div className={lb}>{w.tag}</div>
                  <div className="mt-1.5 text-xl font-medium tracking-[-0.01em]">{w.title}</div>
                  <div className="mt-1.5 text-sm leading-[1.5] text-mu">{w.desc}</div>
                </div>
              </Link>
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
                  {fmtDate(articles[0].date)} · {articles[0].readMin} min read
                </span>
              </SiteLink>
              <Link to="/beyond" className="whitespace-nowrap text-sm text-mu hover:text-ink">All posts →</Link>
            </div>
          </SpotlightCard>
        )}
      </div>
    </div>
  );
}

/* ───────────────────────── D · Bold (phone) ───────────────────────── */

function HomeD() {
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
          {selected.map((p, n) => (
            <li key={p.title} className="border-t border-ln">
              <Link
                to={p.href}
                className="group grid grid-cols-[30px_minmax(0,1fr)_24px] items-center gap-3 py-4 text-ink transition-[padding] duration-300 hover:pl-6"
              >
                <span className="self-start pt-[5px] text-[13px] text-mu">{String(n + 1).padStart(2, "0")}</span>
                <span className="min-w-0">
                  <span className="block text-[13px] text-ac">{p.category}</span>
                  <span className="mt-0.5 block text-[21px] font-medium leading-[1.3] tracking-[-0.03em] group-hover:text-ac">
                    {p.title}
                  </span>
                </span>
                <span aria-hidden="true" className="text-mu">›</span>
              </Link>
            </li>
          ))}
          <li className="border-y border-ln">
            <Link to="/projects" className="grid grid-cols-[minmax(0,1fr)_24px] items-center gap-3 py-4 text-base font-medium text-ac">
              All projects <span aria-hidden="true">›</span>
            </Link>
          </li>
        </ul>
      </section>
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
