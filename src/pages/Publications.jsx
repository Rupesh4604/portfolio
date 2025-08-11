import React from "react";
import { publications } from "../data/publicationsData";

export default function Publications() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Publications</h1>

      <div className="grid gap-6">
        {publications.map((pub, idx) => (
          <article
            key={idx}
            className="rounded-2xl border bg-white p-4 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-1">{pub.title}</h3>
            <p className="text-sm text-slate-700 mb-1">{pub.authors}</p>
            <p className="text-sm text-slate-600 mb-1">{pub.venue}</p>
            <p className="text-sm text-slate-700 mb-2">{pub.description}</p>
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
          </article>
        ))}
      </div>
    </>
  );
}
