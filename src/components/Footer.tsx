import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail } from "lucide-react";
import { CONTACT_EMAIL, SITE, SOCIAL } from "@/content/site";

const QUICK_LINKS = [
  { path: "/", label: "Home" },
  { path: "/book", label: "The Book" },
  { path: "/free-guide", label: "Free Guide" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  // Only render icons for profiles we actually have. The generated footer
  // linked to facebook.com and twitter.com — the platform homepages.
  const socials = [
    { key: "facebook", href: SOCIAL.facebook, Icon: Facebook, label: "Facebook" },
    { key: "instagram", href: SOCIAL.instagram, Icon: Instagram, label: "Instagram" },
  ].filter((s): s is typeof s & { href: string } => Boolean(s.href));

  return (
    <footer className="mt-auto bg-ink py-12 text-white">
      <div className="container">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="font-display text-lg font-extrabold text-white">{SITE.name}</h2>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
              {SITE.tagline}. Helping tweens and teens build confidence, resilience, and a
              growth mindset.
            </p>

            {(socials.length > 0 || CONTACT_EMAIL) && (
              <div className="mt-4 flex gap-3">
                {socials.map(({ key, href, Icon, label }) => (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 transition hover:text-sunshine"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </a>
                ))}
                {CONTACT_EMAIL && (
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-white/70 transition hover:text-sunshine"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                )}
              </div>
            )}
          </div>

          <nav aria-label="Footer">
            <h2 className="font-display text-lg font-extrabold text-white">Quick Links</h2>
            <ul className="mt-3 space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 transition hover:text-sunshine"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-lg font-extrabold text-white">Free Daily Journal</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Three printable pages to help your child track their progress and turn setbacks
              into momentum.
            </p>
            <Link
              to="/free-guide"
              className="mt-4 inline-flex rounded-lg bg-sunshine px-4 py-2 font-display text-sm font-bold text-ink transition hover:brightness-95"
            >
              Get it free
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-center text-sm text-white/50">
          <p>
            &copy; {year} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
