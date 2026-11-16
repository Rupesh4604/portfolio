import { useCallback, useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { HelmetProvider } from "react-helmet-async";

import SiteHeader from "./components/site/SiteHeader.jsx";
import SiteFooter from "./components/site/SiteFooter.jsx";
import MobileMenu from "./components/site/MobileMenu.jsx";
import GlowBackground from "./components/site/GlowBackground.jsx";
import Page from "./components/site/Page.jsx";
import useVariant from "./hooks/useVariant.js";

import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Experience from "./pages/Experience.jsx";
import Publications from "./pages/Publications.jsx";
import Beyond from "./pages/Beyond.jsx";
import OpenSourceEnv from "./pages/OpenSourceEnv.jsx";
import NotFound from "./pages/NotFound.jsx";

// Pages below are rebuilt in steps 2–4; until then they keep the old container.
const legacy = (el) => <Page legacy>{el}</Page>;

function Shell() {
  const { variant, isPhone } = useVariant();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  // CommandPalette arrives in build step 4; the buttons are wired to this handler.
  const openSearch = useCallback(() => {}, []);

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
          <Route path="/beyond" element={legacy(<Beyond />)} />
          <Route path="/open-source-env" element={legacy(<OpenSourceEnv />)} />
          {/* Legacy URLs → consolidated Experience page */}
          <Route path="/internships" element={<Navigate to="/experience" replace />} />
          <Route path="/achievements" element={<Navigate to="/experience" replace />} />
          <Route path="*" element={legacy(<NotFound />)} />
        </Routes>
        <SiteFooter />
      </div>
      {isPhone && <MobileMenu open={menuOpen} variant={variant} onClose={closeMenu} />}
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
