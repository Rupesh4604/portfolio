import { useSyncExternalStore } from "react";
import { isDark, subscribeTheme } from "../lib/theme.js";

// Variant = theme × breakpoint.
//   light            -> 'A' Editorial (all widths)
//   dark  >= 768px   -> 'C' Glass
//   dark  <  768px   -> 'D' Bold
// Colours come from CSS tokens; use this hook only for structural swaps.

const QUERY = "(min-width: 768px)";

function isWide() {
  return typeof window === "undefined" || !window.matchMedia
    ? true
    : window.matchMedia(QUERY).matches;
}

function subscribe(callback) {
  const offTheme = subscribeTheme(callback);
  const mql = typeof window !== "undefined" && window.matchMedia ? window.matchMedia(QUERY) : null;
  mql?.addEventListener("change", callback);
  return () => {
    offTheme();
    mql?.removeEventListener("change", callback);
  };
}

// Encode both inputs in one primitive so the snapshot is stable between calls.
const snapshot = () => (isDark() ? "d" : "l") + (isWide() ? "w" : "p");

export default function useVariant() {
  const key = useSyncExternalStore(subscribe, snapshot, () => "lw");
  const dark = key[0] === "d";
  const isPhone = key[1] === "p";
  const variant = !dark ? "A" : isPhone ? "D" : "C";
  return { variant, isPhone, dark };
}
