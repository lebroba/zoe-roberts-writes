import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const AboutPreview = () => {
  const { t } = useTranslation();
  return <section className="py-16 bg-gradient-to-b from-cream to-white/90">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          ease: "easeOut"
        }} viewport={{
          once: true
        }}>
            <h2 className="section-heading">{t('about.title')}</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {t('about.bio1')}
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              {t('about.bio2')}
            </p>
            <Button asChild className="bg-gradient-to-r from-navy to-light-navy hover:shadow-lg transition-all duration-300 text-white">
              <Link to="/about">{t('about.readFullBio')}</Link>
            </Button>
          </motion.div>
          <motion.div className="flex justify-center" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2,
          ease: "easeOut"
        }} viewport={{
          once: true
        }}>
            <div className="relative group">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-gold/30 to-navy/20 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative overflow-hidden rounded-lg transform hover:scale-[1.01] transition-all duration-500">
                <img alt={t('about.imageAlt')} className="relative z-10 rounded-lg shadow-lg max-w-full h-auto object-cover" src="/lovable-uploads/01348dfc-206d-4c88-9800-82a3c06ba3f5.png" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default AboutPreview;