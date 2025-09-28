// src/pages/Contato/index.tsx
import React from "react";
import "./style.css"; // Importa os estilos específicos da página
// Importe seu hook de tradução aqui, por exemplo:
import { useTranslation } from "../../hooks/useTranslation"; // Exemplo usando react-i18next

const Contato: React.FC = () => {
  const { t } = useTranslation(); // Inicializa o hook de tradução

  return (
    <div className="contact-container">
      <section className="contact-section">
        <h1 className="contact-title">{t("contact_page.title")}</h1>
        <p className="contact-intro">{t("contact_page.intro")}</p>

        <div className="contact-info-grid">
          {/* Email */}
          <div className="contact-item">
            <i className="fa-solid fa-envelope"></i>
            <h4>{t("contact_page.email_label")}</h4>
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
            <h4>{t("contact_page.linkedin_label")}</h4>
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
            <h4>{t("contact_page.github_label")}</h4>
            <a href="https://github.com/TauDuque" rel="noopener noreferrer">
              github.com/TauDuque
            </a>
          </div>

          {/* Localização */}
          <div className="contact-item">
            <i className="fa-solid fa-location-dot"></i>
            <h4>{t("contact_page.location_label")}</h4>
            <span>{t("contact_page.location_value")}</span>
          </div>
        </div>

        <p className="contact-cta-text">{t("contact_page.cta_text")}</p>
      </section>
    </div>
  );
};

export default Contato;
