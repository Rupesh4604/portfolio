import React, { useState } from "react";
import DOMPurify from "dompurify";
import Modal from "../components/modal.jsx";
import { work, internships } from "../data/internshipData";
import { achievements, positions } from "../data/achievementsData";
import { Helmet } from "react-helmet-async";

/* In-page section navigation (anchor pills) */
function SectionNav({ sections }) {
  return (
    <nav className="sticky top-14 z-30 -mx-6 mb-10 px-6 py-3
                    bg-slate-50/85 dark:bg-night-950/85 backdrop-blur
                    border-b border-slate-200 dark:border-surface-border">
      <ul className="flex flex-wrap gap-2">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className="inline-block px-3 py-1.5 rounded-full text-sm font-medium
                         text-slate-600 dark:text-slate-300
                         bg-white dark:bg-surface-2 border border-slate-200 dark:border-surface-border
                         hover:text-slate-900 hover:border-slate-300
                         dark:hover:text-white dark:hover:bg-surface-3 transition"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* Card for a work / internship role */
function RoleCard({ item, onOpen }) {
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onOpen(item)}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onOpen(item); }}
      className="cursor-pointer rounded-2xl border bg-white/70 dark:bg-slate-900/60
                 backdrop-blur p-4 shadow-sm hover:shadow-lg transition
                 border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-accent-500/50"
    >
      <h3 className="text-xl font-semibold mb-1">{item.role}</h3>
      <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
        {item.organization}
      </p>
      <p className="text-xs text-slate-500 mb-2">{item.duration}</p>
      <p className="text-sm text-slate-700 dark:text-slate-300 line-clamp-3 whitespace-pre-line">
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
  );
}

export default function Experience() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const openModal = (payload) => { setActive(payload); setOpen(true); };

  const hasWork = Array.isArray(work) && work.length > 0;

  const sections = [
    { id: "education", label: "Education" },
    ...(hasWork ? [{ id: "work", label: "Work Experience" }] : []),
    { id: "internships", label: "Internships" },
    { id: "achievements", label: "Achievements" },
    { id: "positions", label: "Positions of Responsibility" },
  ];

  return (
    <>
      <Helmet>
        <title>Experience | M Rupesh Kumar Yadav</title>
        <meta name="description" content="Experience of M Rupesh Kumar Yadav — education at IIT Bombay & NIT Andhra Pradesh, professional roles, research internships in AI & remote sensing, achievements, and positions of responsibility." />
        <link rel="canonical" href="https://rupesh-dev.vercel.app/experience" />
        <meta property="og:title" content="Experience | M Rupesh Kumar Yadav" />
        <meta property="og:description" content="Education, work experience, internships, achievements, and positions of responsibility of M Rupesh Kumar Yadav." />
        <meta property="og:url" content="https://rupesh-dev.vercel.app/experience" />
        <meta name="twitter:title" content="Experience | M Rupesh Kumar Yadav" />
        <meta name="twitter:description" content="Education, work experience, internships, achievements, and positions of responsibility of M Rupesh Kumar Yadav." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rupesh-dev.vercel.app/" },
            { "@type": "ListItem", "position": 2, "name": "Experience", "item": "https://rupesh-dev.vercel.app/experience" }
          ]
        })}</script>
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">Experience</h1>

      <SectionNav sections={sections} />

      {/* Education */}
      <section id="education" className="scroll-mt-32 mb-14 animate-slide-up">
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
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">CGPA: 9.45</p>
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

      {/* Work Experience (only renders when entries exist) */}
      {hasWork && (
        <section id="work" className="scroll-mt-32 mb-14">
          <div className="mb-6 flex items-center gap-2">
            <h2 className="text-2xl font-semibold">Work Experience</h2>
            <span className="h-px flex-1 bg-slate-200 dark:bg-slate-700"></span>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {work.map((item, idx) => (
              <RoleCard key={idx} item={item} onOpen={(it) => openModal({ _type: "role", ...it })} />
            ))}
          </div>
        </section>
      )}

      {/* Internships */}
      <section id="internships" className="scroll-mt-32 mb-14">
        <div className="mb-6 flex items-center gap-2">
          <h2 className="text-2xl font-semibold">Internships</h2>
          <span className="h-px flex-1 bg-slate-200 dark:bg-slate-700"></span>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {internships.map((item, idx) => (
            <RoleCard key={idx} item={item} onOpen={(it) => openModal({ _type: "role", ...it })} />
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="scroll-mt-32 mb-14">
        <div className="mb-6 flex items-center gap-2">
          <h2 className="text-2xl font-semibold">Achievements</h2>
          <span className="h-px flex-1 bg-slate-200 dark:bg-slate-700"></span>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {achievements.map((item, idx) => (
            <article
              key={idx}
              role="button"
              tabIndex={0}
              onClick={() => openModal({ _type: "achievement", ...item })}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") openModal({ _type: "achievement", ...item }); }}
              className="card p-5 hover:shadow-md transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-500/50"
            >
              <h3 className="text-lg font-semibold mb-1 text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm card-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Positions of Responsibility */}
      <section id="positions" className="scroll-mt-32 mb-12">
        <div className="mb-6 flex items-center gap-2">
          <h2 className="text-2xl font-semibold">Positions of Responsibility</h2>
          <span className="h-px flex-1 bg-slate-200 dark:bg-slate-700"></span>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {positions.map((pos, idx) => (
            <article
              key={idx}
              role="button"
              tabIndex={0}
              onClick={() => openModal({ _type: "position", ...pos })}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") openModal({ _type: "position", ...pos }); }}
              className="card p-5 hover:shadow-md transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-500/50"
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
      </section>

      {/* Shared modal */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={active?.role || active?.title || "Details"}
        footer={
          active?.link && (
            <a href={active.link} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-accent-500 hover:underline">
              Open Link ↗
            </a>
          )
        }
      >
        {active && (
          <>
            {active.image && (
              <img
                src={active.image}
                alt={active.role || active.title}
                loading="lazy"
                decoding="async"
                className="w-full rounded-lg mb-3 max-h-[30vh] object-contain"
              />
            )}

            {/* Role / position meta */}
            {(active._type === "role" || active._type === "position") && (
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

            {/* Body: achievements & positions allow HTML; roles are plain text */}
            {active._type === "role" ? (
              <div className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300 whitespace-pre-line">
                {active.longDescription || active.description}
              </div>
            ) : active.longDescription ? (
              <div
                className="prose prose-slate max-w-none dark:prose-invert mt-2"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(active.longDescription) }}
              />
            ) : (
              <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
                {active.description}
              </p>
            )}

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
