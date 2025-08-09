import React from "react";
import { publications } from "../data/publicationsData";

export default function Publications() {
  return (
    <main className="px-6 py-10 max-w-6xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Publications</h1>
      <div className="grid gap-6">
        {publications.map((pub, idx) => (
          <div
            key={idx}
            className="border rounded-xl p-4 shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-1">{pub.title}</h3>
            <p className="text-sm text-gray-700 mb-1">{pub.authors}</p>
            <p className="text-sm text-gray-600 mb-1">{pub.venue} — {pub.year}</p>
            <p className="text-sm text-gray-700 mb-2">{pub.description}</p>
            {pub.doi && (
              <a
                href={pub.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm underline"
              >
                View DOI
              </a>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}