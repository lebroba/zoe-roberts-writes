
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeaturedBooks = () => {
  // Updated featured books with the children's book as the first item
  const featuredBooks = [
    {
      id: 1,
      title: "Power-Up Your Mind",
      coverImage: "/lovable-uploads/95471984-914d-4073-a844-8c979dccba59.png",
      description: "An empowering guide that helps children aged 8-12 develop a growth mindset to boost confidence and creativity.",
      year: "2023"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading text-center mx-auto">Featured Books</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            Discover Zoe Roberts' most celebrated works, from growth mindset guides for tweens to novels where complex characters navigate the depths of human experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredBooks.map((book) => (
            <div key={book.id} className="flex flex-col items-center">
              <div className="book-cover mb-4">
                <img 
                  src={book.coverImage} 
                  alt={`${book.title} book cover`} 
                  className="w-full max-w-[200px] transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-playfair font-bold text-navy mb-2">{book.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{book.year}</p>
              <p className="text-center text-gray-700 mb-4 text-sm">{book.description}</p>
              <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                <Link to="/books">Read More</Link>
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-navy hover:bg-light-navy text-white">
            <Link to="/books">View All Books</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
