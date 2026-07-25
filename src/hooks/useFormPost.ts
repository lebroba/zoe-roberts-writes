import { useCallback, useState } from "react";

export type PostStatus = "idle" | "submitting" | "success" | "error";

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
 * Posts a form payload to a third-party endpoint (Kit or Formspree) and reports
 * what actually happened.
 *
 * The generated site displayed "Message sent!" unconditionally while discarding
 * the submission — all four of its forms did this. The rules here exist to make
 * that class of bug impossible:
 *
 *   - success is set only on a 2xx response
 *   - any failure surfaces a real message, never a success toast
 *   - a missing endpoint disables the form instead of faking a send
 */
export function useFormPost(endpoint: string | null): UseFormPostResult {
  const [status, setStatus] = useState<PostStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  const submit = useCallback(
    async (payload: Record<string, string>) => {
      if (!endpoint) {
        setStatus("error");
        setError("This form isn't connected yet. Please try again later.");
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

        if (!response.ok) {
          // Formspree returns { errors: [{ message }] }; Kit returns a message.
          let detail = "";
          try {
            const body = await response.json();
            detail =
              body?.errors?.map((e: { message: string }) => e.message).join(", ") ??
              body?.message ??
              "";
          } catch {
            // Non-JSON error body; fall through to the generic message.
          }
          setStatus("error");
          setError(detail || `Something went wrong (${response.status}).`);
          return;
        }

        setStatus("success");
      } catch {
        // Network failure, DNS, offline, blocked by an extension.
        setStatus("error");
        setError("Couldn't reach the server. Check your connection and try again.");
      }
    },
    [endpoint],
  );

  const reset = useCallback(() => {
    setStatus("idle");
    setError(null);
  }, []);

  return { status, error, submit, reset, disabled: endpoint === null };
}
