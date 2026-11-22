import { useEffect, useRef, useState } from "react";

// Illustrations for the featured projects. Drawn as SVG with the design tokens
// (fill-ac, stroke-ln, fill-mu…), so each one follows the mode it is shown in:
// teal on cream in light, mint on frosted glass in dark.
// Keyed by project title in src/data/projectsData.js.

const VB = "0 0 400 240";
const T = "fill-mu text-[11px]"; // small label text
const TI = "fill-ink text-[12px] font-medium";

function Frame({ label, children }) {
  return (
    <svg viewBox={VB} role="img" aria-label={label} className="block h-full w-full" preserveAspectRatio="xMidYMid meet">
      {children}
    </svg>
  );
}

const Node = ({ x, y, w = 92, h = 34, label, strong }) => (
  <g>
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx="9"
      className={strong ? "fill-ac stroke-ac" : "fill-sf stroke-ac/50"}
      strokeWidth="1.2"
    />
    <text x={x + w / 2} y={y + h / 2 + 4} textAnchor="middle" className={strong ? "fill-bg text-[12px] font-medium" : TI}>
      {label}
    </text>
  </g>
);

const Wire = ({ d, dashed }) => (
  <path d={d} fill="none" className="stroke-ac/60" strokeWidth="1.4" strokeDasharray={dashed ? "4 4" : undefined} />
);

/* ── Multi-agent knowledge assistant ── */

function AgentTriage() {
  return (
    <Frame label="A question is routed by a triage agent to document, web and tool agents, then combined into one answer">
      <Node x={14} y={103} w={78} label="Question" />
      <Wire d="M92 120 H128" />
      <Node x={128} y={103} w={80} label="Triage" strong />
      <Wire d="M208 120 C230 120 230 52 252 52" />
      <Wire d="M208 120 H252" />
      <Wire d="M208 120 C230 120 230 188 252 188" />
      <Node x={252} y={35} w={74} label="Docs" />
      <Node x={252} y={103} w={74} label="Web" />
      <Node x={252} y={171} w={74} label="Tools" />
      <Wire d="M326 52 C350 52 350 120 362 120" dashed />
      <Wire d="M326 120 H362" dashed />
      <Wire d="M326 188 C350 188 350 120 362 120" dashed />
      <circle cx="372" cy="120" r="10" className="fill-ac" />
      <path d="M367 120l3.5 3.5 6-7" fill="none" className="stroke-bg" strokeWidth="1.8" strokeLinecap="round" />
      <text x="14" y="226" className={T}>Query triage</text>
    </Frame>
  );
}

function AgentRetrieval() {
  const bars = [0.92, 0.81, 0.64, 0.38];
  return (
    <Frame label="Parent and child chunks are retrieved from two sources and re-ranked by relevance">
      {[0, 1].map((col) => (
        <g key={col} transform={`translate(${18 + col * 116} 26)`}>
          <text x="0" y="0" className={T}>{col ? "External" : "Internal"}</text>
          {[0, 1, 2].map((r) => (
            <g key={r} transform={`translate(0 ${12 + r * 52})`}>
              <rect width="100" height="42" rx="7" className="fill-sf stroke-ln" strokeWidth="1.2" />
              <rect x="8" y="9" width="40" height="24" rx="4" className={r === col ? "fill-ac/35" : "fill-ac/12"} />
              <rect x="54" y="11" width="38" height="4" rx="2" className="fill-mu/40" />
              <rect x="54" y="19" width="30" height="4" rx="2" className="fill-mu/30" />
              <rect x="54" y="27" width="34" height="4" rx="2" className="fill-mu/25" />
            </g>
          ))}
        </g>
      ))}
      <text x="258" y="26" className={T}>Re-ranked by relevance</text>
      {bars.map((v, i) => (
        <g key={i} transform={`translate(258 ${40 + i * 36})`}>
          <rect width="100" height="24" rx="6" className="fill-ac/10" />
          <rect width={100 * v} height="24" rx="6" className={i === 0 ? "fill-ac" : "fill-ac/45"} />
        </g>
      ))}
      <text x="18" y="226" className={T}>Two-source retrieval</text>
    </Frame>
  );
}

