import { useCallback, useState } from "react";

export type PostStatus = "idle" | "submitting" | "success" | "error";

/**
 * Inspects a 2xx response body and returns an error message, or null if the
 * body genuinely indicates success.
 *
 * Needed because not every provider signals failure with a non-2xx status —
 * Kit answers 200 with {"status":"failed"}. See lib/kit.ts.
 */
export type ResponseValidator = (body: unknown) => string | null;

interface UseFormPostResult {
  status: PostStatus;
  /** Human-readable failure reason. Set only when status is "error". */
  error: string | null;
  submit: (payload: Record<string, string>) => Promise<void>;
  reset: () => void;
  /** True when the endpoint is not configured, so the form cannot be submitted. */
  disabled: boolean;
}

/**
 * Posts a form payload to a third-party endpoint and reports what actually
 * happened.
 *
 * The generated site displayed "Message sent!" unconditionally while
 * discarding the submission — all four of its forms did this. The rules here
 * exist to make that class of bug impossible:
 *
 *   - success requires a 2xx AND, where a validator is supplied, a body that
 *     does not report failure
 *   - any failure surfaces a real message, never a success state
 *   - a missing endpoint disables the form instead of faking a send
 */
export function useFormPost(
  endpoint: string | null,
  validate?: ResponseValidator,
): UseFormPostResult {
  const [status, setStatus] = useState<PostStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  const submit = useCallback(
    async (payload: Record<string, string>) => {
      if (!endpoint) {
        setStatus("error");
        setError("This form isn’t connected yet. Please try again later.");
        return;
      }

      setStatus("submitting");
      setError(null);

      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        });

        // Read the body once; both paths below may need it.
        let body: unknown = null;
        try {
          body = await response.json();
        } catch {
          // Non-JSON response. Left as null.
        }

        if (!response.ok) {
          // Formspree: { errors: [{ code, message }] }. Kit uses a different
          // shape but answers 200, so it is handled by the validator instead.
          const b = body as { errors?: unknown; error?: string; message?: string } | null;
          let detail = "";
          if (Array.isArray(b?.errors)) {
            detail = (b.errors as { message?: string }[])
              .map((e) => e.message)
              .filter(Boolean)
              .join(", ");
          }
          if (!detail) detail = b?.error ?? b?.message ?? "";
          setStatus("error");
          setError(detail || `Something went wrong (${response.status}).`);
          return;
        }

        // A 2xx is not sufficient on its own for every provider.
        const bodyError = validate?.(body) ?? null;
        if (bodyError) {
          setStatus("error");
          setError(bodyError);
          return;
        }

        setStatus("success");
      } catch {
        // Network failure, DNS, offline, blocked by an extension.
        setStatus("error");
        setError("Couldn’t reach the server. Check your connection and try again.");
      }
    },
    [endpoint, validate],
  );

  const reset = useCallback(() => {
    setStatus("idle");
    setError(null);
  }, []);

  return { status, error, submit, reset, disabled: endpoint === null };
}
