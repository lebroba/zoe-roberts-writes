import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { BIO, PORTRAIT } from "@/content/about";
import { ABOUT_FACTS, ABOUT_QUOTE } from "@/content/copy";
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
      <section className="section-y">
        <div className="shell">
          <div className="max-w-[22ch]">
            <p className="eyebrow">About the author</p>
            <h1
              className="mt-3 font-heading text-text"
              style={{
                fontSize: "clamp(36px,5vw,58px)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Zoe Roberts
            </h1>
          </div>

          <div
            className="mt-10 grid items-start"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "clamp(36px, 5vw, 72px)",
            }}
          >
            <div>
              {/* No portrait until Zoe supplies a real photograph. The generated
                  site used an Unsplash stock photo and an AI-generated portrait. */}
              {PORTRAIT && (
                <img
                  src={PORTRAIT.src}
                  alt={PORTRAIT.alt}
                  className="mb-8 h-auto w-full rounded-lg"
                />
              )}

              <div className="flex max-w-[58ch] flex-col gap-5">
                {BIO.map((para, i) => (
                  <p key={i} className="text-lg text-neutral-800" style={{ lineHeight: 1.7 }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>

            <aside className="flex flex-col gap-6">
              <div
                className="rounded-lg bg-accent2-800 text-neutral-100"
                style={{ padding: "36px 32px" }}
              >
                <blockquote
                  className="font-heading text-[24px]"
                  style={{ lineHeight: 1.3 }}
                >
                  “{ABOUT_QUOTE}”
                </blockquote>
              </div>

              <div className="card-soft" style={{ padding: "28px 30px" }}>
                <h2 className="font-heading text-[22px] text-text">In short</h2>
                <ul className="mt-4 flex flex-col gap-3">
                  {ABOUT_FACTS.map((fact) => (
                    <li key={fact} className="flex items-start gap-3 text-base text-neutral-800">
                      <span
                        className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent-500"
                        aria-hidden="true"
                      />
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="rounded-lg border border-accent-300 bg-accent-200"
                style={{ padding: "28px 30px" }}
              >
                <h2 className="font-heading text-[22px] text-accent-900">Invite Zoe</h2>
                <p className="mt-2 text-accent-900">
                  School visits, classroom sessions, media and speaking.
                </p>
                <Link to="/contact" className="btn-primary btn-md mt-5">
                  Get in touch
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
