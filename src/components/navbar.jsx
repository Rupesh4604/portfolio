import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle.jsx";

const linkBase =
  "block px-3 py-2 rounded-lg text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-accent-500/40";
const linkIdle =
  "text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-surface-3";
const linkActive =
  "text-slate-900 bg-slate-100 dark:text-white dark:bg-surface-3";

const nav = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/internships", label: "Internships" },
  { to: "/publications", label: "Publications" },
  { to: "/achievements", label: "Achievements" },
  { to: "/open-source-env", label: "OpenSourceEnv" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // lock scroll when menu open + close on Esc / resize
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false); // md breakpoint
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header
  className="
    sticky top-0 z-50 border-b
    border-slate-200 dark:border-surface-border
    bg-white/95 dark:bg-night-950/95
    md:bg-white/80 md:dark:bg-night-950/80
    supports-[backdrop-filter]:backdrop-blur-md
    shadow-sm
  "
>
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Brand */}
        <span className="text-slate-900 dark:text-white font-semibold">Rupesh</span>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <li key={n.to}>
              <NavLink
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : linkIdle}`
                }
              >
                {n.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg
                       border border-slate-200 dark:border-surface-border
                       bg-white/70 dark:bg-night-900/70 backdrop-blur
                       hover:bg-white dark:hover:bg-night-900 transition"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {/* 3 bars → X animation */}
            <span className="relative block w-5 h-3.5">
              <span
                className={`absolute inset-x-0 top-0 h-0.5 rounded
                            bg-slate-700 dark:bg-slate-200 transition
                            ${open ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <span
                className={`absolute inset-x-0 top-1.5 h-0.5 rounded
                            bg-slate-700 dark:bg-slate-200 transition
                            ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute inset-x-0 bottom-0 h-0.5 rounded
                            bg-slate-700 dark:bg-slate-200 transition
                            ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <div
        className={`md:hidden fixed inset-0 z-40 ${open ? "" : "pointer-events-none"}`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity
                      ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        {/* Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-72 sm:w-80
                      bg-white dark:bg-night-900 border-l border-slate-200 dark:border-surface-border
                      shadow-xl transition-transform ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="px-4 h-14 flex items-center justify-between border-b border-slate-200 dark:border-surface-border">
            <span className="font-semibold text-slate-900 dark:text-white">Menu</span>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                className="rounded-md px-2 py-1 hover:bg-slate-100 dark:hover:bg-surface-3"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>
          </div>

          <nav className="p-2">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block ${linkBase} ${isActive ? linkActive : linkIdle}`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
