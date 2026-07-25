import React from "react";
import { motion } from "framer-motion";
import BookCover from "./BookCover";
import EmailCapture from "./EmailCapture";
import { BOOK } from "@/content/book";
import { LEAD_MAGNET } from "@/content/site";

/**
 * Home hero.
 *
 * The primary call to action is the email capture, not the buy button — the
 * site's job is building the list. Purchase links live further down the page
 * and on /book for readers who are already sold.
 */
const Hero: React.FC = () => (
  <section className="relative overflow-hidden bg-paper-warm py-14 sm:py-20">
    <div
      className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-sunshine/20 blur-3xl"
      aria-hidden="true"
    />

    <div className="container relative">
      <div className="grid items-center gap-10 md:grid-cols-[1.15fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 font-display text-sm font-bold uppercase tracking-wider text-hero-blue">
            {BOOK.ageRange} · {BOOK.category}
          </p>

          {/* Only the closing phrase is highlighted, and it is short enough not to
              wrap. Marking a longer phrase leaves a stray block of colour on the
              line it breaks across. */}
          <h1 className="font-display text-4xl font-extrabold leading-[1.15] text-ink sm:text-5xl">
            Help your kid turn “I can’t” into{" "}
            <span className="highlight whitespace-nowrap">“not yet.”</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate">
            {BOOK.blurb}
          </p>

          <div className="mt-7 max-w-xl">
            <p className="mb-3 font-display font-bold text-ink">
              Start free: “{LEAD_MAGNET.name}”
            </p>
            <EmailCapture
              source="home-hero"
              note={`${LEAD_MAGNET.pageCount} printable pages. No spam, unsubscribe anytime.`}
            />
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <BookCover size="lg" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
