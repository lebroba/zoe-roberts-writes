
import React from "react";
import { Button } from "@/components/ui/button";

interface BookCardProps {
  title: string;
  coverImage: string;
  description: string;
  publishYear: string;
  purchaseLink: string;
}

const BookCard: React.FC<BookCardProps> = ({
  title,
  coverImage,
  description,
  publishYear,
  purchaseLink,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 mb-12">
      <div className="w-full md:w-1/3 flex justify-center">
        <div className="book-cover">
          <img
            src={coverImage}
            alt={`${title} book cover`}
            className="w-full max-w-[250px] transition-transform duration-300"
          />
        </div>
      </div>
      <div className="w-full md:w-2/3">
        <h3 className="text-2xl font-playfair font-bold text-navy mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{publishYear}</p>
        <p className="mb-6 text-gray-800">{description}</p>
        <Button
          asChild
          className="bg-navy hover:bg-light-navy text-white"
        >
          <a href={purchaseLink} target="_blank" rel="noopener noreferrer">
            Purchase Now
          </a>
        </Button>
      </div>
    </div>
  );
};

export default BookCard;
