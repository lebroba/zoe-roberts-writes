import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import { ENABLED_LANGUAGES } from "./content/site";

/**
 * supportedLngs derives from ENABLED_LANGUAGES rather than listing all five
 * languages. Previously a browser set to Spanish would be detected as "es" and
 * i18next would request a translation file — so enabling a language is now a
 * single edit in content/site.ts, and disabled ones cannot be reached by
 * detection or by a ?lng= query string.
 *
 * Language still drives the localised book covers and regional Amazon lockups,
 * which is why the machinery stays in place for an English-only launch.
 */
i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: [...ENABLED_LANGUAGES],
    nonExplicitSupportedLngs: true,
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    detection: {
      order: ["querystring", "localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
