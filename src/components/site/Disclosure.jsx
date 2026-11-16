import { useId } from "react";

// Button + collapsible region. Controlled: pass `open` and `onToggle`.
export default function Disclosure({ open, onToggle, label, openLabel, buttonClass = "lk", children }) {
  const id = useId();
  return (
    <>
      <button type="button" className={buttonClass} aria-expanded={open} aria-controls={id} onClick={onToggle}>
        {open && openLabel ? openLabel : label}
        <span className="chev" aria-hidden="true" />
      </button>
      <div id={id} className={`disc ${open ? "is-open" : ""}`} inert={!open ? true : undefined}>
        <div>{children}</div>
      </div>
    </>
  );
}
