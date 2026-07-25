import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import BuyButtons from "@/components/BuyButtons";
import BookCover from "@/components/BookCover";
import { BOOK } from "@/content/book";
import { BIO_TEASER } from "@/content/about";
import { usePageMeta } from "@/hooks/usePageMeta";

const Index: React.FC = () => {
  usePageMeta({
    title: "Zoe Roberts | Growth Mindset Books for Tweens",
    description:
      "Children's self-development books that help tweens and teens build confidence, resilience, and a growth mindset. Download the free daily journal.",
    path: "/",
  });

  return (
    <Layout>
      <Hero />

      {/* The book */}
      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="grid items-start gap-10 md:grid-cols-[auto_1fr]">
            {/* Hidden on mobile: the hero already shows the cover directly above,
                and once the columns collapse the two sit back to back. */}
            <div className="hidden md:block">
              <BookCover size="md" />
            </div>

            <div>
              <h2 className="section-heading">Inside the book</h2>
              <p className="mt-6 text-lg leading-relaxed text-slate">{BOOK.description[0]}</p>

              <ul className="mt-6 space-y-3">
                {BOOK.highlights.slice(0, 3).map((point) => (
                  <li key={point} className="flex gap-3 text-slate">
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sunshine"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/book"
                  className="inline-flex rounded-lg border-2 border-ink px-5 py-2.5 font-display font-bold text-ink transition hover:bg-ink hover:text-white"
                >
                  Read more about the book
                </Link>
                <BuyButtons showLockup={false} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Reviews />

      {/* About teaser */}
      <section className="bg-paper-warm py-16 sm:py-20">
        <div className="container max-w-3xl text-center">
          <h2 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
            About Zoe
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-sunshine" />
          <p className="mt-6 text-lg leading-relaxed text-slate">{BIO_TEASER}</p>
          <Link
            to="/about"
            className="mt-6 inline-flex font-display font-bold text-hero-blue underline decoration-sunshine decoration-2 underline-offset-4 hover:text-ink"
          >
            Read Zoe’s story
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
