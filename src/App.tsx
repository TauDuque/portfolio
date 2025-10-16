// src/App.tsx
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SobreMim from "./pages/SobreMim"; // Importa o componente SobreMim
import "./App.css";
import Trajetoria from "./pages/Trajetoria";
import HabilidadesFerramentas from "./pages/HabilidadesFerramentas";
import Contato from "./pages/Contato";
import Projetos from "./pages/Projetos";
import GaleriaDeArteDetalhes from "./pages/Projetos/galeria-arte-detalhes";
import ScrollToTop from "./components/ScrollToTop";
import APIMonitorDetalhes from "./pages/Projetos/api-monitor-detalhes";
import { LanguageProvider } from "./contexts/LanguageContext";
import HomePageContent from "./pages/HomePageContent"; // <<< NOVO: Importe o componente HomePageContent
import { Analytics } from "@vercel/analytics/next";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  return (
    <>
      {" "}
      {/* Fragmento para agrupar o Header e as Routes */}
      <LanguageProvider>
        <Header isDarkMode={isDarkMode} toggleMode={toggleMode} />
        <ScrollToTop />
        <Routes>
          {" "}
          {/* Define as rotas para o conteúdo principal */}
          {/* Rota para a página inicial (Home) */}
          <Route
            path="/"
            element={<HomePageContent />} // <<< ALTERADO: Agora renderiza o novo componente
          />
          {/* <<< AQUI ESTÁ A DEFINIÇÃO DA ROTA PARA A PÁGINA "SOBRE MIM" */}
          <Route path="/sobre-mim" element={<SobreMim />} />
          <Route path="/trajetoria" element={<Trajetoria />} />
          <Route
            path="/habilidades-ferramentas"
            element={<HabilidadesFerramentas isDarkMode={isDarkMode} />}
          />
          <Route path="/contato" element={<Contato />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route
            path="/projetos/galeria-de-arte"
            element={<GaleriaDeArteDetalhes />}
          />
          <Route
            path="/projetos/api-monitor"
            element={<APIMonitorDetalhes />}
          />
        </Routes>
      </LanguageProvider>
      <Analytics />
    </>
  );
}

export default App;
