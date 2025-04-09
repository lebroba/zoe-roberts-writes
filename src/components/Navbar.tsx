
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Facebook, Instagram, Mail } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full py-4 bg-cream border-b border-soft-gold">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl md:text-3xl font-playfair font-bold text-navy">
          Zoe Roberts
        </Link>

        <div className="flex items-center">
          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/books" className="nav-link">Books</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/events" className="nav-link">Events</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            
            {/* Desktop social icons */}
            <div className="flex space-x-4 ml-6">
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
              <a href="mailto:contact@zoeroberts.com" className="text-navy hover:text-gold transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          {/* Mobile social icons and menu button */}
          <div className="flex items-center md:hidden">
            <div className="flex space-x-3 mr-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-navy hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-navy hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="mailto:contact@zoeroberts.com" className="text-navy hover:text-gold transition-colors" aria-label="Email">
                <Mail size={18} />
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

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 z-50 bg-cream p-4 border-b border-soft-gold md:hidden animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
            <Link to="/books" className="nav-link" onClick={toggleMenu}>Books</Link>
            <Link to="/about" className="nav-link" onClick={toggleMenu}>About</Link>
            <Link to="/events" className="nav-link" onClick={toggleMenu}>Events</Link>
            <Link to="/contact" className="nav-link" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
