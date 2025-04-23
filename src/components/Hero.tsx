import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <div className="relative bg-gradient-to-b from-cream to-white/90 py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-24 w-96 h-96 bg-navy/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t('hero.empoweringMinds')} <span className="text-gradient">Minds</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-700 mb-8 max-w-md mx-auto md:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t('hero.description')}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button asChild className="bg-gradient-to-r from-navy to-light-navy hover:shadow-lg transition-all duration-300 text-white">
                <Link to="/books">{t('hero.exploreBooks')}</Link>
              </Button>
              <Button asChild variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white transition-all duration-300">
                <Link to="/about">{t('hero.aboutZoe')}</Link>
              </Button>
              <img 
                src="/lovable-uploads/6aa77f68-f503-4d06-b291-4d8c95afca3f.png" 
                alt="Available at Amazon" 
                className="w-[150px]"
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex justify-center md:justify-end mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-gold/30 to-navy/20 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative overflow-hidden rounded-lg transform hover:scale-[1.01] transition-all duration-500">
                <img 
                  alt={t('hero.title')} 
                  className="relative z-10 rounded-lg shadow-lg max-w-full h-auto object-cover" 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&h=500&q=80" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/90 to-transparent"></div>
    </div>
  );
};

export default Hero;
