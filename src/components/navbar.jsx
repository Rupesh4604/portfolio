import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

/* Dark-mode toggle */
function ThemeToggle() {
  const [dark, setDark] = useState(
    () =>
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm
                 bg-white/70 dark:bg-slate-800/70 backdrop-blur
                 hover:bg-white dark:hover:bg-slate-800 transition
                 border-slate-200 dark:border-slate-700"
      aria-label="Toggle dark mode"
      title="Toggle theme"
    >
      <span>{dark ? "🌙" : "☀️"}</span>
      <span className="hidden sm:inline">{dark ? "Dark" : "Light"}</span>
    </button>
  );
}

const linkBase =
  "px-3 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/40";
const linkIdle =
  "text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800";
const linkActive = "text-slate-900 bg-slate-100 dark:text-white dark:bg-slate-800";

export default function Navbar() {
  const nav = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/internships", label: "Internships" },
    { to: "/publications", label: "Publications" },
    { to: "/achievements", label: "Achievements" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/70 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <nav className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <span className="text-slate-900 dark:text-white font-semibold">Rupesh</span>
        <ul className="flex items-center gap-1">
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
        <ThemeToggle />
      </nav>
    </header>
  );
}
