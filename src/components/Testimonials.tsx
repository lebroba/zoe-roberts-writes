
import React from "react";

const testimonials = [
  {
    id: 1,
    quote: "Zoe Roberts writes with astonishing emotional intelligence. Her prose is both elegant and accessible, drawing readers into worlds that feel both foreign and intimately familiar.",
    author: "The New York Times",
  },
  {
    id: 2,
    quote: "Roberts has established herself as one of the most insightful voices of her generation, with an uncanny ability to illuminate the complexities of human relationships.",
    author: "Literary Review",
  },
  {
    id: 3,
    quote: "With each novel, Zoe Roberts demonstrates her mastery of character-driven narratives that resonate long after the final page. Her work is a testament to the enduring power of storytelling.",
    author: "Publishers Weekly",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Critical Acclaim
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-light-navy p-6 rounded-lg shadow-md relative"
            >
              <div className="text-gold text-5xl font-serif absolute top-3 left-3 opacity-20">"</div>
              <p className="text-gray-300 mb-4 relative z-10">
                {testimonial.quote}
              </p>
              <p className="text-gold font-medium italic">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
