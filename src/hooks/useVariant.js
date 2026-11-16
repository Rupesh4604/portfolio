import { useSyncExternalStore } from "react";
import { isDark, subscribeTheme } from "../lib/theme.js";

// Variant = theme × device.
//   light                                   -> 'A' Editorial (all widths)
//   dark, phone (touch screen under 600px)  -> 'D' Bold
//   dark, anything else                     -> 'C' Glass (tablets, laptops, narrow windows)
// isPhone is the LAYOUT breakpoint (< 768px: phone header bar, menu sheet, stacked footer),
// independent of the variant, so a narrow laptop window shows Glass in the compact layout.
// Colours come from CSS tokens (src/styles/tokens.css uses the same PHONE query).

const WIDE = "(min-width: 768px)";
const PHONE = "(max-width: 599.98px) and (pointer: coarse)";

const mq = (q) => (typeof window !== "undefined" && window.matchMedia ? window.matchMedia(q) : null);

function subscribe(callback) {
  const offTheme = subscribeTheme(callback);
  const lists = [mq(WIDE), mq(PHONE)].filter(Boolean);
  lists.forEach((l) => l.addEventListener("change", callback));
  return () => {
    offTheme();
    lists.forEach((l) => l.removeEventListener("change", callback));
  };
}

// Encode all inputs in one primitive so the snapshot is stable between calls.
const snapshot = () =>
  (isDark() ? "d" : "l") + (mq(WIDE)?.matches ?? true ? "w" : "n") + (mq(PHONE)?.matches ? "p" : "o");

export default function useVariant() {
  const key = useSyncExternalStore(subscribe, snapshot, () => "lwo");
  const dark = key[0] === "d";
  const isPhone = key[1] === "n";
  const phoneDevice = key[2] === "p";
  const variant = !dark ? "A" : phoneDevice ? "D" : "C";
  return { variant, isPhone, dark };
}
