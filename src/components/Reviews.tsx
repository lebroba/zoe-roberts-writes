import React from "react";
import { Star } from "lucide-react";
import { REVIEWS, hasReviews } from "@/content/reviews";

/**
 * Reader reviews from the book's Amazon listing.
 *
 * Renders nothing while the list is empty. That is the honest state until real
 * reviews are transcribed — the generated site filled this section with five
 * invented endorsements attributed to professionals who do not exist.
 */
const Reviews: React.FC = () => {
  if (!hasReviews()) return null;

  return (
    <section className="bg-ink py-16 text-white sm:py-20">
      <div className="container">
        <div className="mb-12 text-center">
          {/* Explicit text-white: the base layer forces text-ink on all headings,
              which is invisible against this section's dark background. */}
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
            What readers say
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-sunshine" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <figure key={i} className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-3 flex gap-0.5" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: 5 }, (_, s) => (
                  <Star
                    key={s}
                    className={`h-4 w-4 ${s < review.rating ? "fill-sunshine text-sunshine" : "text-white/25"}`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              {review.title && (
                <p className="mb-2 font-display font-bold text-sunshine">{review.title}</p>
              )}
              <blockquote className="text-sm leading-relaxed text-white/85">
                {review.quote}
              </blockquote>
              <figcaption className="mt-4 text-sm font-medium text-white/60">
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
