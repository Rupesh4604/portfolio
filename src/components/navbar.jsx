import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const linkClasses = "text-gray-700 hover:text-blue-600 hover:underline transition-colors px-3 py-2 rounded-md text-sm font-medium";
  const activeLinkClasses = "text-blue-600 font-bold";

  return (
    <header className="bg-white/90 sticky top-0 z-50 backdrop-blur-lg shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold text-gray-800">
          Rupesh
        </NavLink>
        <div className="space-x-4">
          <NavLink to="/" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ""}`}>Home</NavLink>
          <NavLink to="/projects" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ""}`}>Projects</NavLink>
          <NavLink to="/internships" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ""}`}>Internships</NavLink>
          <NavLink to="/publications" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ""}`}>Publications</NavLink>
          <NavLink to="/achievements" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ""}`}>Achievements</NavLink>
        </div>
      </nav>
    </header>
  );
}