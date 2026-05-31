// Lazy-loaded "depth globe" hero: a particle Earth whose continents are sampled
// from a real world map at build time (see scripts/generate-globe-points.mjs).
// Built on raw three + @react-three/fiber (no drei) to keep the bundle lean.
import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

const RADIUS = 1.6;
// Initial orientation: face ~90°E (India / South & East Asia) with a slight
// northward tilt so the northern landmasses read clearly.
const INIT_Y = 0;
const INIT_X = 0.32;
const AUTO_SPIN = 0.05; // radians/sec when idle

/* Track the site's class-based dark mode so the globe stays legible in both themes */
function useIsDark() {
  const [dark, setDark] = useState(
    () => typeof document !== "undefined" && document.documentElement.classList.contains("dark")
  );
  useEffect(() => {
    const el = document.documentElement;
    const obs = new MutationObserver(() => setDark(el.classList.contains("dark")));
    obs.observe(el, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);
  return dark;
}

/* Fetch + parse the precomputed point binary (int8 unit vectors) */
function useGlobeData() {
  const [data, setData] = useState(null);
  useEffect(() => {
    let alive = true;
    fetch("/globe.bin")
      .then((r) => r.arrayBuffer())
      .then((buf) => {
        const dv = new DataView(buf);
        const landCount = dv.getUint32(0, true);
        const oceanCount = dv.getUint32(4, true);
        const bytes = new Int8Array(buf, 8);
        const land = new Float32Array(landCount * 3);
        const ocean = new Float32Array(oceanCount * 3);
        for (let i = 0; i < landCount * 3; i++) land[i] = (bytes[i] / 127) * RADIUS;
        for (let i = 0; i < oceanCount * 3; i++)
          ocean[i] = (bytes[landCount * 3 + i] / 127) * RADIUS * 0.985;
        if (alive) setData({ land, ocean });
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);
  return data;
}

/* Mouse drag → rotate, with inertia + auto-spin when idle. Touch is left alone
   so the page still scrolls normally on mobile. */
function useDragControls() {
  const { gl } = useThree();
  const s = useRef({
    dragging: false,
    px: 0,
    py: 0,
    rotX: INIT_X,
    rotY: INIT_Y,
    velX: 0,
    velY: 0,
  });

  useEffect(() => {
    const el = gl.domElement;
    el.style.cursor = "grab";
    el.style.touchAction = "pan-y";

    const down = (e) => {
      if (e.pointerType !== "mouse") return; // don't hijack touch scrolling
      s.current.dragging = true;
      s.current.px = e.clientX;
      s.current.py = e.clientY;
      s.current.velX = 0;
      s.current.velY = 0;
      el.style.cursor = "grabbing";
    };
    const move = (e) => {
      if (!s.current.dragging) return;
      const dx = e.clientX - s.current.px;
      const dy = e.clientY - s.current.py;
      s.current.px = e.clientX;
      s.current.py = e.clientY;
      const k = 0.006;
      s.current.rotY += dx * k;
      s.current.rotX = Math.max(-1, Math.min(1, s.current.rotX + dy * k));
      s.current.velY = dx * k;
      s.current.velX = dy * k;
    };
    const up = () => {
      s.current.dragging = false;
      el.style.cursor = "grab";
    };

    el.addEventListener("pointerdown", down);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      el.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [gl]);

  return s;
}

function Points({ positions, color, size, opacity }) {
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={size}
        sizeAttenuation
        transparent
        opacity={opacity}
        depthWrite={false}
      />
    </points>
  );
}

function DepthGlobe({ dark }) {
  const group = useRef();
  const data = useGlobeData();
  const ctrl = useDragControls();

  useFrame((_, delta) => {
    if (!group.current) return;
    const c = ctrl.current;
    if (c.dragging) {
      // follow the cursor directly
    } else {
      // inertia from the last drag, then settle into a slow auto-spin
      c.rotY += c.velY;
      c.rotX = Math.max(-1, Math.min(1, c.rotX + c.velX));
      c.velY *= 0.93;
      c.velX *= 0.93;
      c.rotY += AUTO_SPIN * delta;
      // gently ease the tilt back toward the initial framing
      c.rotX += (INIT_X - c.rotX) * 0.01;
    }
    group.current.rotation.y = c.rotY;
    group.current.rotation.x = c.rotX;
  });

  const landColor = dark ? "#EAF1FF" : "#0B1220";
  const oceanColor = dark ? "#4C648C" : "#AEB9CC";

  return (
    <group ref={group} rotation={[INIT_X, INIT_Y, 0]}>
      {/* solid sphere occludes back-facing points → real front/back depth.
          In dark mode it's a touch lighter than the page bg (#0B1220) so ocean
          basins read as the globe's surface instead of see-through holes. */}
      <mesh>
        <sphereGeometry args={[RADIUS * 0.965, 48, 48]} />
        <meshBasicMaterial color={dark ? "#16243E" : "#E7ECF6"} />
      </mesh>
      {data && (
        <>
          <Points positions={data.ocean} color={oceanColor} size={0.014} opacity={dark ? 0.55 : 0.5} />
          <Points positions={data.land} color={landColor} size={0.02} opacity={1} />
        </>
      )}
    </group>
  );
}

export default function Globe3D() {
  const dark = useIsDark();
  return (
    <Canvas
      camera={{ position: [0, 0, 4.2], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
      aria-hidden="true"
    >
      <DepthGlobe dark={dark} />
    </Canvas>
  );
}
