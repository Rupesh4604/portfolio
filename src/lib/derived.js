// Facts computed from src/data so nothing numeric is hand-written in the UI.
import { publications } from "../data/publicationsData.js";
import { work } from "../data/internshipData.js";
import { education } from "../data/educationData.js";
import { beyondLinks } from "../data/beyondData.js";

const numWords = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
export const countWord = (n) => numWords[n] ?? String(n);

const years = publications.map((p) => Number(p.year)).filter(Boolean);
export const paperCount = publications.length;
export const paperYears =
  years.length === 0
    ? ""
    : Math.min(...years) === Math.max(...years)
      ? String(years[0])
      : `${Math.min(...years)} to ${Math.max(...years)}`;

const journals = publications.filter((p) => /journal/i.test(p.status)).length;
const conferences = publications.filter((p) => /conference/i.test(p.status)).length;
const plural = (n, word) => `${n} ${word}${n === 1 ? "" : "s"}`;
export const paperSplit = [
  journals && plural(journals, "journal article"),
  conferences && plural(conferences, "conference paper"),
]
  .filter(Boolean)
  .join(", ");

// Short venue name: text before the first comma, without a trailing "(Publisher)".
export const venueShort = (v = "") => v.split(",")[0].replace(/\s*\([^)]*\)\s*$/, "").trim();

// "Esri R&D Center - GeoAI" -> "Esri R&D"
export const currentRole = work[0]
  ? {
      role: work[0].role,
      org: work[0].organization.replace(/\s+Center\b.*$/, "").replace(/\s+-\s+.*$/, ""),
      orgFull: work[0].organization,
      since: work[0].duration.split(/\s+-\s+/)[0],
    }
  : null;

export const latestDegree = education[0];

export const credentials = [
  currentRole?.org,
  latestDegree && `${latestDegree.degreeShort}, ${latestDegree.short}`,
  ...[...new Set(publications.map((p) => venueShort(p.venue)))],
].filter(Boolean);

export const blog = beyondLinks.find((l) => l.category === "Writing");
export const paperCollections = beyondLinks.filter((l) => l.category === "Research");
