"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { CV_DATA, CV_DATA_EN, CVData, translations, UIStrings } from "@/data/cvData";

export type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  cvData: CVData;
  t: UIStrings;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fr");

  useEffect(() => {
    // Check saved language or browser preference on mount
    try {
      const savedLang = localStorage.getItem("cv_lang") as Language | null;
      if (savedLang === "fr" || savedLang === "en") {
        setLanguageState(savedLang);
        document.documentElement.lang = savedLang;
      } else {
        const browserLang = navigator.language.startsWith("fr") ? "fr" : "en";
        // Default to "fr" as primary, but if user explicitly has non-fr browser:
        // Let's keep "fr" default or browser
        document.documentElement.lang = "fr";
      }
    } catch {
      // Ignore localStorage access errors if any
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("cv_lang", lang);
      document.documentElement.lang = lang;
    } catch {
      // Ignore localStorage access errors
    }
  };

  const toggleLanguage = () => {
    const nextLang: Language = language === "fr" ? "en" : "fr";
    setLanguage(nextLang);
  };

  const cvData = language === "en" ? CV_DATA_EN : CV_DATA;
  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        cvData,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
