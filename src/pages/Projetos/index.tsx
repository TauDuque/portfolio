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
            src="src/public/assets/images/galeria_1.png"
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
            src="src/public/assets/images/monitor_1.png"
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
          <Link to="/projetos/api-monitor" className="btn-details">
            {t("projects_page.api_monitor_project.details_button")}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projetos;
