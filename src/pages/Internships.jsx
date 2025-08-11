import React, { useState } from "react";
import Modal from "../components/modal.jsx";
import { internships } from "../data/internshipData";

export default function Internships() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Internships</h1>

      <div className="grid gap-6 sm:grid-cols-2">
        {internships.map((item, idx) => (
          <article
            key={idx}
            onClick={() => { setActive(item); setOpen(true); }}
            className="cursor-pointer rounded-2xl border bg-white/70 dark:bg-slate-900/60
                       backdrop-blur p-4 shadow-sm hover:shadow-lg transition
                       border-slate-200 dark:border-slate-700"
          >
            <h3 className="text-xl font-semibold mb-1">{item.role}</h3>
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              {item.organization}
            </p>
            <p className="text-xs text-slate-500 mb-2">{item.duration}</p>
            <p className="text-sm text-slate-700 dark:text-slate-300 line-clamp-3">
              {item.description}
            </p>

            {Array.isArray(item.techStack) && (
              <div className="mt-3 flex flex-wrap gap-2">
                {item.techStack.slice(0, 6).map((t) => (
                  <span key={t}
                        className="text-xs px-2 py-1 rounded bg-slate-100 text-slate-700
                                   dark:bg-slate-800 dark:text-slate-200">
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
        title={active?.role || "Internship"}
        footer={
          active?.link && (
            <a href={active.link} target="_blank" rel="noreferrer"
               className="text-blue-600 hover:underline text-sm">
              View More ↗
            </a>
          )
        }
      >
        {active && (
          <>
            {/* Optional image/logo if provided */}
            {active.image && (
              <img
                src={active.image}
                alt={active.role}
                className="w-full rounded-lg mb-3 max-h-[30vh] object-contain"
              />
            )}

            <p className="text-sm text-slate-700 dark:text-slate-300">
              <strong>Organization:</strong> {active.organization}
            </p>
            {active.duration && (
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Duration:</strong> {active.duration}
              </p>
            )}

            {/* Prefer longDescription; fallback to description */}
            <div className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
              {active.longDescription || active.description}
            </div>

            {Array.isArray(active.highlights) && active.highlights.length > 0 && (
              <ul className="list-disc list-inside space-y-1 mt-3 text-sm">
                {active.highlights.map((h, i) => <li key={i}>{h}</li>)}
              </ul>
            )}

            {Array.isArray(active.techStack) && active.techStack.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {active.techStack.map((t) => (
                  <span key={t}
                        className="text-xs px-2 py-1 rounded bg-slate-100 text-slate-700
                                   dark:bg-slate-800 dark:text-slate-200">
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
