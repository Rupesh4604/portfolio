// Build BibTeX entries from publicationsData entries.

const clean = (s = "") => s.replace(/\s*\(co-author\)\s*/gi, "").trim();

// Shown as written in the data, including the "(co-author)" marker.
export function displayAuthors(authors = "") {
  return authors.trim();
}

// A co-authored entry whose list ends in "et al." has an unknown author order,
// so no BibTeX is generated for it until the full list is in the data.
export function hasCitableAuthors(p) {
  return !(/\(co-author\)/i.test(p.authors || "") && /et al\.?/i.test(p.authors || ""));
}

function bibAuthors(authors = "") {
  return clean(authors)
    .replace(/\s+et al\.?$/i, ", others")
    .split(/\s*,\s*/)
    .filter(Boolean)
    .join(" and ");
}

function kind(status = "") {
  if (/journal/i.test(status)) return { type: "article", venueField: "journal" };
  if (/chapter/i.test(status)) return { type: "incollection", venueField: "booktitle" };
  return { type: "inproceedings", venueField: "booktitle" };
}

export function bibKey(p) {
  const first =
    clean(p.authors)
      .replace(/\s+et al\.?$/i, "")
      .split(",")[0]
      .trim()
      .split(/\s+/)
      .pop() || "paper";
  const word = (p.title.match(/[A-Za-z]{4,}/) || ["paper"])[0];
  return `${first}${p.year}${word}`.toLowerCase().replace(/[^a-z0-9]/g, "");
}

export function toBibtex(p) {
  const { type, venueField } = kind(p.status);
  const fields = [
    ["title", `{${p.title}}`],
    ["author", bibAuthors(p.authors)],
    [venueField, p.venue],
    ["year", p.year],
    ["doi", (p.doi || "").replace(/^https?:\/\/(dx\.)?doi\.org\//, "")],
    ["url", p.link || p.doi],
  ].filter(([, v]) => v);
  return `@${type}{${bibKey(p)},\n${fields.map(([k, v]) => `  ${k} = {${v}}`).join(",\n")}\n}`;
}
