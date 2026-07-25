import React from "react";
import { useTranslation } from "react-i18next";
import { BOOK } from "@/content/book";
import type { Language } from "@/content/site";

interface BookCoverProps {
  className?: string;
  /** Constrains height so the cover cannot run away with the layout.
      Zoe's note on the current site was literally "shorten the image". */
  size?: "sm" | "md" | "lg";
}

const SIZES = {
  sm: "max-h-48",
  md: "max-h-72",
  lg: "max-h-[26rem]",
} as const;

/**
 * The book cover in the current language, falling back to English.
 *
 * Replaces lib/bookCovers.ts, which duplicated the cover map that now lives in
 * content/book.ts and pointed its fallback at a lovable-uploads copy of the
 * same image.
 */
const BookCover: React.FC<BookCoverProps> = ({ className = "", size = "md" }) => {
  const { i18n } = useTranslation();
  const lang = (i18n.language?.split("-")[0] ?? "en") as Language;
  const src = BOOK.coverImages[lang] ?? BOOK.defaultCover;

  return (
    <img
      src={src}
      alt={`Cover of ${BOOK.title}: ${BOOK.subtitle} by Zoe Roberts`}
      width={1000}
      height={1500}
      loading="eager"
      className={`${SIZES[size]} w-auto rounded-md shadow-xl ${className}`}
    />
  );
};

export default BookCover;
