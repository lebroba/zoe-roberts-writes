import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb, Rocket, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import EmailCapture from "./EmailCapture";

/**
 * Growth-mindset self-assessment.
 *
 * Questions and result copy are kept verbatim from the original component —
 * they are built on standard Dweck framing and were the one piece of generated
 * content that held up. The implementation around them is new.
 *
 * Two behavioural changes from the original:
 *  - the email step logged to the console and discarded the address; it now
 *    posts to Kit through the shared EmailCapture component
 *  - the result is shown immediately rather than held hostage behind the email
 *    form, with the journal offered alongside it
 */

const QUESTIONS = [
  {
    id: "q1",
    question: "When you face a challenging task, you usually:",
    options: [
      { value: "growth", label: "Get excited by the opportunity to learn something new" },
      { value: "fixed", label: "Worry about whether you'll be able to do it well" },
    ],
  },
  {
    id: "q2",
    question: "When you receive criticism, you typically:",
    options: [
      { value: "fixed", label: "Take it personally and feel discouraged" },
      { value: "growth", label: "See it as helpful feedback to improve" },
    ],
  },
  {
    id: "q3",
    question: "When you see someone more talented than you, you tend to:",
    options: [
      { value: "growth", label: "Feel inspired and look for ways to learn from them" },
      { value: "fixed", label: "Feel threatened or intimidated by their abilities" },
    ],
  },
  {
    id: "q4",
    question: "When you make a mistake, you usually:",
    options: [
      { value: "fixed", label: "Try to hide it or make excuses" },
      { value: "growth", label: "See it as a learning opportunity" },
    ],
  },
  {
    id: "q5",
    question: "When learning something new, you believe:",
    options: [
      { value: "growth", label: "Your abilities can improve with practice and effort" },
      { value: "fixed", label: "You either have a natural talent for it or you don't" },
    ],
  },
] as const;

type ResultType = "growth" | "fixed" | "mixed";

const RESULTS: Record<ResultType, { title: string; description: string; Icon: typeof Rocket }> = {
  growth: {
    title: "Growth Mindset",
    description:
      "You tend to believe that your abilities can be developed through dedication and hard work. This view creates a love of learning and resilience that is essential for great accomplishment.",
    Icon: Rocket,
  },
  mixed: {
    title: "Mixed Mindset",
    description:
      "You show elements of both growth and fixed mindsets. You sometimes embrace challenges and value effort, while other times you may doubt your ability to improve.",
    Icon: Lightbulb,
  },
  fixed: {
    title: "Fixed Mindset",
    description:
      "You tend to believe that your qualities are fixed traits that cannot change. This can make you avoid challenges and give up easily when facing obstacles.",
    Icon: Star,
  },
};

function score(answers: string[]): ResultType {
  const growth = answers.filter((a) => a === "growth").length;
  const fixed = answers.filter((a) => a === "fixed").length;
  if (growth >= 4) return "growth";
  if (fixed >= 4) return "fixed";
  return "mixed";
}

const MindsetQuiz: React.FC = () => {
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const result = answers.length === QUESTIONS.length ? score(answers) : null;

  const answer = (value: string) => {
    setAnswers((prev) => [...prev, value]);
    if (index < QUESTIONS.length - 1) setIndex(index + 1);
  };

  const restart = () => {
    setStarted(false);
    setIndex(0);
    setAnswers([]);
  };

  return (
    <div className="rounded-xl border border-border bg-white p-6 shadow-sm sm:p-8">
      {!started && (
        <div className="text-center">
          <h3 className="font-display text-2xl font-extrabold text-ink">
            Fixed or growth mindset?
          </h3>
          <p className="mx-auto mt-3 max-w-md text-slate">
            Five quick questions. Take it yourself, or sit down and go through it with your
            tween.
          </p>
          <Button
            onClick={() => setStarted(true)}
            className="mt-6 bg-ink px-8 py-3 font-display text-base font-bold text-white hover:bg-hero-blue"
          >
            Start the quiz
          </Button>
        </div>
      )}

      {started && !result && (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="mb-6">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-display text-sm font-bold uppercase tracking-wide text-hero-blue">
                Question {index + 1} of {QUESTIONS.length}
              </span>
            </div>
            <div
              className="h-2 w-full overflow-hidden rounded-full bg-border"
              role="progressbar"
              aria-valuenow={index + 1}
              aria-valuemin={1}
              aria-valuemax={QUESTIONS.length}
            >
              <div
                className="h-full rounded-full bg-sunshine transition-all duration-300"
                style={{ width: `${((index + 1) / QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>

          <p className="font-display text-xl font-bold text-ink">{QUESTIONS[index].question}</p>

          <div className="mt-5 space-y-3">
            {QUESTIONS[index].options.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => answer(opt.value)}
                className="w-full rounded-lg border-2 border-border px-4 py-3 text-left text-slate transition hover:border-sunshine hover:bg-paper-warm focus:outline-none focus:ring-2 focus:ring-sunshine"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {result && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
          <div className="text-center">
            {React.createElement(RESULTS[result].Icon, {
              className: "mx-auto h-12 w-12 text-sunshine",
              "aria-hidden": "true",
            })}
            <h3 className="mt-3 font-display text-2xl font-extrabold text-ink">
              {RESULTS[result].title}
            </h3>
            <p className="mx-auto mt-3 max-w-lg leading-relaxed text-slate">
              {RESULTS[result].description}
            </p>
          </div>

          <div className="mt-7 rounded-lg bg-paper-warm p-5">
            <p className="mb-3 text-center font-display font-bold text-ink">
              Want the free journal to work on this together?
            </p>
            <EmailCapture source="quiz-result" cta="Send it to me" />
          </div>

          <div className="mt-5 text-center">
            <button
              type="button"
              onClick={restart}
              className="text-sm font-semibold text-hero-blue underline underline-offset-4 hover:text-ink"
            >
              Take the quiz again
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default MindsetQuiz;
