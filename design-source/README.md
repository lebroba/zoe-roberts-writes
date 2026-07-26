# Design source files

Editable originals for artwork that ships on the site. **Not served to the
public** — anything in `public/` is downloadable by anyone; this directory is
not, and is never bundled into the build.

## What belongs here

| File | Exports to |
|---|---|
| The daily journal (Affinity, `.afdesign` / `.afpub`) | `public/freebies/power_up_journal_sample.pdf` |

## Why this directory exists

The journal PDF was exported three times in one afternoon, and each export
fixed some defects while silently reverting others:

1. First export: footer read `WWW.ZOESBOOKS.NET`, a domain the site does not
   own. Also "WHO WOULD PROUD OF ME" (missing "be") and a duplicated
   "WHAT ARE MY GOALS FOR TODAY?" panel on page 3.
2. Second export: domain corrected to `.COM`, other two defects unchanged.
3. Third export: the two text defects fixed — but the domain **reverted** to
   `.NET`, and a new "I DONT FAIL" typo appeared.
4. Fourth export: all four correct.

The cause is almost certainly more than one copy of the source file. Keeping a
single authoritative original here, in version control, is what stops a fixed
defect from coming back.

## Before exporting

Check all four, every time. The text is outlined vector, so none of it can be
corrected after export — it has to be right in the source.

- [ ] Page 1 footer reads `WWW.ZOESBOOKS.COM`
- [ ] Page 1: "WHO WOULD **BE** PROUD OF ME…"
- [ ] Page 3: "I **DON'T** FAIL" (apostrophe present)
- [ ] Page 3: the two panels differ — no repeated "WHAT ARE MY GOALS FOR TODAY?"

## After exporting

Overwrite `public/freebies/power_up_journal_sample.pdf` and commit both the
source and the export together, so they never drift apart.

Note that a fresh Affinity export resets the PDF metadata — title returns to
the CorelDraw filename and the author field to the exporting machine's user.
Both are visible to every subscriber in Document Properties, so they get
rewritten to the book title and "Zoe Roberts" after each export.
