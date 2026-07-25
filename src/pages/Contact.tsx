import React, { useState } from "react";
import Layout from "@/components/Layout";
import { useFormPost } from "@/hooks/useFormPost";
import { CONTACT_EMAIL, FORMSPREE_ENDPOINT } from "@/content/site";
import { CONTACT_REASONS, CONTACT_SUBJECTS } from "@/content/copy";
import { usePageMeta } from "@/hooks/usePageMeta";

const EMPTY = { name: "", email: "", subject: "", message: "" };

const Contact: React.FC = () => {
  usePageMeta({
    title: "Contact Zoe Roberts",
    description:
      "Get in touch with Zoe Roberts about school visits, speaking, media enquiries, or anything else.",
    path: "/contact",
  });

  const [form, setForm] = useState(EMPTY);
  const { status, error, submit, reset, disabled } = useFormPost(FORMSPREE_ENDPOINT);

  const update = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const sendAnother = () => {
    setForm(EMPTY);
    reset();
  };

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
            <div>
              <p className="eyebrow">Contact</p>
              <h1
                className="mt-3 font-heading text-text"
                style={{
                  fontSize: "clamp(34px,4.8vw,54px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                }}
              >
                Say hello
              </h1>
              <p className="mt-5 max-w-[46ch] text-lg text-neutral-800">
                Zoe reads everything that comes through this form and answers personally, usually
                within a few days.
              </p>

              <div className="mt-8 flex flex-col gap-[18px]">
                {CONTACT_REASONS.map((reason) => (
                  <div key={reason.title}>
                    <h2 className="font-heading text-[19px] text-text">{reason.title}</h2>
                    <p className="mt-1 max-w-[44ch] text-base text-neutral-800">{reason.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {status === "success" ? (
              <div
                className="zr-fade rounded-lg border border-accent2-400 bg-accent2-200"
                style={{ padding: "clamp(24px,3vw,36px)" }}
                role="status"
              >
                <h2 className="font-heading text-[28px] text-text">Message sent</h2>
                <p className="mt-2 text-neutral-800">
                  Thank you — Zoe will get back to you personally.
                </p>
                <button
                  type="button"
                  onClick={sendAnother}
                  className="mt-5 text-[15px] text-neutral-700 underline underline-offset-4 hover:text-accent-700"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  void submit(form);
                }}
                className="card-soft grid gap-[18px]"
                style={{ padding: "clamp(24px,3vw,36px)" }}
              >
                <div>
                  <label htmlFor="name" className="mb-2 block text-[15px] font-bold text-text">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={update}
                    disabled={disabled || status === "submitting"}
                    className="input-box"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-[15px] font-bold text-text">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={update}
                    disabled={disabled || status === "submitting"}
                    className="input-box"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-[15px] font-bold text-text">
                    What’s this about?
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={update}
                    disabled={disabled || status === "submitting"}
                    className="input-box"
                  >
                    <option value="">Please choose</option>
                    {CONTACT_SUBJECTS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-[15px] font-bold text-text">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={update}
                    disabled={disabled || status === "submitting"}
                    className="input-box resize-y"
                  />
                </div>

                {disabled && (
                  <p className="text-sm text-accent-700" role="status">
                    This form isn’t connected yet. Set <code>VITE_FORMSPREE_ID</code> to enable it.
                    {CONTACT_EMAIL && (
                      <>
                        {" "}
                        In the meantime, email{" "}
                        <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>
                          {CONTACT_EMAIL}
                        </a>
                        .
                      </>
                    )}
                  </p>
                )}

                {status === "error" && error && (
                  <p className="text-sm font-semibold text-destructive" role="alert">
                    {error}
                    {CONTACT_EMAIL && (
                      <>
                        {" "}
                        You can also email{" "}
                        <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>
                          {CONTACT_EMAIL}
                        </a>
                        .
                      </>
                    )}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={disabled || status === "submitting"}
                  className="btn-primary btn-lg justify-self-start disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
