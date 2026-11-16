import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(cb) {
  if (typeof window === "undefined" || !window.matchMedia) return () => {};
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", cb);
  return () => mql.removeEventListener("change", cb);
}

const get = () => typeof window !== "undefined" && !!window.matchMedia && window.matchMedia(QUERY).matches;

export default function useReducedMotion() {
  return useSyncExternalStore(subscribe, get, () => false);
}
