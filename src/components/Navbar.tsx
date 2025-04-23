
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Facebook, Instagram, Mail } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-cream">
      {/* Author name centered at top */}
      <div className="text-center py-8">
        <Link to="/" className="text-4xl md:text-6xl font-playfair font-bold text-navy tracking-widest">
          ZOE ROBERTS
        </Link>
      </div>

      {/* Navigation links centered below */}
      <div className="border-t border-b border-soft-gold py-4">
        <div className="container mx-auto px-4 flex justify-center">
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <Link to="/" className="nav-link text-base">Home</Link>
            <Link to="/books" className="nav-link text-base">Books</Link>
            <Link to="/freebies" className="nav-link text-base">Freebies</Link>
            <Link to="/about" className="nav-link text-base">About</Link>
            <Link to="/contact" className="nav-link text-base">Contact & Social</Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex w-full justify-between items-center">
            <Link to="/" className="nav-link text-base">Home</Link>
            
            <div className="flex items-center">
              {/* Mobile social icons */}
              <div className="flex space-x-3 mr-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-navy hover:text-gold transition-colors" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-navy hover:text-gold transition-colors" aria-label="Twitter">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.8 10.5L21.75 1.5H20.25L13.25 9.5L7.75 1.5H1.5L9.75 13.5L1.5 22.5H3L10.25 14.5L16 22.5H22.25L13.8 10.5ZM4.5 3H6.75L19.5 21H17.25L4.5 3Z" />
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-navy hover:text-gold transition-colors" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
              </div>
              <button
                className="text-navy focus:outline-none"
                onClick={toggleMenu}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile navigation menu */}
      {isMenuOpen && (
        <div className="absolute z-50 bg-cream p-4 border-b border-soft-gold md:hidden w-full animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/books" className="nav-link" onClick={toggleMenu}>Books</Link>
            <Link to="/freebies" className="nav-link" onClick={toggleMenu}>Freebies</Link>
            <Link to="/about" className="nav-link" onClick={toggleMenu}>About</Link>
            <Link to="/contact" className="nav-link" onClick={toggleMenu}>Contact & Social</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
