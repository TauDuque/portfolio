import { Link } from "react-router-dom";
import "./style.css";
import { useTranslation } from "../../../hooks/useTranslation";

const DutyPilotDetalhes = () => {
  const { t } = useTranslation();

  return (
    <div className="project-detail-page-container">
      <section className="project-hero-visual">
        <img
          src="/assets/images/duty-pilot-1.png"
          alt={t("duty_pilot_details_page.hero_image_alt")}
          className="hero-image"
        />
        <div className="hero-overlay">
          <h1 className="hero-title">
            {t("duty_pilot_details_page.hero_title")}
          </h1>
          <p className="hero-subtitle">
            {t("duty_pilot_details_page.hero_subtitle")}
          </p>
        </div>
      </section>

      <div className="project-content-wrapper">
        <section className="detail-section">
          <h2 className="section-title">
            {t("duty_pilot_details_page.overview_section_title")}
          </h2>
          <p className="section-text">
            {t("duty_pilot_details_page.overview_paragraph")}
          </p>
          <h3 className="subsection-title">
            {t("duty_pilot_details_page.features_subtitle")}
          </h3>
          <ul className="feature-list">
            <li>{t("duty_pilot_details_page.feature_1")}</li>
            <li>{t("duty_pilot_details_page.feature_2")}</li>
            <li>{t("duty_pilot_details_page.feature_3")}</li>
            <li>{t("duty_pilot_details_page.feature_4")}</li>
            <li>{t("duty_pilot_details_page.feature_5")}</li>
            <li>{t("duty_pilot_details_page.feature_6")}</li>
          </ul>
        </section>

        <section className="detail-section">
          <h2 className="section-title">
            {t("duty_pilot_details_page.stack_section_title")}
          </h2>
          <p className="section-text">
            {t("duty_pilot_details_page.stack_paragraph")}
          </p>
          <div className="tech-stack-grid">
            <div className="tech-category">
              <h3 className="subsection-title">
                {t("duty_pilot_details_page.frontend_subtitle")}
              </h3>
              <ul className="tech-list">
                <li>{t("duty_pilot_details_page.frontend_tech_1")}</li>
                <li>{t("duty_pilot_details_page.frontend_tech_2")}</li>
                <li>{t("duty_pilot_details_page.frontend_tech_3")}</li>
                <li>{t("duty_pilot_details_page.frontend_tech_4")}</li>
                <li>{t("duty_pilot_details_page.frontend_tech_5")}</li>
                <li>{t("duty_pilot_details_page.frontend_tech_6")}</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3 className="subsection-title">
                {t("duty_pilot_details_page.backend_subtitle")}
              </h3>
              <ul className="tech-list">
                <li>{t("duty_pilot_details_page.backend_tech_1")}</li>
                <li>{t("duty_pilot_details_page.backend_tech_2")}</li>
                <li>{t("duty_pilot_details_page.backend_tech_3")}</li>
                <li>{t("duty_pilot_details_page.backend_tech_4")}</li>
                <li>{t("duty_pilot_details_page.backend_tech_5")}</li>
                <li>{t("duty_pilot_details_page.backend_tech_6")}</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="visual-showcase single-item">
          <div className="visual-item">
            <img
              src="/assets/images/duty-pilot-2.png"
              alt={t("duty_pilot_details_page.screenshot_alt")}
              className="showcase-media"
            />
            <p className="media-caption">
              {t("duty_pilot_details_page.screenshot_caption")}
            </p>
          </div>
        </section>

        <section className="detail-section">
          <h2 className="section-title">
            {t("duty_pilot_details_page.architecture_section_title")}
          </h2>
          <p className="section-text">
            {t("duty_pilot_details_page.architecture_paragraph")}
          </p>
          <h3 className="subsection-title">
            {t("duty_pilot_details_page.backend_layers_subtitle")}
          </h3>
          <p className="section-text">
            {t("duty_pilot_details_page.backend_layers_intro")}
          </p>
          <ul className="feature-list">
            <li>{t("duty_pilot_details_page.backend_layer_1")}</li>
            <li>{t("duty_pilot_details_page.backend_layer_2")}</li>
            <li>{t("duty_pilot_details_page.backend_layer_3")}</li>
            <li>{t("duty_pilot_details_page.backend_layer_4")}</li>
            <li>{t("duty_pilot_details_page.backend_layer_5")}</li>
          </ul>
          <p className="section-text">
            {t("duty_pilot_details_page.technical_decision_paragraph")}
          </p>
          <h3 className="subsection-title">
            {t("duty_pilot_details_page.frontend_stores_subtitle")}
          </h3>
          <p className="section-text">
            {t("duty_pilot_details_page.frontend_stores_intro")}
          </p>
          <ul className="feature-list">
            <li>{t("duty_pilot_details_page.frontend_store_1")}</li>
            <li>{t("duty_pilot_details_page.frontend_store_2")}</li>
            <li>{t("duty_pilot_details_page.frontend_store_3")}</li>
          </ul>
          <h3 className="subsection-title">
            {t("duty_pilot_details_page.infra_deploy_subtitle")}
          </h3>
          <p className="section-text">
            {t("duty_pilot_details_page.infra_deploy_paragraph")}
          </p>
        </section>

        <section className="project-links">
          <Link
            to="https://duty-pilot.vercel.app/"
            rel="noopener noreferrer"
            className="btn-details"
            target="_blank"
          >
            {t("duty_pilot_details_page.view_project_online")}
          </Link>
          <Link
            to="https://github.com/TauDuque/duty-pilot-front"
            rel="noopener noreferrer"
            className="btn-details secondary"
            target="_blank"
          >
            {t("duty_pilot_details_page.repo_frontend")}
          </Link>
          <Link
            to="https://github.com/TauDuque/duty-pilot-back-end"
            rel="noopener noreferrer"
            className="btn-details secondary"
            target="_blank"
          >
            {t("duty_pilot_details_page.repo_backend")}
          </Link>
        </section>
      </div>
    </div>
  );
};

export default DutyPilotDetalhes;
