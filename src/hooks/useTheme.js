import { useSyncExternalStore } from "react";
import { isDark, subscribeTheme, toggleTheme } from "../lib/theme.js";

export default function useTheme() {
  const dark = useSyncExternalStore(subscribeTheme, isDark, () => false);
  return { dark, toggle: toggleTheme };
}
