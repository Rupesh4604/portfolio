// Toggle-button filter chips (aria-pressed). options: [{ value, label, count }]
export default function ChipGroup({ label, options, value, onChange, className = "" }) {
  return (
    <div role="group" aria-label={label} className={`flex flex-wrap items-center gap-2 ${className}`}>
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          className="chip"
          aria-pressed={value === o.value}
          onClick={() => onChange(o.value)}
        >
          {o.label}
          {o.count != null && <span className="n">{o.count}</span>}
        </button>
      ))}
    </div>
  );
}
