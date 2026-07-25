/**
 * Mindset check — 20-question bank, 5 drawn per take.
 *
 * Questions address the parent about their child. The reader is ten; the
 * person taking this is the adult deciding whether to buy.
 *
 * Selection is stratified: the bank holds four questions in each of five
 * themes, and one is drawn from each theme. Pure random sampling can hand
 * someone four questions about criticism and score them on nothing else,
 * which would make the growth/fixed/mixed result close to meaningless.
 *
 * Every reference below was checked against the primary source rather than
 * written from memory. The `rationale` on each question describes the
 * construct the item draws on — it does not claim the cited study validated
 * this specific wording, because none of them did. These are plain-language
 * items in the tradition of the implicit-theories literature, not a
 * psychometrically validated instrument, and the UI says so.
 */

export type Answer = "growth" | "fixed";
export type ResultType = "growth" | "fixed" | "mixed";
export type Theme = "challenge" | "effort" | "feedback" | "setbacks" | "others";

export type RefKey =
  | "blackwell2007"
  | "mueller1998"
  | "hong1999"
  | "nussbaum2008"
  | "moser2011"
  | "yeager2012"
  | "rattan2012"
  | "haimovitz2017"
  | "sisk2018"
  | "yeager2019"
  | "dweck2006";

export interface Reference {
  /** Full APA 7 reference. */
  apa: string;
  /** Short form for inline attribution, e.g. "Blackwell et al. (2007)". */
  short: string;
  /** Publisher or record page, for anyone who wants to check it. */
  url: string;
}

export const REFERENCES: Record<RefKey, Reference> = {
  blackwell2007: {
    apa: "Blackwell, L. S., Trzesniewski, K. H., & Dweck, C. S. (2007). Implicit theories of intelligence predict achievement across an adolescent transition: A longitudinal study and an intervention. Child Development, 78(1), 246–263.",
    short: "Blackwell et al. (2007)",
    url: "https://doi.org/10.1111/j.1467-8624.2007.00995.x",
  },
  mueller1998: {
    apa: "Mueller, C. M., & Dweck, C. S. (1998). Praise for intelligence can undermine children's motivation and performance. Journal of Personality and Social Psychology, 75(1), 33–52.",
    short: "Mueller and Dweck (1998)",
    url: "https://pubmed.ncbi.nlm.nih.gov/9686450/",
  },
  hong1999: {
    apa: "Hong, Y., Chiu, C., Dweck, C. S., Lin, D. M.-S., & Wan, W. (1999). Implicit theories, attributions, and coping: A meaning system approach. Journal of Personality and Social Psychology, 77(3), 588–599.",
    short: "Hong et al. (1999)",
    url: "https://doi.org/10.1037/0022-3514.77.3.588",
  },
  nussbaum2008: {
    apa: "Nussbaum, A. D., & Dweck, C. S. (2008). Defensiveness versus remediation: Self-theories and modes of self-esteem maintenance. Personality and Social Psychology Bulletin, 34(5), 599–612.",
    short: "Nussbaum and Dweck (2008)",
    url: "https://doi.org/10.1177/0146167207312960",
  },
  moser2011: {
    apa: "Moser, J. S., Schroder, H. S., Heeter, C., Moran, T. P., & Lee, Y.-H. (2011). Mind your errors: Evidence for a neural mechanism linking growth mind-set to adaptive posterror adjustments. Psychological Science, 22(12), 1484–1489.",
    short: "Moser et al. (2011)",
    url: "https://doi.org/10.1177/0956797611419520",
  },
  yeager2012: {
    apa: "Yeager, D. S., & Dweck, C. S. (2012). Mindsets that promote resilience: When students believe that personal characteristics can be developed. Educational Psychologist, 47(4), 302–314.",
    short: "Yeager and Dweck (2012)",
    url: "https://doi.org/10.1080/00461520.2012.722805",
  },
  rattan2012: {
    apa: "Rattan, A., Good, C., & Dweck, C. S. (2012). “It's ok — Not everyone can be good at math”: Instructors with an entity theory comfort (and demotivate) students. Journal of Experimental Social Psychology, 48(3), 731–737.",
    short: "Rattan et al. (2012)",
    url: "https://doi.org/10.1016/j.jesp.2011.12.012",
  },
  haimovitz2017: {
    apa: "Haimovitz, K., & Dweck, C. S. (2017). The origins of children's growth and fixed mindsets: New research and a new proposal. Child Development, 88(6), 1849–1859.",
    short: "Haimovitz and Dweck (2017)",
    url: "https://doi.org/10.1111/cdev.12955",
  },
  sisk2018: {
    apa: "Sisk, V. F., Burgoyne, A. P., Sun, J., Butler, J. L., & Macnamara, B. N. (2018). To what extent and under which circumstances are growth mind-sets important to academic achievement? Two meta-analyses. Psychological Science, 29(4), 549–571.",
    short: "Sisk et al. (2018)",
    url: "https://doi.org/10.1177/0956797617739704",
  },
  yeager2019: {
    apa: "Yeager, D. S., Hanselman, P., Walton, G. M., Murray, J. S., Crosnoe, R., Muller, C., Tipton, E., Schneider, B., Hulleman, C. S., Hinojosa, C. P., Paunesku, D., Romero, C., Flint, K., Roberts, A., Trott, J., Iachan, R., Buontempo, J., Yang, S. M., Carvalho, C. M., … Dweck, C. S. (2019). A national experiment reveals where a growth mindset improves achievement. Nature, 573(7774), 364–369.",
    short: "Yeager et al. (2019)",
    url: "https://doi.org/10.1038/s41586-019-1466-y",
  },
  dweck2006: {
    apa: "Dweck, C. S. (2006). Mindset: The new psychology of success. Random House.",
    short: "Dweck (2006)",
    url: "https://www.penguinrandomhouse.com/books/44330/mindset-by-carol-s-dweck-phd/",
  },
};

