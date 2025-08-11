import React from "react";
import { achievements, positions } from "../data/achievementsData";

export default function AchievementsAndPositions() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Achievements</h1>

      <div className="grid gap-6 mb-12 sm:grid-cols-2">
        {achievements.map((item, idx) => (
          <article
            key={idx}
            className="rounded-2xl border bg-white p-4 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
            <p className="text-sm text-slate-700">{item.description}</p>
          </article>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-6">Positions of Responsibility</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {positions.map((pos, idx) => (
          <article
            key={idx}
            className="rounded-2xl border bg-white p-4 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold">{pos.title}</h3>
            <p className="text-sm text-slate-700">{pos.organization}</p>
            <p className="text-sm text-slate-500">{pos.duration}</p>
            <p className="text-sm text-slate-700 mt-2">{pos.description}</p>
          </article>
        ))}
      </div>
    </>
  );
}
