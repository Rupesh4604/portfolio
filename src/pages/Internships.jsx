// src/pages/Internships.jsx
import React from "react";
import { internships } from "../data/internshipData"; // <-- IMPORT THE DATA

export default function Internships() {
  return (
    <main className="px-6 py-10 max-w-6xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Internships</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {internships.map((item, idx) => (
          <div
            key={idx}
            className="border rounded-xl p-4 shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-1">{item.role}</h3>
            <p className="text-sm font-medium text-gray-700 mb-1">
              {item.organization}
            </p>
            <p className="text-xs text-gray-500 mb-2">{item.duration}</p>
            <p className="text-sm mb-2">{item.description}</p>
            <div className="flex flex-wrap gap-2 text-xs text-gray-600">
              {item.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-100 px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
