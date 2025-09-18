import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Projetos = () => {
  return (
    <div className="projects-page-container">
      <h1 className="page-title">Meus Projetos</h1>

      {/* Card do Projeto 1: Galeria de Arte Pessoal */}
      <section className="project-card">
        {/* Área Visual para o Screenshot - AGORA DIRETAMENTE NO CARD */}
        <div className="project-visual-area">
          {/*
            *** ESPAÇO PARA O SCREENSHOT PRINCIPAL DE ALTA QUALIDADE ***
            A imagem ocupará 100% da largura do card e terá uma altura definida no CSS.
          */}
          <div className="screenshot-placeholder"></div>
          <img
            src="src/assets/images/galeria_1.png"
            alt="Screenshot principal do projeto Galeria de Arte Pessoal"
            className="project-screenshot"
          />
        </div>

        {/* Área de Texto do Projeto - AGORA DIRETAMENTE NO CARD, ABAIXO DA IMAGEM */}
        <div className="project-text-area">
          <h2 className="project-title">Galeria de Arte Pessoal</h2>
          <p className="project-description">
            Explore e conecte-se com a arte em sua própria galeria digital. Este
            projeto permite aos usuários navegar, buscar e favoritar obras do
            renomado acervo do Museu Met, com acesso a informações detalhadas
            sobre artistas e contextos históricos. Uma experiência imersiva que
            une tecnologia e cultura.
          </p>
          <Link to="/projetos/galeria-de-arte" className="btn-details">
            Ver Detalhes
          </Link>
        </div>
      </section>

      {/* Card do Projeto 2: API Monitor */}
      <section className="project-card">
        {/* Área Visual para o Screenshot - AGORA DIRETAMENTE NO CARD */}
        <div className="project-visual-area">
          {/*
            *** ESPAÇO PARA O SCREENSHOT PRINCIPAL DE ALTA QUALIDADE ***
            A imagem ocupará 100% da largura do card e terá uma altura definida no CSS.
          */}
          <div className="screenshot-placeholder">
            <p></p>
          </div>
          <img
            src="src/assets/images/monitor_1.png"
            alt="Screenshot principal do projeto API Monitor"
            className="project-screenshot"
          />
        </div>

        {/* Área de Texto do Projeto - AGORA DIRETAMENTE NO CARD, ABAIXO DA IMAGEM */}
        <div className="project-text-area">
          <h2 className="project-title">API Monitor</h2>
          <p className="project-description">
            Garanta a estabilidade de suas aplicações com um monitoramento de
            APIs em tempo real. Este projeto permite configurar verificações
            periódicas, visualizar históricos de desempenho e receber alertas
            por e-mail em caso de falhas. Destaca o uso avançado de filas com
            Bull e Redis, comunicação em tempo real com Socket.io e uma robusta
            arquitetura em Docker/Nginx.
          </p>
          <Link to="/projetos/api-monitor" className="btn-details">
            Ver Detalhes
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projetos;
