import { useCallback, useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { HelmetProvider } from "react-helmet-async";

import SiteHeader from "./components/site/SiteHeader.jsx";
import SiteFooter from "./components/site/SiteFooter.jsx";
import MobileMenu from "./components/site/MobileMenu.jsx";
import GlowBackground from "./components/site/GlowBackground.jsx";
import CommandPalette from "./components/site/CommandPalette.jsx";
import useVariant from "./hooks/useVariant.js";

import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Experience from "./pages/Experience.jsx";
import Publications from "./pages/Publications.jsx";
import Beyond from "./pages/Beyond.jsx";
import OpenSourceEnv from "./pages/OpenSourceEnv.jsx";
import NotFound from "./pages/NotFound.jsx";
import Contact from "./pages/Contact.jsx";


function Shell() {
  const { variant, isPhone } = useVariant();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const [searchOpen, setSearchOpen] = useState(false);
  const openSearch = useCallback(() => setSearchOpen(true), []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  // Global shortcuts: ⌘K / Ctrl+K toggles search; "/" opens it unless typing.
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((o) => !o);
        return;
      }
      const t = e.target;
      const typing = t instanceof HTMLElement && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName));
      if (e.key === "/" && !typing && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Leaving phone width closes the sheet.
  useEffect(() => {
    if (!isPhone) setMenuOpen(false);
  }, [isPhone]);

  return (
    <div className="relative min-h-screen bg-bg text-ink">
      {variant === "C" && <GlowBackground />}
      <a
        href="#main"
        className="sr-only z-[60] rounded-btn bg-ink px-4 py-2 text-bg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <div className="relative z-[1]">
        <SiteHeader ref={menuButton} menuOpen={menuOpen} onMenu={() => setMenuOpen(true)} onSearch={openSearch} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/beyond" element={<Beyond />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/open-source-env" element={<OpenSourceEnv />} />
          {/* Legacy URLs → consolidated Experience page */}
          <Route path="/internships" element={<Navigate to="/experience" replace />} />
          <Route path="/achievements" element={<Navigate to="/experience" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <SiteFooter />
      </div>
      {isPhone && <MobileMenu open={menuOpen} variant={variant} onClose={closeMenu} />}
      <CommandPalette open={searchOpen} onClose={closeSearch} />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Shell />
        <SpeedInsights />
      </Router>
    </HelmetProvider>
  );
}
