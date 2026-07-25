import React from "react";
import { useTranslation } from "react-i18next";
import { amazonUrl, availableEditions, FORMAT_LABELS } from "@/content/book";
import { getAmazonLogoByLanguage } from "@/lib/amazonLogos";

interface BuyButtonsProps {
  /** Show the "available at Amazon" lockup above the buttons. */
  showLockup?: boolean;
  className?: string;
}

/**
 * Purchase links, one per edition that actually has an ASIN.
 *
 * Paperback and Kindle render as siblings rather than defaulting to one: this
 * is an activity and journal book, so print is the format most parents and
 * effectively all teachers want. An edition without an ASIN is omitted, never
 * rendered as a dead button.
 */
const BuyButtons: React.FC<BuyButtonsProps> = ({ showLockup = true, className = "" }) => {
  const { t } = useTranslation();
  const editions = availableEditions();

  if (editions.length === 0) return null;

  return (
    <div className={className}>
      {showLockup && (
        <img
          src={getAmazonLogoByLanguage()}
          alt={t("book.availableAtAmazon", "Available at Amazon")}
          className="mb-3 h-12 w-auto"
        />
      )}
      <div className="flex flex-wrap gap-3">
        {editions.map((edition) => (
          <a
            key={edition.format}
            href={amazonUrl(edition.asin)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-sunshine px-5 py-2.5 font-display text-base font-bold text-ink shadow-sm transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2"
          >
            {FORMAT_LABELS[edition.format]}
            <span className="sr-only"> — buy on Amazon (opens in a new tab)</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BuyButtons;
