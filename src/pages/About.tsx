import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { BIO, PORTRAIT } from "@/content/about";
import { usePageMeta } from "@/hooks/usePageMeta";

const About: React.FC = () => {
  usePageMeta({
    title: "About Zoe Roberts | Children's Self-Development Author",
    description:
      "Zoe Roberts writes children's self-development books. Her work grew out of raising her son after becoming a young widow, and a belief that a growth mindset can change what a child thinks is possible.",
    path: "/about",
  });

  return (
    <Layout>
      <section className="bg-paper-warm py-14 sm:py-16">
        <div className="container max-w-3xl text-center">
          <h1 className="font-display text-4xl font-extrabold text-ink sm:text-5xl">
            About Zoe
          </h1>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-sunshine" />
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container max-w-3xl">
          {/* Rendered only when a real photograph exists. The generated site
              used an Unsplash stock photo of an unrelated person here, and an
              AI-generated portrait on the home page. */}
          {PORTRAIT && (
            <div className="mb-12 flex justify-center">
              <img
                src={PORTRAIT.src}
                alt={PORTRAIT.alt}
                className="max-h-96 w-auto rounded-xl shadow-lg"
              />
            </div>
          )}

          <div className="space-y-6">
            {BIO.map((para, i) => (
              <p key={i} className="text-lg leading-relaxed text-slate">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-paper-warm p-6 text-center">
            <p className="font-display text-lg font-bold text-ink">
              Want to bring Zoe’s work to your classroom or family?
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-flex rounded-lg bg-ink px-5 py-2.5 font-display font-bold text-white transition hover:bg-hero-blue"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
