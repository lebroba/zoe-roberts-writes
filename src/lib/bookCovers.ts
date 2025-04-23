import i18n from '../i18n';

// Book cover interface
export interface BookCover {
  id: string;
  title: string;
  coverImages: {
    [key: string]: string;
  };
  defaultCover: string;
}

// Book covers data
export const bookCovers: BookCover[] = [
  {
    id: 'power-up-your-mind',
    title: 'Power-Up Your Mind',
    coverImages: {
      en: '/book-covers/en/power-up-your-mind.png',
      es: '/book-covers/es/power-up-your-mind.png',
      fr: '/book-covers/fr/power-up-your-mind.png',
      it: '/book-covers/it/power-up-your-mind.png',
      pt: '/book-covers/pt/power-up-your-mind.png',
    },
    defaultCover: '/lovable-uploads/95471984-914d-4073-a844-8c979dccba59.png',
  },
];

/**
 * Get the book cover image URL based on the current language
 * @param bookId The ID of the book
 * @returns The URL of the book cover image for the current language
 */
export const getBookCoverByLanguage = (bookId: string): string => {
  const currentLanguage = i18n.language?.split('-')[0] || 'en';
  const book = bookCovers.find((book) => book.id === bookId);
  
  if (!book) {
    console.warn(`Book with ID ${bookId} not found`);
    return '';
  }

  // Check if we have a cover for the current language
  if (book.coverImages[currentLanguage]) {
    return book.coverImages[currentLanguage];
  }
  
  // Fallback to the default cover
  return book.defaultCover;
};