function AgentGuardrail() {
  const checks = ["Grounded in sources", "On topic", "No private data"];
  return (
    <Frame label="Each answer passes guardrail checks before it reaches the user">
      <rect x="22" y="30" width="200" height="164" rx="12" className="fill-sf stroke-ln" strokeWidth="1.2" />
      <text x="38" y="56" className={TI}>Answer</text>
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x="38" y={70 + i * 18} width={[168, 150, 160, 120, 90][i]} height="6" rx="3" className="fill-mu/30" />
      ))}
      <path d="M296 40l52 18v40c0 34-24 56-52 68-28-12-52-34-52-68V58z" className="fill-ac/15 stroke-ac" strokeWidth="1.5" />
      <path d="M278 100l13 13 25-27" fill="none" className="stroke-ac" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {checks.map((c, k) => (
        <text key={c} x="296" y={182 + k * 14} textAnchor="middle" className="fill-mu text-[10.5px]">{c}</text>
      ))}
      <text x="22" y="226" className={T}>Guardrail check</text>
    </Frame>
  );
}

/* ── CNN and ViT for hyperspectral imagery ── */

function HsiCube() {
  const layers = Array.from({ length: 9 });
  const spectrum = "M236 170 C252 160 262 120 276 128 S300 70 314 86 S338 150 352 120 S370 92 382 100";
  return (
    <Frame label="A satellite images the ground in hundreds of spectral bands, stacked as a cube, and the spectrum of one pixel">
      {layers.map((_, i) => (
        <g key={i} transform={`translate(${30 + i * 9} ${150 - i * 9})`}>
          <path d="M0 0 L120 0 L160 -40 L40 -40 Z" className={i === layers.length - 1 ? "fill-ac/30 stroke-ac" : "fill-sf stroke-ac/40"} strokeWidth="1" />
        </g>
      ))}
      {/* sensor footprint: the satellite's view cone landing on the top band */}
      <path d="M52 33 L116 74 L190 44 Z" className="fill-ac/12" />
      <path d="M52 33 L116 74 M52 33 L190 44" fill="none" className="stroke-ac/50" strokeWidth="1" strokeDasharray="3 3" />
      {/* satellite */}
      <g transform="translate(46 20) rotate(-18)">
        <line x1="-11" y1="0" x2="-7" y2="0" className="stroke-ac" strokeWidth="1.4" />
        <line x1="7" y1="0" x2="11" y2="0" className="stroke-ac" strokeWidth="1.4" />
        {[-33, 11].map((x) => (
          <g key={x}>
            <rect x={x} y="-6" width="22" height="12" rx="1.5" className="fill-ac/35 stroke-ac" strokeWidth="1.2" />
            <path d={`M${x + 7.3} -6 V6 M${x + 14.6} -6 V6 M${x} 0 H${x + 22}`} className="stroke-ac/70" strokeWidth="0.8" />
          </g>
        ))}
        <rect x="-7" y="-7" width="14" height="14" rx="2.5" className="fill-sf stroke-ac" strokeWidth="1.4" />
        <path d="M-3.5 7 H3.5 L2.5 11 H-2.5 Z" className="fill-ac" />
        <line x1="0" y1="-7" x2="0" y2="-12" className="stroke-ac" strokeWidth="1.2" />
        <circle cx="0" cy="-13" r="1.6" className="fill-ac" />
      </g>
      <circle cx="176" cy="88" r="4" className="fill-ac" />
      <Wire d="M180 88 H226" dashed />
      <path d="M232 60 V176 H388" fill="none" className="stroke-ln" strokeWidth="1.2" />
      <path d={spectrum} fill="none" className="stroke-ac" strokeWidth="2" />
      <text x="232" y="194" className={T}>Wavelength</text>
      <text x="30" y="226" className={T}>Hundreds of bands per pixel</text>
    </Frame>
  );
}

