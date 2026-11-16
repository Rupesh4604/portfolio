import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import DOMPurify from "dompurify";
import { publications } from "../data/publicationsData";
import { links } from "../data/siteData";
import { paperCollections } from "../lib/derived";
import { displayAuthors, toBibtex, bibKey, hasCitableAuthors } from "../lib/bibtex";
import Page from "../components/site/Page.jsx";
import PageHeader from "../components/site/PageHeader.jsx";
import SiteLink from "../components/site/SiteLink.jsx";
import { routeMeta } from "../lib/seo";

const SELF = /(Rupesh Kumar Yadav Mediboyina|R\. K\. Y\. Mediboyina)/;

const typeLabel = (status = "") =>
  /journal/i.test(status) ? "Journal" : /chapter/i.test(status) ? "Chapter" : "Conference";

const plural = (n, s) => (n === 1 ? s : s.replace(/(\w+)$/, "$1s"));

// Stat tiles: total + one per status, computed from data.
const statuses = [...new Set(publications.map((p) => p.status).filter(Boolean))];
const stats = [
  { n: publications.length, label: plural(publications.length, "Peer-reviewed paper") },
  ...statuses.map((s) => {
    const n = publications.filter((p) => p.status === s).length;
    return { n, label: plural(n, s) };
  }),
];

// Icons for the paper-collection cards, keyed by title (falls back to a book).
const COLLECTION_ICONS = {
  "GeoFM Lab": (
    <>
      <path d="M13 7 9 3 5 7l4 4" />
      <path d="m17 11 4 4-4 4-4-4" />
      <path d="m8 12 4 4 6-6-4-4Z" />
      <path d="m16 8 3-3" />
      <path d="M9 21a6 6 0 0 0-6-6" />
    </>
  ),
  "Quantum AI Hub": (
    <>
      <circle cx="12" cy="12" r="1.5" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    </>
  ),
};
const BOOK = <path d="M4 5a2 2 0 0 1 2-2h14v16H6a2 2 0 0 0-2 2V5ZM8 7h8M8 11h6" />;

const byYear = [...new Set(publications.map((p) => p.year))]
  .sort((a, b) => Number(b) - Number(a))
  .map((year) => ({ year, pubs: publications.filter((p) => p.year === year) }));

const allBib = publications.filter(hasCitableAuthors).map(toBibtex).join("\n\n");
const allBibHref = `data:application/x-bibtex;charset=utf-8,${encodeURIComponent(allBib)}`;

const META = routeMeta("/publications");

function Meta() {
  return (
    <Helmet>
      <title>{META.title}</title>
      <meta
        name="description"
        content={META.description}
      />
      <link rel="canonical" href="https://rupeshmediboyina.dev/publications" />
      <meta property="og:title" content={META.title} />
      <meta
        property="og:description"
        content={META.description}
      />
      <meta property="og:url" content="https://rupeshmediboyina.dev/publications" />
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
            { "@type": "ListItem", position: 2, name: "Research Publications", item: "https://rupeshmediboyina.dev/publications" },
          ],
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: publications.map((publication, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "ScholarlyArticle",
              name: publication.title,
              headline: publication.title,
              author: { "@type": "Person", name: "M Rupesh Kumar Yadav" },
              datePublished: publication.year || undefined,
              publisher: publication.venue || undefined,
              url: publication.link || publication.doi || undefined,
              sameAs: publication.doi || undefined,
              keywords: (publication.tags || []).join(", "),
            },
          })),
        })}
      </script>
    </Helmet>
  );
}

