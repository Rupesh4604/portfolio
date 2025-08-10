import React from "react";
// If you’re using ESM with "type":"module", include the extension:
import { projects } from "../data/projectsData.js";

export default function Projects() {
  return (
    <main className="px-6 py-10 max-w-6xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => {
          const stack = project.techStack ?? project.topics ?? []; // <- key fix
          return (
            <div
              key={idx}
              className="border rounded-xl p-4 shadow-md hover:shadow-lg transition"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md mb-3"
                />
              )}

              {project.videoEmbed && (
                <div className="mb-3">
                  <iframe
                    width="100%"
                    height="200"
                    src={project.videoEmbed}
                    title={project.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-md"
                  />
                </div>
              )}

              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

              {/* render <br/> in description */}
              <div
                className="text-sm mb-2"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />

              <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                {stack.map((tech, i) => (
                  <span key={i} className="bg-gray-100 px-2 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-blue-600 hover:underline"
                >
                  View Project
                </a>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}
