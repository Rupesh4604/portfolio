import React from "react";
import { projects } from "../data/projectsData.js"; // keep your original source

export default function Projects() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => {
          const stack = project.techStack ?? project.topics ?? [];
          return (
            <article
              key={idx}
              className="group rounded-2xl border bg-white p-4 shadow-sm hover:shadow-md transition"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md mb-3"
                />
              )}

              {project.videoEmbed && (
                <div className="mb-3 aspect-video">
                  <iframe
                    className="w-full h-full rounded-md"
                    src={project.videoEmbed}
                    title={project.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

              <div
                className="text-sm mb-2 text-slate-700"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />

              <div className="flex flex-wrap gap-2 text-xs">
                {stack.map((tech, i) => (
                  <span key={i} className="bg-slate-100 text-slate-700 px-2 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-3 text-blue-600 hover:underline"
                >
                  View Project
                </a>
              )}
            </article>
          );
        })}
      </div>
    </>
  );
}