function Authors({ text }) {
  const parts = displayAuthors(text).split(SELF);
  return (
    <div className="mt-2 text-[15px] text-i2">
      {parts.map((part, i) =>
        SELF.test(part) ? (
          <strong key={i} className="font-medium text-ink">{part}</strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </div>
  );
}

function Publication({ p }) {
  const shown = { title: p.title, venue: p.venue, abstract: p.abstract };
  const id = bibKey(p);
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const timer = useRef();
  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(toBibtex(p));
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard blocked: leave the label unchanged */
    }
  };
  const hasMore = shown.abstract || p.notes;

  return (
    <article className="border-t border-ln py-7" aria-labelledby={`${id}-t`}>
      <span className="tag-line">{typeLabel(p.status)}</span>
      <h3 id={`${id}-t`} className="m-0 mt-3 text-[clamp(19px,1.8vw,22px)] font-medium leading-[1.3] tracking-[-0.015em]">
        {shown.title}
      </h3>
      {p.authors && <Authors text={p.authors} />}
      <div className="mt-1 text-[15px] italic text-mu">{shown.venue}</div>
      <div className="mt-2 flex flex-wrap gap-x-[22px]">
        {hasMore && (
          <button
            type="button"
            className="lk"
            aria-expanded={open}
            aria-controls={`${id}-abs`}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "Hide abstract" : "Abstract"}
            <span className="chev" aria-hidden="true" />
          </button>
        )}
        {p.doi && <SiteLink to={p.doi} className="lk">DOI ↗</SiteLink>}
        {p.link && p.link !== p.doi && <SiteLink to={p.link} className="lk">Paper ↗</SiteLink>}
        {p.pdf && <SiteLink to={p.pdf} className="lk">PDF</SiteLink>}
        {hasCitableAuthors(p) && (
          <>
            <button type="button" className="lk" onClick={copy}>
              {copied ? "Copied" : "Copy BibTeX"}
            </button>
            <span className="sr-only" role="status" aria-live="polite">{copied ? "BibTeX copied" : ""}</span>
          </>
        )}
      </div>
      {hasMore && (
        <div id={`${id}-abs`} className={`disc ${open ? "is-open" : ""}`} inert={!open ? true : undefined}>
          <div>
            <div className="max-w-[760px] pt-1.5 text-base leading-[1.65] text-i2">
              {shown.abstract && <p className="m-0">{shown.abstract}</p>}
              {p.notes && (
                <p className="m-0 mt-3" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(p.notes) }} />
              )}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

export default function Publications() {
  return (
    <Page className="page-enter">
      <Meta />
      <PageHeader
        title="Research"
        lead="Peer-reviewed work on deep learning, vision transformers and quantum machine learning, mostly applied to satellite imagery."
      >
        <div className="mt-8 flex flex-wrap gap-2.5">
          {[
            { to: links.scholar, label: "Google Scholar ↗" },
            { to: links.orcid, label: "ORCID ↗" },
          ].map((l) => (
            <SiteLink
              key={l.label}
              to={l.to}
              className="inline-flex h-11 items-center rounded-btn border border-ln px-[18px] text-[15px] text-ink transition-colors hover:border-ac hover:text-ac"
            >
              {l.label}
            </SiteLink>
          ))}
          <a
            href={allBibHref}
            download="rupesh-mediboyina-publications.bib"
            className="inline-flex h-11 items-center rounded-btn border border-ln px-[18px] text-[15px] text-ink transition-colors hover:border-ac hover:text-ac"
          >
            Download all BibTeX
          </a>
        </div>
      </PageHeader>

      <dl className="m-0 mt-[clamp(48px,6vw,88px)] grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col-reverse border-t border-ln py-6">
            <dt className="text-[15px] text-i2">{s.label}</dt>
            <dd className="display m-0 text-5xl leading-none">{s.n}</dd>
          </div>
        ))}
      </dl>

      <section aria-labelledby="pubs" className="mt-[clamp(56px,7vw,104px)]">
        <h2 id="pubs" className="m-0 mb-2 text-sm font-normal text-mu">Publications</h2>
        {byYear.map((g) => (
          <div key={g.year} className="grid gap-x-8 md:grid-cols-[180px_minmax(0,1fr)]">
            <div className="display mt-8 text-[40px] leading-none tracking-[-0.02em] text-mu md:mt-0 md:pt-7" aria-hidden="true">
              {g.year}
            </div>
            <div>
              <h3 className="sr-only">{g.year}</h3>
              {g.pubs.map((p) => (
                <Publication key={p.title} p={p} />
              ))}
            </div>
          </div>
        ))}
      </section>

      {paperCollections.length > 0 && (
        <section aria-labelledby="also" className="mt-[clamp(72px,9vw,128px)]">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-x-10 gap-y-2">
            <h2 id="also" className="display m-0 text-[clamp(30px,3.4vw,40px)] tracking-[-0.02em]">Paper collections</h2>
            <p className="m-0 max-w-[460px] text-[15px] leading-[1.6] text-i2">
              Reading lists I keep up to date alongside my own work, for anyone starting out in these areas.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {paperCollections.map((c) => (
              <SiteLink
                key={c.title}
                to={c.url}
                className="cd cd-lift group grid grid-cols-[56px_minmax(0,1fr)] gap-x-5 p-[clamp(22px,2.6vw,32px)] text-ink"
              >
                <span className="grid h-14 w-14 place-items-center rounded-full bg-tint text-ac" aria-hidden="true">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    {COLLECTION_ICONS[c.title] || BOOK}
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block text-[13px] text-mu">Curated paper collection</span>
                  <span className="display mt-1.5 block text-[clamp(24px,2.4vw,30px)] leading-[1.15] transition-colors group-hover:text-ac">
                    {c.title}
                  </span>
                  <span className="mt-2.5 block text-[15px] leading-[1.6] text-i2">{c.description}</span>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-ac">
                    Open the collection
                    <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">↗</span>
                  </span>
                </span>
              </SiteLink>
            ))}
          </div>
        </section>
      )}
    </Page>
  );
}
