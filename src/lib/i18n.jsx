import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, LANGUAGES } from "./translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("nr-lang") || "es";
    } catch {
      return "es";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("nr-lang", lang);
    } catch {}
  }, [lang]);

  const value = { lang, setLang, t: translations[lang] || translations.es, languages: LANGUAGES };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) return { lang: "es", setLang: () => {}, t: translations.es, languages: LANGUAGES };
  return ctx;
}