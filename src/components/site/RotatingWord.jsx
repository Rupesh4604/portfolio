import { useEffect, useState } from "react";
import useReducedMotion from "../../hooks/useReducedMotion.js";

// Swaps through `words` every `every` ms.
//   mode "fade":  fade + drop + blur (A, C). `gradient` fills the word teal (C).
//   mode "slide": old word slides up out, new word enters from below (D); line clipped.
// Reduced motion: first word only.
// `suffix` (e.g. ",") sits inside the reserved box so short words don't leave a gap before it.
export default function RotatingWord({ words, mode = "fade", gradient = false, every = 2600, className = "", suffix = "" }) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState("in"); // in | out | pre

  useEffect(() => {
    if (reduce || words.length < 2) return undefined;
    const timers = [];
    const outMs = mode === "slide" ? 500 : 380;
    const id = setInterval(() => {
      setPhase("out");
      timers.push(
        setTimeout(() => {
          setI((n) => n + 1);
          if (mode === "slide") {
            setPhase("pre");
            // two frames so the "pre" position paints before animating in
            timers.push(setTimeout(() => setPhase("in"), 30));
          } else {
            setPhase("in");
          }
        }, outMs)
      );
    }, every);
    return () => {
      clearInterval(id);
      timers.forEach(clearTimeout);
    };
  }, [reduce, words.length, mode, every]);

  const word = words[reduce ? 0 : i % words.length];
  const cls = `rw rw-${mode} ${gradient ? "rw-grad" : ""} ${phase === "in" ? "" : `is-${phase}`} ${className}`;

  if (mode === "slide") {
    return (
      <span className="rw-line" aria-live="off">
        <span className={cls}>{word}</span>
      </span>
    );
  }
  // Reserve the longest word's width so line breaks (and the heading height) never jump.
  // The sizer's text comes from CSS (data-text), so the HTML and search snippets read the headline once.
  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");
  return (
    <span className={`rw-stack ${className}`} aria-live="off">
      <span className={`rw-sizer ${gradient ? "rw-grad" : ""}`} aria-hidden="true" data-text={`${longest}${suffix}`} />
      <span>
        <span className={cls.replace(className, "")}>{word}</span>
        {suffix && <span className="not-italic text-ink">{suffix}</span>}
      </span>
    </span>
  );
}
