import { useEffect, useState } from "react";

const CUE_H = 84; // label + circle + padding + bottom offset
const CUE_W = 96;

// "Scroll ⌄" hint at the bottom of the first screen (laptop and wider).
// Shows only while the target section's cards are out of view and the page is at the top;
// fades out on the first scroll. Clicking scrolls to the target.
// It never covers content: centred when the space under `avoid` is free,
// else in the empty right margin, else hidden (a cut-off row already says "more below").
export default function ScrollCue({ target, avoid, label = "Scroll" }) {
  const [spot, setSpot] = useState(null); // "center" | "corner" | null

  useEffect(() => {
    const el = document.getElementById(target);
    if (!el) return;
    // The section's cards (its first list); "in view" once 40px of them show.
    const cards = (el.closest("section") || el).querySelector("ul") || el;
    const update = () => {
      const inView = cards.getBoundingClientRect().top < window.innerHeight - 40;
      if (inView || window.scrollY >= 40) return setSpot(null);
      const a = avoid && document.getElementById(avoid);
      if (!a) return setSpot("center");
      const r = a.getBoundingClientRect();
      if (r.bottom + CUE_H <= window.innerHeight) return setSpot("center");
      if (window.innerWidth - r.right >= CUE_W + 16) return setSpot("corner");
      setSpot(null);
    };
    update();
    // Re-check once fonts and images have settled the layout.
    const t = setTimeout(update, 600);
    window.addEventListener("load", update);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      clearTimeout(t);
      window.removeEventListener("load", update);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [target, avoid]);

  const show = spot !== null;
  const place = spot === "corner" ? "right-4" : "left-1/2 -translate-x-1/2";
  return (
    <button
      type="button"
      onClick={() => document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" })}
      aria-label={`${label} to ${target === "work-a" ? "selected projects" : "the next section"}`}
      tabIndex={show ? 0 : -1}
      aria-hidden={!show}
      className={`fixed bottom-5 ${place} z-20 hidden cursor-pointer flex-col items-center gap-0.5 border-0 bg-transparent px-4 py-2 text-[13px] font-medium text-mu transition-opacity duration-500 hover:text-ac md:flex ${
        show ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      {label}
      <span className="cue-bob mt-1 grid h-8 w-8 place-items-center rounded-full bg-tint text-ac shadow-[0_4px_12px_rgba(28,41,32,.10)]" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </span>
    </button>
  );
}
