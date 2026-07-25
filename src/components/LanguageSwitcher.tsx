import React from "react";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ENABLED_LANGUAGES } from "@/content/site";

const LABELS: Record<string, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  it: "Italiano",
  pt: "Português",
};

/**
 * Language switcher.
 *
 * Hides itself entirely when only one language is enabled, so the launch build
 * shows no switcher rather than a dropdown with a single option. The es/fr/it/pt
 * infrastructure stays wired; enabling a language is one line in content/site.ts
 * once a reviewed translation of the new copy exists.
 *
 * Uses a native select rather than the Radix dropdown it replaced: keyboard and
 * screen-reader behaviour comes free, and it drops a dependency.
 */
const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  if (ENABLED_LANGUAGES.length < 2) return null;

  const current = i18n.language?.split("-")[0] ?? "en";

  return (
    <div className="flex items-center gap-1.5">
      <Globe className="h-4 w-4 text-slate" aria-hidden="true" />
      <label className="sr-only" htmlFor="language-select">
        Language
      </label>
      <select
        id="language-select"
        value={current}
        onChange={(e) => void i18n.changeLanguage(e.target.value)}
        className="rounded border border-border bg-white px-2 py-1 text-sm font-medium text-ink outline-none focus:ring-2 focus:ring-sunshine"
      >
        {ENABLED_LANGUAGES.map((lng) => (
          <option key={lng} value={lng}>
            {LABELS[lng] ?? lng}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
