import React, { useState } from "react";
import DOMPurify from "dompurify";
import Modal from "../components/modal.jsx";
import { publications } from "../data/publicationsData";
import { Helmet } from "react-helmet-async";

const researchInterests = [
  "Multimodal AI",
  "Vision-language models",
  "Remote sensing",
  "Computer vision",
  "Quantum machine learning",
  "Agentic AI systems",
];

export default function Publications() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const openPublication = (publication) => {
    setActive(publication);
    setOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>Research Publications | M Rupesh Kumar Yadav</title>
        <meta
          name="description"
          content="Research publications by M Rupesh Kumar Yadav across quantum machine learning, remote sensing, hyperspectral imagery, computer vision, and graph-based NLP."
        />
        <link rel="canonical" href="https://rupesh-dev.vercel.app/publications" />
        <meta property="og:title" content="Research Publications | M Rupesh Kumar Yadav" />
        <meta
          property="og:description"
          content="Research publications across quantum machine learning, remote sensing, hyperspectral imagery, computer vision, and graph-based NLP."
        />
        <meta property="og:url" content="https://rupesh-dev.vercel.app/publications" />
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
              { "@type": "ListItem", position: 1, name: "Home", item: "https://rupesh-dev.vercel.app/" },
              { "@type": "ListItem", position: 2, name: "Research Publications", item: "https://rupesh-dev.vercel.app/publications" },
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

      <header className="mb-10 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-500">
          Research
        </p>
        <h1 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white sm:text-4xl">
          Publications
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
          A formal record of peer-reviewed and published research work. This page is designed as a growing academic profile rather than a promotional showcase for any single paper.
        </p>
      </header>

      <section className="mb-10 rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-surface-border dark:bg-surface-2">
        <h2 className="text-lg font-semibold text-slate-950 dark:text-white">Research Interests</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {researchInterests.map((interest) => (
            <span key={interest} className="chip">
              {interest}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        {publications.map((publication) => (
          <article
            key={publication.title}
            role="button"
            tabIndex={0}
            onClick={() => openPublication(publication)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") openPublication(publication);
            }}
            className="cursor-pointer rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent-500/50 dark:border-surface-border dark:bg-surface-2"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {publication.status || "Publication"}{publication.year ? ` - ${publication.year}` : ""}
                </p>
                <h2 className="mt-2 text-xl font-semibold leading-7 text-slate-950 dark:text-white">
                  {publication.title}
                </h2>
              </div>
              {publication.doi && (
                <a
                  href={publication.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="w-fit rounded-md border border-slate-200 px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-surface-border dark:text-slate-200 dark:hover:bg-surface-3"
                >
                  DOI
                </a>
              )}
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
              {publication.authors}
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
              {publication.venue}
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {publication.description}
            </p>
            {publication.tags && (
              <div className="mt-4 flex flex-wrap gap-2">
                {publication.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </section>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={active?.title || "Publication"}
        footer={
          active?.doi && (
            <a
              href={active.doi}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400"
            >
              View DOI
            </a>
          )
        }
      >
        {active && (
          <>
            <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <p>
                <strong>Authors:</strong> {active.authors}
              </p>
              <p>
                <strong>Venue:</strong> {active.venue}{active.year ? `, ${active.year}` : ""}
              </p>
              {active.status && (
                <p>
                  <strong>Status:</strong> {active.status}
                </p>
              )}
            </div>
            {active.abstract && (
              <div className="mt-5">
                <h3 className="font-semibold text-slate-950 dark:text-white">Summary</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                  {active.abstract}
                </p>
              </div>
            )}
            {active.notes && (
              <div className="mt-5">
                <h3 className="font-semibold text-slate-950 dark:text-white">Notes</h3>
                <div
                  className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300"
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(active.notes) }}
                />
              </div>
            )}
          </>
        )}
      </Modal>
    </>
  );
}
