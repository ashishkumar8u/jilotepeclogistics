'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations object - kept for backward compatibility with t() function
const translations: Record<Language, Record<string, string>> = {
  en: {
    // LocationInfo
    'location.facilityName': 'Location 2',
    'location.warehouseAddress': 'Warehouse Address',
    'location.viewOnGoogleMaps': 'View on Google Maps',
  },
  es: {
    // LocationInfo
    'location.facilityName': 'Ubicación 2',
    'location.warehouseAddress': 'Dirección del Almacén',
    'location.viewOnGoogleMaps': 'Ver en Google Maps',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Load language from localStorage if available
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage === 'en' || savedLanguage === 'es') {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    // Save language to localStorage
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
