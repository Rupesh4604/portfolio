// C · Glass ambient glow. A fixed, clipped layer so the blobs never add scroll height.
const blobs = [
  { w: 760, h: 760, style: { left: -260, top: -300 }, bg: "#0E6B66", blur: 140, o: 0.55, delay: "0s" },
  { w: 600, h: 600, style: { right: -200, top: "38vh" }, bg: "#2B5C8A", blur: 140, o: 0.38, delay: "-8s" },
  { w: 700, h: 520, style: { left: "28%", bottom: -320 }, bg: "#0E6B66", blur: 150, o: 0.32, delay: "-14s" },
];

export default function GlowBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {blobs.map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            ...b.style,
            width: b.w,
            height: b.h,
            background: b.bg,
            filter: `blur(${b.blur}px)`,
            opacity: b.o,
            animation: `glow-drift 22s ease-in-out ${b.delay} infinite alternate`,
          }}
        />
      ))}
    </div>
  );
}
