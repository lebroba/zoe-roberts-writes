
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import FeaturedBooks from "@/components/FeaturedBooks";
import AboutPreview from "@/components/AboutPreview";
import Testimonials from "@/components/Testimonials";
import NewsletterBanner from "@/components/NewsletterBanner";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedBooks />
      <AboutPreview />
      <Testimonials />
      <NewsletterBanner />
    </Layout>
  );
};

export default Index;
