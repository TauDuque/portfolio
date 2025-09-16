import React from "react";

interface HeaderProps {
  isDarkMode: boolean;
  toggleMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleMode }) => {
  return (
    <header className="site-header">
      <div className="header-left">
        <a href="#" className="site-logo">
          Tauan Ribeiro
        </a>
      </div>
      <nav className="main-nav">
        <ul>
          <li>
            <a href="#">Sobre mim</a>
          </li>
          <li>
            <a href="#">Projetos</a>
          </li>
          <li>
            <a href="#">Trajetória</a>
          </li>
          <li>
            <a href="#">Habilidades e Ferramentas</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
      <div className="header-right">
        <button className="mode-toggle" onClick={toggleMode}>
          <span className="icon">{isDarkMode ? "☀️" : "🌙"}</span>
          {isDarkMode ? "Light" : "Dark"} Mode
        </button>
        <div className="header-icons">
          {/* Ícone do GitHub */}
          <a
            href="https://github.com/seu-usuario"
            rel="noopener noreferrer"
            className="icon-box"
          >
            <i className="fa-brands fa-github"></i>{" "}
            {/* Ícone Font Awesome para GitHub */}
          </a>
          {/* Ícone do LinkedIn */}
          <a
            href="https://linkedin.com/in/seu-perfil"
            rel="noopener noreferrer"
            className="icon-box"
          >
            <i className="fa-brands fa-linkedin-in"></i>{" "}
            {/* Ícone Font Awesome para LinkedIn */}
          </a>
          {/* Ícone do Email (Gmail) */}
          <a href="mailto:seu.email@gmail.com" className="icon-box">
            <i className="fa-solid fa-envelope"></i>{" "}
            {/* Ícone Font Awesome para Email */}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
