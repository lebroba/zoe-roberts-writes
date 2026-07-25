import React from "react";
import { REVIEWS, hasReviews } from "@/content/reviews";

/**
 * Reader reviews from the book's Amazon listing.
 *
 * Renders nothing while the list is empty, which is its state today — so no
 * reviews section exists on the live site, exactly as the design requires.
 * It is mounted rather than deleted so that filling in content/reviews.ts is
 * the only step needed when real reviews are transcribed.
 *
 * The generated site filled this space with five invented endorsements
 * attributed to professionals who do not exist.
 */
const Reviews: React.FC = () => {
  if (!hasReviews()) return null;

  return (
    <section className="section-y border-t border-divider bg-neutral-100">
      <div className="shell">
        <p className="eyebrow">What readers say</p>
        <h2
          className="mt-3 font-heading text-text"
          style={{ fontSize: "clamp(28px,3.6vw,40px)", letterSpacing: "-0.015em" }}
        >
          From the reviews
        </h2>

        <div className="auto-grid mt-10 gap-6">
          {REVIEWS.map((review, i) => (
            <figure
              key={i}
              className="rounded-lg border border-divider bg-bg"
              style={{ padding: "28px 30px" }}
            >
              <p className="text-accent-500" aria-label={`${review.rating} out of 5 stars`}>
                {"★".repeat(review.rating)}
                <span className="text-neutral-400">{"★".repeat(5 - review.rating)}</span>
              </p>
              {review.title && (
                <h3 className="mt-3 font-heading text-[20px] text-text">{review.title}</h3>
              )}
              <blockquote className="mt-2 text-base text-neutral-800">{review.quote}</blockquote>
              <figcaption className="mt-4 text-sm text-neutral-700">
                — {review.author}
                <span className="sr-only"> (review from Amazon)</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
