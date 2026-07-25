import React, { useMemo, useState } from "react";
import EmailCapture from "./EmailCapture";
import {
  EVIDENCE_NOTE,
  EVIDENCE_NOTE_REFS,
  QUESTION_BANK,
  REFERENCES,
  RESULTS,
  THEME_LABELS,
  drawQuestions,
  score,
  type Answer,
  type Question,
  type RefKey,
} from "@/content/quiz";

/**
 * Five-question mindset check, drawn from a bank of 20.
 *
 * Mounted on both / and /free-guide. The result is shown immediately and is
 * never held behind the email form — the email patch sits below it as an
 * offer, not a gate.
 *
 * The questions a given person saw are kept so the result can cite exactly
 * those sources rather than the whole bibliography.
 */
/**
 * Rationales are stored as standalone sentences so they read correctly on
 * their own, but here they follow "According to <source>, " and would
 * capitalise mid-sentence. No rationale in the bank opens with a proper noun,
 * so lowering the first character is safe.
 */
const asClause = (sentence: string): string =>
  sentence.charAt(0).toLowerCase() + sentence.slice(1);

const MindsetQuiz: React.FC = () => {
  const [started, setStarted] = useState(false);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [seed, setSeed] = useState(0);

  // Redrawn only when the quiz is restarted, so answering doesn't reshuffle.
  const questions = useMemo<Question[]>(() => drawQuestions(), [seed]);

  const index = answers.length;
  const result = index === questions.length ? score(answers) : null;
  const question = result ? null : questions[index];

  const restart = () => {
    setAnswers([]);
    setStarted(false);
    setSeed((s) => s + 1);
  };

  // De-duplicated, in the order the questions were asked.
  const citedRefs: RefKey[] = Array.from(new Set(questions.map((q) => q.source)));

  return (
    <div
      className="card-soft mx-auto max-w-[760px] bg-bg shadow-sm"
      style={{ padding: "clamp(28px,4vw,48px)" }}
    >
      {!started && (
        <div>
          <h3 className="font-heading text-[26px] text-text">
            Fixed or growth — a five-question check
          </h3>
          <p className="mt-3 max-w-[52ch] text-neutral-800">
            There’s no score to be ashamed of. Most children come out mixed, and mixed is the
            easiest place to start from.
          </p>
          <p className="mt-3 max-w-[52ch] text-[15px] text-neutral-700">
            Five questions drawn from a bank of {QUESTION_BANK.length}, one from each of five
            areas — so a repeat run asks you something new.
          </p>
          <button type="button" onClick={() => setStarted(true)} className="btn-primary btn-lg mt-6">
            Start the check
          </button>
        </div>
      )}

      {started && question && (
        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <p className="eyebrow">
              Question {index + 1} of {questions.length}
            </p>
            <p className="text-[13px] text-neutral-700">{THEME_LABELS[question.theme]}</p>
          </div>

          <div
            className="mt-3 h-2 w-full overflow-hidden rounded-full bg-neutral-300"
            role="progressbar"
            aria-valuenow={index + 1}
            aria-valuemin={1}
            aria-valuemax={questions.length}
            aria-label={`Question ${index + 1} of ${questions.length}`}
          >
            <div
              className="h-full rounded-full bg-accent2-500"
              style={{
                width: `${((index + 1) / questions.length) * 100}%`,
                transition: "width .35s ease",
              }}
            />
          </div>

          <p
            className="mt-6 max-w-[34ch] font-heading text-text"
            style={{ fontSize: "clamp(22px,2.6vw,28px)", lineHeight: 1.25 }}
          >
            {question.question}
          </p>

          <div className="mt-6 flex flex-col gap-3.5">
            {question.options.map((opt) => (
              <button
                key={opt.value + opt.label}
                type="button"
                onClick={() => setAnswers((prev) => [...prev, opt.value])}
                className="rounded-md border border-neutral-400 bg-neutral-100 px-[22px] py-[18px] text-left text-[17px] text-text transition-[background-color,border-color] duration-150 hover:border-accent-400 hover:bg-accent-100"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {result && (
        <div className="zr-fade">
          <p className="eyebrow">Your result</p>
          <h3 className="mt-2 font-heading text-[28px] text-text">{RESULTS[result].title}</h3>
          <p className="mt-3 max-w-[54ch] text-lg text-neutral-800">{RESULTS[result].body}</p>
          <p className="mt-3 max-w-[54ch] font-semibold text-accent2-800">{RESULTS[result].next}</p>

          <div className="mt-7 rounded-lg border border-accent2-400 bg-accent2-200 p-[26px]">
            <p className="font-body font-bold text-text">
              Want the free journal to work on this together?
            </p>
            <EmailCapture
              source="quiz-result"
              cta="Send it to me"
              successTitle="On its way"
              successBody="Confirm the email we just sent and the journal follows."
              className="mt-4"
            />
          </div>

          {/* Sources for the questions this person actually saw. */}
          <details className="mt-7 border-t border-divider pt-6">
            <summary className="cursor-pointer font-body font-bold text-text marker:text-accent-700">
              The research behind your questions
            </summary>

            <div className="mt-4 flex flex-col gap-4">
              {questions.map((q) => (
                <div key={q.id}>
                  <p className="text-[15px] font-semibold text-text">
                    {THEME_LABELS[q.theme]}
                  </p>
                  <p className="mt-1 max-w-[62ch] text-[15px] text-neutral-800">
                    According to {REFERENCES[q.source].short}, {asClause(q.rationale)}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 max-w-[62ch] text-[15px] text-neutral-700">{EVIDENCE_NOTE}</p>

            <h4 className="mt-6 font-body text-[15px] font-bold uppercase tracking-wider text-neutral-700">
              References
            </h4>
            <ul className="mt-3 flex flex-col gap-3">
              {Array.from(new Set([...citedRefs, ...EVIDENCE_NOTE_REFS])).map((key) => (
                <li
                  key={key}
                  className="max-w-[68ch] text-[14px] leading-relaxed text-neutral-800"
                  /* Hanging indent, as APA reference lists are set. */
                  style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}
                >
                  {REFERENCES[key].apa}{" "}
                  <a
                    href={REFERENCES[key].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-700 underline underline-offset-2"
                  >
                    Link
                  </a>
                </li>
              ))}
            </ul>
          </details>

          <button
            type="button"
            onClick={restart}
            className="mt-6 text-[15px] text-neutral-700 underline underline-offset-4 hover:text-accent-700"
          >
            Take it again with different questions
          </button>
        </div>
      )}
    </div>
  );
};

export default MindsetQuiz;
