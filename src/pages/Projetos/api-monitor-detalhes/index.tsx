import { Link } from "react-router-dom";
import "./style.css"; // CSS específico para esta página
import { useTranslation } from "../../../hooks/useTranslation"; // Importe seu hook de tradução aqui

const APIMonitorDetalhes = () => {
  const { t } = useTranslation(); // Inicializa o hook de tradução

  return (
    <div className="project-detail-page-container">
      {/* Seção Hero - Imagem de Destaque */}
      <section className="project-hero-visual">
        <img
          src="/src/assets/images/monitor_portada.png" // Substitua pelo caminho da sua imagem hero
          alt={t("api_monitor_details_page.hero_image_alt")}
          className="hero-image"
        />
        <div className="hero-overlay">
          <h1 className="hero-title">
            {t("api_monitor_details_page.hero_title")}
          </h1>
          <p className="hero-subtitle">
            {t("api_monitor_details_page.hero_subtitle")}
          </p>
        </div>
      </section>

      <div className="project-content-wrapper">
        {/* Visão Geral e Funcionalidades Chave */}
        <section className="detail-section">
          <h2 className="section-title">
            {t("api_monitor_details_page.overview_section_title")}
          </h2>
          <p className="section-text">
            {t("api_monitor_details_page.overview_paragraph")}
          </p>
          <h3 className="subsection-title">
            {t("api_monitor_details_page.features_subtitle")}
          </h3>
          <ul className="feature-list">
            <li>{t("api_monitor_details_page.feature_1")}</li>
            <li>{t("api_monitor_details_page.feature_2")}</li>
            <li>{t("api_monitor_details_page.feature_3")}</li>
            <li>{t("api_monitor_details_page.feature_4")}</li>
            <li>{t("api_monitor_details_page.feature_5")}</li>
          </ul>
        </section>

        {/* Stack Tecnológico */}
        <section className="detail-section">
          <h2 className="section-title">
            {t("api_monitor_details_page.stack_section_title")}
          </h2>
          <p className="section-text">
            {t("api_monitor_details_page.stack_paragraph")}
          </p>
          <div className="tech-stack-grid">
            <div className="tech-category">
              <h3 className="subsection-title">
                {t("api_monitor_details_page.frontend_subtitle")}
              </h3>
              <ul className="tech-list">
                <li>{t("api_monitor_details_page.frontend_tech_1")}</li>
                <li>{t("api_monitor_details_page.frontend_tech_2")}</li>
                <li>{t("api_monitor_details_page.frontend_tech_3")}</li>
                <li>{t("api_monitor_details_page.frontend_tech_4")}</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3 className="subsection-title">
                {t("api_monitor_details_page.backend_infra_subtitle")}
              </h3>
              <ul className="tech-list">
                <li>{t("api_monitor_details_page.backend_infra_tech_1")}</li>
                <li>{t("api_monitor_details_page.backend_infra_tech_2")}</li>
                <li>{t("api_monitor_details_page.backend_infra_tech_3")}</li>
                <li>{t("api_monitor_details_page.backend_infra_tech_4")}</li>
                <li>{t("api_monitor_details_page.backend_infra_tech_5")}</li>
                <li>{t("api_monitor_details_page.backend_infra_tech_6")}</li>
                <li>{t("api_monitor_details_page.backend_infra_tech_7")}</li>
                <li>{t("api_monitor_details_page.backend_infra_tech_8")}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bloco Visual 2: Screenshot Grande e Único */}
        <section className="visual-showcase single-item">
          <div className="visual-item">
            <img
              src="/src/assets/images/monitor_detalhe.png" // Substitua pelo caminho do seu screenshot
              alt={t("api_monitor_details_page.screenshot_alt")}
              className="showcase-media"
            />
            <p className="media-caption">
              {t("api_monitor_details_page.screenshot_caption")}
            </p>
          </div>
        </section>

        {/* Arquitetura e Detalhes de Implementação */}
        <section className="detail-section">
          <h2 className="section-title">
            {t("api_monitor_details_page.architecture_section_title")}
          </h2>
          <p className="section-text">
            {t("api_monitor_details_page.architecture_paragraph")}
          </p>
          <h3 className="subsection-title">
            {t("api_monitor_details_page.data_flow_subtitle")}
          </h3>
          <ul className="feature-list">
            <li>{t("api_monitor_details_page.data_flow_1")}</li>
            <li>{t("api_monitor_details_page.data_flow_2")}</li>
            <li>{t("api_monitor_details_page.data_flow_3")}</li>
            <li>{t("api_monitor_details_page.data_flow_4")}</li>
            <li>{t("api_monitor_details_page.data_flow_5")}</li>
            <li>{t("api_monitor_details_page.data_flow_6")}</li>
          </ul>
          <h3 className="subsection-title">
            {t("api_monitor_details_page.infra_deploy_subtitle")}
          </h3>
          <p className="section-text">
            {t("api_monitor_details_page.infra_deploy_paragraph")}
          </p>
          <h3 className="subsection-title">
            {t("api_monitor_details_page.architecture_decisions_subtitle")}
          </h3>
          <ul className="feature-list">
            <li>{t("api_monitor_details_page.architecture_decision_1")}</li>
            <li>{t("api_monitor_details_page.architecture_decision_2")}</li>
          </ul>
        </section>

        {/* Desafios Técnicos e Soluções/Aprendizados */}
        <section className="detail-section">
          <h2 className="section-title">
            {t("api_monitor_details_page.challenges_section_title")}
          </h2>
          <p className="section-text">
            {t("api_monitor_details_page.challenges_paragraph")}
          </p>
          <h3 className="subsection-title">
            {t("api_monitor_details_page.infra_devops_challenge_subtitle")}
          </h3>
          <p
            className="section-text"
            dangerouslySetInnerHTML={{
              __html: t(
                "api_monitor_details_page.infra_devops_challenge_paragraph"
              ),
            }}
          />
          <h3 className="subsection-title">
            {t("api_monitor_details_page.socketio_challenge_subtitle")}
          </h3>
          <p className="section-text">
            {t("api_monitor_details_page.socketio_challenge_paragraph")}
          </p>
          <h3 className="subsection-title">
            {t("api_monitor_details_page.bull_redis_challenge_subtitle")}
          </h3>
          <p className="section-text">
            {t("api_monitor_details_page.bull_redis_challenge_paragraph")}
          </p>
          <h3 className="subsection-title">
            {t("api_monitor_details_page.scheduling_challenge_subtitle")}
          </h3>
          <p className="section-text">
            {t("api_monitor_details_page.scheduling_challenge_paragraph")}
          </p>
          <h3 className="subsection-title">
            {t("api_monitor_details_page.historical_data_challenge_subtitle")}
          </h3>
          <p className="section-text">
            {t("api_monitor_details_page.historical_data_challenge_paragraph")}
          </p>
        </section>

        {/* Links para o Projeto */}
        <section className="project-links">
          <Link
            to="https://api-monitor-front.vercel.app/"
            rel="noopener noreferrer"
            className="btn-details"
            target="_blank"
          >
            {t("api_monitor_details_page.view_project_online")}
          </Link>
          <Link
            to="https://github.com/TauDuque/api-monitor-front"
            rel="noopener noreferrer"
            className="btn-details secondary"
            target="_blank"
          >
            {t("api_monitor_details_page.repo_frontend")}
          </Link>
          <Link
            to="https://github.com/TauDuque/api-monitor-back"
            rel="noopener noreferrer"
            className="btn-details secondary"
            target="_blank"
          >
            {t("api_monitor_details_page.repo_backend")}
          </Link>
        </section>
      </div>
    </div>
  );
};

export default APIMonitorDetalhes;
