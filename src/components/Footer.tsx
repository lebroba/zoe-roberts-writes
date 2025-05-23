import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Zoe Roberts</h3>
            <p className="text-sm text-gray-300 mb-4">
              {t('footer.about')}
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.8 10.5L21.75 1.5H20.25L13.25 9.5L7.75 1.5H1.5L9.75 13.5L1.5 22.5H3L10.25 14.5L16 22.5H22.25L13.8 10.5ZM4.5 3H6.75L19.5 21H17.25L4.5 3Z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:contact@zoeroberts.com" className="text-white hover:text-gold transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-gold transition-colors">{t('nav.home')}</Link></li>
              <li><Link to="/books" className="text-gray-300 hover:text-gold transition-colors">{t('nav.books')}</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-gold transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-gold transition-colors">{t('nav.freebies')}</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-gold transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">{t('footer.newsletter.title')}</h3>
            <p className="text-sm text-gray-300 mb-4">
              {t('footer.newsletter.description')}
            </p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder={t('footer.newsletter.placeholder')}
                className="px-4 py-2 bg-light-navy text-white border border-gray-600 rounded focus:outline-none focus:border-gold"
              />
              <button type="submit" className="px-4 py-2 bg-gold text-navy font-medium rounded hover:bg-soft-gold transition-colors">
                {t('footer.newsletter.subscribe')}
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {year} Zoe Roberts. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
