import { useLocation } from "react-router-dom";

// Returns a predicate: is `to` the current page (or a parent of it)?
export default function useIsCurrent() {
  const { pathname } = useLocation();
  return (to) => (to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(to + "/"));
}
