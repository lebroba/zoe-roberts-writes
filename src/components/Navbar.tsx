import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

const NAV_ITEMS = [
  { path: "/", label: "Home", end: true },
  { path: "/book", label: "The Book", end: false },
  { path: "/free-guide", label: "Free Guide", end: false },
  { path: "/about", label: "About", end: false },
  { path: "/contact", label: "Contact", end: false },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-paper/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link
          to="/"
          className="font-display text-xl font-extrabold tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          Zoe Roberts
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.path} to={item.path} end={item.end} className="nav-link">
              {item.label}
            </NavLink>
          ))}
          <LanguageSwitcher />
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded p-2 text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div id="mobile-nav" className={open ? "border-t border-border md:hidden" : "hidden"}>
        <nav className="container flex flex-col py-3" aria-label="Main">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              onClick={() => setOpen(false)}
              className="py-2.5 font-semibold text-ink/80 hover:text-ink"
            >
              {item.label}
            </NavLink>
          ))}
          <div className="pt-2">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
