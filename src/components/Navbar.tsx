
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

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

        {/* Mobile menu button */}
        <button
          className="md:hidden text-navy focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/books" className="nav-link">Books</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/events" className="nav-link">Events</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
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
      </div>
    </nav>
  );
};

export default Navbar;
