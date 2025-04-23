import i18n from '../i18n';

/**
 * Get the Amazon logo URL based on the current language
 * @returns The URL of the Amazon logo for the current language
 */
export const getAmazonLogoByLanguage = (): string => {
  const currentLanguage = i18n.language?.split('-')[0] || 'en';
  
  // Map of language codes to logo paths
  const logoMap: Record<string, string> = {
    en: '/amazon/en/available_at_amazon_US_EN_logo_stacked_RGB_SQUID.png', // Default English logo
    es: '/amazon/es/Available_At_Amazon_ES_CC_Logo_Stacked_RGB_Squid Ink.svg',
    fr: '/amazon/fr/Available_At_Amazon_FR_CC_Logo_Stacked_RGB_Squid Ink.svg',
    it: '/amazon/it/Available_At_Amazon_IT_CC_Logo_Stacked_RGB_Squid Ink.svg',
    pt: '/amazon/pt/Available_At_Amazon_PT_Logo_Stacked_RGB_Squid Ink.svg'
  };

  // Return the logo for the current language, or fall back to English
  return logoMap[currentLanguage] || logoMap.en;
};