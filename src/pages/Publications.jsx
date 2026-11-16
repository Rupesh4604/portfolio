import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import DOMPurify from "dompurify";
import { publications } from "../data/publicationsData";
import { links } from "../data/siteData";
import { paperCollections } from "../lib/derived";
import { displayAuthors, toBibtex, bibKey } from "../lib/bibtex";
import Page from "../components/site/Page.jsx";
import PageHeader from "../components/site/PageHeader.jsx";
import SiteLink from "../components/site/SiteLink.jsx";

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

const byYear = [...new Set(publications.map((p) => p.year))]
  .sort((a, b) => Number(b) - Number(a))
  .map((year) => ({ year, pubs: publications.filter((p) => p.year === year) }));

const allBib = publications.map(toBibtex).join("\n\n");
const allBibHref = `data:application/x-bibtex;charset=utf-8,${encodeURIComponent(allBib)}`;

function Meta() {
  return (
    <Helmet>
      <title>Research Publications | M Rupesh Kumar Yadav</title>
      <meta
        name="description"
        content="Research publications by M Rupesh Kumar Yadav across quantum machine learning, remote sensing, hyperspectral imagery, computer vision, and graph-based NLP."
      />
      <link rel="canonical" href="https://rupeshmediboyina.dev/publications" />
      <meta property="og:title" content="Research Publications | M Rupesh Kumar Yadav" />
      <meta
        property="og:description"
        content="Research publications across quantum machine learning, remote sensing, hyperspectral imagery, computer vision, and graph-based NLP."
      />
      <meta property="og:url" content="https://rupeshmediboyina.dev/publications" />
      <meta name="twitter:title" content="Research Publications | M Rupesh Kumar Yadav" />
      <meta
        name="twitter:description"
        content="Research publications across quantum machine learning, remote sensing, hyperspectral imagery, computer vision, and graph-based NLP."
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
  const hasMore = p.abstract || p.notes;

  return (
    <article className="border-t border-ln py-7" aria-labelledby={`${id}-t`}>
      <span className="tag-line">{typeLabel(p.status)}</span>
      <h3 id={`${id}-t`} className="m-0 mt-3 text-[clamp(19px,1.8vw,22px)] font-medium leading-[1.3] tracking-[-0.015em]">
        {p.title}
      </h3>
      {p.authors && <Authors text={p.authors} />}
      <div className="mt-1 text-[15px] italic text-mu">{p.venue}</div>
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
            <span className="chev" aria-hidden="true">⌄</span>
          </button>
        )}
        {p.doi && <SiteLink to={p.doi} className="lk">DOI ↗</SiteLink>}
        {p.link && p.link !== p.doi && <SiteLink to={p.link} className="lk">Paper ↗</SiteLink>}
        {p.pdf && <SiteLink to={p.pdf} className="lk">PDF</SiteLink>}
        <button type="button" className="lk" onClick={copy}>
          {copied ? "Copied" : "Copy BibTeX"}
        </button>
        <span className="sr-only" role="status" aria-live="polite">{copied ? "BibTeX copied" : ""}</span>
      </div>
      {hasMore && (
        <div id={`${id}-abs`} className={`disc ${open ? "is-open" : ""}`} inert={!open ? true : undefined}>
          <div>
            <div className="max-w-[760px] pt-1.5 text-base leading-[1.65] text-i2">
              {p.abstract && <p className="m-0">{p.abstract}</p>}
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
          <h2 id="also" className="display m-0 mb-5 text-[clamp(30px,3.4vw,40px)] tracking-[-0.02em]">Also</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {paperCollections.map((c) => (
              <SiteLink key={c.title} to={c.url} className="cd cd-lift block p-6 text-ink">
                <div className="text-[13px] text-mu">Curated paper collection</div>
                <div className="mt-2.5 text-[19px] font-medium leading-[1.3]">{c.title}</div>
                <div className="mt-1.5 text-sm text-i2">{c.description}</div>
              </SiteLink>
            ))}
          </div>
        </section>
      )}
    </Page>
  );
}
