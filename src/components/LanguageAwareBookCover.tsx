import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getBookCoverByLanguage } from '@/lib/bookCovers';

interface LanguageAwareBookCoverProps {
  bookId: string;
  altText: string;
  className?: string;
}

const LanguageAwareBookCover: React.FC<LanguageAwareBookCoverProps> = ({
  bookId,
  altText,
  className = '',
}) => {
  const { i18n } = useTranslation();
  const [coverSrc, setCoverSrc] = useState<string>('');

  useEffect(() => {
    // Update the cover source when the language changes
    setCoverSrc(getBookCoverByLanguage(bookId));
  }, [i18n.language, bookId]);

  return (
    <div className="relative">
      <img
        src={coverSrc}
        alt={altText}
        className={className}
        onError={(e) => {
          // If the image fails to load, use the default cover
          const target = e.target as HTMLImageElement;
          console.warn(`Failed to load image: ${target.src}`);
          target.src = '/lovable-uploads/95471984-914d-4073-a844-8c979dccba59.png';
        }}
      />
      {/* Optional: Add a language indicator for non-English languages */}
      {i18n.language !== 'en' && (
        <div className="absolute top-0 right-0 bg-navy text-white px-2 py-1 text-xs rounded-bl-md">
          {i18n.language.toUpperCase()}
        </div>
      )}
    </div>
  );
};

export default LanguageAwareBookCover;