export interface Question {
  id: string;
  theme: Theme;
  question: string;
  options: { value: Answer; label: string }[];
  source: RefKey;
  /** Plain-language note on the construct, shown with the result. */
  rationale: string;
}

export const THEME_LABELS: Record<Theme, string> = {
  challenge: "Facing a challenge",
  effort: "Effort and ability",
  feedback: "Feedback and criticism",
  setbacks: "Mistakes and setbacks",
  others: "Other people's success",
};

/**
 * Four questions per theme. Option order alternates within each theme so the
 * growth answer is not reliably first.
 */
export const QUESTION_BANK: Question[] = [
  // ── Facing a challenge ───────────────────────────────────────────────
  {
    id: "ch1",
    theme: "challenge",
    question: "When your child faces a challenging task, they usually:",
    options: [
      { value: "growth", label: "Get excited by the chance to learn something new" },
      { value: "fixed", label: "Worry about whether they’ll be able to do it well" },
    ],
    source: "blackwell2007",
    rationale:
      "Children who believe ability can grow tend to choose learning goals over performance goals, and seek out tasks that stretch them.",
  },
  {
    id: "ch2",
    theme: "challenge",
    question: "Given a choice between an easy task and a hard one, your child tends to pick:",
    options: [
      { value: "fixed", label: "The easy one — it’s a surer thing" },
      { value: "growth", label: "The hard one, if they might learn something" },
    ],
    source: "blackwell2007",
    rationale:
      "Task choice is one of the clearest behavioural markers separating learning goals from goals aimed at looking capable.",
  },
  {
    id: "ch3",
    theme: "challenge",
    question: "When something looks hard before they’ve started, your child:",
    options: [
      { value: "growth", label: "Has a go anyway and sees how far they get" },
      { value: "fixed", label: "Finds a reason not to start" },
    ],
    source: "yeager2012",
    rationale:
      "Beliefs about whether personal qualities can change shape whether a child engages with or withdraws from difficulty.",
  },
  {
    id: "ch4",
    theme: "challenge",
    question: "If a task takes longer than they expected, your child:",
    options: [
      { value: "fixed", label: "Takes it as a sign this isn’t for them" },
      { value: "growth", label: "Assumes it’s just a long job and keeps going" },
    ],
    source: "dweck2006",
    rationale:
      "How long something takes gets read either as information about the task, or as a verdict on the self.",
  },

  // ── Effort and ability ───────────────────────────────────────────────
  {
    id: "ef1",
    theme: "effort",
    question: "When learning something new, your child believes:",
    options: [
      { value: "growth", label: "Ability grows with practice and effort" },
      { value: "fixed", label: "You’re either naturally good at it or you’re not" },
    ],
    source: "blackwell2007",
    rationale:
      "Beliefs about effort were the strongest mediator between a child’s theory of intelligence and their actual grades.",
  },
  {
    id: "ef2",
    theme: "effort",
    question: "If your child has to work hard at something, they take it to mean:",
    options: [
      { value: "fixed", label: "They must not be very good at it" },
      { value: "growth", label: "That’s just what getting better looks like" },
    ],
    source: "blackwell2007",
    rationale:
      "Whether effort reads as a route to mastery or as evidence of low ability is one of the sharpest dividing lines in this literature.",
  },
  {
    id: "ef3",
    theme: "effort",
    question: "When your child does well, they’re most pleased to hear:",
    options: [
      { value: "growth", label: "“You worked really hard on that”" },
      { value: "fixed", label: "“You’re so clever”" },
    ],
    source: "mueller1998",
    rationale:
      "Praising intelligence rather than effort reduced children’s persistence and enjoyment, and made them more likely to avoid challenge afterwards.",
  },
  {
    id: "ef4",
    theme: "effort",
    question: "Your child talks about their own ability as:",
    options: [
      { value: "fixed", label: "A fixed fact — “I’m a maths person” or “I’m not”" },
      { value: "growth", label: "Something in progress — “I haven’t got it yet”" },
    ],
    source: "dweck2006",
    rationale:
      "The language a child uses about their own ability tends to track the belief underneath it.",
  },

  // ── Feedback and criticism ───────────────────────────────────────────
  {
    id: "fb1",
    theme: "feedback",
    question: "When they get feedback or criticism, your child typically:",
    options: [
      { value: "fixed", label: "Takes it personally and feels discouraged" },
      { value: "growth", label: "Treats it as something useful to work with" },
    ],
    source: "nussbaum2008",
    rationale:
      "Faced with a threat to self-image, a fixed view tends to produce defensiveness, while a malleable view tends to produce attempts to fix the gap.",
  },
  {
    id: "fb2",
    theme: "feedback",
    question: "Offered extra help in a subject they struggle with, your child:",
    options: [
      { value: "growth", label: "Takes it — it’s a way to get better" },
      { value: "fixed", label: "Refuses — accepting help would prove something" },
    ],
    source: "hong1999",
    rationale:
      "After a poor result, students who saw ability as malleable were substantially more likely to sign up for a remedial course.",
  },
  {
    id: "fb3",
    theme: "feedback",
    question: "When a teacher says “don’t worry, this subject isn’t for everyone,” your child:",
    options: [
      { value: "fixed", label: "Feels relieved and quietly gives up on it" },
      { value: "growth", label: "Feels annoyed — they wanted to get better at it" },
    ],
    source: "rattan2012",
    rationale:
      "Comfort-oriented reassurance from instructors who saw ability as fixed lowered students’ motivation and expectations.",
  },
  {
    id: "fb4",
    theme: "feedback",
    question: "When you point out something they could improve, your child:",
    options: [
      { value: "growth", label: "Asks what to do differently" },
      { value: "fixed", label: "Argues, deflects, or shuts down" },
    ],
    source: "nussbaum2008",
    rationale:
      "The choice between defending the self and repairing the gap is the behaviour this line of research is built on.",
  },

  // ── Mistakes and setbacks ────────────────────────────────────────────
  {
    id: "st1",
    theme: "setbacks",
    question: "After making a mistake, your child usually:",
    options: [
      { value: "fixed", label: "Tries to hide it, or explains it away" },
      { value: "growth", label: "Talks about it and tries again" },
    ],
    source: "moser2011",
    rationale:
      "People with a growth mindset showed greater brain-level attention to their own errors, and were more accurate on the attempts that followed.",
  },
  {
    id: "st2",
    theme: "setbacks",
    question: "After a bad mark or a loss, your child:",
    options: [
      { value: "growth", label: "Wants to know what went wrong so they can fix it" },
      { value: "fixed", label: "Wants to stop talking about it" },
    ],
    source: "hong1999",
    rationale:
      "What a child does immediately after a setback predicts more than how upset they were by it.",
  },
  {
    id: "st3",
    theme: "setbacks",
    question: "When your child gets something wrong in front of other people, they:",
    options: [
      { value: "fixed", label: "Are mortified and want to disappear" },
      { value: "growth", label: "Are embarrassed, but carry on" },
    ],
    source: "yeager2012",
    rationale:
      "Whether a public stumble reads as a passing event or a permanent verdict is closely tied to beliefs about change.",
  },
  {
    id: "st4",
    theme: "setbacks",
    question: "When your child fails at something, your own first instinct is to show them:",
    options: [
      { value: "growth", label: "That failure is useful and worth examining" },
      { value: "fixed", label: "That it’s not a big deal, to protect their feelings" },
    ],
    source: "haimovitz2017",
    rationale:
      "Children read their parents’ reactions to failure more reliably than their parents’ stated beliefs about intelligence.",
  },

  // ── Other people's success ───────────────────────────────────────────
  {
    id: "ot1",
    theme: "others",
    question: "When they meet someone more skilled than they are, your child tends to:",
    options: [
      { value: "growth", label: "Feel inspired and look for something to copy" },
      { value: "fixed", label: "Feel threatened or shrink away from it" },
    ],
    source: "nussbaum2008",
    rationale:
      "Given a choice of who to compare themselves with, a fixed view drew people toward those doing worse; a malleable view drew them toward those doing better.",
  },
  {
    id: "ot2",
    theme: "others",
    question: "When a friend does better than they do, your child:",
    options: [
      { value: "fixed", label: "Goes quiet, or finds a reason it doesn’t count" },
      { value: "growth", label: "Asks the friend how they did it" },
    ],
    source: "nussbaum2008",
    rationale:
      "Asking a more successful peer for their method is the behavioural signature of treating ability as learnable.",
  },
  {
    id: "ot3",
    theme: "others",
    question: "Your child explains a classmate being good at something as:",
    options: [
      { value: "growth", label: "Something that classmate has practised a lot" },
      { value: "fixed", label: "Something that classmate was just born with" },
    ],
    source: "blackwell2007",
    rationale:
      "How a child explains someone else’s ability usually mirrors how they explain their own.",
  },
  {
    id: "ot4",
    theme: "others",
    question: "Watching someone struggle and then succeed, your child takes away:",
    options: [
      { value: "fixed", label: "That the person got lucky in the end" },
      { value: "growth", label: "That sticking with it actually worked" },
    ],
    source: "yeager2012",
    rationale:
      "What a child concludes from someone else’s persistence shapes whether they will attempt it themselves.",
  },
];

