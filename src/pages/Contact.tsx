
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: t('contact.toast.missingInfo.title'),
        description: t('contact.toast.missingInfo.description'),
        variant: "destructive"
      });
      return;
    }
    
    // In a real application, this would send the data to a server
    toast({
      title: t('contact.toast.success.title'),
      description: t('contact.toast.success.description'),
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <Layout>
      <div className="bg-cream py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-playfair font-bold text-navy mb-8 text-center">{t('contact.title')}</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-16">
            {t('contact.description')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">{t('contact.form.name')}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">{t('contact.form.email')}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">{t('contact.form.subject')}</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                  >
                    <option value="">{t('contact.form.selectSubject')}</option>
                    <option value="general">{t('contact.form.generalInquiry')}</option>
                    <option value="event">{t('contact.form.eventRequest')}</option>
                    <option value="media">{t('contact.form.mediaInquiry')}</option>
                    <option value="rights">{t('contact.form.rightsInquiry')}</option>
                    <option value="other">{t('contact.form.other')}</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">{t('contact.form.message')}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    required
                  ></textarea>
                </div>
                
                <Button type="submit" className="bg-navy hover:bg-light-navy text-white px-6">
                  {t('contact.form.sendMessage')}
                </Button>
              </form>
            </div>
            
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-xl font-playfair font-bold text-navy mb-4">{t('contact.info.title')}</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-gold mr-3 mt-1" />
                    <div>
                      <p className="font-medium">{t('contact.info.email')}</p>
                      <a href="mailto:contact@zoeroberts.com" className="text-navy hover:text-gold transition-colors">contact@zoeroberts.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-gold mr-3 mt-1" />
                    <div>
                      <p className="font-medium">{t('contact.info.agent')}</p>
                      <p>{t('contact.info.agentCompany')}</p>
                      <a href="tel:+12125551234" className="text-navy hover:text-gold transition-colors">+1 (212) 555-1234</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gold mr-3 mt-1" />
                    <div>
                      <p className="font-medium">{t('contact.info.address')}</p>
                      <p>P.O. Box 1234<br/>Seattle, WA 98101<br/>United States</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-playfair font-bold text-navy mb-4">{t('contact.follow')}</h2>
                
                <div className="flex gap-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-navy text-white p-3 rounded-full hover:bg-gold transition-colors"
                  >
                    <Facebook size={20} />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-navy text-white p-3 rounded-full hover:bg-gold transition-colors"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.8 10.5L21.75 1.5H20.25L13.25 9.5L7.75 1.5H1.5L9.75 13.5L1.5 22.5H3L10.25 14.5L16 22.5H22.25L13.8 10.5ZM4.5 3H6.75L19.5 21H17.25L4.5 3Z" />
                    </svg>
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-navy text-white p-3 rounded-full hover:bg-gold transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
