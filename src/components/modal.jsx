import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ open, onClose, title, children, footer }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center
                 bg-black/60 backdrop-blur-sm p-4"
      onMouseDown={onClose}
      aria-modal="true" role="dialog"
    >
      <div
        className="w-full max-w-3xl rounded-2xl border shadow-xl
                   bg-white dark:bg-slate-900 dark:border-slate-700
                   text-slate-800 dark:text-slate-100"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b dark:border-slate-700">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="rounded-md px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Close"
          >✕</button>
        </div>

        {/* SCROLLABLE BODY */}
        <div className="px-6 py-5 space-y-4 max-h-[75vh] overflow-y-auto">
          {children}
        </div>

        {footer && (
          <div className="px-6 py-4 border-t dark:border-slate-700 bg-slate-50/60 dark:bg-slate-800/60 rounded-b-2xl">
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
