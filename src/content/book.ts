import type { Language } from "./site";

export type BookFormat = "paperback" | "kindle";

export interface Edition {
  format: BookFormat;
  /** Amazon ASIN. Null means the edition is omitted from the UI. */
  asin: string | null;
}

export interface Book {
  id: string;
  title: string;
  subtitle: string;
  /** Short line for cards and the hero. */
  blurb: string;
  /** Full Amazon-style description, paragraph per entry. */
  description: string[];
  /** Bulleted "inside this book" points. */
  highlights: string[];
  publishYear: string;
  ageRange: string;
  category: string;
  editions: Edition[];
  coverImages: Partial<Record<Language, string>>;
  defaultCover: string;
}

export const BOOK: Book = {
  id: "power-up-your-mind",
  title: "Power-Up Your Mind",
  subtitle: "Growth Mindset Strategies and Activities for Tweens",
  blurb:
    "An empowering guide that helps tweens build confidence, take on challenges, and turn “I can't” into “I haven't yet.”",
  description: [
    "Are you a tween struggling with a fixed mindset? Have you always wanted the confidence to learn new skills, set and achieve your goals, and believe in your abilities?",
    "Power-Up Your Mind is an empowering guide that takes you on a journey to unleashing the superhero inside your mind. You'll learn that every misstep is just a stepping stone on your path to greatness — tackling challenges gracefully, boosting your confidence, and transforming “I can't” into “I just haven't yet.”",
    "It's time to turn your fears into determination. Packed with fun, simple exercises and effective tips, this book will help you transform every setback into a comeback.",
  ],
  highlights: [
    "A complete introduction to the growth mindset, how it differs from a fixed mindset, and fun ways to build your brain muscle",
    "How to embrace the power of making mistakes, own your actions, and celebrate every small win",
    "Practical methods for learning from others, asking for help, and asking better questions",
    "Strategies for setting achievable goals, mastering positive self-talk, and using creativity to find solutions",
    "A bonus chapter of growth mindset vocabulary and games to play with the people you love",
  ],
  publishYear: "2025",
  ageRange: "Ages 8–12",
  category: "Children's self-development",

  editions: [
    // Supplied by Zoe: the Kindle edition of the current listing.
    { format: "kindle", asin: "B0FG1YLHSC" },
    // A paperback exists; ASIN still to come. Omitted from the UI until then
    // rather than rendering a button that goes nowhere.
    { format: "paperback", asin: null },
  ],

  coverImages: {
    en: "/book-covers/en/power-up-your-mind.png",
    es: "/book-covers/es/power-up-your-mind.png",
    fr: "/book-covers/fr/power-up-your-mind.png",
    it: "/book-covers/it/power-up-your-mind.png",
    pt: "/book-covers/pt/power-up-your-mind.png",
  },
  defaultCover: "/book-covers/en/power-up-your-mind.png",
};

/** Editions we actually have a link for. */
export const availableEditions = (): Edition[] =>
  BOOK.editions.filter((e): e is Edition & { asin: string } => e.asin !== null);

/**
 * Canonical Amazon product URL. The link Zoe supplied was a sponsored search
 * result carrying session and referral tokens that expire; /dp/<asin> is stable.
 */
export const amazonUrl = (asin: string): string => `https://www.amazon.com/dp/${asin}`;

export const FORMAT_LABELS: Record<BookFormat, string> = {
  paperback: "Paperback",
  kindle: "Kindle",
};
