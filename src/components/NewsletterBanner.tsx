
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const NewsletterBanner = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real application, this would connect to a newsletter service
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive updates on new releases and exclusive content.",
    });
    
    setEmail("");
  };

  return (
    <section className="relative bg-navy text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Join the Reading Circle
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Subscribe to Zoe's newsletter for exclusive content, early access to new releases, and personal reflections.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="px-4 py-2 md:min-w-[300px] bg-light-navy text-white border border-gray-600 rounded focus:outline-none focus:border-gold"
              required
            />
            <Button type="submit" className="bg-gold hover:bg-soft-gold text-navy font-medium">
              Subscribe
            </Button>
          </form>
          
          <p className="text-sm text-gray-400 mt-4">
            Your information will never be shared. Unsubscribe anytime.
          </p>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-gold/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 md:w-80 md:h-80 bg-gold/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default NewsletterBanner;
