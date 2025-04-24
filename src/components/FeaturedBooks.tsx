
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import LanguageAwareBookCover from "./LanguageAwareBookCover";
import { getAmazonLogoByLanguage } from "@/lib/amazonLogos";

const FeaturedBooks = () => {
  const { t } = useTranslation();
  const featuredBooks = [
    {
      id: 1,
      bookId: "power-up-your-mind",
      title: "Power-Up Your Mind",
      coverImage: "/lovable-uploads/95471984-914d-4073-a844-8c979dccba59.png",
      description: t('books.powerUpYourMindDescription'),
      year: "2025",
      purchaseLink: "https://a.co/d/52Rw8Dw"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading text-center mx-auto">{t('books.featuredTitle')}</h2>
          <p className="max-w-2xl mx-auto text-gray-700 mt-4">
            {t('books.featuredDescription')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featuredBooks.map((book) => (
            <motion.div 
              key={book.id} 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="w-full bg-white/80 backdrop-blur-sm border border-gold/20 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="book-cover mb-6 relative group">
                    <div className="absolute inset-0 bg-gold/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <LanguageAwareBookCover
                      bookId={book.bookId}
                      altText={`${book.title} book cover`}
                      className="w-full max-w-[200px] transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="mt-4 flex justify-center pb-[10px]">
                      <a 
                        href={book.purchaseLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block"
                        aria-label="Available at Amazon"
                      >
                        <img
                          src={getAmazonLogoByLanguage()}
                          alt={t('books.availableAtAmazon')}
                          className="min-w-[72px] max-w-[160px]"
                        />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-navy mb-2">{book.title}</h3>
                  <p className="text-sm text-gold font-medium mb-3">{book.year}</p>
                  <p className="text-center text-gray-700 mb-6 text-sm">{book.description}</p>
                  <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white transition-colors duration-300">
                    <Link to="/books">{t('books.readMore')}</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button asChild className="bg-navy hover:bg-light-navy text-white px-8 py-6 rounded-full transition-all duration-300 transform hover:scale-105">
            <Link to="/books" className="text-base">{t('books.viewAll')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
