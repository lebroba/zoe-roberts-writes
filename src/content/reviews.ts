/**
 * Reader reviews.
 *
 * These must be real and verifiable — quoted from the book's Amazon listing,
 * attributed as Amazon shows them. The generated site shipped five detailed
 * endorsements attributed to invented professionals with invented credentials
 * ("Dr. Alex Raines, PsyD", "Melissa J. Klein, M.Ed.", and others). All removed.
 *
 * Leave this list empty rather than filling it. Every surface that renders
 * reviews hides itself when the list is empty, so an empty file is a safe,
 * honest state — not a broken one.
 */

export interface Review {
  /** Reviewer name exactly as it appears on the source listing. */
  author: string;
  /** 1–5. */
  rating: number;
  /** Review headline, if the source has one. */
  title?: string;
  quote: string;
  /** Where this can be verified. */
  source: "amazon";
}

export const REVIEWS: Review[] = [];

export const hasReviews = (): boolean => REVIEWS.length > 0;

export const averageRating = (): number | null =>
  REVIEWS.length === 0
    ? null
    : REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length;
