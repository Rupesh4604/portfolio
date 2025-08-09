import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/navbar.jsx';
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Internships from "./pages/Internships.jsx";
import Publications from "./pages/Publications.jsx";
import Achievements from "./pages/Achievements.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
    </Router>
  );
}

export default App;