import React, { useState } from "react";
import DOMPurify from "dompurify";
import Modal from "../components/modal.jsx";
import { projects } from "../data/projectsData.js";
import { Helmet } from "react-helmet-async";

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  return (
    <>
      <Helmet>
        <title>Projects | M Rupesh Kumar Yadav</title>
        <meta name="description" content="Explore projects built by M Rupesh Kumar Yadav, including ProdHub, AI integrations, and full-stack web applications." />
        <link rel="canonical" href="https://rupesh-dev.vercel.app/projects" />
      </Helmet>
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <article
            key={idx}
            role="button"
            tabIndex={0}
            onClick={() => {
              setActive(p);
              setOpen(true);
            }}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { setActive(p); setOpen(true); } }}
            className="group cursor-pointer rounded-2xl border bg-white/70 dark:bg-slate-900/60
                       backdrop-blur p-4 shadow-sm hover:shadow-lg transition
                       border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-accent-500/50"
          >
            {p.image && (
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                decoding="async"
                className="w-full h-44 object-cover rounded-lg mb-3"
              />
            )}
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 max-h-12 overflow-hidden">
              {p.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {(p.techStack ?? p.topics ?? []).slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded bg-slate-100 text-slate-700
                             dark:bg-slate-800 dark:text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={active?.title || "Details"}
        footer={
          active?.link && (
            <a
              href={active.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
            >
              View Project ↗
            </a>
          )
        }
      >
        {active && (
          <>
            {active.image && (
                <img
                  src={active.image}
                  alt={active.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded-lg max-h-[40vh] object-contain"
                />
              )}

            {/* Allow HTML in longDescription when provided */}
            {active.longDescription ? (
              <div
                className="prose prose-slate max-w-none dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(active.longDescription) }}
              />
            ) : (
              <p className="text-slate-700 dark:text-slate-300">{active.description}</p>
            )}

            {(active.techStack ?? active.topics)?.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {(active.techStack ?? active.topics).map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded bg-slate-100 text-slate-700
                               dark:bg-slate-800 dark:text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </>
        )}
      </Modal>
    </>
  );
}
