import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NAV_ITEMS = [
  { path: "/", label: "Home", end: true },
  { path: "/book", label: "The book", end: false },
  { path: "/free-guide", label: "Free journal", end: false },
  { path: "/about", label: "About", end: false },
  { path: "/contact", label: "Contact", end: false },
];

/**
 * Sticky header.
 *
 * Wraps with flex-wrap rather than collapsing into a hamburger — with five
 * short labels and a single CTA it fits on two lines at 375px, which beats
 * hiding navigation behind a tap.
 */
const Navbar: React.FC = () => (
  <header
    className="sticky top-0 z-20 border-b border-divider backdrop-blur-[10px]"
    style={{ background: "color-mix(in srgb, #f5ead8 92%, transparent)" }}
  >
    <div className="shell flex flex-wrap items-center gap-x-7 gap-y-4 py-3.5">
      <Link to="/" className="flex items-center gap-2.5">
        <img
          src="/images/zr-monogram.png"
          alt=""
          aria-hidden="true"
          className="h-[30px] w-auto"
        />
        <span className="font-heading text-xl text-text">Zoe Roberts</span>
        <span className="sr-only">Zoe Roberts — home</span>
      </Link>

      <nav className="ml-auto flex flex-wrap items-center gap-x-7 gap-y-2" aria-label="Main">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.end}
            className={({ isActive }) =>
              [
                "border-b-2 py-1.5 font-body text-[15px] font-semibold transition-colors",
                // accent-600 rather than the handoff's accent-500: the underline
                // is a state indicator, and accent-500 is 2.52:1 on the ground,
                // under the 3:1 that WCAG 1.4.11 asks of non-text UI.
                isActive
                  ? "border-accent-600 text-accent-700"
                  : "border-transparent text-text hover:text-accent-700",
              ].join(" ")
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <Link to="/free-guide" className="btn-primary btn-md">
        Free journal
      </Link>
    </div>
  </header>
);

export default Navbar;
