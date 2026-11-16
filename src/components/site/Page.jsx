// Per-page wrapper. `bleed` pages manage their own widths (full-bleed sections).
export default function Page({ bleed = false, className = "", children }) {
  return (
    <main id="main" tabIndex={-1} className={`${bleed ? "" : "wrap"} ${className} outline-none`}>
      {children}
    </main>
  );
}
