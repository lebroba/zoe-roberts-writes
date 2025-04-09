import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Hero = () => {
  return <div className="relative bg-cream py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-navy mb-4 leading-tight">
              Empowering <span className="text-gold">Minds</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-md mx-auto md:mx-0">
              Explore the inspirational books of author Zoe Roberts, where growth mindset strategies and compelling stories help readers of all ages unlock their potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild className="bg-navy hover:bg-light-navy text-white">
                <Link to="/books">Explore Books</Link>
              </Button>
              <Button asChild variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                <Link to="/about">About Zoe</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gold/20 blur-lg"></div>
              <img alt="Zoe Roberts" className="relative z-10 rounded-lg shadow-lg max-w-full h-auto object-cover" src="/lovable-uploads/f3473e03-4453-45cc-8bf3-cbdc7badfba1.jpg" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream/80 to-transparent"></div>
    </div>;
};
export default Hero;