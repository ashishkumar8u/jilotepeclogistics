"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import type { Locale } from "./translations";

type LanguageContextValue = {
  language: Locale;
  setLanguage: (lang: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const DEFAULT_LANGUAGE: Locale = "es";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Locale>(DEFAULT_LANGUAGE);

  const setLanguage = useCallback((lang: Locale) => {
    setLanguageState(lang);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
