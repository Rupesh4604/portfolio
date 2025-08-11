import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const getInitial = () => {
    const s = localStorage.getItem("theme");
    return s ? s === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
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
                 bg-white/70 dark:bg-night-950/70 backdrop-blur
                 hover:bg-white dark:hover:bg-night-900
                 border-slate-200 dark:border-surface-border transition"
      title="Toggle theme"
    >
      <span>{dark ? "🌙" : "☀️"}</span>
      <span className="hidden sm:inline">{dark ? "Dark" : "Light"}</span>
    </button>
  );
}
