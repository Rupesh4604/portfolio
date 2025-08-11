// components/ThemeToggle.jsx
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const getInitial = () => {
    const stored = localStorage.getItem("theme");
    return stored
      ? stored === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  };
  const [dark, setDark] = useState(getInitial);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      onClick={() => setDark(d => !d)}
      className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm
                 bg-white/70 dark:bg-slate-800/70 backdrop-blur
                 hover:bg-white dark:hover:bg-slate-800 transition
                 border-slate-200 dark:border-slate-700"
      title="Toggle theme"
      aria-label="Toggle dark mode"
    >
      <span>{dark ? "🌙" : "☀️"}</span>
      <span className="hidden sm:inline">{dark ? "Dark" : "Light"}</span>
    </button>
  );
}
