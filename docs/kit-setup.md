# Kit configuration — zoesbooks.com

Task instructions for completing the Kit (formerly ConvertKit) setup for
zoesbooks.com. Written to be executed by someone — or something — with browser
access to the Kit account.

The site code is already finished and deployed. Nothing here requires a code
change. Every step below happens inside Kit's web UI.

---

## Values you will need

| Thing | Value |
|---|---|
| Kit form ID | `9728891` |
| Kit form endpoint | `https://app.kit.com/forms/9728891/subscriptions` |
| Custom field to create | `source` (lowercase, exactly) |
| Journal PDF URL | `https://zoesbooks.com/freebies/power_up_journal_sample.pdf` |
| Live site | `https://zoesbooks.com` |

## Before starting

- You need to be logged into the Kit account that owns form `9728891`.
- **Kit's UI changes.** The navigation below was correct as of July 2026. If a
  menu does not match, look for the equivalent by name rather than guessing at
  a path. If you cannot find it, stop and say so — do not create something that
  looks similar.
- **Do not delete any subscriber until Task 1 is finished.** Kit adds custom
  fields through a subscriber's profile, so at least one subscriber must exist.

---

## Task 1 — Create the `source` custom field

**Why:** the site tags every sign-up with which page it came from
(`home-hero`, `free-guide-page`, `quiz-result`). Kit accepts that value and
**silently discards it** unless a custom field named `source` exists. Without
this, the list grows with no attribution and there is no way to tell which page
converts.

1. Go to **Grow → Subscribers**.
2. Click any subscriber to open their profile. (Test records named
   `zoesbooks-smoketest…@example.com` will do.)
3. Find **Add a new field**.
4. Name it exactly `source` — lowercase, no spaces, no capital S.
5. Save (**Update Subscriber**, or equivalent).

**Verify:** open a *different* subscriber. The `source` field should now appear
on their profile too, empty. Custom fields apply account-wide, so if it only
shows on one subscriber, it did not save.

---

## Task 2 — Confirm the incentive email is on

**Why:** this single email does two jobs — it confirms the address
(double opt-in) and it delivers the journal.

1. Go to **Grow → Landing Pages & Forms** and open form `9728891`.
2. Open the form's **Settings**, then the **Incentive** section.
3. Confirm **"Send incentive email"** is enabled.
4. Confirm **"Auto-confirm new subscribers" is OFF.** If it is on, the
   confirmation step is skipped, the incentive email never sends, and nobody
   receives the journal. Kit itself recommends against it.

---

## Task 3 — Point the confirmation at the journal

1. In the same **Incentive** settings, find **"After confirming, redirect to"**.
2. Set it to exactly:
   ```
   https://zoesbooks.com/freebies/power_up_journal_sample.pdf
   ```
3. **Do not also attach the PDF as a file.** Pick one delivery route. Both
   means subscribers receive it twice.

---

## Task 4 — Rewrite the incentive email

Kit's default text is generic and mentions neither Zoe nor the journal.
Replace it.

**Subject:** `One click, and your journal is on the way`

**Body:**

> Hi,
>
> Thanks for asking for **My Daily Journal**. One quick step first — click the
> button below to confirm your email address. That's how we make sure we're
> only sending to people who actually asked.
>
> **[Confirm and get the journal]**
>
> Once you confirm, the journal opens straight away. Three printable pages: a
> daily power-level check-in, gratitude and goal prompts, and space to work
> through what felt hard today.
>
> Print it, stick it on the fridge, and let them fill it in before bed. It
> works best done together, at least at first.
>
> — Zoe
>
> *Zoe Roberts writes growth mindset books for tweens and teens. Power-Up Your
> Mind is out now.*

Keep Kit's confirmation button/merge tag intact — that link is what confirms
the subscription. Rewriting the text around it is fine; removing the button
breaks the whole flow.

---

## Task 5 — Set the sender's postal address

**Why:** CAN-SPAM requires a physical address in every marketing email, and it
must be one where mail can actually be received. Kit will not send without one.

Kit offers a **free P.O. Box address** for this purpose — use it rather than a
home address. Look under account/email settings for the address field; Kit's
help centre documents it under "Alternatives for your physical address".

Do not invent an address. The previous version of this website listed
"P.O. Box 1234, Seattle, WA", which was fabricated, and removing that kind of
thing is the reason this site was rebuilt.

---

## Task 6 — Clean up the test data

Only after Tasks 1–5 are done.

Delete these subscribers (all created during integration testing, all
unconfirmed):

- `zoesbooks-smoketest@example.com`
- `zoesbooks-smoketest2@example.com`
- `zoesbooks-smoketest3@example.com`
- `prod-smoketest@example.com`

---

## Final verification — end to end

This is the part no one has been able to test, because it needs a real inbox.

1. Go to `https://zoesbooks.com` and enter a **real** email in the hero form.
2. The page should show **"Check your inbox."**
3. The confirmation email should arrive. **Check the spam folder** — a new Kit
   account has no sending reputation, so early mail often lands there.
4. Click the confirmation link.
5. The journal PDF should open.
6. In Kit, the new subscriber should show `source` = `home-hero`.

Then repeat twice more to confirm all three capture points work and are
distinguishable:

| Where | Expected `source` |
|---|---|
| Home page hero form | `home-hero` |
| `/free-guide` sign-up card | `free-guide-page` |
| Quiz result email box | `quiz-result` |

If all three record distinct values, the funnel is fully instrumented. If the
`source` column is empty, Task 1 did not take effect.

---

## Known-good facts (already verified — do not re-test)

These were confirmed by live request against the production site, so if
something fails, the cause is in the Kit configuration and not in the site:

- Form `9728891` exists and accepts submissions; a valid POST returns
  `{"status":"success"}`.
- The site posts `email_address` plus `fields.source`, which is the shape Kit
  requires for custom fields.
- The PDF is live at the URL above, returns HTTP 200 with `application/pdf`,
  and is byte-identical to the reviewed copy.
- All three capture points on the live site are enabled and submitting.
- `robots.txt` disallows `/freebies/`, so the PDF will not appear in search
  results. It is not private — anyone with the link can fetch it, which is
  normal and is what makes the redirect work.

## What is out of scope

Do not change the form ID, the endpoint, or anything in the site's code. If a
Kit setting appears to require a code change, stop and report it instead.
