/**
 * Mindset check.
 *
 * Questions address the parent about their child. The original component asked
 * the reader about themselves, which was the wrong frame — the reader is ten,
 * but the person taking this is the adult deciding whether to buy.
 *
 * Option order alternates deliberately so the growth answer is not always first.
 */

export type Answer = "growth" | "fixed";
export type ResultType = "growth" | "fixed" | "mixed";

export interface Question {
  id: string;
  question: string;
  options: { value: Answer; label: string }[];
}

export const QUESTIONS: Question[] = [
  {
    id: "q1",
    question: "When your child faces a challenging task, they usually:",
    options: [
      { value: "growth", label: "Get excited by the chance to learn something new" },
      { value: "fixed", label: "Worry about whether they’ll be able to do it well" },
    ],
  },
  {
    id: "q2",
    question: "When they get feedback or criticism, they typically:",
    options: [
      { value: "fixed", label: "Take it personally and feel discouraged" },
      { value: "growth", label: "Treat it as something useful to work with" },
    ],
  },
  {
    id: "q3",
    question: "When they meet someone more skilled than they are, they tend to:",
    options: [
      { value: "growth", label: "Feel inspired and look for something to copy" },
      { value: "fixed", label: "Feel threatened or shrink away from it" },
    ],
  },
  {
    id: "q4",
    question: "After making a mistake, they usually:",
    options: [
      { value: "fixed", label: "Try to hide it, or explain it away" },
      { value: "growth", label: "Talk about it and try again" },
    ],
  },
  {
    id: "q5",
    question: "When learning something new, they believe:",
    options: [
      { value: "growth", label: "Ability grows with practice and effort" },
      { value: "fixed", label: "You’re either naturally good at it or you’re not" },
    ],
  },
];

export const RESULTS: Record<ResultType, { title: string; body: string; next: string }> = {
  growth: {
    title: "Mostly growth mindset",
    body: "They already believe effort changes outcomes — that belief is what makes hard things survivable. The work now is protecting it when something genuinely difficult comes along.",
    next: "Use the journal’s “what felt hard” prompt to keep the habit visible.",
  },
  mixed: {
    title: "A mix of both",
    body: "Confident in some corners, closed in others. That is the most common result, and the most workable one — the fixed patches are usually attached to one subject or one bad memory.",
    next: "Start with the goals and affirmation prompts, and watch which subjects they avoid.",
  },
  fixed: {
    title: "Leaning fixed",
    body: "Right now they read ability as something you either have or don’t. That is a belief, not a personality, and it moves — usually faster than adults expect.",
    next: "Begin with the daily power-level meter. Small, visible, and hard to argue with.",
  },
};

export function score(answers: Answer[]): ResultType {
  const growth = answers.filter((a) => a === "growth").length;
  const fixed = answers.filter((a) => a === "fixed").length;
  if (growth >= 4) return "growth";
  if (fixed >= 4) return "fixed";
  return "mixed";
}
