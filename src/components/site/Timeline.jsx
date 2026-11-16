// Vertical timeline: 1px rail, dot per item (accent + glow when `current`).
export function Timeline({ children }) {
  return <ol className="m-0 list-none p-0">{children}</ol>;
}

export function TimelineItem({ when, current = false, last = false, children }) {
  return (
    <li className="grid grid-cols-[22px_minmax(0,1fr)] gap-x-3.5 md:grid-cols-[150px_24px_minmax(0,1fr)] md:gap-x-5">
      <div className="hidden pt-[26px] text-sm text-mu md:block">{when}</div>
      <div
        aria-hidden="true"
        className="relative bg-[linear-gradient(var(--ln),var(--ln))] bg-no-repeat"
        style={{ backgroundSize: last ? "1px 34px" : "1px 100%", backgroundPosition: "center top" }}
      >
        <span
          className={`absolute left-1/2 top-[30px] h-[11px] w-[11px] -translate-x-1/2 rounded-full border-[1.5px] ${
            current ? "border-ac bg-ac shadow-[0_0_0_5px_var(--tint)]" : "border-mu bg-bg"
          }`}
        />
      </div>
      <div className="pb-7 pt-6">
        <div className="mb-1 text-sm text-mu md:hidden">{when}</div>
        {children}
      </div>
    </li>
  );
}
