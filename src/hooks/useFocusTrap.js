import { useEffect } from "react";

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

// While `active`: trap Tab inside `ref`, close on Esc, lock body scroll,
// focus `initialRef` (or the first focusable) and restore focus on close.
export default function useFocusTrap(ref, active, onClose, initialRef) {
  useEffect(() => {
    if (!active) return undefined;
    const node = ref.current;
    const previous = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const first = initialRef?.current || node?.querySelector(FOCUSABLE);
    first?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab" || !node) return;
      const items = [...node.querySelectorAll(FOCUSABLE)].filter((el) => el.offsetParent !== null);
      if (!items.length) return;
      const head = items[0];
      const tail = items[items.length - 1];
      if (e.shiftKey && document.activeElement === head) {
        e.preventDefault();
        tail.focus();
      } else if (!e.shiftKey && document.activeElement === tail) {
        e.preventDefault();
        head.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      if (previous && typeof previous.focus === "function") previous.focus();
    };
  }, [active, onClose, ref, initialRef]);
}
