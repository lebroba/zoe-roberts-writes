import React from "react";
import { Link } from "react-router-dom";
import { NAV_ITEMS } from "./Navbar";
import LanguageSwitcher from "./LanguageSwitcher";
import { SITE } from "@/content/site";

/**
 * No social icons. They return when SOCIAL in content/site.ts holds real URLs —
 * the generated footer linked to the platform homepages instead.
 */
const Footer: React.FC = () => (
  <footer
    className="mt-[clamp(40px,6vw,80px)] bg-neutral-900 text-neutral-300"
    style={{ padding: "clamp(48px,6vw,72px) 0 clamp(28px,3vw,40px)" }}
  >
    <div className="shell">
      <div className="auto-grid gap-10">
        <div>
          <p className="font-heading text-[26px] text-neutral-100">{SITE.name}</p>
          <p className="mt-2 max-w-[28ch] text-base">Growth mindset books for tweens and teens.</p>
        </div>

        <nav aria-label="Footer">
          <p className="eyebrow text-neutral-500">Pages</p>
          <ul className="mt-3 space-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="text-base transition-colors hover:text-accent-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow text-neutral-500">The free journal</p>
          <p className="mt-3 max-w-[30ch] text-base">
            Three printable pages, sent straight to your inbox.
          </p>
          <Link to="/free-guide" className="btn-primary btn-md mt-4">
            Get it free
          </Link>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-800 pt-6 text-sm text-neutral-500">
        <p>
          &copy; 2026 {SITE.name} · {SITE.domain}
        </p>
        {/* Renders nothing while only English is enabled. Lives here rather than
            in the header so it never competes with the Free journal CTA. */}
        <LanguageSwitcher />
      </div>
    </div>
  </footer>
);

export default Footer;