function HsiModel() {
  return (
    <Frame label="Spectral-spatial convolution feeds patch tokens into a vision transformer that outputs a class map">
      {[0, 1, 2].map((i) => (
        <rect key={i} x={16 + i * 12} y={78 - i * 6} width="56" height={84 + i * 12} rx="6" className="fill-ac/15 stroke-ac/60" strokeWidth="1.2" />
      ))}
      <text x="18" y="196" className={T}>3D conv</text>
      <Wire d="M100 120 H124" />
      <g>
        {Array.from({ length: 6 }).map((_, i) => (
          <rect key={i} x="126" y={62 + i * 20} width="40" height="14" rx="4" className={i === 0 ? "fill-ac" : "fill-sf stroke-ac/50"} strokeWidth="1" />
        ))}
        <text x="122" y="196" className={T}>Tokens</text>
      </g>
      <Wire d="M170 120 H194" />
      <rect x="196" y="58" width="96" height="124" rx="10" className="fill-sf stroke-ac" strokeWidth="1.4" />
      {["Attention", "MLP", "Attention", "MLP"].map((t, i) => (
        <g key={i}>
          <rect x="208" y={68 + i * 27} width="72" height="20" rx="5" className={i % 2 ? "fill-ac/12" : "fill-ac/30"} />
          <text x="244" y={82 + i * 27} textAnchor="middle" className="fill-ink text-[10px]">{t}</text>
        </g>
      ))}
      <text x="198" y="196" className={T}>Transformer</text>
      <Wire d="M296 120 H318" />
      <g transform="translate(320 84)">
        {Array.from({ length: 16 }).map((_, i) => (
          <rect key={i} x={(i % 4) * 17} y={Math.floor(i / 4) * 17} width="15" height="15" rx="2" className={["fill-ac", "fill-ac/55", "fill-ac/25", "fill-ink/15"][(i * 7 + Math.floor(i / 4)) % 4]} />
        ))}
      </g>
      <text x="320" y="196" className={T}>Class map</text>
      <text x="16" y="226" className={T}>CNN + ViT</text>
    </Frame>
  );
}

function HsiMap() {
  const shade = ["fill-ac", "fill-ac/60", "fill-ac/30", "fill-ink/12", "fill-ac/80"];
  const cell = (x, y) => shade[Math.abs(Math.floor(Math.sin(x * 1.7 + y * 0.9) * 2 + Math.cos(y * 1.3 - x * 0.4) * 2.4)) % shade.length];
  return (
    <Frame label="Land-cover map predicted from 10% of the labels: 99.80% accuracy on Indian Pines">
      <g transform="translate(20 22)">
        {Array.from({ length: 12 * 10 }).map((_, i) => {
          const x = i % 12;
          const y = Math.floor(i / 12);
          return <rect key={i} x={x * 15} y={y * 17} width="14" height="16" rx="2" className={cell(x, y)} />;
        })}
      </g>
      <text x="226" y="70" className="fill-ink text-[40px] font-medium tracking-[-0.03em]">99.80%</text>
      <text x="228" y="92" className={T}>Indian Pines accuracy</text>
      <text x="226" y="148" className="fill-ink text-[28px] font-medium tracking-[-0.03em]">10%</text>
      <text x="228" y="168" className={T}>of the labels used</text>
      <text x="20" y="226" className={T}>Predicted land cover</text>
    </Frame>
  );
}

/* ── rs-dl-architect ── */

