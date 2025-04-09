
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPreview = () => {
  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-heading">About Zoe</h2>
            <p className="text-gray-700 mb-6">
              Zoe Roberts is an award-winning author known for her emotionally rich narratives and complex characters. With a background in literature and psychology, she crafts stories that explore the depths of human connection and the quiet moments that define our lives.
            </p>
            <p className="text-gray-700 mb-6">
              Born and raised in the Pacific Northwest, Zoe's writing is often influenced by the region's moody landscapes and rich literary tradition. Her work has been recognized with numerous awards, including the National Book Critics Circle Award and the PEN/Faulkner Award for Fiction.
            </p>
            <Button asChild className="bg-navy hover:bg-light-navy text-white">
              <Link to="/about">Read Full Biography</Link>
            </Button>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gold/20 blur-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=700&q=80"
                alt="Zoe Roberts writing at her desk"
                className="relative z-10 rounded-lg shadow-lg max-w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
