
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutPreview = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-cream to-white/90">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="section-heading">About Zoe</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Zoe Roberts is an award-winning author known for her emotionally rich narratives and complex characters. With a background in literature and psychology, she crafts stories that explore the depths of human connection and the quiet moments that define our lives.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Born and raised in the Pacific Northwest, Zoe's writing is often influenced by the region's moody landscapes and rich literary tradition. Her work has been recognized with numerous awards, including the National Book Critics Circle Award and the PEN/Faulkner Award for Fiction.
            </p>
            <Button asChild className="bg-gradient-to-r from-navy to-light-navy hover:shadow-lg transition-all duration-300 text-white">
              <Link to="/about">Read Full Biography</Link>
            </Button>
          </motion.div>
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-gold/30 to-navy/20 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative overflow-hidden rounded-lg transform hover:scale-[1.01] transition-all duration-500">
                <img 
                  alt="Zoe Roberts writing at her desk" 
                  className="relative z-10 rounded-lg shadow-lg max-w-full h-auto object-cover" 
                  src="/lovable-uploads/49a51533-b979-473c-bf79-acb6fcedee6e.jpg" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
