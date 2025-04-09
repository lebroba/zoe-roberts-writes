
import React from "react";
import Layout from "@/components/Layout";
import BookCard from "@/components/BookCard";

const Books = () => {
  // Updated book data with the expanded children's book description
  const books = [
    {
      id: 1,
      title: "Power-Up Your Mind: Growth Mindset Strategies and Activities for Tweens",
      coverImage: "/lovable-uploads/95471984-914d-4073-a844-8c979dccba59.png",
      description: "Supercharge Your Brain Power!\n\nAre you a tween struggling with a fixed mindset? Have you always wanted to have the confidence to learn new skills, set and achieve your goals, and believe in your abilities? If you've been looking for a book that will empower you to develop a growth mindset, then keep reading, you've found the perfect book!\n\nIntroducing Power-Up Your Mind: Growth Mindset Strategies for Tweens, an empowering guide that will take you on a journey to unleashing the superhero inside your mind! With this book, you'll learn that every misstep is just a stepping stone on your path to greatness. Gracefully tackle challenges and boost your confidence while transforming \"I can't\" into \"I just haven't yet.\"\n\nInside Power-Up Your Mind, you'll discover:\n\n• A comprehensive introduction to a growth mindset including how it differs from a fixed mindset, fun ways to build your brain muscle, and how to think outside the box to overcome challenges.\n• How to embrace the power of making mistakes, own your actions, and celebrate every small win like it's a victory dance!\n• Methods you can start implementing to learn from others, ask for help, and adopt the art of asking the right questions!\n• Strategies that will enable you to set achievable goals that keep you motivated, master the art of positive self-talk, and use your creativity for solutions.\n• A bonus chapter packed with growth mindset vocabulary and games that you can enjoy with your loved ones.\n\nIt's time to turn your fears into sheer determination! After reading this book, you'll finally have the confidence to transform every setback into a comeback. Packed with fun, simple exercises, and effective tips, you're about to craft the ultimate growth mindset!\n\nGrab your cape, dust off your notebook, and let's embark on the exhilarating quest of mind-powering adventures that guarantee you'll emerge as the hero of your own story! Read Power-Up Your Mind now!",
      publishYear: "2023",
      purchaseLink: "https://a.co/d/52Rw8Dw",
      category: "Children's Books, Growth Mindset"
    },
    {
      id: 2,
      title: "The Echo of Silence",
      coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&h=600&q=80",
      description: "A haunting tale of loss, memory, and redemption set against the backdrop of a small coastal town. When Eliza returns to her childhood home after twenty years, she must confront the ghosts of her past and the silence that has shaped her life.\n\nWith lyrical prose and deep psychological insight, this novel explores how the echoes of trauma reverberate through generations and the healing power of confronting long-buried truths.",
      publishYear: "2021",
      purchaseLink: "https://www.amazon.com",
      category: "Fiction, Literary Fiction"
    },
    {
      id: 3,
      title: "Whispers in the Garden",
      coverImage: "https://images.unsplash.com/photo-1575123750793-3732d09e4d0e?auto=format&fit=crop&w=400&h=600&q=80",
      description: "An intimate portrait of three generations of women and the garden that binds their stories together. Through the changing seasons of one pivotal year, grandmother, mother, and daughter tend to the same plot of earth while navigating the complexities of their relationships with each other.\n\nA meditation on growth, legacy, and the wisdom that blooms alongside the flowers, this novel celebrates the subtle ways we nurture each other and ourselves.",
      publishYear: "2019",
      purchaseLink: "https://www.amazon.com",
      category: "Fiction, Family Drama"
    },
    {
      id: 4,
      title: "The Lost Season",
      coverImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=400&h=600&q=80",
      description: "A compelling drama that explores the unspoken truths within a family during a transformative summer. When the patriarch of the Morrison family falls ill, his three adult children return to the family lake house for what may be their final season together.\n\nAs buried resentments and long-held secrets surface, each family member must decide what to preserve and what to let go. A powerful examination of family dynamics, forgiveness, and the stories we tell ourselves to survive.",
      publishYear: "2017",
      purchaseLink: "https://www.amazon.com",
      category: "Fiction, Family Drama"
    },
  ];

  return (
    <Layout>
      <div className="bg-cream py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-playfair font-bold text-navy mb-8 text-center">Books by Zoe Roberts</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-16">
            Explore Zoe's literary works, from empowering children's books on growth mindset to compelling novels that weave together complex characters and emotional depth.
          </p>
          
          <div className="space-y-16">
            {books.map((book) => (
              <BookCard 
                key={book.id}
                title={book.title}
                coverImage={book.coverImage}
                description={book.description}
                publishYear={book.publishYear}
                purchaseLink={book.purchaseLink}
                category={book.category}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Books;
