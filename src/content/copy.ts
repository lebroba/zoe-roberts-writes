/**
 * Page copy. Kept out of components so the whole site's wording can be read,
 * edited, and eventually translated from one place.
 */

/** Home — "Written for the grown-up holding the book". */
export const AUDIENCES = [
  {
    title: "Parents",
    body: "For the kid who says “I’m just bad at maths” and means it. Short exercises you can do together at the kitchen table.",
  },
  {
    title: "Teachers",
    body: "Activity pages that work as a warm-up, a quiet-time task, or a whole lesson on effort and feedback.",
  },
  {
    title: "Counselors",
    body: "Plain-language framing of fixed and growth mindset that a nine-year-old can talk about without feeling diagnosed.",
  },
] as const;

/** Free guide — what's in the journal. */
export const JOURNAL_CONTENTS = [
  "A daily power-level meter — how full is the tank today?",
  "One thing to be grateful for",
  "An affirmation in their own words",
  "Today’s goals, small enough to finish",
  "What felt hard, and what they learned from it",
  "Who they helped",
] as const;

/** Free guide — the "page one, at a glance" preview panels. */
export const JOURNAL_PANELS = [
  "My power level today",
  "I am grateful for…",
  "My affirmation",
  "What are my goals for today?",
  "What did I learn?",
  "Who did I help?",
] as const;

/** About — the "In short" fact list. Every item is drawn from Zoe's own bio. */
export const ABOUT_FACTS = [
  "Born and raised in the suburbs of the Nation’s Capital",
  "A background in business leadership and people development",
  "Widowed young, and an instant single mother",
  "Writes on well-being, resilience and multicultural themes",
  "Nature walks, travel, and time with family",
] as const;

/** About — the pull quote, drawn verbatim from the final paragraph of her bio. */
export const ABOUT_QUOTE =
  "Like her son, Zoe wants every child to reach for the stars, no matter the obstacles they face.";

/** Home — the "From Zoe" band pull quote, from her own bio. */
export const ZOE_QUOTE =
  "Our potential is limitless. We just need to be guided by hope and determination.";

export const ZOE_FACTS_LINE =
  "Washington, D.C. suburbs · business leadership · a lifelong habit of learning";

/** Contact — why people write in. */
export const CONTACT_REASONS = [
  {
    title: "School and classroom visits",
    body: "In person or over video, for years three through six.",
  },
  {
    title: "Media and interviews",
    body: "Growth mindset, post-traumatic growth, writing for tweens.",
  },
  {
    title: "Speaking",
    body: "Parent evenings, staff training, and community groups.",
  },
] as const;

export const CONTACT_SUBJECTS = [
  "A school or classroom visit",
  "Media or an interview",
  "Speaking",
  "A note about the book",
  "Something else",
] as const;
