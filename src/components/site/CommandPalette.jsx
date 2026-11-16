import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { projects } from "../../data/projectsData";
import { publications } from "../../data/publicationsData";
import { site, nav, links } from "../../data/siteData";
import { articles, venueShort } from "../../lib/derived";
import { slugify } from "../../lib/slug";
import useFocusTrap from "../../hooks/useFocusTrap";
import { SearchIcon } from "./Icons.jsx";

const isExternal = (to) => /^(https?:|mailto:)/.test(to) || to.endsWith(".pdf");

// Everything searchable, grouped. Built once from src/data.
const ITEMS = [
  ...[{ to: "/", label: "Home" }, ...nav].map((n) => ({ group: "Pages", label: n.label, to: n.to, hint: "Page" })),
  ...projects.map((p) => ({ group: "Projects", label: p.title, to: `/projects#${slugify(p.title)}`, hint: p.year || "Project" })),
  ...publications.map((p) => ({
    group: "Research",
    label: p.title,
    to: p.link || p.doi || "/publications",
    hint: `${venueShort(p.venue)}, ${p.year}`,
    keywords: p.venue,
  })),
  ...articles.map((p) => ({ group: "Writing", label: p.title, to: p.url, hint: "Post ↗", keywords: p.tags.join(" ") })),
  { group: "Links", label: "GitHub", to: links.github, hint: "↗" },
  { group: "Links", label: "Google Scholar", to: links.scholar, hint: "↗" },
  { group: "Links", label: "LinkedIn", to: links.linkedin, hint: "↗" },
  { group: "Links", label: "ORCID", to: links.orcid, hint: "↗" },
  { group: "Links", label: "Download CV", to: site.cv, hint: "PDF" },
  { group: "Links", label: "Email", to: links.email, hint: site.email },
].map((it, id) => ({ ...it, id: `cmd-${id}` }));

export default function CommandPalette({ open, onClose }) {
  const navigate = useNavigate();
  const panel = useRef(null);
  const input = useRef(null);
  const list = useRef(null);
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  useFocusTrap(panel, open, onClose, input);

  // Reset every time it opens.
  useEffect(() => {
    if (open) {
      setQ("");
      setActive(0);
    }
  }, [open]);

  const hits = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return ITEMS;
    return ITEMS.filter((it) =>
      [it.label, it.group, it.hint, it.keywords].join(" ").toLowerCase().includes(needle)
    );
  }, [q]);

  const idx = Math.min(active, Math.max(hits.length - 1, 0));

  useEffect(() => {
    list.current?.querySelector(`[data-idx="${idx}"]`)?.scrollIntoView({ block: "nearest" });
  }, [idx]);

  if (!open) return null;

  const go = (it) => {
    onClose();
    if (isExternal(it.to)) {
      if (it.to.startsWith("mailto:") || it.to.endsWith(".pdf")) window.location.href = it.to;
      else window.open(it.to, "_blank", "noopener,noreferrer");
    } else {
      navigate(it.to);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive(Math.min(idx + 1, hits.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive(Math.max(idx - 1, 0));
    } else if (e.key === "Enter" && hits[idx]) {
      e.preventDefault();
      go(hits[idx]);
    }
  };

  const groups = [];
  hits.forEach((it, i) => {
    let g = groups.find((x) => x.name === it.group);
    if (!g) groups.push((g = { name: it.group, items: [] }));
    g.items.push({ ...it, i });
  });

  return createPortal(
    <div className="kov" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div ref={panel} className="kp" role="dialog" aria-modal="true" aria-label="Search the site">
        <div className="kin">
          <SearchIcon size={18} stroke={1.8} />
          <label htmlFor="cmd-q" className="sr-only">Search the site</label>
          <input
            ref={input}
            id="cmd-q"
            type="text"
            autoComplete="off"
            spellCheck="false"
            placeholder="Search pages, projects, papers…"
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setActive(0);
            }}
            onKeyDown={onKeyDown}
            role="combobox"
            aria-expanded="true"
            aria-controls="cmd-list"
            aria-activedescendant={hits[idx]?.id}
          />
          <button type="button" className="kesc" onClick={onClose}>esc</button>
        </div>
        <div ref={list} id="cmd-list" role="listbox" aria-label="Results" className="kl">
          {groups.map((g) => (
            <div key={g.name} role="group" aria-labelledby={`cmd-g-${g.name}`}>
              <div id={`cmd-g-${g.name}`} className="kg">{g.name}</div>
              {g.items.map((it) => (
                <div
                  key={it.id}
                  id={it.id}
                  role="option"
                  aria-selected={it.i === idx}
                  data-idx={it.i}
                  className={`ki ${it.i === idx ? "on" : ""}`}
                  onMouseMove={() => it.i !== idx && setActive(it.i)}
                  onClick={() => go(it)}
                >
                  <span className="truncate">{it.label}</span>
                  <span className="kh">{it.hint}</span>
                </div>
              ))}
            </div>
          ))}
          {hits.length === 0 && (
            <div className="px-3 py-7 text-center text-[15px] text-mu" role="status">
              No results for “{q}”
            </div>
          )}
        </div>
        <div className="kft" aria-hidden="true">
          <span><kbd>↑</kbd><kbd>↓</kbd>move</span>
          <span><kbd>↵</kbd>open</span>
          <span><kbd>esc</kbd>close</span>
        </div>
      </div>
    </div>,
    document.body
  );
}
