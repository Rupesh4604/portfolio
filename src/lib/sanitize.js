import DOMPurify from "dompurify";

// Sanitise rich text from src/data before it is set as HTML.
// DOMPurify needs a browser DOM; during the build-time render (Node) there is none, and the
// input is our own data files, so it is passed through. Every browser render sanitises it.
export const clean = (html = "") => (typeof DOMPurify.sanitize === "function" ? DOMPurify.sanitize(html) : html);