function ArchPrompt() {
  const lines = [
    ["> ", "design a model for flood change detection"],
    ["", "Task: change detection · Sentinel-1 SAR + S2"],
    ["", "Proposing: Siamese U-Net, ResNet-34 encoder"],
    ["", "Configured 3 candidates, benchmarking…"],
  ];
  return (
    <Frame label="A coding agent asks rs-dl-architect to design a change-detection model and it proposes an architecture">
      <rect x="18" y="22" width="364" height="184" rx="12" className="fill-sf stroke-ln" strokeWidth="1.2" />
      <path d="M18 34a12 12 0 0 1 12-12h340a12 12 0 0 1 12 12v12H18z" className="fill-ac/10" />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={34 + i * 14} cy="35" r="4" className="fill-mu/40" />
      ))}
      {lines.map(([p, l], i) => (
        <text key={i} x="34" y={78 + i * 30} className={i === 0 ? "fill-ink font-mono text-[12px]" : "fill-i2 font-mono text-[11.5px]"}>
          <tspan className="fill-ac">{p}</tspan>
          {l}
        </text>
      ))}
      <rect x="34" y="176" width="8" height="14" className="fill-ac" />
      <text x="18" y="226" className={T}>Agent skill</text>
    </Frame>
  );
}

function ArchBench() {
  // Illustrative only: bar lengths show "compare, then pick", not real results.
  const rows = [
    ["Siamese U-Net", 0.86, true],
    ["ChangeFormer", 0.78],
    ["FC-EF", 0.64],
  ];
  return (
    <Frame label="Candidate architectures are compared on the same evaluation and the best one is selected">
      <text x="24" y="40" className={TI}>Compare candidates</text>
      {rows.map(([name, v, best], i) => (
        <g key={name} transform={`translate(24 ${62 + i * 46})`}>
          <text x="0" y="14" className={best ? "fill-ink text-[12px] font-medium" : "fill-i2 text-[12px]"}>{name}</text>
          <rect x="112" y="2" width="210" height="18" rx="5" className="fill-ac/10" />
          <rect x="112" y="2" width={210 * v} height="18" rx="5" className={best ? "fill-ac" : "fill-ac/40"} />
          {best && (
            <g transform="translate(346 11)">
              <circle r="9" className="fill-ac/20 stroke-ac" strokeWidth="1.2" />
              <path d="M-4 0l3 3 5-6" fill="none" className="stroke-ac" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          )}
        </g>
      ))}
      <text x="24" y="226" className={T}>Pick the model, keep the evidence</text>
    </Frame>
  );
}

function ArchTasks() {
  const tile = (x, label, children) => (
    <g transform={`translate(${x} 34)`}>
      <rect width="110" height="132" rx="10" className="fill-ac/12 stroke-ac/40" strokeWidth="1.2" />
      {children}
      <text x="0" y="154" className={T}>{label}</text>
    </g>
  );
  return (
    <Frame label="Supported tasks: segmentation, object detection and change detection on satellite imagery">
      {tile(
        20,
        "Segmentation",
        <>
          <path d="M0 70 C30 50 50 90 110 60 V132 H0z" className="fill-ac/45" />
          <path d="M0 100 C40 90 70 120 110 104 V132 H0z" className="fill-ac" />
        </>
      )}
      {tile(
        145,
        "Detection",
        <>
          {[[14, 18, 30, 22], [62, 40, 34, 26], [26, 80, 40, 30]].map(([x, y, w, h], i) => (
            <g key={i}>
              <rect x={x + 6} y={y + 6} width={w - 12} height={h - 12} rx="2" className="fill-ac/40" />
              <rect x={x} y={y} width={w} height={h} rx="3" fill="none" className="stroke-ac" strokeWidth="1.6" />
            </g>
          ))}
        </>
      )}
      {tile(
        270,
        "Change detection",
        <>
          <rect x="10" y="12" width="40" height="40" rx="3" className="fill-ac/30" />
          <rect x="60" y="12" width="40" height="40" rx="3" className="fill-ac/30" />
          <rect x="68" y="22" width="22" height="18" rx="2" className="fill-ac" />
          <text x="30" y="68" textAnchor="middle" className="fill-mu text-[9px]">before</text>
          <text x="80" y="68" textAnchor="middle" className="fill-mu text-[9px]">after</text>
          <rect x="10" y="80" width="90" height="40" rx="3" className="fill-ink/10" />
          <rect x="44" y="88" width="22" height="18" rx="2" className="fill-ac" />
        </>
      )}
      <text x="20" y="226" className={T}>Optical, SAR and time series</text>
    </Frame>
  );
}

