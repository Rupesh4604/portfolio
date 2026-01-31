import React, { useState } from "react";
import Modal from "../components/modal.jsx";
import { internships } from "../data/internshipData";

export default function Internships() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Internships & Education</h1>

      {/* Education Section */}
      <section className="mb-12 animate-slide-up">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <span className="w-2 h-6 bg-indigo-600 rounded-full"></span>
          Education
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* IIT Bombay */}
          <div className="card p-6 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-500"></div>
            <div className="flex justify-between items-start mb-2">
              <strong className="text-lg md:text-xl text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Indian Institute of Technology, Bombay
              </strong>
              <span className="text-sm font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                2026
              </span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 font-medium">Master of Technology, GNR, CSRE</p>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">CGPA: 9.05</p>
          </div>

          {/* NIT Andhra Pradesh */}
          <div className="card p-6 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-500"></div>
            <div className="flex justify-between items-start mb-2">
              <strong className="text-lg md:text-xl text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                National Institute Of Technology, AP
              </strong>
              <span className="text-sm font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                2024
              </span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 font-medium">B.Tech, Computer Science and Engineering</p>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">CGPA: 8.56</p>
          </div>

          {/* Schools */}
          <div className="card p-5 border-l-4 border-l-slate-300 dark:border-l-slate-700 hover:bg-slate-50 dark:hover:bg-surface-3 transition-colors">
            <strong className="block text-slate-900 dark:text-white text-base">Sri Chaitanya Junior College</strong>
            <div className="flex justify-between items-center mt-2">
              <p className="text-sm text-slate-500">Intermediate, 2020</p>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">CGPA: 9.86</span>
            </div>
          </div>

          <div className="card p-5 border-l-4 border-l-slate-300 dark:border-l-slate-700 hover:bg-slate-50 dark:hover:bg-surface-3 transition-colors">
            <strong className="block text-slate-900 dark:text-white text-base">Narayana E.M High School</strong>
            <div className="flex justify-between items-center mt-2">
              <p className="text-sm text-slate-500">Secondary, 2018</p>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">CGPA: 10</span>
            </div>
          </div>
        </div>
      </section>

      <div className="mb-6 flex items-center gap-2">
        <h2 className="text-2xl font-semibold">Internships</h2>
        <span className="h-px flex-1 bg-slate-200 dark:bg-slate-700"></span>
      </div>

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
