import React, { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useFormPost } from "@/hooks/useFormPost";
import { CONTACT_EMAIL, FORMSPREE_ENDPOINT } from "@/content/site";
import { usePageMeta } from "@/hooks/usePageMeta";

const SUBJECTS = [
  "General enquiry",
  "School or classroom visit",
  "Media enquiry",
  "Speaking request",
  "Other",
];

const Contact: React.FC = () => {
  usePageMeta({
    title: "Contact Zoe Roberts",
    description:
      "Get in touch with Zoe Roberts about school visits, speaking, media enquiries, or anything else.",
    path: "/contact",
  });

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const { status, error, submit, disabled } = useFormPost(FORMSPREE_ENDPOINT);

  const update = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submit(form);
  };

  const field =
    "w-full rounded-lg border border-border bg-white px-4 py-2.5 text-ink outline-none transition focus:ring-2 focus:ring-sunshine disabled:opacity-60";

  return (
    <Layout>
      <section className="bg-paper-warm py-14 sm:py-16">
        <div className="container max-w-2xl text-center">
          <h1 className="font-display text-4xl font-extrabold text-ink sm:text-5xl">Contact</h1>
          <p className="mt-4 text-lg text-slate">
            Questions about the book, a school visit, or working together? Send a note.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container max-w-2xl">
          {status === "success" ? (
            <div
              role="status"
              className="flex items-start gap-3 rounded-xl border border-sunshine bg-paper-warm p-6"
            >
              <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-sunshine" aria-hidden="true" />
              <div>
                <p className="font-display text-lg font-bold text-ink">Message sent.</p>
                <p className="mt-1 text-slate">Zoe will get back to you as soon as she can.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block font-medium text-ink">
                    Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={update}
                    disabled={disabled || status === "submitting"}
                    className={field}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block font-medium text-ink">
                    Email <span className="text-destructive">*</span>
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
                    className={field}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-1.5 block font-medium text-ink">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={update}
                  disabled={disabled || status === "submitting"}
                  className={field}
                >
                  <option value="">Please select</option>
                  {SUBJECTS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block font-medium text-ink">
                  Message <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={update}
                  disabled={disabled || status === "submitting"}
                  className={field}
                />
              </div>

              {/* States the gap instead of accepting a message it cannot deliver. */}
              {disabled && (
                <p className="rounded-lg bg-paper-warm p-4 text-sm text-hero-blue" role="status">
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
                <p className="text-sm font-medium text-destructive" role="alert">
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

              <Button
                type="submit"
                disabled={disabled || status === "submitting"}
                className="bg-ink px-7 py-2.5 font-display text-base font-bold text-white hover:bg-hero-blue disabled:opacity-60"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                    Sending…
                  </>
                ) : (
                  "Send message"
                )}
              </Button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
