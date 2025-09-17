// src/App.tsx
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SobreMim from "./pages/SobreMim"; // Importa o componente SobreMim
import "./App.css";
import Trajetoria from "./pages/Trajetoria";
import HabilidadesFerramentas from "./pages/HabilidadesFerramentas";
import Contato from "./pages/Contato";

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
      <Header isDarkMode={isDarkMode} toggleMode={toggleMode} />
      <Routes>
        {" "}
        {/* Define as rotas para o conteúdo principal */}
        {/* Rota para a página inicial (Home) */}
        <Route
          path="/"
          element={
            <main className="hero-section">
              <div className="illustration-wrapper">
                <img
                  src="/src/assets/images/ac14aa08-da0d-4144-950e-4c29d991e354.png"
                  alt="Illustration of a desk setup with a laptop showing 'Hello World', framed pictures, a camera, and a plant."
                  className="main-illustration-placeholder"
                />
              </div>
              <h1 className="hero-tagline">Desenvolvedor Full Stack</h1>
            </main>
          }
        />
        {/* <<< AQUI ESTÁ A DEFINIÇÃO DA ROTA PARA A PÁGINA "SOBRE MIM" */}
        <Route path="/sobre-mim" element={<SobreMim />} />
        <Route path="/trajetoria" element={<Trajetoria />} />
        <Route
          path="/habilidades-ferramentas"
          element={<HabilidadesFerramentas isDarkMode={isDarkMode} />}
        />
        <Route path="/contato" element={<Contato />} />
        {/* <Route path="/projetos" element={<Projetos />} /> */}
      </Routes>
    </>
  );
}

export default App;
