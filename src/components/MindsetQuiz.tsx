import React, { useState } from "react";
import EmailCapture from "./EmailCapture";
import { QUESTIONS, RESULTS, score, type Answer } from "@/content/quiz";

/**
 * Five-question mindset check.
 *
 * Mounted on both / and /free-guide. The result is shown immediately and is
 * never held behind the email form — the email patch sits below it as an offer,
 * not a gate.
 */
const MindsetQuiz: React.FC = () => {
  const [started, setStarted] = useState(false);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const index = answers.length;
  const result = index === QUESTIONS.length ? score(answers) : null;
  const question = result ? null : QUESTIONS[index];

  const restart = () => {
    setAnswers([]);
    setStarted(false);
  };

  return (
    <div
      className="card-soft mx-auto max-w-[760px] bg-bg shadow-sm"
      style={{ padding: "clamp(28px,4vw,48px)" }}
    >
      {!started && (
        <div>
          <h3 className="font-heading text-[26px] leading-tight text-text">
            Fixed or growth — a five-question check
          </h3>
          <p className="mt-3 max-w-[52ch] text-neutral-800">
            There’s no score to be ashamed of. Most children come out mixed, and mixed is the
            easiest place to start from.
          </p>
          <button type="button" onClick={() => setStarted(true)} className="btn-primary btn-lg mt-6">
            Start the check
          </button>
        </div>
      )}

      {started && question && (
        <div>
          <p className="eyebrow">
            Question {index + 1} of {QUESTIONS.length}
          </p>

          <div
            className="mt-3 h-2 w-full overflow-hidden rounded-full bg-neutral-300"
            role="progressbar"
            aria-valuenow={index + 1}
            aria-valuemin={1}
            aria-valuemax={QUESTIONS.length}
            aria-label={`Question ${index + 1} of ${QUESTIONS.length}`}
          >
            <div
              className="h-full rounded-full bg-accent2-500"
              style={{
                width: `${((index + 1) / QUESTIONS.length) * 100}%`,
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
          <h3 className="mt-2 font-heading text-[28px] leading-tight text-text">
            {RESULTS[result].title}
          </h3>
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

          <button
            type="button"
            onClick={restart}
            className="mt-5 text-[15px] text-neutral-700 underline underline-offset-4 hover:text-accent-700"
          >
            Take it again
          </button>
        </div>
      )}
    </div>
  );
};

export default MindsetQuiz;
