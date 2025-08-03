
import React from "react";
import { useTranslation } from "react-i18next";

const testimonials = [
  {
    id: 1,
    quoteKey: "testimonials.testimonial1.quote",
    authorKey: "testimonials.testimonial1.author",
  },
  {
    id: 2,
    quoteKey: "testimonials.testimonial2.quote",
    authorKey: "testimonials.testimonial2.author",
  },
  {
    id: 3,
    quoteKey: "testimonials.testimonial3.quote",
    authorKey: "testimonials.testimonial3.author",
  },
  {
    id: 4,
    quoteKey: "testimonials.testimonial4.quote",
    authorKey: "testimonials.testimonial4.author",
  },
  {
    id: 5,
    quoteKey: "testimonials.testimonial5.quote",
    authorKey: "testimonials.testimonial5.author",
  },
];

const Testimonials = () => {
  const { t } = useTranslation();
  
  // Split testimonials for top and bottom rows
  const topRowTestimonials = testimonials.slice(0, 3);
  const bottomRowTestimonials = testimonials.slice(3);

  return (
    <section className="py-16 bg-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            {t('testimonials.title')}
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
        </div>
        
        {/* Top row - 3 testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {topRowTestimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-light-navy p-6 rounded-lg shadow-md relative"
            >
              <div className="text-gold text-5xl font-serif absolute top-3 left-3 opacity-20">"</div>
              <p className="text-gray-300 mb-4 relative z-10">
                {t(testimonial.quoteKey)}
              </p>
              <p className="text-gold font-medium italic">— {t(testimonial.authorKey)}</p>
            </div>
          ))}
        </div>
        
        {/* Bottom row - 2 testimonials centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {bottomRowTestimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-light-navy p-6 rounded-lg shadow-md relative"
            >
              <div className="text-gold text-5xl font-serif absolute top-3 left-3 opacity-20">"</div>
              <p className="text-gray-300 mb-4 relative z-10">
                {t(testimonial.quoteKey)}
              </p>
              <p className="text-gold font-medium italic">— {t(testimonial.authorKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
