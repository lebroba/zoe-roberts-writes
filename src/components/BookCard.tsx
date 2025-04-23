
import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

interface BookCardProps {
  title: string;
  coverImage: string;
  description: string;
  publishYear: string;
  purchaseLink: string;
  category?: string;
}

const BookCard: React.FC<BookCardProps> = ({
  title,
  coverImage,
  description,
  publishYear,
  purchaseLink,
  category,
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row gap-6 mb-12">
      <div className="w-full md:w-1/3 flex justify-center">
        <div className="book-cover">
          <img
            src={coverImage}
            alt={`${title} book cover`}
            className="w-full max-w-[250px] transition-transform duration-300"
          />
          <div className="mt-4 flex justify-center">
            <img 
              src="/lovable-uploads/6aa77f68-f503-4d06-b291-4d8c95afca3f.png" 
              alt="Available at Amazon" 
              className="min-w-[90px] max-w-[200px]"
            />
          </div>
        </div>
      </div>
      <div className="w-full md:w-2/3">
        <h3 className="text-2xl font-playfair font-bold text-navy mb-2">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-3">
          <p className="text-sm text-gray-600">{publishYear}</p>
          {category && (
            <>
              <span className="text-sm text-gray-400">•</span>
              <p className="text-sm text-gray-600">{category}</p>
            </>
          )}
        </div>
        <p className="mb-6 text-gray-800 whitespace-pre-line">{description}</p>
        <Button
          asChild
          className="bg-navy hover:bg-light-navy text-white"
        >
          <a href={purchaseLink} target="_blank" rel="noopener noreferrer">
            {t('books.purchaseNow')}
          </a>
        </Button>
      </div>
    </div>
  );
};

export default BookCard;
