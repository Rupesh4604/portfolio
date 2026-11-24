import { useEffect, useState } from "react";

// "Scroll ⌄" hint at the bottom of the first screen (laptop and wider).
// Shows only while the target section is out of view and the page is at the top;
// fades out on the first scroll. Clicking scrolls to the target.
export default function ScrollCue({ target, label = "Scroll" }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = document.getElementById(target);
    if (!el || typeof IntersectionObserver === "undefined") return;
    let inView = false;
    const update = () => setShow(!inView && window.scrollY < 40);
    // "In view" once at least 40px of the section's cards (its first list) show on screen.
    const io = new IntersectionObserver(
      ([e]) => {
        inView = e.isIntersecting;
        update();
      },
      { rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el.querySelector("ul") || el);
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", update);
    };
  }, [target]);

  return (
    <button
      type="button"
      onClick={() => document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" })}
      aria-label={`${label} to ${target === "work-a" ? "selected projects" : "the next section"}`}
      tabIndex={show ? 0 : -1}
      aria-hidden={!show}
      className={`fixed bottom-5 left-1/2 z-20 hidden -translate-x-1/2 cursor-pointer flex-col items-center gap-0.5 border-0 bg-transparent px-4 py-2 text-[13px] font-medium text-mu transition-opacity duration-500 hover:text-ac md:flex ${
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
