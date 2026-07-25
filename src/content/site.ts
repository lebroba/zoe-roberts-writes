/**
 * Site-wide configuration. Single source of truth for anything that appears
 * in more than one place, or that we do not yet have a real value for.
 *
 * Rule for this file: never invent a value to fill a gap. If something is
 * unknown, leave it null and let the UI omit it. A placeholder phone number
 * or a link to facebook.com is worse than no link at all.
 */

export const SITE = {
  name: "Zoe Roberts",
  domain: "zoesbooks.com",
  url: "https://zoesbooks.com",
  tagline: "Growth mindset books for tweens and teens",
} as const;

/**
 * Contact email. Null until Zoe confirms the real address — the previous
 * value (contact@zoeroberts.com) was on a domain she does not own.
 */
export const CONTACT_EMAIL: string | null = null;

/**
 * Social profiles. Null entries are omitted from the UI entirely rather than
 * linking to a bare platform homepage, which is what the generated site did.
 */
export const SOCIAL: Record<"facebook" | "instagram" | "x", string | null> = {
  facebook: null,
  instagram: null,
  x: null,
};

/**
 * Languages the switcher will offer. Translation files for es/fr/it/pt exist
 * and remain wired, but they translate the previous (fabricated) copy, so they
 * stay off until reviewed translations of the new copy land.
 *
 * Enabling a language is this one line plus a reviewed translation.json.
 */
export const ENABLED_LANGUAGES = ["en"] as const;

export const ALL_LANGUAGES = ["en", "es", "fr", "it", "pt"] as const;

export type Language = (typeof ALL_LANGUAGES)[number];

/**
 * Form integrations. Both post directly from the browser to endpoints designed
 * for public HTML forms, so no API keys ship in the bundle.
 *
 * Unset means the corresponding form renders disabled with a visible notice.
 * It never pretends to succeed.
 */
export const KIT_FORM_ID: string = import.meta.env.VITE_KIT_FORM_ID ?? "";
export const FORMSPREE_ID: string = import.meta.env.VITE_FORMSPREE_ID ?? "";

export const KIT_ENDPOINT = KIT_FORM_ID
  ? `https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`
  : null;

export const FORMSPREE_ENDPOINT = FORMSPREE_ID
  ? `https://formspree.io/f/${FORMSPREE_ID}`
  : null;

/**
 * Shows or hides the mindset quiz on the home page. The quiz always appears on
 * /free-guide. Set false to pull it from the home page if it doesn't earn its
 * place there.
 */
export const SHOW_QUIZ_ON_HOME = true;

/** The lead magnet, delivered by Kit's automation rather than hosted here. */
export const LEAD_MAGNET = {
  name: "My Daily Journal",
  description:
    "Three printable journal pages to help your child track their daily power level, set goals, and turn setbacks into progress.",
  pageCount: 3,
} as const;
