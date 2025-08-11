import React, { useState } from "react";
import Modal from "../components/Modal.jsx"; // the scrollable modal we built earlier
import { achievements, positions } from "../data/achievementsData";

export default function AchievementsAndPositions() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const openModal = (payload) => { setActive(payload); setOpen(true); };

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Achievements</h1>

      <div className="grid gap-6 mb-12 sm:grid-cols-2">
        {achievements.map((item, idx) => (
          <article
            key={idx}
            onClick={() => openModal({ _type: "achievement", ...item })}
            className="card p-5 hover:shadow-md transition cursor-pointer"
          >
            <h3 className="text-lg font-semibold mb-1 text-slate-900 dark:text-white">
              {item.title}
            </h3>
            <p className="text-sm card-muted">{item.description}</p>
          </article>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-6">Positions of Responsibility</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {positions.map((pos, idx) => (
          <article
            key={idx}
            onClick={() => openModal({ _type: "position", ...pos })}
            className="card p-5 hover:shadow-md transition cursor-pointer"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {pos.title}
            </h3>
            <p className="text-sm card-muted">{pos.organization}</p>
            {pos.duration && (
              <p className="text-sm text-slate-500 dark:text-slate-400">{pos.duration}</p>
            )}
            <p className="text-sm card-muted mt-2">{pos.description}</p>
          </article>
        ))}
      </div>

      {/* Modal */}
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
              className="inline-flex items-center gap-2 text-sm text-accent-500 hover:underline"
            >
              Open Link ↗
            </a>
          )
        }
      >
        {active && (
          <>
            {/* Optional image/logo */}
            {active.image && (
              <img
                src={active.image}
                alt={active.title}
                className="w-full rounded-lg mb-3 max-h-[30vh] object-contain"
              />
            )}

            {/* Position-specific meta */}
            {active._type === "position" && (
              <div className="space-y-1 text-sm">
                {active.organization && (
                  <p className="text-slate-700 dark:text-slate-300">
                    <strong>Organization:</strong> {active.organization}
                  </p>
                )}
                {active.duration && (
                  <p className="text-slate-700 dark:text-slate-300">
                    <strong>Duration:</strong> {active.duration}
                  </p>
                )}
              </div>
            )}

            {/* Prefer longDescription; fallback to description (HTML allowed) */}
            {active.longDescription ? (
              <div
                className="prose prose-slate max-w-none dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: active.longDescription }}
              />
            ) : (
              <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
                {active.description}
              </p>
            )}

            {/* Optional bullets */}
            {Array.isArray(active.highlights) && active.highlights.length > 0 && (
              <ul className="list-disc list-inside space-y-1 mt-3 text-sm">
                {active.highlights.map((h, i) => <li key={i}>{h}</li>)}
              </ul>
            )}
          </>
        )}
      </Modal>
    </>
  );
}
