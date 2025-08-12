// src/pages/OpenSourceEnv.jsx
import React, { useState } from "react";
import Modal from "../components/modal.jsx";

/* --- small helper for the Email chips --- */
function ContactEmails() {
  const copy = (text) => navigator.clipboard?.writeText(text);

  // full-width chip inside its grid cell
  const chip =
    "inline-flex items-center justify-between gap-2 w-full px-3 py-2 rounded-lg " +
    "border border-surface-border bg-white dark:bg-surface-2 text-slate-700 dark:text-slate-200 " +
    "hover:dark:bg-surface-3";

  return (
    <div className="card p-6">
      <h3 className="font-semibold mb-3 text-slate-900 dark:text-white">Email Us</h3>

      {/* stack on mobile, 2 columns on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <button className={chip} onClick={() => copy("opesourceenv@gmail.com")} title="Click to copy">
          opesourceenv@gmail.com <span className="text-xs opacity-70">Copy</span>
        </button>
        <button className={chip} onClick={() => copy("rupesh32003@gmail.com")} title="Click to copy">
          rupesh32003@gmail.com <span className="text-xs opacity-70">Copy</span>
        </button>
      </div>

      <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">Click an email to copy it.</p>
    </div>
  );
}


export default function OpenSourceEnv() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const prodhub = {
    title: "ProdHub: AI-Powered Personal Productivity Hub",
    tagline: "Modern, all-in-one productivity platform to organize, achieve, and grow.",
    github: "https://github.com/Rupesh4604/ProdHub",
    live: "https://my-productivity-hub-5a3ba.web.app/",
    description:
      "ProdHub helps you manage projects, tasks, habits, and your calendar from a single, intuitive platform with AI planning powered by Google Gemini.",
    tech: ["React.js", "Firebase", "Google APIs", "Gemini"],
    longDescription: `
      <p><strong>ProdHub</strong> is a modern, all-in-one web application built to help you organize, achieve, and grow. Seamlessly manage projects, tasks, habits, and your calendar from a single, intuitive platform—all with smart AI-powered features and robust security.</p>
      <p><strong>Try ProdHub Now:</strong> <a href="https://my-productivity-hub-5a3ba.web.app/" target="_blank" rel="noreferrer">my-productivity-hub-5a3ba.web.app</a></p>
      <br />
      <h3><strong>Key Features</strong></h3>
      <ul>
        <li> - Dashboard Overview: snapshot of overdue tasks, upcoming deadlines, and progress; one-click <em>AI Daily Planner</em>.</li>
        <li> - AI Goal Decomposition: turn big ambitions into structured projects with tasks.</li>
        <li> - Hierarchical Project Management: per-project pages with dynamic progress bars.</li>
        <li> - Task Management: priorities, due dates, quick completion.</li>
        <li> - Advanced AI Planning (Gemini): goal decomposition, daily planning, <strong>smart scheduling</strong> that respects Google Calendar; produces an actionable time-blocked plan.</li>
        <li> - Task Generation: context-aware task lists using project titles & calendar.</li>
        <li> - <strong>Habit Tracker</strong> and <strong>Unified Schedule</strong> with secure Calendar integration.</li>
      </ul>
    `,
  };

  return (
    <>
      {/* Hero */}
      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          OpenSourceEnv
        </h1>
        <p className="mt-3 text-lg text-slate-700 dark:text-slate-300">
          OpenSourceEnv is a dedicated initiative focused on democratizing access to
          high-quality education in technology. Our mission is to provide comprehensive
          resources that empower learners at all levels to master new skills.
        </p>
      </header>

      {/* About / Initiative */}
      <section className="grid gap-6 md:grid-cols-2 mb-10">
        <article className="card p-6">
          <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Our Initiative</h2>
          <p className="card-muted">
            We foster an inclusive learning environment where everyone can thrive.
            Current offerings span <strong>Deep Learning</strong>, <strong>Machine Learning</strong>, <strong>AI</strong>,
            <strong> Data Science</strong>, <strong>Rapid Web Development</strong>, <strong>DBMS &amp; SQL</strong>, and
            <strong> DSA</strong>. Resources are continuously updated for relevance and depth.
          </p>
        </article>

        <article className="card p-6">
          <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">What We Offer</h2>
          <ul className="list-disc list-inside space-y-2 card-muted">
            <li>
              <strong>Comprehensive Learning Paths:</strong> curated roadmaps from fundamentals to advanced techniques.
            </li>
            <li>
              <strong>Community-Driven Learning:</strong> contribute, learn, and grow together with like-minded peers.
            </li>
          </ul>
        </article>
      </section>

      {/* Get Involved */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {/* 1) Explore */}
          <article className="card p-5 h-full flex flex-col">
            <h3 className="font-semibold mb-1 text-slate-900 dark:text-white">Explore Our Projects</h3>
            <p className="card-muted mb-4">
              Browse repositories and Notion teamspaces to discover projects & resources.
            </p>

            <div className="mt-auto flex flex-wrap gap-3">
              <a
                href="https://github.com/openSourceEnv" target="_blank" rel="noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-accent-500 hover:bg-accent-400 text-white"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.notion.so/Teamspace-Home-913399bce8764b36ad8e928a0083af45?pvs=21"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-lg border border-surface-border
                           bg-white dark:bg-surface-2 text-slate-700 dark:text-slate-200 hover:dark:bg-surface-3"
              >
                Teamspace ↗
              </a>
            </div>

            {/* Featured project: ProdHub */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2 text-slate-900 dark:text-white">Featured Project</h4>

              <button
                onClick={() => { setActive(prodhub); setOpen(true); }}
                className="w-full text-left rounded-xl border border-slate-200 dark:border-surface-border
                           bg-white dark:bg-surface-2 p-4 hover:shadow-sm transition"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">ProdHub</div>
                    <p className="text-sm card-muted mt-1">{prodhub.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {prodhub.tech.map((t) => (
                        <span key={t} className="chip">{t}</span>
                      ))}
                    </div>
                  </div>
                  <span className="text-accent-500 text-sm shrink-0">Details ↗</span>
                </div>
              </button>

              <div className="mt-3 flex flex-wrap gap-3">
                <a href={prodhub.github} target="_blank" rel="noreferrer"
                   className="inline-flex items-center px-3 py-2 rounded-lg border border-surface-border
                              bg-white dark:bg-surface-2 text-slate-700 dark:text-slate-200 hover:dark:bg-surface-3">
                  GitHub ↗
                </a>
                <a href={prodhub.live} target="_blank" rel="noreferrer"
                   className="inline-flex items-center px-3 py-2 rounded-lg bg-accent-500 hover:bg-accent-400 text-white">
                  Live Demo ↗
                </a>
              </div>
            </div>
          </article>

          {/* 2) Contribute */}
          <article className="card p-5 h-full flex flex-col">
            <h3 className="font-semibold mb-2 text-slate-900 dark:text-white">Contribute</h3>
            <p className="card-muted mb-4">
              Join the community, learn, build, and contribute to open-source initiatives.
            </p>

            <ol className="space-y-3">
              {[
                ["Explore Ideas", "Help improve existing projects or propose new ones."],
                ["Form Teams", "Connect with like-minded folks and collaborate."],
                ["Organize Projects", "Lead initiatives with support from mentors."],
              ].map(([t, d], i) => (
                <li key={t} className="rounded-xl border border-slate-200 dark:border-surface-border p-3 bg-white dark:bg-surface-2">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent-500 text-white text-xs">
                      {i + 1}
                    </span>
                    <span className="font-medium text-slate-900 dark:text-white">{t}</span>
                  </div>
                  <p className="text-sm card-muted">{d}</p>
                </li>
              ))}
            </ol>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://forms.gle/cwSLtKeJtyTRS3Cq7" target="_blank" rel="noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-accent-500 hover:bg-accent-400 text-white"
              >
                Fill the Contributor Form ↗
              </a>
              <a
                href="https://github.com/openSourceEnv" target="_blank" rel="noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-lg border border-surface-border
                           bg-white dark:bg-surface-2 text-slate-700 dark:text-slate-200 hover:dark:bg-surface-3"
              >
                Browse GitHub ↗
              </a>
            </div>
          </article>

          {/* 3) Engage */}
          <article className="card p-5 h-full flex flex-col">
            <h3 className="font-semibold mb-2 text-slate-900 dark:text-white">Engage with the Community</h3>

            <div className="space-y-3">
              <a
                href="https://join.slack.com/t/opensourceenv/shared_invite/zt-3b0wkmqqf-~C0ddraEgMqPHoT4nJQ5JQ"
                target="_blank" rel="noreferrer"
                className="block rounded-xl border border-slate-200 dark:border-surface-border p-3 bg-white dark:bg-surface-2 hover:shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">💬</span>
                    <span className="font-medium">Slack</span>
                  </div>
                  <span className="text-sm text-accent-500">Join ↗</span>
                </div>
                <p className="text-sm card-muted mt-1">Channels for help, updates, and collaboration.</p>
              </a>

              <a
                href="http://t.me/openSourceEnv" target="_blank" rel="noreferrer"
                className="block rounded-xl border border-slate-200 dark:border-surface-border p-3 bg-white dark:bg-surface-2 hover:shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">📣</span>
                    <span className="font-medium">Telegram</span>
                  </div>
                  <span className="text-sm text-accent-500">Open ↗</span>
                </div>
                <p className="text-sm card-muted mt-1">Quick announcements & informal chats.</p>
              </a>

              <a
                href="https://discord.gg/ZydDAs87" target="_blank" rel="noreferrer"
                className="block rounded-xl border border-slate-200 dark:border-surface-border p-3 bg-white dark:bg-surface-2 hover:shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🎮</span>
                    <span className="font-medium">Discord</span>
                  </div>
                  <span className="text-sm text-accent-500">Open ↗</span>
                </div>
                <p className="text-sm card-muted mt-1">Study rooms, voice calls, and meetups.</p>
              </a>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Alternate Slack invite:{" "}
                <a
                  className="underline"
                  href="https://join.slack.com/t/opensourceenv/shared_invite/zt-3b0wkmqqf-~C0ddraEgMqPHoT4nJQ5JQ"
                  target="_blank" rel="noreferrer"
                >
                  link
                </a>
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Resources & Contact */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Resources & Contact</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Quick links */}
          <div className="card p-6">
            <h3 className="font-semibold mb-3 text-slate-900 dark:text-white">Quick Links</h3>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/openSourceEnv"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-accent-500 hover:bg-accent-400 text-white"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.notion.so/Teamspace-Home-913399bce8764b36ad8e928a0083af45?pvs=21"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-lg border border-surface-border
                           bg-white dark:bg-surface-2 text-slate-700 dark:text-slate-200 hover:dark:bg-surface-3"
              >
                Teamspace ↗
              </a>
            </div>
          </div>

          {/* Emails with copy */}
          <ContactEmails />
        </div>
      </section>

      {/* MODAL (wired to the Featured Project button) */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={active?.title || "Details"}
        footer={
          active && (
            <div className="flex flex-wrap gap-3">
              {active.github && (
                <a
                  href={active.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-3 py-2 rounded-lg border border-surface-border
                             bg-white dark:bg-surface-2 text-slate-700 dark:text-slate-200 hover:dark:bg-surface-3"
                >
                  GitHub ↗
                </a>
              )}
              {active.live && (
                <a
                  href={active.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-3 py-2 rounded-lg bg-accent-500 hover:bg-accent-400 text-white"
                >
                  Open App ↗
                </a>
              )}
            </div>
          )
        }
      >
        {active && (
          <>
            <p className="text-sm text-slate-700 dark:text-slate-300">{active.tagline}</p>
            <div
              className="prose prose-slate max-w-none dark:prose-invert mt-3"
              dangerouslySetInnerHTML={{ __html: active.longDescription }}
            />
          </>
        )}
      </Modal>
    </>
  );
}
