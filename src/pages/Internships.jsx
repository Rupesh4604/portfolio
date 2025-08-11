import React from "react";
import { internships } from "../data/internshipData";

export default function Internships() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Internships</h1>

      <div className="grid gap-6 sm:grid-cols-2">
        {internships.map((item, idx) => (
          <article
            key={idx}
            className="rounded-2xl border bg-white p-4 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-1">{item.role}</h3>
            <p className="text-sm font-medium text-slate-700 mb-1">
              {item.organization}
            </p>
            <p className="text-xs text-slate-500 mb-2">{item.duration}</p>
            <p className="text-sm text-slate-700 mb-3">{item.description}</p>

            <div className="flex flex-wrap gap-2 text-xs">
              {item.techStack.map((tech, i) => (
                <span key={i} className="bg-slate-100 text-slate-700 px-2 py-1 rounded-md">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
