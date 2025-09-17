// src/pages/Contato/index.tsx
import React from "react";
import "./style.css"; // Importa os estilos específicos da página

const Contato: React.FC = () => {
  return (
    <div className="contact-container">
      <section className="contact-section">
        <h1 className="contact-title">Vamos Conectar</h1>
        <p className="contact-intro">
          Olá! Fico feliz que você queira entrar em contato. Posso me comunicar
          fluentemente em Português, Inglês e Espanhol, então sinta-se à vontade
          para escolher o idioma de sua preferência.
        </p>

        <div className="contact-info-grid">
          {/* Email */}
          <div className="contact-item">
            <i className="fa-solid fa-envelope"></i>
            <h4>Email</h4>
            <a
              href="mailto:duque.tauribeiro@gmail.com"
              rel="noopener noreferrer"
            >
              duque.tauribeiro@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="contact-item">
            <i className="fa-brands fa-linkedin"></i>
            <h4>LinkedIn</h4>
            <a
              href="https://linkedin.com/in/tau-ribeiro"
              rel="noopener noreferrer"
            >
              linkedin.com/in/tau-ribeiro
            </a>
          </div>

          {/* GitHub */}
          <div className="contact-item">
            <i className="fa-brands fa-github"></i>
            <h4>GitHub</h4>
            {/* ATENÇÃO: Substitua "https://github.com/seu-usuario" pelo seu link real do GitHub */}
            <a href="https://github.com/TauDuque" rel="noopener noreferrer">
              github.com/TauDuque
            </a>
          </div>

          {/* Localização */}
          <div className="contact-item">
            <i className="fa-solid fa-location-dot"></i>
            <h4>Localização</h4>
            <span>Valencia, Espanha</span>
          </div>
        </div>

        <p className="contact-cta-text">
          Interessado em colaborar ou discutir oportunidades? Será um prazer
          conectar.
        </p>
      </section>
    </div>
  );
};

export default Contato;
