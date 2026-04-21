import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 — Not Found | M Rupesh Kumar Yadav</title>
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://rupesh-dev.vercel.app/" />
      </Helmet>
      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <p className="text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400">Error 404</p>
        <h1 className="mt-3 text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white">
          Page not found
        </h1>
        <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-300">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link
            to="/"
            className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Go home
          </Link>
          <Link
            to="/projects"
            className="px-6 py-3 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition"
          >
            Browse projects
          </Link>
        </div>
      </section>
    </>
  );
}
