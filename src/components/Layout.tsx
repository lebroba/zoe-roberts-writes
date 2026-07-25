import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Navbar renders its own <header>, so this no longer wraps it in a second one.
 * The previous version nested two header landmarks.
 */
const Layout: React.FC<LayoutProps> = ({ children, className }) => (
  <div className={cn("flex min-h-screen flex-col bg-paper", className)}>
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
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
