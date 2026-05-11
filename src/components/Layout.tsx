import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/definition", label: "What Is Social Media?" },
  { to: "/comparison", label: "Old vs. New" },
  { to: "/cause-effect", label: "Mental Health Impact" },
  { to: "/works-cited", label: "Works Cited" },
];

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <NavLink to="/" className="text-lg font-bold tracking-tight">
            <span className="gradient-text">Social Media</span>
          </NavLink>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-indigo-600/20 text-indigo-300"
                        : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-slate-200 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-slate-800/60 bg-slate-950/95 backdrop-blur-xl md:hidden">
            <ul className="space-y-1 px-4 py-3">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                        isActive
                          ? "bg-indigo-600/20 text-indigo-300"
                          : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Main content */}
      <main className="pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/60 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-sm text-slate-500">
              Andrew Trainor · ENGL 1301-088 · Spring 2026 · Professor Salman · Collin College
            </p>
            <p className="text-xs text-slate-600">
              Created as a multi-modal digital text for Essay #4
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
