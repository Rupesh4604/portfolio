import React from "react";
import { achievements,positions } from "../data/achievementsData";

export default function AchievementsAndPositions() {
  return (
    <main className="px-6 py-10 max-w-6xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Achievements</h1>
      <div className="grid gap-6 mb-12">
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className="border rounded-xl p-4 shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
            <p className="text-sm text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>

      <h1 className="text-3xl font-bold mb-6">Positions of Responsibility</h1>
      <div className="grid gap-6">
        {positions.map((pos, idx) => (
          <div
            key={idx}
            className="border rounded-xl p-4 shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-1">{pos.title}</h3>
            <p className="text-sm text-gray-700">{pos.organization}</p>
            <p className="text-sm text-gray-600">{pos.duration}</p>
            <p className="text-sm text-gray-700 mt-2">{pos.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}