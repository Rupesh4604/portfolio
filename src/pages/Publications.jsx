import React, { useState } from "react";
import DOMPurify from "dompurify";
import Modal from "../components/modal.jsx";
import { publications } from "../data/publicationsData";
import { Helmet } from "react-helmet-async";

export default function Publications() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  return (
    <>
      <Helmet>
        <title>Publications | M Rupesh Kumar Yadav</title>
        <meta name="description" content="Peer-reviewed research papers by M Rupesh Kumar Yadav on Quantum Neural Networks, Hyperspectral Imagery Classification, and Graph-Based stance grouping — published in QIP, PReMI, IIT Delhi." />
        <link rel="canonical" href="https://rupesh-dev.vercel.app/publications" />
      </Helmet>
      <h1 className="text-3xl font-bold mb-6">Publications</h1>

      <div className="grid gap-6">
        {publications.map((pub, idx) => (
          <article key={idx}
            role="button"
            tabIndex={0}
            onClick={() => { setActive(pub); setOpen(true); }}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { setActive(pub); setOpen(true); } }}
            className="cursor-pointer rounded-2xl border bg-white/70 dark:bg-slate-900/60
                       backdrop-blur p-4 shadow-sm hover:shadow-lg transition dark:border-slate-700
                       focus:outline-none focus:ring-2 focus:ring-accent-500/50">
            <h3 className="text-xl font-semibold">{pub.title}</h3>
            <p className="text-sm text-slate-700 dark:text-slate-300">{pub.authors}</p>
            <p className="text-sm text-slate-500">{pub.venue}</p>
            {pub.year && <p className="text-xs text-slate-500">{pub.year}</p>}
            {pub.tags && (
              <div className="mt-3 flex flex-wrap gap-2">
                {pub.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={active?.title || "Publication"}
        footer={
          active?.doi && (
            <a href={active.doi} target="_blank" rel="noreferrer"
               className="text-blue-600 hover:underline text-sm">View DOI ↗</a>
          )
        }
      >
        {active && (
          <>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              <strong>Authors:</strong> {active.authors}
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              <strong>Venue:</strong> {active.venue}{active.year ? `, ${active.year}` : ""}
            </p>
            {active.abstract && (
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Abstract</h4>
                <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
                  {active.abstract}
                </p>
              </div>
            )}
            {active.notes && (
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Notes</h4>
                <div className="text-sm text-slate-700 dark:text-slate-300"
                     dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(active.notes) }} />
              </div>
            )}
          </>
        )}
      </Modal>
    </>
  );
}
