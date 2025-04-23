
import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="bg-cream py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-playfair font-bold text-navy mb-8 text-center">{t('about.pageTitle')}</h1>
            
            <div className="mb-12 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gold/20 blur-lg"></div>
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&h=500&q=80"
                  alt="Zoe Roberts"
                  className="relative z-10 rounded-lg shadow-lg max-w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Zoe Roberts is an award-winning author known for her emotionally rich narratives and complex characters. Born and raised in the Pacific Northwest, her writing is deeply influenced by the region's moody landscapes, rich literary tradition, and the intricate relationships between people and places.
              </p>
              
              <p className="mb-6">
                With a background in literature and psychology, Zoe crafts stories that explore the depths of human connection, family dynamics, and the quiet moments that define our lives. Her work has been recognized with numerous awards, including the National Book Critics Circle Award and the PEN/Faulkner Award for Fiction.
              </p>
              
              <h2 className="text-2xl font-playfair font-bold text-navy mt-10 mb-4">{t('about.literaryJourney')}</h2>
              
              <p className="mb-6">
                Zoe's literary journey began at an early age, when she would fill notebooks with stories inspired by the books she devoured from her local library. After completing her Master of Fine Arts in Creative Writing at the University of Washington, she published her first short story collection, <em>Threadbare</em>, which received critical acclaim and established her as a promising new voice in literary fiction.
              </p>
              
              <p className="mb-6">
                Her debut novel, <em>Beneath Quiet Waters</em>, was published in 2017 and became a national bestseller, praised for its lyrical prose and psychological depth. Since then, she has published three additional novels, each exploring different facets of human experience but united by her distinctive voice and emotional insight.
              </p>
              
              <h2 className="text-2xl font-playfair font-bold text-navy mt-10 mb-4">{t('about.writingProcess')}</h2>
              
              <p className="mb-6">
                "I write to understand the world and my place in it," Zoe has said of her process. "Each novel begins with a question I don't know how to answer, a relationship I want to examine, or a moment of human connection I want to explore more deeply."
              </p>
              
              <p className="mb-6">
                Known for her meticulous research and commitment to emotional authenticity, Zoe typically spends a year researching and planning before beginning the drafting process. She writes primarily in the early morning hours, in a small studio overlooking the Puget Sound, surrounded by books that inspire her and artifacts collected from her travels.
              </p>
              
              <h2 className="text-2xl font-playfair font-bold text-navy mt-10 mb-4">{t('about.personalLife')}</h2>
              
              <p className="mb-6">
                When not writing, Zoe enjoys hiking in the Cascade Mountains, tending to her extensive garden, and volunteering with literacy programs in underserved communities. She lives in Seattle with her partner and their two rescue dogs, who often make appearances on her social media as her "editorial assistants."
              </p>
              
              <p className="mb-6">
                Zoe is a passionate advocate for independent bookstores and libraries, frequently participating in events that support these vital community spaces. She also teaches occasional writing workshops and mentors emerging writers through various literary organizations.
              </p>
            </div>
            
            <div className="mt-12 border-t border-gray-300 pt-12">
              <h2 className="text-2xl font-playfair font-bold text-navy mb-6 text-center">{t('about.connect')}</h2>
              <div className="flex justify-center space-x-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-navy hover:text-gold transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-navy hover:text-gold transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-navy hover:text-gold transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="mailto:contact@zoeroberts.com" className="text-navy hover:text-gold transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
