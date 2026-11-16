// Decorative grid panel used in place of images in the Glass variant.
// tone "faint": Home work cards (Glass.dc.html .ph). tone "tint": inner pages
// (ProjectsC.dc.html .ph), brighter lines on a teal tint.
const TONES = {
  faint:
    "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px) 0 0/22px 22px, linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px) 0 0/22px 22px, rgba(255,255,255,.03)",
  tint:
    "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px) 0 0/24px 24px, linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px) 0 0/24px 24px, rgba(79,179,169,.15)",
};

export default function GridPanel({ className = "", tone = "faint" }) {
  return <div aria-hidden="true" className={`rounded-xl ${className}`} style={{ background: TONES[tone] }} />;
}
