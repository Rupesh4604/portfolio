import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Internships from "./pages/Internships.jsx";
import Publications from "./pages/Publications.jsx";
import Achievements from "./pages/Achievements.jsx";
import OpenSourceEnv from "./pages/OpenSourceEnv.jsx";
import { SpeedInsights } from "@vercel/speed-insights/react"

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-800
                dark:bg-night-950 dark:text-slate-100">
        <Navbar />
        <main className="mx-auto max-w-6xl px-6 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/open-source-env" element={<OpenSourceEnv />} />
          </Routes>
          <footer className="mt-16 border-t pt-6 text-sm text-slate-500">
            © {new Date().getFullYear()} Rupesh. All rights reserved.
          </footer>
        </main>
        <SpeedInsights />
      </div>
    </Router>
  );
}
