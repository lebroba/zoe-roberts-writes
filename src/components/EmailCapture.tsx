import React, { useState } from "react";
import { useFormPost } from "@/hooks/useFormPost";
import { CONTACT_EMAIL, KIT_ENDPOINT } from "@/content/site";

interface EmailCaptureProps {
  cta?: string;
  /** Fine print under the form. */
  note?: string;
  /** Heading and body of the success state. */
  successTitle?: string;
  successBody?: string;
  /** Tags the source so Kit can report which surface converted. */
  source: string;
  className?: string;
}

/**
 * The site's only email capture, mounted at three entry points: the hero, the
 * free-guide card, and the quiz result. All three post to the same Kit form —
 * one list, one automation — and each keeps its own submitted state, so
 * completing one does not collapse the others.
 */
const EmailCapture: React.FC<EmailCaptureProps> = ({
  cta = "Send me the journal",
  note,
  successTitle = "Check your inbox.",
  successBody = "Confirm your address and the journal lands straight after.",
  source,
  className = "",
}) => {
  const [email, setEmail] = useState("");
  const { status, error, submit, disabled } = useFormPost(KIT_ENDPOINT);

  if (status === "success") {
    return (
      <div
        role="status"
        className={`zr-fade rounded-lg border border-accent2-400 bg-accent2-200 px-6 py-5 ${className}`}
      >
        <p className="font-body font-bold text-text">{successTitle}</p>
        <p className="mt-1 text-neutral-800">{successBody}</p>
      </div>
    );
  }

  return (
    <div className={className}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          void submit({ email_address: email, source });
        }}
        className="flex max-w-[520px] flex-wrap gap-2.5"
      >
        <label className="sr-only" htmlFor={`email-${source}`}>
          Your email address
        </label>
        <input
          id={`email-${source}`}
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          disabled={disabled || status === "submitting"}
          className="input-pill flex-[1_1_240px]"
        />
        <button
          type="submit"
          disabled={disabled || status === "submitting"}
          className="btn-primary btn-lg disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : cta}
        </button>
      </form>

      {/* Stated plainly rather than hidden behind a fake success. */}
      {disabled && (
        <p className="mt-2.5 text-sm text-accent-700" role="status">
          Sign-ups aren’t connected yet. Set <code>VITE_KIT_FORM_ID</code> to enable this form.
        </p>
      )}

      {status === "error" && error && (
        <p className="mt-2.5 text-sm font-semibold text-destructive" role="alert">
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

      {note && !disabled && status !== "error" && (
        <p className="mt-2.5 text-sm text-neutral-700">{note}</p>
      )}
    </div>
  );
};

export default EmailCapture;
