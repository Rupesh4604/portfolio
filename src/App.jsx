import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/navbar.jsx";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { HelmetProvider } from "react-helmet-async";

import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Experience from "./pages/Experience.jsx";
import Publications from "./pages/Publications.jsx";
import Beyond from "./pages/Beyond.jsx";
import OpenSourceEnv from "./pages/OpenSourceEnv.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-slate-50 text-slate-800
                dark:bg-night-950 dark:text-slate-100">
        <Navbar />
        <main className="mx-auto max-w-6xl px-6 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/beyond" element={<Beyond />} />
            <Route path="/open-source-env" element={<OpenSourceEnv />} />
            {/* Legacy URLs → consolidated Experience page */}
            <Route path="/internships" element={<Navigate to="/experience" replace />} />
            <Route path="/achievements" element={<Navigate to="/experience" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 pt-8 pb-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                © {new Date().getFullYear()} M Rupesh Kumar Yadav. All rights reserved.
              </p>

              <div className="flex items-center gap-6">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/mediboyina-rupesh-kumar-yadav-8b7a14205/" target="_blank" rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-700 dark:hover:text-blue-500 transition-colors"
                  aria-label="LinkedIn">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>

                {/* GitHub */}
                <a href="https://github.com/Rupesh4604" target="_blank" rel="noopener noreferrer"
                  className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  aria-label="GitHub">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>

                {/* Medium */}
                <a href="https://medium.com/@rupesh32003" target="_blank" rel="noopener noreferrer"
                  className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  aria-label="Medium">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42zM24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                  </svg>
                </a>

                {/* ORCID */}
                <a href="https://orcid.org/0000-0001-7148-0660" target="_blank" rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  aria-label="ORCID">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true">
                    <path d="M256,128c0,70.7-57.3,128-128,128S0,198.7,0,128S57.3,0,128,0S256,57.3,256,128z M81.9,89.5h-9.9v78.2h9.9V89.5z M77,69c3.6,0,6.5-2.9,6.5-6.5S80.6,56,77,56s-6.5,2.9-6.5,6.5S73.4,69,77,69z M186.7,118.8c0-23.7-13.6-32.3-33-32.3c-17,0-27.8,9.7-27.8,9.7V89.5h-9.4v78.2h9.4v-38.6c0-12.8,7.4-18.4,16.8-18.4c9.1,0,14.6,5.7,14.6,18.4v38.6h9.4V118.8z"/>
                  </svg>
                </a>

                {/* Mail */}
                <a href="mailto:rupesh32003@gmail.com"
                  className="text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                  aria-label="Email">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </a>
              </div>
            </div>
          </footer>
          </main>
          <SpeedInsights />
        </div>
      </Router>
    </HelmetProvider>
  );
}
