import { Link } from "react-router-dom";
import "./style.css";
import { useTranslation } from "../../hooks/useTranslation"; // Importe seu hook de tradução aqui

const Projetos = () => {
  const { t } = useTranslation(); // Inicializa o hook de tradução

  return (
    <div className="projects-page-container">
      <h1 className="page-title">{t("projects_page.main_title")}</h1>

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
            src="/assets/images/galeria_1.png"
            alt={t("projects_page.gallery_project.screenshot_alt")}
            className="project-screenshot"
          />
        </div>

        {/* Área de Texto do Projeto - AGORA DIRETAMENTE NO CARD, ABAIXO DA IMAGEM */}
        <div className="project-text-area">
          <h2 className="project-title">
            {t("projects_page.gallery_project.title")}
          </h2>
          <p className="project-description">
            {t("projects_page.gallery_project.description")}
          </p>
          <p className="project-technologies">
            {t("projects_page.gallery_project.technologies")}
          </p>
          <Link to="/projetos/galeria-de-arte" className="btn-details">
            {t("projects_page.gallery_project.details_button")}
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
            src="/assets/images/monitor_1.png"
            alt={t("projects_page.api_monitor_project.screenshot_alt")}
            className="project-screenshot"
          />
        </div>

        {/* Área de Texto do Projeto - AGORA DIRETAMENTE NO CARD, ABAIXO DA IMAGEM */}
        <div className="project-text-area">
          <h2 className="project-title">
            {t("projects_page.api_monitor_project.title")}
          </h2>
          <p className="project-description">
            {t("projects_page.api_monitor_project.description")}
          </p>
          <p className="project-technologies">
            {t("projects_page.api_monitor_project.technologies")}
          </p>
          <Link to="/projetos/api-monitor" className="btn-details">
            {t("projects_page.api_monitor_project.details_button")}
          </Link>
        </div>
      </section>

      {/* Card do Projeto 3: CurateLink - Em Desenvolvimento */}
      <section className="project-card project-in-development">
        {/* Área Visual para o Screenshot - AGORA DIRETAMENTE NO CARD */}
        <div className="project-visual-area">
          <div className="screenshot-placeholder development-placeholder">
            <span className="development-icon">🚧</span>
          </div>
        </div>

        {/* Área de Texto do Projeto - AGORA DIRETAMENTE NO CARD, ABAIXO DA IMAGEM */}
        <div className="project-text-area">
          <div className="project-title-with-badge">
            <h2 className="project-title">
              {t("projects_page.curatelink_project.title")}
            </h2>
            <span className="status-badge">
              {t("projects_page.curatelink_project.status_badge")}
            </span>
          </div>
          <p className="project-description">
            {t("projects_page.curatelink_project.description")}
          </p>
          <p className="project-technologies">
            {t("projects_page.curatelink_project.technologies")}
          </p>
          <button className="btn-details disabled" disabled>
            {t("projects_page.curatelink_project.coming_soon")}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projetos;