export const THEME_ORDER: Theme[] = [
  "challenge",
  "effort",
  "feedback",
  "setbacks",
  "others",
];

/**
 * Draws one question per theme, then shuffles so the themes do not appear in
 * the same order every time. Uses Math.random; there is nothing to reproduce.
 */
export function drawQuestions(): Question[] {
  const picked = THEME_ORDER.map((theme) => {
    const pool = QUESTION_BANK.filter((q) => q.theme === theme);
    return pool[Math.floor(Math.random() * pool.length)];
  });

  for (let i = picked.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [picked[i], picked[j]] = [picked[j], picked[i]];
  }
  return picked;
}

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

/**
 * Shown with the references. The evidence on mindset interventions is genuinely
 * mixed, and the audience for this quiz includes teachers and school
 * counsellors who know that. Claiming more than the literature supports would
 * cost more credibility than it buys.
 */
export const EVIDENCE_NOTE =
  "This is a conversation starter, not a diagnostic test. The research on growth mindset is real but debated: a meta-analysis by Sisk et al. (2018) found average effects on achievement are small, and a national US trial by Yeager et al. (2019) found the clearest benefits among lower-achieving students. The questions above draw on that literature; they are not a validated instrument.";

export const EVIDENCE_NOTE_REFS: RefKey[] = ["sisk2018", "yeager2019"];
