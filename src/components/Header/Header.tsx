// src/components/Header.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "../../hooks/useTranslation";
import "./style.css";

interface HeaderProps {
  isDarkMode: boolean;
  toggleMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleMode }) => {
  const { language, setLanguage, t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-left">
        <Link to="/" onClick={closeMenu}>Tauan Ribeiro</Link>
      </div>
      <nav className={`main-nav${isMenuOpen ? " is-open" : ""}`}>
        <ul>
          <li>
            <Link to="/habilidades-ferramentas" onClick={closeMenu}>
              {t("header.skills")}
            </Link>
          </li>
          <li>
            <Link to="/projetos" onClick={closeMenu}>
              {t("header.projects")}
            </Link>
          </li>
          <li>
            <Link to="/trajetoria" onClick={closeMenu}>
              {t("header.trajectory")}
            </Link>
          </li>
          <li>
            <Link to="/sobre-mim" onClick={closeMenu}>
              {t("header.about_me")}
            </Link>
          </li>
          <li>
            <Link to="/contato" onClick={closeMenu}>
              {t("header.contact")}
            </Link>
          </li>
        </ul>
      </nav>
      <div className="header-right">
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
          <span className="mode-toggle-label">
            {isDarkMode ? t("header.light_mode") : t("header.dark_mode")}
          </span>
        </button>

        <div className="header-icons">
          <a
            href="https://github.com/TauDuque"
            rel="noopener noreferrer"
            className="icon-box"
            target="_blank"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/tau-ribeiro"
            rel="noopener noreferrer"
            className="icon-box"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="mailto:duque.tauribeiro@gmail.com"
            className="icon-box"
            target="_blank"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-label={
            isMenuOpen ? t("header.close_menu") : t("header.open_menu")
          }
        >
          <i
            className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}
            aria-hidden="true"
          ></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
