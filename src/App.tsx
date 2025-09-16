import { useState, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Aplicar o tema ao documento quando o estado mudar
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  return (
    <>
      {/* Usamos o componente Header aqui, passando as props necessárias */}
      <Header isDarkMode={isDarkMode} toggleMode={toggleMode} />

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
    </>
  );
}

export default App;
