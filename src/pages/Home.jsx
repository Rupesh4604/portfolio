import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { projects } from "../data/projectsData";

/* Top projects to feature in the rolling marquee */
const featured = projects.slice(0, 6);

/* Profile photo with graceful initials fallback if /profile.jpg is missing */
function Avatar() {
  const [err, setErr] = useState(false);
  return (
    <div className="relative shrink-0">
      <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 blur-md opacity-60 dark:opacity-50" />
      <div className="relative h-44 w-44 md:h-60 md:w-60 rounded-full overflow-hidden
                      ring-2 ring-white/70 dark:ring-white/10
                      bg-slate-200 dark:bg-surface-2 flex items-center justify-center">
        {err ? (
          <span className="text-5xl font-extrabold text-slate-500 dark:text-slate-300">RK</span>
        ) : (
          <img
            src="/profile.jpg"
            alt="M Rupesh Kumar Yadav"
            onError={() => setErr(true)}
            className="h-full w-full object-cover object-top"
          />
        )}
      </div>
    </div>
  );
}

/* A single project card used inside the marquee */
function MarqueeCard({ p }) {
  const inner = (
    <>
      <div className="h-32 w-full overflow-hidden bg-slate-100 dark:bg-surface-3">
        {p.image && (
          <img
            src={p.image}
            alt={p.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover group-hover/card:scale-105 transition-transform duration-300"
          />
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-slate-900 dark:text-white line-clamp-1">{p.title}</h3>
        <p className="text-sm card-muted mt-1 line-clamp-2">{p.description}</p>
        {Array.isArray(p.techStack) && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {p.techStack.slice(0, 3).map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        )}
      </div>
    </>
  );

  const cls =
    "group/card w-72 shrink-0 rounded-2xl overflow-hidden border flex flex-col " +
    "border-slate-200 dark:border-surface-border bg-white dark:bg-surface-2 " +
    "shadow-sm hover:shadow-lg transition";

  return p.link ? (
    <a href={p.link} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
  ) : (
    <Link to="/projects" className={cls}>{inner}</Link>
  );
}

export default function Home() {
  return (
    <>
      <Helmet>
        <title>M Rupesh Kumar Yadav | Data Scientist &amp; AI Developer</title>
        <meta name="description" content="Portfolio of M Rupesh Kumar Yadav — Data Scientist and AI Developer, M.Tech at IIT Bombay. Machine Learning, Deep Learning, Computer Vision, LLMs, and geospatial AI projects." />
        <link rel="canonical" href="https://rupesh-dev.vercel.app/" />
        <meta property="og:title" content="M Rupesh Kumar Yadav | Data Scientist & AI Developer" />
        <meta property="og:description" content="Portfolio of M Rupesh Kumar Yadav — Data Scientist and AI Developer, M.Tech at IIT Bombay." />
        <meta property="og:url" content="https://rupesh-dev.vercel.app/" />
        <meta name="twitter:title" content="M Rupesh Kumar Yadav | Data Scientist & AI Developer" />
        <meta name="twitter:description" content="Portfolio of M Rupesh Kumar Yadav — Data Scientist and AI Developer, M.Tech at IIT Bombay." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center mb-20 pt-10">
        <div className="absolute top-0 right-0 -z-10 opacity-30 dark:opacity-20 pointer-events-none">
          <div className="w-96 h-96 bg-blue-500/30 rounded-full blur-3xl absolute top-0 right-[-100px] animate-pulse"></div>
          <div className="w-80 h-80 bg-purple-500/30 rounded-full blur-3xl absolute top-[100px] right-[50px] animate-pulse animation-delay-200"></div>
        </div>

        <div className="w-full flex flex-col-reverse lg:flex-row lg:items-center gap-10 lg:gap-16">
          {/* Left: copy */}
          <div className="max-w-2xl animate-fade-in">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-medium mb-6">
              Open to Data Scientist roles · 2026
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-5 leading-tight">
              Hi, I'm <br />
              <span className="text-gradient">Rupesh Kumar</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-4 max-w-2xl leading-relaxed">
              <strong className="text-slate-900 dark:text-slate-200">Data Scientist</strong> · M.Tech at IIT Bombay.
              I turn data into models and decisions across <span className="text-indigo-600 dark:text-indigo-400">Machine Learning</span>, <span className="text-indigo-600 dark:text-indigo-400">Deep Learning</span>, <span className="text-indigo-600 dark:text-indigo-400">Computer Vision</span>, and LLMs.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">
              🔬 Currently researching geospatial &amp; remote-sensing deep learning at IIT Bombay (CSRE).
            </p>

            <div className="flex flex-wrap gap-4 animate-slide-up animation-delay-200">
              <Link to="/projects" className="px-7 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                View Projects
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-400 text-white rounded-xl font-semibold transition-colors"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Résumé
              </a>
              <a href="mailto:rupesh32003@gmail.com" className="px-7 py-3.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                Contact Me
              </a>
            </div>
          </div>

          {/* Right: avatar */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <Avatar />
          </div>
        </div>
      </section>

      {/* Featured Projects — infinite marquee */}
      <section className="mb-20 animate-slide-up">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
            Featured Projects
          </h2>
          <Link to="/projects" className="text-sm font-medium text-accent-500 hover:underline shrink-0">
            See all →
          </Link>
        </div>

        <div className="group relative marquee-mask overflow-hidden">
          <div className="flex w-max gap-5 animate-marquee group-hover:[animation-play-state:paused]">
            {[...featured, ...featured].map((p, i) => (
              <MarqueeCard key={`${p.title}-${i}`} p={p} />
            ))}
          </div>
        </div>
        <p className="mt-3 text-xs text-slate-400 dark:text-slate-500">Hover to pause · click a card to open it</p>
      </section>

      {/* Technical Skills */}
      <div className="max-w-4xl mx-auto mb-20 animate-slide-up animation-delay-400">
        <section>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-purple-600 rounded-full"></span>
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Languages",
                items: ["Python", "C/C++", "Java", "JavaScript", "TypeScript", "SQL", "MATLAB", "R", "Bash", "HTML/CSS"],
                icon: "💻"
              },
              {
                title: "AI & ML Frameworks",
                items: ["PyTorch", "TensorFlow", "Keras", "Scikit-Learn", "OpenCV", "LangChain", "Hugging Face"],
                icon: "🧠"
              },
              {
                title: "Dev & Tools",
                items: ["React.js", "Node.js", "Git", "Docker", "Linux", "VS Code", "AWS", "MongoDB", "PostgreSQL"],
                icon: "🛠️"
              },
              {
                title: "Data & Others",
                items: ["Tableau", "Spark", "BigQuery", "ROS2", "ArcGIS", "AirFlow", "MLFlow"],
                icon: "📊"
              }

            ].map((group) => (
              <div key={group.title} className="bg-white dark:bg-surface-2 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-surface-border hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-4 text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <span>{group.icon}</span> {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill} className="chip text-sm px-3 py-1.5 cursor-default hover:scale-105 transition-transform">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
