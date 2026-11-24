// Single source of truth for the colour theme.
// The inline script in index.html applies the initial class before paint
// (the visitor's toggle choice if any, else dark on phones and light elsewhere); this module only reads and changes it.

const root = () => document.documentElement;

export function isDark() {
  return typeof document !== "undefined" && root().classList.contains("dark");
}

export function setDark(dark) {
  root().classList.toggle("dark", dark);
  try {
    localStorage.setItem("theme", dark ? "dark" : "light");
  } catch {
    /* storage blocked: theme still applies for this visit */
  }
}

export function toggleTheme() {
  setDark(!isDark());
}

// Subscribe to class changes on <html> (from any toggle, or devtools).
export function subscribeTheme(callback) {
  if (typeof MutationObserver === "undefined") return () => {};
  const mo = new MutationObserver(callback);
  mo.observe(root(), { attributes: true, attributeFilter: ["class"] });
  return () => mo.disconnect();
}
