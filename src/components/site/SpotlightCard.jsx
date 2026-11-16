// C · Glass card with a cursor spotlight (sets --x/--y on pointermove).
export default function SpotlightCard({ as = "div", className = "", children, ...rest }) {
  const Tag = as;
  const onPointerMove = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return (
    <Tag className={`gl-card spot ${className}`} onPointerMove={onPointerMove} {...rest}>
      {children}
    </Tag>
  );
}
