
import React from "react";
import Layout from "@/components/Layout";
import BookCard from "@/components/BookCard";

const Books = () => {
  // Updated book data with the children's book
  const books = [
    {
      id: 1,
      title: "Power-Up Your Mind: Growth Mindset Strategies and Activities for Tweens",
      coverImage: "/lovable-uploads/95471984-914d-4073-a844-8c979dccba59.png",
      description: "An empowering guide that will take you on a journey to unleashing the superhero inside your mind! With this book, you'll learn that every mistake is just a stepping stone on your path to greatness. Creatively tackle challenges and boost your confidence while transforming \"I can't\" into \"I just haven't yet.\"\n\nThis comprehensive introduction to growth mindset helps children aged 8-12 build their mental muscle, embrace the power of making mistakes, learn from others, set achievable goals, and master positive self-talk.",
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
