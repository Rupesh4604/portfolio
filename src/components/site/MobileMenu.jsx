import { useRef } from "react";
import { createPortal } from "react-dom";
import SiteLink from "./SiteLink.jsx";
import { CloseIcon, MoonIcon, SunIcon } from "./Icons.jsx";
import useFocusTrap from "../../hooks/useFocusTrap.js";
import useTheme from "../../hooks/useTheme.js";
import useIsCurrent from "../../hooks/useIsCurrent.js";
import { site, nav, links } from "../../data/siteData.js";

const items = [{ to: "/", label: "Home" }, ...nav];

// Full-screen compact menu. A = cream + serif items, D = teal + Geist 600 items,
// C (Glass in a narrow window or on a tablet) = frosted dark sheet + Geist 500 items.
export default function MobileMenu({ open, variant, onClose }) {
  const panel = useRef(null);
  const closeBtn = useRef(null);
  const isCurrent = useIsCurrent();
  const { dark, toggle } = useTheme();
  useFocusTrap(panel, open, onClose, closeBtn);

  if (!open) return null;
  const bold = variant === "D";
  const glass = variant === "C";
  const line = bold ? "border-[rgba(6,32,30,.18)]" : glass ? "border-white/10" : "border-[#E4E4DF]";

  return createPortal(
    <div
      ref={panel}
      id="site-menu"
      aria-label="Main menu"
      role="dialog"
      aria-modal="true"
      className={`fixed inset-0 z-50 flex flex-col overflow-y-auto ${
        bold
          ? "bg-[#4FB3A9] text-[#06201E]"
          : glass
            ? "bg-[rgba(10,13,16,.9)] text-[#ECEDEA] backdrop-blur-[22px] backdrop-saturate-[1.4]"
            : "bg-[#F7F7F4] text-[#111418]"
      }`}
      style={{ animation: "menu-in .3s var(--ease-out)" }}
    >
      <div className="flex h-[60px] shrink-0 items-center justify-between pl-5 pr-4">
        <span className="font-medium">{site.name}</span>
        <span className="flex items-center gap-2">
        <button
          type="button"
          onClick={toggle}
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border ${
            bold ? "border-[rgba(6,32,30,.3)]" : glass ? "border-white/10 bg-white/5" : "border-[#E4E4DF]"
          }`}
        >
          {dark ? <SunIcon size={20} /> : <MoonIcon size={20} />}
        </button>
        <button
          ref={closeBtn}
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border ${
            bold ? "border-[rgba(6,32,30,.3)]" : glass ? "border-white/10 bg-white/5" : "border-[#E4E4DF]"
          }`}
        >
          <CloseIcon size={22} />
        </button>
        </span>
      </div>

      <nav aria-label="Main">
      <ul className={`mt-4 border-t ${line}`}>
        {items.map((it, n) => {
          const cur = isCurrent(it.to);
          return (
            <li key={it.label} className={`border-b ${line}`}>
              <SiteLink
                to={it.to}
                onClick={onClose}
                aria-current={cur ? "page" : undefined}
                className={`flex min-h-16 items-center gap-3.5 px-[22px] leading-none ${
                  bold
                    ? "text-[38px] font-semibold tracking-[-1.6px]"
                    : glass
                      ? `text-[36px] font-medium tracking-[-0.03em] ${cur ? "text-[#7FD1C6]" : ""}`
                      : `font-display text-[36px] ${cur ? "text-[#0E6B66]" : ""}`
                }`}
                style={{ animation: `menu-in .4s var(--ease-out) ${40 + n * 35}ms both` }}
              >
                <span
                  aria-hidden="true"
                  className={`h-2 w-2 rounded-full bg-current ${cur ? "opacity-100" : "opacity-0"}`}
                />
                {it.label}
              </SiteLink>
            </li>
          );
        })}
      </ul>
      </nav>

      <div className="mt-auto px-[22px] pb-10 pt-8 text-base leading-[2.5]">
        <SiteLink to={links.github} className="block">GitHub</SiteLink>
        <SiteLink to={links.scholar} className="block">Google Scholar</SiteLink>
        <SiteLink to={site.cv} className="block">Download CV</SiteLink>
      </div>
    </div>,
    document.body
  );
}
