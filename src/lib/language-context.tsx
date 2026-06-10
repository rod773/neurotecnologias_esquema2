"use client";

import { createContext, useContext, ReactNode } from "react";

export type Locale = "es" | "en";

const LanguageContext = createContext<Locale>("es");

export function LanguageProvider({ children }: { children: ReactNode }) {
  return (
    <LanguageContext.Provider value="es">
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): Locale {
  return useContext(LanguageContext);
}
