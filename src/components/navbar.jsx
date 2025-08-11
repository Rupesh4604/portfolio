import { NavLink } from "react-router-dom";

const linkBase =
  "px-3 py-2 rounded-lg text-sm font-medium transition-colors";
const linkIdle = "text-slate-600 hover:text-slate-900 hover:bg-slate-100";
const linkActive = "text-slate-900 bg-slate-100";

export default function Navbar() {
  const nav = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/internships", label: "Internships" },
    { to: "/publications", label: "Publications" },
    { to: "/achievements", label: "Achievements" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <nav className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <span className="text-slate-900 font-semibold">Rupesh</span>
        <ul className="flex items-center gap-1">
          {nav.map((n) => (
            <li key={n.to}>
              <NavLink
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : linkIdle}`
                }
              >
                {n.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
