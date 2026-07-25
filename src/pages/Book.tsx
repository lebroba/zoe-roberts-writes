import React from "react";
import Layout from "@/components/Layout";
import BookCover from "@/components/BookCover";
import BuyButtons from "@/components/BuyButtons";
import Reviews from "@/components/Reviews";
import { BOOK } from "@/content/book";
import { usePageMeta } from "@/hooks/usePageMeta";

const Book: React.FC = () => {
  usePageMeta({
    title: `${BOOK.title}: ${BOOK.subtitle} | Zoe Roberts`,
    description: BOOK.blurb,
    path: "/book",
  });

  return (
    <Layout>
      <section className="bg-paper-warm py-14 sm:py-16">
        <div className="container">
          <div className="grid items-start gap-10 md:grid-cols-[auto_1fr]">
            <div className="mx-auto md:mx-0">
              <BookCover size="lg" />
            </div>

            <div>
              <p className="font-display text-sm font-bold uppercase tracking-wider text-hero-blue">
                {BOOK.ageRange} · {BOOK.publishYear}
              </p>
              <h1 className="mt-2 font-display text-4xl font-extrabold leading-tight text-ink">
                {BOOK.title}
              </h1>
              <p className="mt-2 text-xl text-slate">{BOOK.subtitle}</p>

              <BuyButtons className="mt-7" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container max-w-3xl">
          <h2 className="section-heading">About this book</h2>

          <div className="mt-8 space-y-5">
            {BOOK.description.map((para, i) => (
              <p key={i} className="text-lg leading-relaxed text-slate">
                {para}
              </p>
            ))}
          </div>

          <h2 className="section-heading mt-14">What’s inside</h2>
          <ul className="mt-8 space-y-4">
            {BOOK.highlights.map((point) => (
              <li key={point} className="flex gap-3 text-slate">
                <span
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sunshine"
                  aria-hidden="true"
                />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 rounded-xl bg-paper-warm p-6">
            <BuyButtons />
          </div>
        </div>
      </section>

      <Reviews />
    </Layout>
  );
};

export default Book;
