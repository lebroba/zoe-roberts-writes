
import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Bookmark, Download } from "lucide-react";
import { motion } from "framer-motion";
import MindsetQuiz from "@/components/MindsetQuiz";

// Define animation variants outside of components so both can use them
const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Freebies = () => {
  const freebieItems = [
    {
      id: 1,
      title: "Sample Chapter: The Echo of Silence",
      description: "Read the first chapter of Zoe's latest novel and immerse yourself in the world of Eliza Wilkes as she discovers a mysterious diary in her grandmother's attic.",
      type: "Sample Chapter",
      fileType: "PDF",
      fileSize: "1.2 MB",
      icon: <BookOpen className="h-5 w-5" />,
      downloadLink: "#"
    },
    {
      id: 2,
      title: "Character Development Worksheet",
      description: "A worksheet used by Zoe when developing complex characters for her novels. Perfect for aspiring writers looking to flesh out their own characters.",
      type: "Writing Resource",
      fileType: "PDF",
      fileSize: "0.8 MB",
      icon: <FileText className="h-5 w-5" />,
      downloadLink: "#"
    },
    {
      id: 3,
      title: "Literary Gardens Journal Pages",
      description: "Beautiful journal pages inspired by the gardens described in 'Whispers in the Garden.' Perfect for journaling your thoughts or garden plans.",
      type: "Journal Resource",
      fileType: "PDF",
      fileSize: "1.5 MB",
      icon: <Bookmark className="h-5 w-5" />,
      downloadLink: "#"
    },
    {
      id: 4,
      title: "Children's Activity Sheets",
      description: "Fun and educational activity sheets inspired by Zoe's children's book 'The Moonlight Adventurers.' Includes coloring pages, word searches, and more.",
      type: "Activity Sheets",
      fileType: "PDF",
      fileSize: "2.3 MB",
      icon: <FileText className="h-5 w-5" />,
      downloadLink: "#"
    },
    {
      id: 5,
      title: "The Memory Collector: Exclusive Preview",
      description: "An exclusive sneak peek at Zoe's upcoming novel, not available anywhere else. Get a taste of what's coming next from your favorite author.",
      type: "Exclusive Preview",
      fileType: "PDF",
      fileSize: "1.7 MB",
      icon: <BookOpen className="h-5 w-5" />,
      downloadLink: "#"
    },
    {
      id: 6,
      title: "Reader's Discussion Guide",
      description: "A comprehensive discussion guide for book clubs reading 'The Lighthouse Keeper's Daughter.' Includes thought-provoking questions and thematic analysis.",
      type: "Book Club Resource",
      fileType: "PDF",
      fileSize: "0.9 MB",
      icon: <FileText className="h-5 w-5" />,
      downloadLink: "#"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <Layout>
      <div className="bg-cream py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-playfair font-bold text-navy mb-8 text-center">Freebies</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-16">
            Explore and download exclusive content from Zoe Roberts, including sample chapters, 
            writing resources, journal pages, and activity sheets.
          </p>
          
          {/* Interactive Quiz Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-playfair font-bold text-navy mb-6 text-center">Mindset Quiz</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-8">
              Take our interactive quiz to discover whether you have a growth or fixed mindset, 
              and receive personalized recommendations based on your results.
            </p>
            <MindsetQuiz />
          </div>
          
          {/* Downloadable Resources Section */}
          <h2 className="text-3xl font-playfair font-bold text-navy mb-6 text-center">Downloadable Resources</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
            Browse through these free downloadable resources to enhance your reading experience 
            and get a taste of Zoe's literary world.
          </p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {freebieItems.map((item) => (
              <FreebieCard key={item.id} freebie={item} />
            ))}
          </motion.div>
          
          <div className="mt-16 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 max-w-2xl mx-auto">
              <h2 className="text-2xl font-playfair font-bold text-navy mb-4">Join My Newsletter</h2>
              <p className="text-gray-700 mb-6">
                Sign up for my newsletter to receive notifications about new freebies, 
                exclusive content, and upcoming book releases.
              </p>
              <Button asChild className="bg-navy hover:bg-light-navy text-white">
                <a href="/contact">Subscribe Now</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const FreebieCard = ({ freebie }: { freebie: any }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
      variants={itemAnimation}
    >
      <div className="flex items-start">
        <div className="bg-soft-gold bg-opacity-20 p-3 rounded-full mr-4">
          {freebie.icon}
        </div>
        <div>
          <span className="inline-block px-2 py-1 text-xs rounded-full bg-navy text-white mb-2">
            {freebie.type}
          </span>
          <h3 className="text-xl font-playfair font-bold text-navy mb-2">{freebie.title}</h3>
          <p className="text-gray-700 mb-4 text-sm">{freebie.description}</p>
          
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              <span>{freebie.fileType} • {freebie.fileSize}</span>
            </div>
            <Button asChild className="bg-navy hover:bg-light-navy text-white">
              <a href={freebie.downloadLink} className="flex items-center">
                <Download className="mr-2 h-4 w-4" />
                Download
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Freebies;
