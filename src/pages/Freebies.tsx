import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Bookmark, Download, Mail } from "lucide-react";
import { motion } from "framer-motion";
import MindsetQuiz from "@/components/MindsetQuiz";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import NewsletterBanner from "@/components/NewsletterBanner";

// Define animation variants outside of components so both can use them
const itemAnimation = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0
  }
};
const Freebies = () => {
  const freebieItems = [{
    id: 1,
    title: "Sample Chapter: The Echo of Silence",
    description: "Read the first chapter of Zoe's latest novel and immerse yourself in the world of Eliza Wilkes as she discovers a mysterious diary in her grandmother's attic.",
    type: "Sample Chapter",
    fileType: "PDF",
    fileSize: "1.2 MB",
    icon: <BookOpen className="h-5 w-5" />,
    downloadLink: "#"
  }, {
    id: 2,
    title: "Character Development Worksheet",
    description: "A worksheet used by Zoe when developing complex characters for her novels. Perfect for aspiring writers looking to flesh out their own characters.",
    type: "Writing Resource",
    fileType: "PDF",
    fileSize: "0.8 MB",
    icon: <FileText className="h-5 w-5" />,
    downloadLink: "#"
  }, {
    id: 3,
    title: "Literary Gardens Journal Pages",
    description: "Beautiful journal pages inspired by the gardens described in 'Whispers in the Garden.' Perfect for journaling your thoughts or garden plans.",
    type: "Journal Resource",
    fileType: "PDF",
    fileSize: "1.5 MB",
    icon: <Bookmark className="h-5 w-5" />,
    downloadLink: "#"
  }, {
    id: 4,
    title: "Children's Activity Sheets",
    description: "Fun and educational activity sheets inspired by Zoe's children's book 'The Moonlight Adventurers.' Includes coloring pages, word searches, and more.",
    type: "Activity Sheets",
    fileType: "PDF",
    fileSize: "2.3 MB",
    icon: <FileText className="h-5 w-5" />,
    downloadLink: "#"
  }, {
    id: 5,
    title: "The Memory Collector: Exclusive Preview",
    description: "An exclusive sneak peek at Zoe's upcoming novel, not available anywhere else. Get a taste of what's coming next from your favorite author.",
    type: "Exclusive Preview",
    fileType: "PDF",
    fileSize: "1.7 MB",
    icon: <BookOpen className="h-5 w-5" />,
    downloadLink: "#"
  }, {
    id: 6,
    title: "Reader's Discussion Guide",
    description: "A comprehensive discussion guide for book clubs reading 'The Lighthouse Keeper's Daughter.' Includes thought-provoking questions and thematic analysis.",
    type: "Book Club Resource",
    fileType: "PDF",
    fileSize: "0.9 MB",
    icon: <FileText className="h-5 w-5" />,
    downloadLink: "#"
  }];
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Featured freebie section with email capture
  const featuredFreebie = {
    title: "Power of Habit: Chapter 1",
    description: "Learn how to build good habits and break bad ones with this sample chapter from Zoe's bestselling non-fiction book.",
    imageSrc: "/lovable-uploads/a7480295-0f37-484a-b740-8d543d10d754.png",
    fileType: "PDF",
    fileSize: "1.5 MB"
  };
  return <Layout>
      <div className="bg-cream py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-playfair font-bold text-navy mb-8 text-center">Freebies</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-16">
            Explore and download exclusive content from Zoe Roberts, including sample chapters, 
            writing resources, journal pages, and activity sheets.
          </p>
          
          {/* Featured Freebie with Email Capture */}
          <div className="mb-20">
            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <h2 className="text-3xl font-playfair font-bold text-navy mb-4">
                    Download Chapter 1 of "Power of Habit"
                  </h2>
                  <p className="text-gray-700 mb-6">
                    My #1 New York Times bestselling book on how to build good habits and break bad ones.
                    Enter your email below to receive the first chapter completely free.
                  </p>
                  <EmailCaptureForm freebieTitle={featuredFreebie.title} />
                  <p className="text-xs text-gray-500 mt-2">
                    Your email is safe with us. We'll never share your information.
                  </p>
                </div>
                <div className="md:w-1/2">
                  
                </div>
              </div>
            </div>
          </div>
          
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
          <h2 className="text-3xl font-playfair font-bold text-navy mb-6 text-center">More Free Resources</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
            Browse through these free downloadable resources to enhance your reading experience 
            and get a taste of Zoe's literary world.
          </p>
          
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={container} initial="hidden" animate="show">
            {freebieItems.map(item => <FreebieCard key={item.id} freebie={item} />)}
          </motion.div>
          
          <div className="mt-16">
            <NewsletterBanner />
          </div>
        </div>
      </div>
    </Layout>;
};

// Email capture form component
const EmailCaptureForm = ({
  freebieTitle
}: {
  freebieTitle: string;
}) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simple validation
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // In a real application, this would connect to an email service
    // Simulate an API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: `Check your email for the download link to "${freebieTitle}".`
      });
      setIsSubmitting(false);
      setEmail("");
    }, 1000);
  };
  return <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} required className="flex-grow" />
        <Button type="submit" className="bg-gold hover:bg-soft-gold text-navy font-medium" disabled={isSubmitting}>
          {isSubmitting ? <span className="flex items-center">
              <span className="animate-spin mr-2 h-4 w-4 border-2 border-navy border-t-transparent rounded-full" />
              Processing...
            </span> : <span className="flex items-center">
              <Download className="mr-2 h-4 w-4" />
              Download Free Chapter
            </span>}
        </Button>
      </div>
    </form>;
};
const FreebieCard = ({
  freebie
}: {
  freebie: any;
}) => {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const {
    toast
  } = useToast();
  const handleDownloadClick = () => {
    setShowEmailForm(true);
  };
  const handleEmailSubmit = (email: string) => {
    // Simple validation
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    // In a real application, this would connect to an email service
    toast({
      title: "Success!",
      description: `Check your email for the download link to "${freebie.title}".`
    });
    setShowEmailForm(false);
  };
  return <motion.div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300" variants={itemAnimation}>
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
          
          {!showEmailForm ? <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                <span>{freebie.fileType} • {freebie.fileSize}</span>
              </div>
              <Button onClick={handleDownloadClick} className="bg-navy hover:bg-light-navy text-white">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div> : <div className="mt-2">
              <div className="flex items-center gap-2">
                <Input type="email" placeholder="Your email address" className="text-sm" onKeyDown={e => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleEmailSubmit((e.target as HTMLInputElement).value);
              }
            }} />
                <Button onClick={() => {
              const input = document.querySelector('input[type="email"]') as HTMLInputElement;
              handleEmailSubmit(input.value);
            }} className="bg-gold hover:bg-soft-gold text-navy" size="sm">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-1">Enter your email to receive the download link</p>
            </div>}
        </div>
      </div>
    </motion.div>;
};
export default Freebies;