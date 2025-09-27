// src/hooks/useTranslation.ts
import { useContext } from "react";
import {
  LanguageContext,
  type LanguageContextType,
} from "../contexts/LanguageContext"; // Importe o tipo e o contexto

// Hook customizado para consumir o contexto de idioma
// Facilita o uso do contexto em qualquer componente funcional
export const useTranslation = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  // Garante que o hook seja usado dentro de um LanguageProvider
  if (context === undefined) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
};
