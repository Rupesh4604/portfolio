import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { projects } from "../data/projectsData";
import { publications } from "../data/publicationsData";

const focusAreas = [
  "Multimodal AI",
  "Vision-language models",
  "Agentic AI systems",
  "Computer vision",
  "Geospatial intelligence",
  "Remote sensing",
];

const proofPoints = [
  {
    label: "Current work",
    title: "Data Scientist @ Esri R&D - GeoAI",
    text: "Working on AI systems for geospatial intelligence, including language, vision, and spatial-data workflows.",
  },
  {
    label: "Research",
    title: "Peer-reviewed AI and remote-sensing work",
    text: "Research record across quantum machine learning, hyperspectral imagery, slum detection, and stance grouping.",
  },
  {
    label: "Engineering",
    title: "Applied ML systems and open source",
    text: "Projects span multi-agent RAG, geospatial ML tooling, computer vision pipelines, and full-stack AI applications.",
  },
];

const technicalAreas = [
  {
    title: "AI Systems",
    items: ["LLM agents", "RAG", "Tool use", "Guardrails", "Model serving", "Evaluation"],
  },
  {
    title: "Vision And Remote Sensing",
    items: ["Satellite imagery", "Vision transformers", "Segmentation", "Tracking", "Hyperspectral data"],
  },
  {
    title: "Engineering",
    items: ["Python", "PyTorch", "TensorFlow", "FastAPI", "React", "Cloud platforms"],
  },
];

const selectedProjects = projects.slice(0, 4);
const selectedPublications = publications.slice(0, 2);

function Avatar() {
  const [err, setErr] = useState(false);

  return (
    <div className="relative shrink-0">
      <div
        className="h-40 w-40 overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-sm dark:border-surface-border dark:bg-surface-2 sm:h-52 sm:w-52 lg:h-60 lg:w-60"
      >
        {err ? (
          <span className="flex h-full w-full items-center justify-center text-4xl font-bold text-slate-500 dark:text-slate-300">
            RK
          </span>
        ) : (
          <img
            src="/profile.jpg"
            alt="M Rupesh Kumar Yadav"
            width="346"
            height="486"
            fetchPriority="high"
            decoding="async"
            onError={() => setErr(true)}
            className="h-full w-full object-cover object-top"
          />
        )}
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, action }) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-500">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white sm:text-3xl">
          {title}
        </h2>
      </div>
      {action}
    </div>
  );
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "M Rupesh Kumar Yadav",
    url: "https://rupeshmediboyina.dev/",
    jobTitle: "AI/ML Engineer & Researcher",
    affiliation: {
      "@type": "Organization",
      name: "Esri R&D Center",
    },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Indian Institute of Technology Bombay" },
      { "@type": "CollegeOrUniversity", name: "National Institute of Technology Andhra Pradesh" },
    ],
    sameAs: [
      "https://github.com/Rupesh4604",
      "https://www.linkedin.com/in/mediboyina-rupesh-kumar-yadav-8b7a14205/",
      "https://orcid.org/0000-0001-7148-0660",
      "https://medium.com/@rupesh32003",
    ],
    knowsAbout: focusAreas,
  };

  return (
    <>
      <Helmet>
        <title>M Rupesh Kumar Yadav - AI/ML Engineer &amp; Researcher | Esri R&amp;D</title>
        <meta
          name="description"
          content="AI/ML engineer and researcher at Esri R&D working on multimodal AI, geospatial intelligence, vision-language models, agentic systems, computer vision, and remote sensing."
        />
        <link rel="canonical" href="https://rupeshmediboyina.dev/" />
        <meta property="og:title" content="M Rupesh Kumar Yadav - AI/ML Engineer & Researcher" />
        <meta
          property="og:description"
          content="AI/ML engineer and researcher at Esri R&D working across multimodal AI, geospatial intelligence, agentic systems, computer vision, and remote sensing."
        />
        <meta property="og:url" content="https://rupeshmediboyina.dev/" />
        <meta name="twitter:title" content="M Rupesh Kumar Yadav - AI/ML Engineer & Researcher" />
        <meta
          name="twitter:description"
          content="AI/ML engineer and researcher at Esri R&D working across multimodal AI, geospatial intelligence, agentic systems, computer vision, and remote sensing."
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <section className="grid items-center gap-10 pb-14 pt-8 sm:pt-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16 lg:pt-16">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex rounded-md border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800 dark:border-emerald-900/80 dark:bg-emerald-950/30 dark:text-emerald-300">
            Data Scientist @ Esri R&D - GeoAI
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            M Rupesh Kumar Yadav
          </h1>
          <p className="mt-4 text-2xl font-semibold text-slate-800 dark:text-slate-100 sm:text-3xl">
            AI/ML Engineer & Researcher
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
            I build intelligent systems that reason across language, vision, and geospatial data, spanning LLM agents, computer vision, remote sensing, and applied AI research.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {focusAreas.map((area) => (
              <span key={area} className="chip">
                {area}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
            >
              View Projects
            </Link>
            <Link
              to="/publications"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-surface-border dark:bg-surface-2 dark:text-white dark:hover:bg-surface-3"
            >
              Research Publications
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-surface-2 dark:hover:text-white"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="hidden justify-center sm:flex lg:justify-end">
          <Avatar />
        </div>
      </section>

      <section className="mb-16">
        <SectionHeading eyebrow="Profile" title="Current focus and evidence" />
        <div className="grid gap-4 md:grid-cols-3">
          {proofPoints.map((item) => (
            <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-surface-border dark:bg-surface-2">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                {item.label}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-slate-950 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects across AI systems, vision, and geospatial ML"
          action={
            <Link to="/projects" className="text-sm font-semibold text-accent-500 hover:underline">
              See all projects
            </Link>
          }
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {selectedProjects.map((project) => (
            <Link
              key={project.title}
              to="/projects"
              className="group rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-surface-border dark:bg-surface-2"
            >
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent-500">
                {project.category || "Project"}
              </p>
              <h3 className="mt-3 line-clamp-2 min-h-[3.5rem] text-base font-semibold text-slate-950 dark:text-white">
                {project.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <SectionHeading
          eyebrow="Research"
          title="Publications and applied research record"
          action={
            <Link to="/publications" className="text-sm font-semibold text-accent-500 hover:underline">
              View research
            </Link>
          }
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {selectedPublications.map((pub) => (
            <article key={pub.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-surface-border dark:bg-surface-2">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {pub.venue}{pub.year ? `, ${pub.year}` : ""}
              </p>
              <h3 className="mt-2 text-lg font-semibold leading-7 text-slate-950 dark:text-white">
                {pub.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {pub.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <SectionHeading eyebrow="Technical areas" title="Working vocabulary" />
        <div className="grid gap-4 md:grid-cols-3">
          {technicalAreas.map((group) => (
            <article key={group.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-surface-border dark:bg-surface-2">
              <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
