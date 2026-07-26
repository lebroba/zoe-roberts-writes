/**
 * Kit (formerly ConvertKit) response handling.
 *
 * Kit's form-subscription endpoint returns **HTTP 200 even when the
 * subscription fails**. Probed against a nonexistent form ID it answers:
 *
 *   HTTP/1.1 200 OK
 *   {"status":"failed","errors":{"fields":["form"],
 *    "messages":["Form Couldn't find a form for this request", ...]}}
 *
 * So HTTP status alone cannot decide success here. Without inspecting the
 * body, a wrong form ID or a rejected address would show "Check your inbox"
 * while nothing was saved — the same silent-failure behaviour this project
 * removed from the generated site.
 *
 * Note the error shape differs from Formspree's: Kit nests `errors` as an
 * object with a `messages` array, Formspree returns `errors` as an array of
 * `{code, message}`.
 */

interface KitErrorBody {
  status?: string;
  errors?: { fields?: string[]; messages?: string[] };
}

/**
 * Returns an error message if the body reports failure, or null if it looks
 * like a successful subscription.
 */
export function validateKitResponse(body: unknown): string | null {
  if (!body || typeof body !== "object") {
    // Endpoint answered 200 with something unparseable. Treat as success
    // rather than blocking a real sign-up on an unexpected shape.
    return null;
  }

  const b = body as KitErrorBody;

  if (b.status === "failed") {
    // Kit repeats the same message once per failing field; de-duplicate.
    const messages = Array.from(new Set(b.errors?.messages ?? []));
    return messages.length > 0
      ? messages.join(" ")
      : "That sign-up didn’t go through. Please try again.";
  }

  // Kit quarantines addresses it suspects of being spam. The request succeeds
  // but no subscriber is created, so telling the visitor to check their inbox
  // would be wrong.
  if (b.status === "quarantined") {
    return "We couldn’t confirm that address automatically. Please try a different email.";
  }

  return null;
}
