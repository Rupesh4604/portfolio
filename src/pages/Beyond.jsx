import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { posts } from "../data/postsData";
import { beyondLinks } from "../data/beyondData";
import { articles, feedUrl, fmtDate, tagLabel } from "../lib/derived";
import Page from "../components/site/Page.jsx";
import PageHeader from "../components/site/PageHeader.jsx";
import ChipGroup from "../components/site/ChipGroup.jsx";
import SiteLink from "../components/site/SiteLink.jsx";

const ALL = "all";
const featured = articles[0];
// Chips: each post's first tag is its topic.
const topics = [...new Set(posts.map((p) => p.tags[0]).filter(Boolean))];
const elsewhere = beyondLinks.filter((l) => l.category !== "Writing");

function Meta() {
  return (
    <Helmet>
      <title>Blog | M Rupesh Kumar Yadav</title>
      <meta
        name="description"
        content="Writing by M Rupesh Kumar Yadav: notes, research reviews and tutorials on geospatial foundation models, remote sensing and vision-language models."
      />
      <link rel="canonical" href="https://rupeshmediboyina.dev/beyond" />
      <meta property="og:title" content="Blog | M Rupesh Kumar Yadav" />
      <meta property="og:description" content="Notes on machine learning, book notes, and other places M Rupesh Kumar Yadav writes and builds on the web." />
      <meta property="og:url" content="https://rupeshmediboyina.dev/beyond" />
      <meta name="twitter:title" content="Blog | M Rupesh Kumar Yadav" />
      <meta name="twitter:description" content="Notes on machine learning, book notes, and other places M Rupesh Kumar Yadav writes and builds on the web." />
      <link rel="alternate" type="application/atom+xml" title="Rupesh's Blog" href={feedUrl} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://rupeshmediboyina.dev/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://rupeshmediboyina.dev/beyond" },
          ],
        })}
      </script>
    </Helmet>
  );
}

function RssIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M5 19a1 1 0 1 0 0-.01M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16" />
    </svg>
  );
}

export default function Beyond() {
  const [topic, setTopic] = useState(ALL);
  const chips = useMemo(
    () => [
      { value: ALL, label: "All", count: posts.length },
      ...topics.map((t) => ({ value: t, label: tagLabel(t), count: posts.filter((p) => p.tags[0] === t).length })),
    ],
    []
  );
  const rows = topic === ALL ? posts : posts.filter((p) => p.tags[0] === topic);

  return (
    <Page className="page-enter">
      <Meta />
      <PageHeader
        title="Blog"
        lead="In-depth notes, research reviews and tutorials on geospatial AI, remote sensing and vision-language models."
        aside={
          <SiteLink to={feedUrl} className="inline-flex min-h-11 items-center gap-2 text-[15px] text-ac hover:text-ac-hover">
            <RssIcon />
            Subscribe via RSS
          </SiteLink>
        }
      />

      {featured && (
        <SiteLink
          to={featured.url}
          className="cd group mt-[clamp(48px,6vw,88px)] grid items-center gap-[clamp(24px,4vw,56px)] p-3.5 text-ink transition-colors hover:border-ac md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
        >
          <div className="p-[clamp(12px,2vw,28px)]">
            <div className="text-sm text-mu">Latest</div>
            <h2 className="display m-0 mt-3.5 text-[clamp(30px,3.4vw,44px)] leading-[1.15] transition-colors group-hover:text-ac">
              {featured.title}
            </h2>
            <p className="m-0 mt-4 text-[17px] leading-[1.6] text-i2">{featured.summary}</p>
            <div className="mt-[22px] flex flex-wrap items-center gap-2">
              <span className="tag">{tagLabel(featured.tags[0])}</span>
              <span className="text-sm text-mu">
                {fmtDate(featured.date)}
              </span>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="h-[200px] rounded-[calc(var(--radius-card)-4px)] transition-transform duration-[600ms] ease-[var(--ease-out)] group-hover:scale-[1.015] md:h-[340px]"
            style={{
              background:
                "radial-gradient(260px circle at 70% 30%, rgba(79,179,169,.35), transparent 70%), linear-gradient(var(--ln) 1px, transparent 1px) 0 0/24px 24px, linear-gradient(90deg, var(--ln) 1px, transparent 1px) 0 0/24px 24px, var(--tint)",
            }}
          />
        </SiteLink>
      )}

      <section aria-labelledby="posts" className="mt-[clamp(72px,9vw,128px)]">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
          <h2 id="posts" className="display m-0 text-[clamp(30px,3.4vw,40px)] tracking-[-0.02em]">All posts</h2>
          <ChipGroup label="Filter by topic" options={chips} value={topic} onChange={setTopic} />
        </div>
        <ul className="m-0 list-none border-b border-ln p-0">
          {rows.map((p) => (
            <li key={p.url} className="border-t border-ln">
              <SiteLink
                to={p.url}
                className="row-indent grid grid-cols-[minmax(0,1fr)_24px] items-baseline gap-6 py-7 text-ink md:grid-cols-[120px_minmax(0,1fr)_28px]"
              >
                <span className="hidden text-sm text-mu md:block">{fmtDate(p.date)}</span>
                <span className="min-w-0">
                  <span className="row-title display block text-[clamp(22px,2.2vw,28px)] leading-[1.2]">{p.title}</span>
                  <span className="mt-3 flex flex-wrap items-center gap-2">
                    {p.tags.slice(0, 2).map((t, i) => (
                      <span key={t} className={i === 0 ? "tag" : "tag-line"}>{tagLabel(t)}</span>
                    ))}
                    <span className="text-sm text-mu md:hidden">
                      {fmtDate(p.date)}
                    </span>
                  </span>
                </span>
                <span className="row-arrow justify-self-end text-mu" aria-hidden="true">↗</span>
              </SiteLink>
            </li>
          ))}
        </ul>
      </section>

      {elsewhere.length > 0 && (
        <section aria-labelledby="elsewhere" className="mt-[clamp(72px,9vw,128px)]">
          <h2 id="elsewhere" className="display m-0 mb-5 text-[clamp(30px,3.4vw,40px)] tracking-[-0.02em]">Elsewhere</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {elsewhere.map((l) => (
              <SiteLink key={l.title} to={l.url} className="cd cd-lift block p-6 text-ink">
                <div className="text-[13px] text-mu">{l.category}</div>
                <div className="mt-2.5 text-[19px] font-medium leading-[1.3]">{l.title} ↗</div>
                <div className="mt-1.5 text-sm leading-[1.5] text-i2">{l.description}</div>
              </SiteLink>
            ))}
          </div>
        </section>
      )}
    </Page>
  );
}
