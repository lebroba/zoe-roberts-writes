import React from "react";
import Layout from "@/components/Layout";
import EmailCapture from "@/components/EmailCapture";
import MindsetQuiz from "@/components/MindsetQuiz";
import { JOURNAL_CONTENTS, JOURNAL_PANELS } from "@/content/copy";
import { LEAD_MAGNET } from "@/content/site";
import { usePageMeta } from "@/hooks/usePageMeta";

/**
 * The site does not host the journal PDF — Kit's automation attaches it. The
 * supplied file still prints WWW.ZOESBOOKS.NET and carries the three artwork
 * defects noted in the spec, so nothing here links to it directly.
 */
const FreeGuide: React.FC = () => {
  usePageMeta({
    title: `Free: ${LEAD_MAGNET.name} | Zoe Roberts`,
    description: LEAD_MAGNET.description,
    path: "/free-guide",
  });

  return (
    <Layout>
      <section className="section-y">
        <div className="shell">
          <div
            className="grid items-start"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "clamp(36px, 5vw, 72px)",
            }}
          >
            <div>
              <p className="eyebrow">Free · three printable pages</p>
              <h1
                className="mt-3 font-heading text-text"
                style={{
                  fontSize: "clamp(34px,4.8vw,54px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                }}
              >
                {LEAD_MAGNET.name}
              </h1>
              <p
                className="mt-5 max-w-[48ch] text-neutral-800"
                style={{ fontSize: "19px", lineHeight: 1.55 }}
              >
                A one-page daily routine your child can actually finish. Print it, stick it on the
                fridge, and let them fill it in before bed.
              </p>

              <ul className="mt-7 flex flex-col gap-3.5">
                {JOURNAL_CONTENTS.map((item) => (
                  <li key={item} className="flex items-start gap-3.5 text-[17px] text-neutral-800">
                    <span
                      className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-accent-500"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="card-soft mt-8 max-w-[540px] p-7">
                <p className="text-[17px] font-bold text-text">Where should we send it?</p>
                <EmailCapture
                  source="free-guide-page"
                  cta="Send the journal"
                  className="mt-4"
                  successTitle="One more click"
                  successBody="We’ve sent a confirmation email. Open it, confirm, and the journal arrives right after."
                  note="You’ll get a confirmation email first — that’s how we keep the list clean. Unsubscribe any time."
                />
              </div>
            </div>

            {/* Page one, at a glance — panels mirroring the journal's layout. */}
            <div>
              <p className="eyebrow">Page one, at a glance</p>
              <div className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-4">
                {JOURNAL_PANELS.map((panel) => (
                  <div
                    key={panel}
                    className="flex min-h-24 items-start rounded-md border-2 border-neutral-400 bg-bg"
                    style={{ padding: "18px 16px" }}
                  >
                    <span className="font-heading text-[15px] leading-snug text-text">{panel}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-neutral-700">
                US Letter · black and white · print as many as you like.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y border-t border-divider bg-neutral-100">
        <div className="shell">
          <h2
            className="font-heading text-text"
            style={{ fontSize: "clamp(28px,3.6vw,40px)", letterSpacing: "-0.015em" }}
          >
            Not sure where to start?
          </h2>
          <p className="mt-3 max-w-[54ch] text-lg text-neutral-800">
            Take the five-question mindset check first. It tells you which parts of the journal to
            lean on.
          </p>
          <div className="mt-10">
            <MindsetQuiz />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FreeGuide;
