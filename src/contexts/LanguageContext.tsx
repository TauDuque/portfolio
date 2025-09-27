/* eslint-disable react-refresh/only-export-components */
// src/context/LanguageContext.tsx
import React, { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react"; // Importe ReactNode como um tipo

// Importar os arquivos de tradução
// Certifique-se de que esses caminhos estão corretos em relação ao seu projeto
import ptTranslations from "../i18n/pt.json";
import enTranslations from "../i18n/en.json";
import esTranslations from "../i18n/es.json";

// Mapeamento dos idiomas para seus respectivos objetos de tradução
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const translations: { [key: string]: any } = {
  pt: ptTranslations,
  en: enTranslations,
  es: esTranslations,
};

// Definir o tipo para o contexto para garantir type-safety
export interface LanguageContextType {
  // Exportamos a interface para ser usada pelo hook
  language: string; // Idioma atualmente selecionado (ex: 'pt', 'en', 'es')
  setLanguage: (lang: string) => void; // Função para mudar o idioma
  t: (key: string) => string; // Função de tradução que recebe uma chave e retorna o texto traduzido
}

// Criar o contexto com um valor inicial indefinido
// O valor real será fornecido pelo LanguageProvider
export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
); // Exportamos o contexto

// Props para o componente LanguageProvider, que aceita children
interface LanguageProviderProps {
  children: ReactNode; // Representa os elementos React que serão envolvidos pelo provedor
}

// Componente Provedor de Idioma
// Este componente gerencia o estado do idioma e fornece a função de tradução para seus filhos
export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  // Estado para armazenar o idioma atual.
  // Tenta carregar o idioma do localStorage na inicialização.
  // Se não houver, ou se o idioma salvo não for suportado, 'pt' é usado como padrão.
  const [language, setLanguageState] = useState<string>(() => {
    const storedLang = localStorage.getItem("portfolio_language");
    // Verifica se o idioma armazenado existe e se temos traduções para ele
    return storedLang && translations[storedLang] ? storedLang : "pt";
  });

  // Efeito colateral para salvar o idioma no localStorage e atualizar o atributo 'lang' do HTML
  // Este efeito é executado sempre que o estado 'language' muda
  useEffect(() => {
    localStorage.setItem("portfolio_language", language);
    // Atualiza o atributo 'lang' no elemento <html> para melhor acessibilidade e SEO
    document.documentElement.lang = language;
  }, [language]); // Dependência: o efeito roda quando 'language' muda

  // Função de tradução principal
  // Recebe uma chave (ex: "header.about") e retorna o texto traduzido
  const t = (key: string): string => {
    // Obtém o objeto de tradução para o idioma atual
    const currentTranslations = translations[language];

    // Se não houver traduções para o idioma atual, loga um aviso e retorna a chave
    if (!currentTranslations) {
      console.warn(`No translations found for language: ${language}`);
      return key;
    }

    // Divide a chave (ex: "header.about" -> ["header", "about"]) para acessar objetos aninhados
    const keys = key.split(".");
    let value = currentTranslations; // Começa com o objeto de tradução completo

    // Percorre as partes da chave para encontrar o valor aninhado
    for (const k of keys) {
      // Verifica se o valor atual é um objeto e se a chave 'k' existe nele
      if (value && typeof value === "object" && k in value) {
        value = value[k]; // Move para o próximo nível do objeto
      } else {
        // Se a chave não for encontrada no caminho, loga um aviso e retorna a chave original
        console.warn(
          `Translation key "${key}" not found for language "${language}"`
        );
        return key;
      }
    }
    // Retorna o valor encontrado se for uma string, senão retorna a chave original
    return typeof value === "string" ? value : key;
  };

  // Função para mudar o idioma
  // Garante que apenas idiomas suportados (com arquivos de tradução) possam ser definidos
  const setLanguage = (lang: string) => {
    if (translations[lang]) {
      // Verifica se o idioma tem um objeto de tradução correspondente
      setLanguageState(lang); // Atualiza o estado do idioma
    } else {
      console.warn(`Attempted to set unsupported language: ${lang}`);
    }
  };

  // O provedor de contexto torna 'language', 'setLanguage' e 't' disponíveis para todos os componentes filhos
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
