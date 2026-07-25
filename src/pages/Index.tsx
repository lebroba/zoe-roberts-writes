import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import EmailCapture from "@/components/EmailCapture";
import MindsetQuiz from "@/components/MindsetQuiz";
import { BOOK, amazonUrl, availableEditions } from "@/content/book";
import { BIO_TEASER } from "@/content/about";
import { AUDIENCES, ZOE_FACTS_LINE, ZOE_QUOTE } from "@/content/copy";
import { SHOW_QUIZ_ON_HOME } from "@/content/site";
import { usePageMeta } from "@/hooks/usePageMeta";

const Index: React.FC = () => {
  usePageMeta({
    title: "Zoe Roberts | Growth Mindset Books for Tweens",
    description:
      "Children's self-development books that help tweens and teens build confidence, resilience, and a growth mindset. Download the free daily journal.",
    path: "/",
  });

  const kindle = availableEditions().find((e) => e.format === "kindle");

  return (
    <Layout>
      {/* Hero */}
      <section className="section-y">
        <div className="shell">
          <div
            className="grid items-center"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "clamp(36px, 5vw, 72px)",
            }}
          >
            <div>
              <p className="eyebrow">Growth mindset books for tweens</p>
              <h1
                className="mt-3 max-w-[14ch] font-heading text-text"
                style={{
                  fontSize: "clamp(38px, 5.4vw, 60px)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.02em",
                }}
              >
                Teach a child that{" "}
                <em className="not-italic text-accent-700">“I can’t”</em> only means “not yet.”
              </h1>
              <p
                className="mt-5 max-w-[46ch] text-neutral-800"
                style={{ fontSize: "20px", lineHeight: 1.55 }}
              >
                Zoe Roberts writes for the eight-to-twelve-year-olds who have already decided what
                they are bad at. Start with the free daily journal — three printable pages you can
                sit down and fill in together.
              </p>

              <EmailCapture
                source="home-hero"
                className="mt-7"
                note="Three printable pages. No spam, unsubscribe in one click."
              />
            </div>

            {/* Cover over a sage circle. isolation:isolate keeps the -1 z-index
                behind the cover but in front of the section background. */}
            <div className="grid isolate place-items-center">
              <div
                className="col-start-1 row-start-1 -z-[1] rounded-full bg-accent2-300 opacity-60"
                style={{ width: "min(100%, 400px)", aspectRatio: "1" }}
                aria-hidden="true"
              />
              <img
                src={BOOK.defaultCover}
                alt={`Cover of ${BOOK.title}: ${BOOK.subtitle} by Zoe Roberts`}
                width={1000}
                height={1500}
                className="col-start-1 row-start-1 h-auto rounded-md shadow-lg"
                style={{ width: "min(100%, 320px)", transform: "rotate(-2deg)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Audience band */}
      <section className="section-y border-y border-divider bg-neutral-100">
        <div className="shell">
          <h2
            className="max-w-[20ch] font-heading text-text"
            style={{ fontSize: "clamp(28px,3.6vw,40px)", letterSpacing: "-0.015em" }}
          >
            Written for the grown-up holding the book
          </h2>
          <p className="mt-3 text-lg text-neutral-800">
            The reader is ten. The person deciding is you.
          </p>

          <div className="auto-grid mt-10 gap-6">
            {AUDIENCES.map((a) => (
              <div
                key={a.title}
                className="rounded-lg border border-divider bg-bg"
                style={{ padding: "32px 30px" }}
              >
                <div
                  className="h-[34px] w-[34px] rounded-full bg-accent-300"
                  aria-hidden="true"
                />
                <h3 className="mt-5 font-heading text-[22px] text-text">{a.title}</h3>
                <p className="mt-2 text-base text-neutral-800">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book */}
      <section className="section-y">
        <div className="shell">
          <div
            className="grid items-center"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "clamp(36px, 5vw, 72px)",
            }}
          >
            <div>
              <p className="eyebrow">The book</p>
              <h2
                className="mt-3 font-heading text-text"
                style={{ fontSize: "clamp(28px,3.6vw,40px)", letterSpacing: "-0.015em" }}
              >
                {BOOK.title}
              </h2>
              <p className="mt-2 text-xl text-neutral-800">{BOOK.subtitle}</p>
              <p className="mt-4 max-w-[48ch] text-lg text-neutral-800">{BOOK.blurb}</p>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {[BOOK.ageRange, BOOK.publishYear, BOOK.category].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-divider bg-neutral-200 text-[15px] text-neutral-800"
                    style={{ padding: "6px 14px" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-5">
                {kindle && (
                  <a
                    href={amazonUrl(kindle.asin)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary btn-lg"
                  >
                    Buy the Kindle edition
                  </a>
                )}
                <Link
                  to="/book"
                  className="font-semibold text-accent-700 underline underline-offset-4"
                >
                  Read what’s inside
                </Link>
              </div>
            </div>

            <div className="justify-self-center">
              <img
                src={BOOK.defaultCover}
                alt=""
                aria-hidden="true"
                width={1000}
                height={1500}
                className="h-auto rounded-md shadow-md"
                style={{ width: "min(100%, 300px)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* From Zoe */}
      <section className="section-y bg-accent2-800 text-neutral-100">
        <div className="shell">
          <div
            className="grid items-center"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "clamp(36px, 5vw, 72px)",
            }}
          >
            <div>
              <p className="eyebrow text-accent2-300">From Zoe</p>
              <blockquote
                className="mt-4 max-w-[22ch] font-heading text-neutral-100"
                style={{ fontSize: "clamp(24px,3vw,34px)", lineHeight: 1.28 }}
              >
                “{ZOE_QUOTE}”
              </blockquote>
              <p className="mt-5 max-w-[48ch] text-accent2-200">{BIO_TEASER}</p>
              <Link
                to="/about"
                className="mt-5 inline-block font-semibold text-accent-300 underline underline-offset-4"
              >
                Read Zoe’s story
              </Link>
            </div>

            <div className="justify-self-center">
              <div
                className="grid place-items-center rounded-full bg-accent2-700 text-center"
                style={{ width: "min(100%, 300px)", aspectRatio: "1", padding: "40px" }}
              >
                <p className="font-heading text-[22px] leading-snug text-neutral-100">
                  {ZOE_FACTS_LINE}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz */}
      {SHOW_QUIZ_ON_HOME && (
        <section className="section-y">
          <div className="shell">
            <h2
              className="font-heading text-text"
              style={{ fontSize: "clamp(28px,3.6vw,40px)", letterSpacing: "-0.015em" }}
            >
              Where does your child sit right now?
            </h2>
            <p className="mt-3 max-w-[52ch] text-lg text-neutral-800">
              Five questions, two minutes. Answer as yourself, or sit down and go through it
              together.
            </p>
            <div className="mt-10">
              <MindsetQuiz />
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Index;