const PROJECT_ART = {
  "Multi-agent knowledge assistant": [AgentTriage, AgentRetrieval, AgentGuardrail],
  "CNN and ViT for hyperspectral imagery": [HsiCube, HsiModel, HsiMap],
  "rs-dl-architect": [ArchPrompt, ArchBench, ArchTasks],
};

// Crossfading set of illustrations with dot controls. Advances on its own while visible
// (paused on hover/focus/touch and for reduced motion). On touch screens it can also be swiped:
// the picture follows the finger, and a swipe past SWIPE px moves to the next or previous one.
// Vertical page scrolling still works (touch-action: pan-y). Must not sit inside a link: the dots are buttons.
const SWIPE = 40;
export function ArtCarousel({ title, className = "", interval = 4200 }) {
  const scenes = PROJECT_ART[title] || [];
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [drag, setDrag] = useState(0); // px the current picture is pulled while swiping
  const start = useRef(null);
  const ref = useRef(null);
  const go = (step) => setI((n) => (n + step + scenes.length) % scenes.length);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Auto-advance; the timer restarts after every change, so a swipe or dot tap gets a full interval.
  useEffect(() => {
    if (paused || !visible || scenes.length < 2) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => setI((n) => (n + 1) % scenes.length), interval);
    return () => clearTimeout(t);
  }, [i, paused, visible, scenes.length, interval]);

  // Swipe (touch and pen only; a mouse uses the dots).
  const onPointerDown = (e) => {
    if (e.pointerType === "mouse" || scenes.length < 2) return;
    start.current = { x: e.clientX, y: e.clientY, id: e.pointerId, horizontal: null };
    setPaused(true);
  };
  const onPointerMove = (e) => {
    const s0 = start.current;
    if (!s0 || s0.id !== e.pointerId) return;
    const dx = e.clientX - s0.x;
    const dy = e.clientY - s0.y;
    if (s0.horizontal === null && Math.abs(dx) + Math.abs(dy) > 8) {
      s0.horizontal = Math.abs(dx) > Math.abs(dy);
      if (s0.horizontal) e.currentTarget.setPointerCapture?.(e.pointerId);
    }
    if (s0.horizontal) setDrag(dx);
  };
  const onPointerEnd = (e) => {
    const s0 = start.current;
    if (!s0 || s0.id !== e.pointerId) return;
    const dx = e.clientX - s0.x;
    if (s0.horizontal && Math.abs(dx) > SWIPE) go(dx < 0 ? 1 : -1);
    start.current = null;
    setDrag(0);
    setPaused(false);
  };

  if (!scenes.length) return null;
  return (
    <div
      ref={ref}
      className={`relative select-none overflow-hidden rounded-[calc(var(--radius-card)-4px)] ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerEnd}
      onPointerCancel={onPointerEnd}
      style={{ background: "var(--tint)", touchAction: "pan-y" }}
    >
      {scenes.map((Scene, n) => (
        <div
          key={n}
          aria-hidden={n !== i}
          className={`absolute inset-0 p-2 ${drag ? "" : "transition-[opacity,transform] duration-700"} ${n === i ? "opacity-100" : "opacity-0"}`}
          style={n === i && drag ? { transform: `translateX(${drag}px)`, opacity: Math.max(0.35, 1 - Math.abs(drag) / 260) } : undefined}
        >
          <Scene />
        </div>
      ))}
      <div className="absolute bottom-2 right-2 z-10 flex gap-0.5">
        {scenes.map((_, n) => (
          <button
            key={n}
            type="button"
            onClick={() => setI(n)}
            aria-label={`Show illustration ${n + 1} of ${scenes.length}`}
            aria-current={n === i ? "true" : undefined}
            className="grid h-6 w-6 cursor-pointer place-items-center border-0 bg-transparent p-0"
          >
            <span className={`block h-1.5 rounded-full transition-all duration-300 ${n === i ? "w-4 bg-ac" : "w-1.5 bg-mu/50"}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
