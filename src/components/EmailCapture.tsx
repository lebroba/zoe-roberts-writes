import React, { useState } from "react";
import { CheckCircle2, Loader2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFormPost } from "@/hooks/useFormPost";
import { KIT_ENDPOINT, LEAD_MAGNET } from "@/content/site";

interface EmailCaptureProps {
  /** Text on the submit button. */
  cta?: string;
  /** Shown under the form. */
  note?: string;
  /** Dark section background — flips the input styling. */
  onDark?: boolean;
  /** Tags the source so Kit can report which surface converted. */
  source: string;
}

/**
 * The site's single email capture. Used by the hero, the free guide page, and
 * the quiz result screen so every entry point feeds one Kit form, one list,
 * and one automation.
 *
 * Kit's form subscription endpoint is built for public HTML form posts, so no
 * API key is involved. Kit sends the double opt-in and the automation that
 * attaches the journal PDF.
 */
const EmailCapture: React.FC<EmailCaptureProps> = ({
  cta = "Send me the journal",
  note,
  onDark = false,
  source,
}) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const { status, error, submit, disabled } = useFormPost(KIT_ENDPOINT);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submit({
      email_address: email,
      first_name: firstName,
      // Lets Kit segment by which part of the site converted.
      source,
    });
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className={`flex items-start gap-3 rounded-lg border p-4 ${
          onDark ? "border-sunshine/40 bg-white/10 text-white" : "border-sunshine bg-paper-warm text-ink"
        }`}
      >
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sunshine" aria-hidden="true" />
        <div>
          <p className="font-display font-bold">Check your inbox.</p>
          <p className={`text-sm ${onDark ? "text-white/80" : "text-slate"}`}>
            Confirm your email address and “{LEAD_MAGNET.name}” is on its way.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor={`first-name-${source}`}>
          First name
        </label>
        <input
          id={`first-name-${source}`}
          type="text"
          autoComplete="given-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name"
          disabled={disabled || status === "submitting"}
          className={`w-full rounded-lg border px-4 py-2.5 text-base outline-none transition focus:ring-2 focus:ring-sunshine disabled:opacity-60 sm:w-40 ${
            onDark
              ? "border-white/25 bg-white/10 text-white placeholder:text-white/50"
              : "border-border bg-white text-ink placeholder:text-slate/50"
          }`}
        />

        <label className="sr-only" htmlFor={`email-${source}`}>
          Email address
        </label>
        <input
          id={`email-${source}`}
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          disabled={disabled || status === "submitting"}
          className={`w-full flex-1 rounded-lg border px-4 py-2.5 text-base outline-none transition focus:ring-2 focus:ring-sunshine disabled:opacity-60 ${
            onDark
              ? "border-white/25 bg-white/10 text-white placeholder:text-white/50"
              : "border-border bg-white text-ink placeholder:text-slate/50"
          }`}
        />

        <Button
          type="submit"
          disabled={disabled || status === "submitting"}
          className="shrink-0 bg-ink px-6 py-2.5 text-base font-bold text-white hover:bg-hero-blue disabled:opacity-60"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
              {cta}
            </>
          )}
        </Button>
      </form>

      {/* Configuration gap is stated plainly rather than hidden behind a fake success. */}
      {disabled && (
        <p
          className={`mt-2 text-sm ${onDark ? "text-sunshine" : "text-hero-blue"}`}
          role="status"
        >
          Sign-ups aren’t connected yet. Set <code>VITE_KIT_FORM_ID</code> to enable this form.
        </p>
      )}

      {status === "error" && error && (
        <p className="mt-2 text-sm font-medium text-destructive" role="alert">
          {error}
        </p>
      )}

      {note && !disabled && (
        <p className={`mt-2 text-sm ${onDark ? "text-white/70" : "text-slate/80"}`}>{note}</p>
      )}
    </div>
  );
};

export default EmailCapture;
