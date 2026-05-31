import React from "react";
import { Helmet } from "react-helmet-async";
import { beyondLinks } from "../data/beyondData";

export default function Beyond() {
  return (
    <>
      <Helmet>
        <title>Beyond | M Rupesh Kumar Yadav</title>
        <meta name="description" content="More from M Rupesh Kumar Yadav — personal blog, Quantum AI Hub, ProdHub productivity app, Google Scholar, and other sites." />
        <link rel="canonical" href="https://rupesh-dev.vercel.app/beyond" />
        <meta property="og:title" content="Beyond | M Rupesh Kumar Yadav" />
        <meta property="og:description" content="Blog, Quantum AI Hub, ProdHub, Google Scholar, and other places M Rupesh Kumar Yadav exists on the web." />
        <meta property="og:url" content="https://rupesh-dev.vercel.app/beyond" />
        <meta name="twitter:title" content="Beyond | M Rupesh Kumar Yadav" />
        <meta name="twitter:description" content="Blog, Quantum AI Hub, ProdHub, Google Scholar, and other sites by M Rupesh Kumar Yadav." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rupesh-dev.vercel.app/" },
            { "@type": "ListItem", "position": 2, "name": "Beyond", "item": "https://rupesh-dev.vercel.app/beyond" }
          ]
        })}</script>
      </Helmet>

      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Beyond
        </h1>
        <p className="mt-3 text-lg text-slate-700 dark:text-slate-300 max-w-2xl">
          Other places I write, build, and publish blogs, side projects, and academic profiles.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {beyondLinks.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group card p-6 flex flex-col h-full hover:shadow-lg hover:-translate-y-0.5 transition
                       focus:outline-none focus:ring-2 focus:ring-accent-500/50"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <span className="text-3xl" aria-hidden="true">{link.icon}</span>
              {link.category && (
                <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600
                                 dark:bg-slate-800 dark:text-slate-300">
                  {link.category}
                </span>
              )}
            </div>

            <h2 className="text-lg font-semibold text-slate-900 dark:text-white
                           group-hover:text-accent-500 transition-colors">
              {link.title}
            </h2>
            <p className="text-sm card-muted mt-1 flex-1">{link.description}</p>

            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-500">
              Visit ↗
            </span>
          </a>
        ))}
      </div>
    </>
  );
}
