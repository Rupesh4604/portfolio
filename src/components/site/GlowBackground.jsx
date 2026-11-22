import { useLocation } from "react-router-dom";

// C · Glass ambient glow, per page, as drawn in design-handoff/reference/*C.dc.html.
// The layer scrolls with the page (not fixed), so the glow sits behind the top of
// each page and fades to the dark ground further down. overflow: clip keeps the
// blobs from adding scroll width without breaking the sticky header.
const TEAL = "#0E6B66";
const BLUE = "#2B5C8A";

const b = (w, h, pos, bg, o, delay = "0s", blur = 140) => ({ w, h, pos, bg, o, delay, blur });

const LAYOUTS = {
  "/": [
    b(760, 760, { left: -260, top: -300 }, TEAL, 0.55),
    b(600, 600, { right: -200, top: 420 }, BLUE, 0.38, "-8s"),
    b(700, 520, { left: "28%", top: 1250 }, TEAL, 0.32, "-14s", 150),
  ],
  "/projects": [
    b(720, 720, { left: -260, top: -300 }, TEAL, 0.5),
    b(560, 560, { right: -200, top: 600 }, BLUE, 0.35, "-9s"),
  ],
  "/research": [
    b(700, 700, { right: -240, top: -280 }, TEAL, 0.5),
    b(560, 560, { left: -220, top: 1100 }, BLUE, 0.35, "-9s"),
  ],
  "/blog": [
    b(720, 620, { left: "30%", top: -340 }, TEAL, 0.5),
    b(520, 520, { left: -220, top: 900 }, BLUE, 0.3, "-9s"),
  ],
  "/career": [
    b(680, 680, { right: -240, top: -260 }, TEAL, 0.5),
    b(520, 520, { left: -220, top: 900 }, BLUE, 0.3, "-9s"),
  ],
  "/contact": [
    b(700, 700, { left: -260, top: 300 }, TEAL, 0.5),
    b(520, 520, { right: -200, top: -200 }, BLUE, 0.32, "-9s"),
  ],
};

export default function GlowBackground() {
  const { pathname } = useLocation();
  const key = pathname.replace(/\/+$/, "") || "/";
  const blobs = LAYOUTS[key] || LAYOUTS["/projects"];
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-clip">
      {blobs.map((g, i) => (
        <div
          key={`${key}-${i}`}
          className="absolute rounded-full"
          style={{
            ...g.pos,
            width: g.w,
            height: g.h,
            background: g.bg,
            filter: `blur(${g.blur}px)`,
            opacity: g.o,
            animation: `glow-drift 22s ease-in-out ${g.delay} infinite alternate`,
          }}
        />
      ))}
    </div>
  );
}
