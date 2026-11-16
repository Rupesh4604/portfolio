// Decorative grid panel used in place of images in the Glass variant (from the template's .ph block).
export default function GridPanel({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`rounded-xl ${className}`}
      style={{
        background:
          "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px) 0 0/22px 22px, linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px) 0 0/22px 22px, rgba(255,255,255,.03)",
      }}
    />
  );
}
