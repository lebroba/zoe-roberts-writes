import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { path: '/', label: t('nav.home') },
    { path: '/books', label: t('nav.books') },
    { path: '/freebies', label: t('nav.freebies') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') }
  ];

  return (
    <header className="bg-cream">
      {/* Logo centered */}
      <div className="container mx-auto py-6 text-center">
        <Link to="/" className="text-5xl font-playfair font-bold text-navy inline-block">
          ZOE ROBERTS
        </Link>
      </div>
      
      {/* Navigation centered */}
      <div className="border-t border-b border-gray-200">
        <div className="container mx-auto">
          <div className="flex justify-between items-center px-4 py-3 md:hidden">
            <LanguageSwitcher />
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-navy focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          
          <nav className="hidden md:flex justify-center items-center space-x-10 py-3">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-700 hover:text-navy transition-colors uppercase font-medium"
              >
                {item.label}
              </Link>
            ))}
            <LanguageSwitcher />
          </nav>
          
          {/* Mobile Menu */}
          <div
            className={`md:hidden ${
              isMenuOpen ? 'block' : 'hidden'
            }`}
          >
            <div className="px-4 py-4 flex flex-col space-y-4 border-t border-gray-200">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-gray-700 hover:text-navy transition-colors block py-2 text-center"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
