import { Link } from "react-router-dom";
import "./style.css"; // CSS específico para esta página
import { useTranslation } from "../../../hooks/useTranslation"; // Importe seu hook de tradução aqui

const GaleriaDeArteDetalhes = () => {
  const { t } = useTranslation(); // Inicializa o hook de tradução

  return (
    <div className="project-detail-page-container">
      {/* Seção Hero - Imagem de Destaque */}
      <section className="project-hero-visual">
        <img
          src="public/assets/images/galeria_portada.png" // Substitua pelo caminho da sua imagem
          alt={t("gallery_details_page.hero_image_alt")}
          className="hero-image"
        />
        <div className="hero-overlay">
          <h1 className="hero-title">{t("gallery_details_page.hero_title")}</h1>
          <p className="hero-subtitle">
            {t("gallery_details_page.hero_subtitle")}
          </p>
        </div>
      </section>

      <div className="project-content-wrapper">
        {/* Visão Geral e Funcionalidades Chave */}
        <section className="detail-section">
          <h2 className="section-title">
            {t("gallery_details_page.overview_section_title")}
          </h2>
          <p className="section-text">
            {t("gallery_details_page.overview_paragraph")}
          </p>
          <h3 className="subsection-title">
            {t("gallery_details_page.features_subtitle")}
          </h3>
          <ul className="feature-list">
            <li>{t("gallery_details_page.feature_1")}</li>
            <li>{t("gallery_details_page.feature_2")}</li>
            <li>{t("gallery_details_page.feature_3")}</li>
            <li>{t("gallery_details_page.feature_4")}</li>
            <li>{t("gallery_details_page.feature_5")}</li>
          </ul>
        </section>

        {/* Bloco Visual 1: GIF 1 e Screenshot 2 */}
        <section className="visual-showcase">
          <div className="visual-item">
            <img
              src="public/assets/gifs/gif_galeria_1.gif" // Substitua pelo caminho do seu GIF
              alt={t("gallery_details_page.gif_alt")}
              className="showcase-media"
            />
            <p className="media-caption">
              {t("gallery_details_page.gif_caption")}
            </p>
          </div>
          {/* O screenshot comentado no original foi mantido comentado aqui */}
          {/* <div className="visual-item">
            <img
              src="/src/assets/images/galeria_2.png" // Substitua pelo caminho do seu screenshot
              alt={t('gallery_details_page.screenshot_alt_commented')}
              className="showcase-media"
            />
            <p className="media-caption">
              {t('gallery_details_page.screenshot_caption_commented')}
            </p>
          </div> */}
        </section>

        {/* Stack Tecnológico */}
        <section className="detail-section">
          <h2 className="section-title">
            {t("gallery_details_page.stack_section_title")}
          </h2>
          <p className="section-text">
            {t("gallery_details_page.stack_paragraph")}
          </p>
          <div className="tech-stack-grid">
            <div className="tech-category">
              <h3 className="subsection-title">
                {t("gallery_details_page.frontend_subtitle")}
              </h3>
              <ul className="tech-list">
                <li>{t("gallery_details_page.frontend_tech_1")}</li>
                <li>{t("gallery_details_page.frontend_tech_2")}</li>
                <li>{t("gallery_details_page.frontend_tech_3")}</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3 className="subsection-title">
                {t("gallery_details_page.backend_subtitle")}
              </h3>
              <ul className="tech-list">
                <li>{t("gallery_details_page.backend_tech_1")}</li>
                <li>{t("gallery_details_page.backend_tech_2")}</li>
                <li>{t("gallery_details_page.backend_tech_3")}</li>
                <li>{t("gallery_details_page.backend_tech_4")}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bloco Visual 2: GIF 2 */}
        <section className="visual-showcase single-item">
          {" "}
          <div className="visual-item">
            <img
              src="public/assets/images/galeria_2.png" // Substitua pelo caminho do seu screenshot
              alt={t("gallery_details_page.screenshot2_alt")}
              className="showcase-media"
            />
            <p className="media-caption">
              {t("gallery_details_page.screenshot2_caption")}
            </p>
          </div>
        </section>

        {/* Arquitetura e Detalhes de Implementação */}
        <section className="detail-section">
          <h2 className="section-title">
            {t("gallery_details_page.architecture_section_title")}
          </h2>
          <p className="section-text">
            {t("gallery_details_page.architecture_paragraph")}
          </p>
          <h3 className="subsection-title">
            {t("gallery_details_page.hosting_subtitle")}
          </h3>
          <ul className="feature-list">
            <li>{t("gallery_details_page.hosting_1")}</li>
            <li>{t("gallery_details_page.hosting_2")}</li>
          </ul>
          <h3 className="subsection-title">
            {t("gallery_details_page.database_subtitle")}
          </h3>
          <p className="section-text">
            {t("gallery_details_page.database_paragraph")}
          </p>
          <h3 className="subsection-title">
            {t("gallery_details_page.integration_subtitle")}
          </h3>
          <p className="section-text">
            {t("gallery_details_page.integration_paragraph")}
          </p>
        </section>

        {/* Desafios Técnicos e Soluções/Aprendizados */}
        <section className="detail-section">
          <h2 className="section-title">
            {t("gallery_details_page.challenges_section_title")}
          </h2>
          <p className="section-text">
            {t("gallery_details_page.challenges_paragraph")}
          </p>
          <h3 className="subsection-title">
            {t("gallery_details_page.api_integration_subtitle")}
          </h3>
          <p className="section-text">
            {t("gallery_details_page.api_integration_paragraph")}
          </p>
          <h3 className="subsection-title">
            {t("gallery_details_page.state_management_subtitle")}
          </h3>
          <p className="section-text">
            {t("gallery_details_page.state_management_paragraph")}
          </p>
        </section>

        {/* Links para o Projeto */}
        <section className="project-links">
          <Link
            to="https://galeria-pessoal-front-end.vercel.app/"
            rel="noopener noreferrer"
            className="btn-details"
            target="_blank"
          >
            {t("gallery_details_page.view_project_online")}
          </Link>
          <Link
            to="https://github.com/TauDuque/galeria-pessoal-front-end"
            rel="noopener noreferrer"
            className="btn-details secondary"
            target="_blank"
          >
            {t("gallery_details_page.repo_frontend")}
          </Link>
          <Link
            to="https://github.com/TauDuque/galeria-pessoal-back-end"
            rel="noopener noreferrer"
            className="btn-details secondary"
            target="_blank"
          >
            {t("gallery_details_page.repo_backend")}
          </Link>
        </section>
      </div>
    </div>
  );
};

export default GaleriaDeArteDetalhes;
