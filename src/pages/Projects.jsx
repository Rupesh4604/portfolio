import React, { useMemo, useState } from "react";
import DOMPurify from "dompurify";
import Modal from "../components/modal.jsx";
import { projects } from "../data/projectsData.js";
import { Helmet } from "react-helmet-async";

const categoryOrder = [
  "Multimodal and Agentic AI",
  "Geospatial AI and Remote Sensing",
  "Computer Vision",
  "AI Systems and Full-stack ML",
  "Research Implementations",
];

function ProjectCard({ project, onOpen }) {
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onOpen(project)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onOpen(project);
      }}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent-500/50 dark:border-surface-border dark:bg-surface-2"
    >
      {project.image && (
        <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-surface-3">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-500">
          {project.category || "Project"}
        </p>
        <h3 className="mt-3 text-lg font-semibold leading-7 text-slate-950 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {(project.techStack ?? project.topics ?? []).slice(0, 4).map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const groupedProjects = useMemo(() => {
    const groups = new Map();
    projects.forEach((project) => {
      const category = project.category || "Other Work";
      if (!groups.has(category)) groups.set(category, []);
      groups.get(category).push(project);
    });

    return [...groups.entries()].sort(([a], [b]) => {
      const aIndex = categoryOrder.indexOf(a);
      const bIndex = categoryOrder.indexOf(b);
      return (aIndex === -1 ? 99 : aIndex) - (bIndex === -1 ? 99 : bIndex);
    });
  }, []);

  const openProject = (project) => {
    setActive(project);
    setOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>Projects | M Rupesh Kumar Yadav</title>
        <meta
          name="description"
          content="Selected AI/ML engineering projects by M Rupesh Kumar Yadav across agentic systems, geospatial AI, remote sensing, computer vision, and full-stack ML applications."
        />
        <link rel="canonical" href="https://rupeshmediboyina.dev/projects" />
        <meta property="og:title" content="Projects | M Rupesh Kumar Yadav" />
        <meta
          property="og:description"
          content="Selected AI/ML engineering projects across agentic systems, geospatial AI, remote sensing, computer vision, and full-stack ML applications."
        />
        <meta property="og:url" content="https://rupeshmediboyina.dev/projects" />
        <meta name="twitter:title" content="Projects | M Rupesh Kumar Yadav" />
        <meta
          name="twitter:description"
          content="Selected AI/ML engineering projects across agentic systems, geospatial AI, remote sensing, computer vision, and full-stack ML applications."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://rupeshmediboyina.dev/" },
              { "@type": "ListItem", position: 2, name: "Projects", item: "https://rupeshmediboyina.dev/projects" },
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: projects.slice(0, 20).map((project, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "CreativeWork",
                name: project.title,
                description: project.description,
                url: project.link || undefined,
                image: project.image || undefined,
                keywords: [project.category, ...(project.techStack ?? project.topics ?? [])].filter(Boolean).join(", "),
                author: { "@type": "Person", name: "M Rupesh Kumar Yadav" },
              },
            })),
          })}
        </script>
      </Helmet>

      <header className="mb-10 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-500">
          Portfolio
        </p>
        <h1 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white sm:text-4xl">
          Selected Projects
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
          A curated record of AI/ML engineering work across agentic systems, geospatial intelligence, computer vision, and applied ML products. The structure is designed to grow as new projects mature.
        </p>
      </header>

      <div className="space-y-12">
        {groupedProjects.map(([category, items]) => (
          <section key={category}>
            <div className="mb-5 flex flex-col gap-1 border-b border-slate-200 pb-3 dark:border-surface-border">
              <h2 className="text-xl font-semibold text-slate-950 dark:text-white">{category}</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {items.length} {items.length === 1 ? "project" : "projects"}
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((project) => (
                <ProjectCard key={project.title} project={project} onOpen={openProject} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={active?.title || "Project"}
        footer={
          active?.link && (
            <a
              href={active.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400"
            >
              View project
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
                className="max-h-[40vh] w-full rounded-lg object-contain"
              />
            )}

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
                {(active.techStack ?? active.topics).map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
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
