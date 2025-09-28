// src/components/Header.tsx
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "../../hooks/useTranslation"; // Importe o hook de tradução
// Certifique-se de que este import aponta para o seu arquivo CSS do Header
import "./style.css"; // Exemplo: se você tiver um Header.css na mesma pasta

interface HeaderProps {
  isDarkMode: boolean;
  toggleMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleMode }) => {
  const { language, setLanguage, t } = useTranslation(); // Use o hook de tradução

  return (
    <header className="site-header">
      <div className="header-left">
        <Link to="/">Tauan Ribeiro</Link>
      </div>
      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/habilidades-ferramentas">{t("header.skills")}</Link>
          </li>
          <li>
            <Link to="/projetos">{t("header.projects")}</Link>
          </li>
          <li>
            <Link to="/trajetoria">{t("header.trajectory")}</Link>
          </li>
          <li>
            <Link to="/sobre-mim">{t("header.about_me")}</Link>
          </li>
          <li>
            <a href="/contato">{t("header.contact")}</a>
          </li>
        </ul>
      </nav>
      <div className="header-right">
        {/* Seletor de Idioma com Botões de Bandeira */}
        <div className="language-selector-buttons">
          <button
            className={`lang-button ${language === "pt" ? "active" : ""}`}
            onClick={() => setLanguage("pt")}
            title={t("header.language_portuguese")}
          >
            🇧🇷
          </button>
          <button
            className={`lang-button ${language === "en" ? "active" : ""}`}
            onClick={() => setLanguage("en")}
            title={t("header.language_english")}
          >
            🇬🇧
          </button>
          <button
            className={`lang-button ${language === "es" ? "active" : ""}`}
            onClick={() => setLanguage("es")}
            title={t("header.language_spanish")}
          >
            🇪🇸
          </button>
        </div>

        <button className="mode-toggle" onClick={toggleMode}>
          <span className="icon">{isDarkMode ? "☀️" : "🌙"}</span>
          {isDarkMode ? t("header.light_mode") : t("header.dark_mode")}
        </button>
        <div className="header-icons">
          {/* Ícone do GitHub */}
          <a
            href="https://github.com/TauDuque"
            rel="noopener noreferrer"
            className="icon-box"
            target="_blank"
          >
            <i className="fa-brands fa-github"></i>{" "}
            {/* Ícone Font Awesome para GitHub */}
          </a>
          {/* Ícone do LinkedIn */}
          <a
            href="https://linkedin.com/in/tau-ribeiro"
            rel="noopener noreferrer"
            className="icon-box"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin-in"></i>{" "}
            {/* Ícone Font Awesome para LinkedIn */}
          </a>
          {/* Ícone do Email (Gmail) */}
          <a
            href="mailto:duque.tauribeiro@gmail.com"
            className="icon-box"
            target="_blank"
          >
            <i className="fa-solid fa-envelope"></i>{" "}
            {/* Ícone Font Awesome para Email */}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
