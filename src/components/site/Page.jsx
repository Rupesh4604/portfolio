// Per-page wrapper. `bleed` pages manage their own widths (full-bleed sections);
// `legacy` keeps the pre-redesign container for pages not rebuilt yet.
export default function Page({ bleed = false, legacy = false, className = "", children }) {
  const base = legacy
    ? "mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10"
    : bleed
      ? ""
      : "wrap";
  return (
    <main id="main" tabIndex={-1} className={`${base} ${className} outline-none`}>
      {children}
    </main>
  );
}
