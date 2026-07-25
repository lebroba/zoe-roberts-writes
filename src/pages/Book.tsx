import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reviews from "@/components/Reviews";
import { BOOK, FORMAT_LABELS, amazonUrl, availableEditions } from "@/content/book";
import { usePageMeta } from "@/hooks/usePageMeta";

const Book: React.FC = () => {
  usePageMeta({
    title: `${BOOK.title}: ${BOOK.subtitle} | Zoe Roberts`,
    description: BOOK.blurb,
    path: "/book",
  });

  const editions = availableEditions();

  return (
    <Layout>
      <section className="section-y">
        <div className="shell">
          <div
            className="grid items-start"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "clamp(36px, 5vw, 72px)",
            }}
          >
            {/* Sticky so the buy button stays reachable through a long description. */}
            <div className="md:sticky md:top-24">
              <img
                src={BOOK.defaultCover}
                alt={`Cover of ${BOOK.title} by Zoe Roberts`}
                width={1000}
                height={1500}
                className="h-auto w-full max-w-[340px] rounded-lg shadow-lg"
              />

              <div className="mt-6 flex max-w-[340px] flex-col gap-3">
                {editions.map((edition) => (
                  <a
                    key={edition.format}
                    href={amazonUrl(edition.asin)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary btn-lg w-full"
                  >
                    Buy the {FORMAT_LABELS[edition.format]} edition
                  </a>
                ))}
              </div>

              {editions.length === 1 && (
                <p className="mt-3 max-w-[340px] text-sm text-neutral-700">
                  Opens on Amazon. ASIN {editions[0].asin}.
                </p>
              )}
            </div>

            <div>
              <p className="eyebrow">
                {BOOK.ageRange} · {BOOK.publishYear}
              </p>
              <h1
                className="mt-3 font-heading text-text"
                style={{
                  fontSize: "clamp(34px,4.8vw,54px)",
                  lineHeight: 1.06,
                  letterSpacing: "-0.02em",
                }}
              >
                {BOOK.title}
              </h1>
              <p className="mt-2 text-[21px] text-neutral-800">{BOOK.subtitle}</p>

              <div className="mt-7 flex max-w-[60ch] flex-col gap-5">
                {BOOK.description.map((para, i) => (
                  <p key={i} className="text-lg text-neutral-800" style={{ lineHeight: 1.65 }}>
                    {para}
                  </p>
                ))}
              </div>

              <h2
                className="mt-12 font-heading text-text"
                style={{ fontSize: "clamp(28px,3.6vw,40px)", letterSpacing: "-0.015em" }}
              >
                Inside this book
              </h2>

              <ul className="mt-6 flex max-w-[62ch] flex-col gap-3">
                {BOOK.highlights.map((point) => (
                  <li
                    key={point}
                    className="card-soft flex items-start gap-4"
                    style={{ padding: "18px 20px" }}
                  >
                    <span
                      className="mt-2 h-3 w-3 shrink-0 rounded-full bg-accent2-500"
                      aria-hidden="true"
                    />
                    <span className="text-base text-neutral-800">{point}</span>
                  </li>
                ))}
              </ul>

              <div
                className="mt-12 max-w-[62ch] rounded-lg border border-accent-300 bg-accent-200"
                style={{ padding: "32px" }}
              >
                <h3 className="font-heading text-[24px] text-accent-900">Try it before you buy it</h3>
                <p className="mt-2 text-accent-900">
                  The free daily journal uses the same routine as the book’s activity pages.
                </p>
                <Link to="/free-guide" className="btn-primary btn-lg mt-5">
                  Get the free journal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Renders nothing until content/reviews.ts holds real Amazon reviews. */}
      <Reviews />
    </Layout>
  );
};

export default Book;
