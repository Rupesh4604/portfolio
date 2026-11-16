// Credentials ticker (D phone home). The list is duplicated for a seamless loop;
// the copy is hidden from assistive tech. Paused under reduced motion (global guard).
export default function Marquee({ items, label = "Credentials", className = "" }) {
  const row = (hidden) => (
    <ul className="marquee-row" aria-hidden={hidden || undefined}>
      {items.map((t, n) => (
        <li key={n}>{t}</li>
      ))}
    </ul>
  );
  return (
    <div className={`overflow-hidden ${className}`} role="region" aria-label={label}>
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
