
import React from "react";

const testimonials = [
  {
    id: 1,
    quote: "A game-changer for tweens and their parents! As a parent and school counselor, I've been waiting for a book just like Power-Up Your Mind. It speaks directly to tweens in a way that's engaging, encouraging, and most importantly—empowering. The strategies are age-appropriate, easy to implement, and filled with heart. I especially loved how it reframes failure as part of learning. I'll be recommending this to every family I work with!",
    author: "Melissa J. Klein, M.Ed., School Counselor and Parent of Two",
  },
  {
    id: 2,
    quote: "Every tween deserves this book on their shelf. This is more than a guide—it's a toolbox of confidence. My daughter devoured it and immediately started shifting her language from 'I'm not good at this' to 'I'm still learning.' Watching her begin to believe in her ability to grow has been one of the most rewarding experiences of my life. This book gives kids the power to rewrite their inner story.",
    author: "Dana K., Parent of a 10-year-old",
  },
  {
    id: 3,
    quote: "An essential resource for fostering resilience and grit. Power-Up Your Mind captures the essence of what tweens need today: confidence, compassion for themselves, and the courage to try again. The activities are fun and practical, and the growth mindset vocabulary is brilliant for helping kids internalize powerful new habits of thought. I plan to use this book in my social-emotional learning groups moving forward.",
    author: "Dr. Alex Raines, PsyD, Child Psychologist",
  },
  {
    id: 4,
    quote: "A fresh, empowering approach to mindset education. This book doesn't just teach concepts—it transforms how tweens think about learning and mistakes. My son loved the superhero theme, and I loved how naturally it led us into meaningful conversations. If you're a parent, teacher, or mentor who wants to help kids embrace challenges and believe in themselves, this book is a treasure.",
    author: "Jessica Morales, 5th Grade Teacher and Youth Mentor",
  },
  {
    id: 5,
    quote: "Finally—a growth mindset book that tweens actually want to read! As an educator, I've seen my fair share of 'self-help' books for kids, but Power-Up Your Mind stands out because it truly understands its audience. It's colorful, positive, and never talks down to kids. The section on goal-setting and self-talk is worth the price alone. Highly recommended for classrooms, families, and anyone who believes in building strong, confident young minds.",
    author: "Robert T. Fields, MS, Educational Psychologist",
  },
];

const Testimonials = () => {
  // Split testimonials for top and bottom rows
  const topRowTestimonials = testimonials.slice(0, 3);
  const bottomRowTestimonials = testimonials.slice(3);

  return (
    <section className="py-16 bg-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Critical Acclaim
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
                {testimonial.quote}
              </p>
              <p className="text-gold font-medium italic">— {testimonial.author}</p>
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
