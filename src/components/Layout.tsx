import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = "" }) => (
  <div className={`flex min-h-screen flex-col bg-bg ${className}`.trim()}>
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent-700 focus:px-5 focus:py-2.5 focus:font-semibold focus:text-neutral-100"
    >
      Skip to content
    </a>
    <Navbar />
    <main id="main" className="flex-grow">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
