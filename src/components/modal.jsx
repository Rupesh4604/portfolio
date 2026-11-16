import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ open, onClose, title, children, footer }) {
  const mouseDownOnBackdropRef = useRef(false);

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
                 bg-black/60 backdrop-blur-sm p-3 sm:p-4"
      onMouseDown={(e) => { mouseDownOnBackdropRef.current = e.target === e.currentTarget; }}
      onMouseUp={(e) => {
        if (mouseDownOnBackdropRef.current && e.target === e.currentTarget) onClose();
        mouseDownOnBackdropRef.current = false;
      }}
      aria-modal="true" role="dialog" aria-labelledby="modal-title"
    >
      <div
        className="max-h-[92vh] w-full max-w-3xl overflow-hidden rounded-lg border shadow-xl
                   bg-white dark:bg-slate-900 dark:border-slate-700
                   text-slate-800 dark:text-slate-100"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b px-4 py-4 dark:border-slate-700 sm:px-6">
          <h3 id="modal-title" className="text-lg font-semibold leading-7 sm:text-xl">{title}</h3>
          <button
            onClick={onClose}
            className="rounded-md px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Close"
          >✕</button>
        </div>

        {/* SCROLLABLE BODY */}
        <div className="max-h-[70vh] space-y-4 overflow-y-auto px-4 py-5 sm:px-6">
          {children}
        </div>

        {footer && (
          <div className="border-t bg-slate-50/60 px-4 py-4 dark:border-slate-700 dark:bg-slate-800/60 sm:px-6">
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
