import React from "react";
import { Check, Printer } from "lucide-react";
import Layout from "@/components/Layout";
import EmailCapture from "@/components/EmailCapture";
import MindsetQuiz from "@/components/MindsetQuiz";
import { LEAD_MAGNET } from "@/content/site";
import { usePageMeta } from "@/hooks/usePageMeta";

const INCLUDES = [
  "A daily power level check-in, so your child can name how they're feeling before the day starts",
  "Gratitude and goal prompts that take two minutes, not twenty",
  "Space to work through what felt hard today and what they learned from it",
  "Affirmations in the same comic-book style as the book",
];

const FreeGuide: React.FC = () => {
  usePageMeta({
    title: `Free: ${LEAD_MAGNET.name} | Zoe Roberts`,
    description: LEAD_MAGNET.description,
    path: "/free-guide",
  });

  return (
    <Layout>
      <section className="bg-paper-warm py-14 sm:py-20">
        <div className="container max-w-3xl text-center">
          <p className="font-display text-sm font-bold uppercase tracking-wider text-hero-blue">
            Free printable
          </p>
          <h1 className="mt-2 font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
            “{LEAD_MAGNET.name}”
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate">
            {LEAD_MAGNET.description}
          </p>

          <div className="mx-auto mt-8 max-w-xl text-left">
            <EmailCapture
              source="free-guide-page"
              note="We'll email you a confirmation link, then the journal. Unsubscribe anytime."
            />
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container max-w-3xl">
          <h2 className="section-heading">What’s in it</h2>

          <ul className="mt-8 space-y-4">
            {INCLUDES.map((item) => (
              <li key={item} className="flex gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-sunshine" aria-hidden="true" />
                <span className="leading-relaxed text-slate">{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 flex items-center gap-2 rounded-lg bg-paper-warm p-4 text-sm text-slate">
            <Printer className="h-5 w-5 shrink-0 text-hero-blue" aria-hidden="true" />
            {LEAD_MAGNET.pageCount} pages, US Letter, black and white — prints fine on a school
            or home printer without burning through colour ink.
          </p>
        </div>
      </section>

      <section className="bg-paper-warm py-14 sm:py-16">
        <div className="container max-w-2xl">
          <MindsetQuiz />
        </div>
      </section>
    </Layout>
  );
};

export default FreeGuide;
