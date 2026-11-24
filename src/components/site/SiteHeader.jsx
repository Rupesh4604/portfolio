import { forwardRef } from "react";
import { Link } from "react-router-dom";
import SiteLink from "./SiteLink.jsx";
import { SearchIcon, MoonIcon, SunIcon, MenuIcon } from "./Icons.jsx";
import useVariant from "../../hooks/useVariant.js";
import useTheme from "../../hooks/useTheme.js";
import useScrolled from "../../hooks/useScrolled.js";
import useIsCurrent from "../../hooks/useIsCurrent.js";
import { site, nav } from "../../data/siteData.js";

// Show the shortcut the visitor's keyboard actually has.
const isMac =
  typeof navigator !== "undefined" &&
  /Mac|iPhone|iPad/i.test(navigator.userAgentData?.platform || navigator.platform || "");
const shortcut = isMac ? "⌘K" : "Ctrl K";

function ThemeButton({ className }) {
  const { dark, toggle } = useTheme();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className={className}
    >
      {dark ? <SunIcon size={18} /> : <MoonIcon size={19} />}
    </button>
  );
}

function NavLinks({ className, linkClass, currentClass }) {
  const isCurrent = useIsCurrent();
  return nav.map((n) => {
    const cur = isCurrent(n.to);
    return (
      <SiteLink
        key={n.label}
        to={n.to}
        aria-current={cur ? "page" : undefined}
        className={`${className} ${cur ? currentClass : linkClass}`}
      >
        {n.label}
      </SiteLink>
    );
  });
}

/* A · Editorial, tablet/desktop */
function HeaderA({ onSearch }) {
  const ib =
    "inline-flex h-11 w-11 items-center justify-center rounded-full text-i2 transition-colors hover:bg-[#ECECE7] hover:text-ink";
  return (
    <header className="sticky top-0 z-40 border-b border-ln bg-hdr backdrop-blur-[14px]">
      <div className="wrap flex h-[72px] items-center justify-between gap-6">
        <Link to="/" className="display whitespace-nowrap text-[21px] tracking-[-0.01em] text-ink">
          {site.name}
        </Link>
        <nav aria-label="Main" className="flex items-center gap-[clamp(18px,2.6vw,32px)] text-[15px]">
          <NavLinks className="transition-colors" linkClass="text-i2 hover:text-ink" currentClass="text-ink" />
          <span className="ml-1 flex gap-0.5">
            <button type="button" className={ib} aria-label="Search the site" aria-haspopup="dialog" onClick={onSearch}>
              <SearchIcon size={19} />
            </button>
            <ThemeButton className={ib} />
          </span>
        </nav>
      </div>
    </header>
  );
}

/* C · Glass floating pill (dark, not a phone, >=600px wide) */
function HeaderC({ onSearch }) {
  const scrolled = useScrolled(6);
  return (
    <div className="pointer-events-none sticky top-5 z-40 flex justify-center px-4 pt-5">
      <nav
        aria-label="Main"
        className={`pointer-events-auto flex h-[52px] items-center gap-[clamp(18px,2.2vw,28px)] rounded-full border pl-[22px] pr-2.5 text-sm transition-[background-color,border-color,backdrop-filter] duration-300 ${
          scrolled
            ? "border-ln bg-[rgba(18,22,26,.55)] backdrop-blur-[22px] backdrop-saturate-[1.4]"
            : "border-transparent bg-transparent"
        }`}
      >
        <Link to="/" className="inline-flex h-11 items-center font-semibold tracking-[0.02em] text-ink" aria-label={`${site.name}, home`}>
          {site.initials}
        </Link>
        <NavLinks className="inline-flex h-11 items-center transition-colors" linkClass="text-mu hover:text-ink" currentClass="text-white" />
        <span className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={onSearch}
            aria-label="Search the site"
            aria-haspopup="dialog"
            className="inline-flex h-[34px] items-center rounded-full border border-white/10 bg-white/[.07] px-3 text-[13px] text-ink transition-colors hover:border-[rgba(127,209,198,.35)] hover:bg-white/[.13]"
          >
            {shortcut}
          </button>
          <ThemeButton className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-full border border-white/10 bg-white/[.07] text-ink transition-colors hover:border-[rgba(127,209,198,.35)] hover:bg-white/[.13]" />
        </span>
      </nav>
    </div>
  );
}

/* A / D phone bar */
const HeaderPhone = forwardRef(function HeaderPhone({ variant, menuOpen, onMenu, onSearch }, ref) {
  const bold = variant === "D";
  const ib = `inline-flex h-12 w-12 items-center justify-center rounded-xl text-ink ${bold ? "border border-ln" : ""}`;
  return (
    <header className={`sticky top-0 z-40 bg-hdr backdrop-blur-[16px] ${bold ? "" : "border-b border-ln"}`}>
      <div className="flex h-[60px] items-center justify-between pl-5 pr-4">
        <Link
          to="/"
          className={`inline-flex min-h-11 items-center text-ink ${
            bold
              ? "rounded-xl border border-ln px-4 text-base font-medium"
              : variant === "A"
                ? "display text-[20px] tracking-[-0.01em]"
                : "text-base font-medium"
          }`}
        >
          {site.name}
        </Link>
        <span className="flex items-center gap-2">
          <button type="button" onClick={onSearch} aria-label="Search the site" aria-haspopup="dialog" className={ib}>
            <SearchIcon size={20} />
          </button>
          <button
            ref={ref}
            type="button"
            onClick={onMenu}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            className={ib}
          >
            <MenuIcon size={22} />
          </button>
        </span>
      </div>
    </header>
  );
});

const SiteHeader = forwardRef(function SiteHeader({ menuOpen, onMenu, onSearch }, menuButtonRef) {
  const { variant, isPhone } = useVariant();
  if (isPhone) return <HeaderPhone ref={menuButtonRef} variant={variant} menuOpen={menuOpen} onMenu={onMenu} onSearch={onSearch} />;
  if (variant === "C") return <HeaderC onSearch={onSearch} />;
  return <HeaderA onSearch={onSearch} />;
});

export default SiteHeader;
