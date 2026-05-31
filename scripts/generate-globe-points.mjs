// Build-time generator for the hero "depth globe".
// Decodes an equirectangular Earth map, samples evenly-distributed points on a
// sphere (Fibonacci), classifies each as land/ocean, and writes a compact binary
// of int8-quantized unit vectors. The runtime component just parses this file —
// no image decode or large texture shipped to the browser.
//
// Re-run with:  node scripts/generate-globe-points.mjs path/to/earth.jpg
//
// Output: public/globe.bin
//   uint32 landCount | uint32 oceanCount | int8[landCount*3] | int8[oceanCount*3]

import fs from "node:fs";
import path from "node:path";
import jpeg from "jpeg-js";

const SRC = process.argv[2] || path.resolve("public/earth-map.jpg");
const OUT = path.resolve("public/globe.bin");

const CANDIDATES = 140000; // points sampled over the sphere
const MAX_LAND = 32000;   // cap land points
const OCEAN_KEEP = 0.14;  // fraction of ocean points kept (faint sphere fill)

const raw = fs.readFileSync(SRC);
const img = jpeg.decode(raw, { useTArray: true });
const { width: W, height: H, data } = img; // RGBA

function isOcean(lon, lat) {
  // equirectangular sample
  const u = (lon + 180) / 360;
  const v = (90 - lat) / 180;
  const x = Math.min(W - 1, Math.max(0, Math.floor(u * W)));
  const y = Math.min(H - 1, Math.max(0, Math.floor(v * H)));
  const i = (y * W + x) * 4;
  const r = data[i], g = data[i + 1], b = data[i + 2];
  // Blue Marble oceans are dark blue: blue dominant & not bright (excludes white ice)
  return b > r + 8 && b > g + 4 && b < 170;
}

const land = [];
const ocean = [];
const golden = Math.PI * (3 - Math.sqrt(5));

for (let k = 0; k < CANDIDATES; k++) {
  const y = 1 - (k / (CANDIDATES - 1)) * 2; // 1 → -1
  const r = Math.sqrt(1 - y * y);
  const theta = golden * k;
  const x = Math.cos(theta) * r;
  const z = Math.sin(theta) * r;

  const lat = Math.asin(y) * (180 / Math.PI);
  const lon = Math.atan2(z, x) * (180 / Math.PI);

  // Negate X so the map isn't mirrored east–west when viewed from outside
  // (camera at +Z): screen-right should be east of the central meridian.
  const q = [Math.round(-x * 127), Math.round(y * 127), Math.round(z * 127)];
  if (isOcean(lon, lat)) {
    if (Math.random() < OCEAN_KEEP) ocean.push(q);
  } else {
    land.push(q);
  }
}

// Cap land via uniform subsample (preserves distribution)
let landKept = land;
if (land.length > MAX_LAND) {
  const stride = land.length / MAX_LAND;
  landKept = [];
  for (let i = 0; i < land.length; i += stride) landKept.push(land[Math.floor(i)]);
}

const header = Buffer.alloc(8);
header.writeUInt32LE(landKept.length, 0);
header.writeUInt32LE(ocean.length, 4);

const body = Buffer.alloc((landKept.length + ocean.length) * 3);
let o = 0;
for (const p of landKept) { body.writeInt8(p[0], o++); body.writeInt8(p[1], o++); body.writeInt8(p[2], o++); }
for (const p of ocean) { body.writeInt8(p[0], o++); body.writeInt8(p[1], o++); body.writeInt8(p[2], o++); }

fs.writeFileSync(OUT, Buffer.concat([header, body]));
console.log(`globe.bin written: ${landKept.length} land + ${ocean.length} ocean points, ${(8 + body.length) / 1024 | 0} KB`);
