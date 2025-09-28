// src/pages/HabilidadesFerramentas/index.tsx
import React from "react";
import "./styles.css"; // Importa os estilos específicos da página
import TypescriptIconLight from "../../assets/images/ts-light.png";
import TypescriptIconDark from "../../assets/images/ts-dark.png";
import { useTranslation } from "../../hooks/useTranslation"; // Importe seu hook de tradução aqui

interface HabilidadesFerramentasProps {
  isDarkMode: boolean;
}

const HabilidadesFerramentas: React.FC<HabilidadesFerramentasProps> = ({
  isDarkMode,
}) => {
  const { t } = useTranslation(); // Inicializa o hook de tradução

  return (
    <div className="habilidades-ferramentas-container">
      <section className="habilidades-ferramentas-section">
        <h1 className="habilidades-ferramentas-title">
          {t("skills_page.main_title")}
        </h1>
        <p className="habilidades-ferramentas-intro">
          {t("skills_page.intro_paragraph")}
        </p>
      </section>

      <section className="habilidades-ferramentas-section">
        <h2 className="habilidades-ferramentas-subtitle">
          {t("skills_page.technical_skills_title")}
        </h2>
        <div className="skills-grid">
          {/* Linguagens */}
          <div className="skill-category">
            <h3>
              <i className="fas fa-code"></i>{" "}
              {t("skills_page.languages_category")}
            </h3>
            <ul>
              <li>
                <i className="fa-brands fa-js"></i>
                <div>
                  <strong>{t("skills_page.js_title")}</strong>
                  <p>{t("skills_page.js_description")}</p>
                </div>
              </li>
              <li>
                <img
                  src={isDarkMode ? TypescriptIconDark : TypescriptIconLight}
                  alt="TypeScript Icon"
                  className="skill-img-icon"
                />
                <div>
                  <strong>{t("skills_page.ts_title")}</strong>
                  <p>{t("skills_page.ts_description")}</p>
                </div>
              </li>
              <li>
                <i className="fa-brands fa-html5"></i>
                <div>
                  <strong>{t("skills_page.html5_title")}</strong>
                  <p>{t("skills_page.html5_description")}</p>
                </div>
              </li>
              <li>
                <i className="fa-brands fa-css3-alt"></i>
                <div>
                  <strong>{t("skills_page.css3_title")}</strong>
                  <p>{t("skills_page.css3_description")}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Front-end */}
          <div className="skill-category">
            <h3>
              <i className="fas fa-desktop"></i>{" "}
              {t("skills_page.frontend_category")}
            </h3>
            <ul>
              <li>
                <i className="fa-brands fa-react"></i>
                <div>
                  <strong>{t("skills_page.react_title")}</strong>
                  <p>{t("skills_page.react_description")}</p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-layer-group"></i>
                <div>
                  <strong>{t("skills_page.nextjs_title")}</strong>
                  <p>{t("skills_page.nextjs_description")}</p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-atom"></i>
                <div>
                  <strong>{t("skills_page.redux_title")}</strong>
                  <p>{t("skills_page.redux_description")}</p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-palette"></i>
                <div>
                  <strong>{t("skills_page.styled_components_title")}</strong>
                  <p>{t("skills_page.styled_components_description")}</p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-cloud-arrow-up"></i>
                <div>
                  <strong>{t("skills_page.axios_title")}</strong>
                  <p>{t("skills_page.axios_description")}</p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-cube"></i>
                <div>
                  <strong>{t("skills_page.material_ui_title")}</strong>
                  <p>{t("skills_page.material_ui_description")}</p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-wind"></i>
                <div>
                  <strong>{t("skills_page.tailwind_css_title")}</strong>
                  <p>{t("skills_page.tailwind_css_description")}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Back-end */}
          <div className="skill-category">
            <h3>
              <i className="fas fa-server"></i>{" "}
              {t("skills_page.backend_category")}
            </h3>
            <ul>
              <li>
                <i className="fa-brands fa-node-js"></i>
                <div>
                  <strong>{t("skills_page.nodejs_title")}</strong>
                  <p>{t("skills_page.nodejs_description")}</p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-network-wired"></i>
                <div>
                  <strong>{t("skills_page.expressjs_title")}</strong>
                  <p>{t("skills_page.expressjs_description")}</p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-database"></i>
                <div>
                  <strong>{t("skills_page.typeorm_title")}</strong>
                  <p>{t("skills_page.typeorm_description")}</p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-bolt"></i>
                <div>
                  <strong>{t("skills_page.prisma_title")}</strong>
                  <p>{t("skills_page.prisma_description")}</p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-hourglass-half"></i>
                <div>
                  <strong>{t("skills_page.bull_title")}</strong>
                  <p>{t("skills_page.bull_description")}</p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-table"></i>
                <div>
                  <strong>{t("skills_page.sequelize_title")}</strong>
                  <p>{t("skills_page.sequelize_description")}</p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-exchange-alt"></i>
                <div>
                  <strong>{t("skills_page.restful_apis_title")}</strong>
                  <p>{t("skills_page.restful_apis_description")}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Bases de Dados */}
          <div className="skill-category">
            <h3>
              <i className="fas fa-hdd"></i>{" "}
              {t("skills_page.databases_category")}
            </h3>
            <ul>
              <li>
                <i className="fa-solid fa-leaf"></i>
                <div>
                  <strong>{t("skills_page.mongodb_title")}</strong>
                  <p>{t("skills_page.mongodb_description")}</p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-database"></i>
                <div>
                  <strong>{t("skills_page.postgresql_title")}</strong>
                  <p>{t("skills_page.postgresql_description")}</p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-database"></i>
                <div>
                  <strong>{t("skills_page.mysql_title")}</strong>
                  <p>{t("skills_page.mysql_description")}</p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-memory"></i>
                <div>
                  <strong>{t("skills_page.redis_title")}</strong>
                  <p>{t("skills_page.redis_description")}</p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-cloud"></i>
                <div>
                  <strong>{t("skills_page.dynamodb_title")}</strong>
                  <p>{t("skills_page.dynamodb_description")}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Ferramentas & DevOps */}
          <div className="skill-category">
            <h3>
              <i className="fas fa-tools"></i>{" "}
              {t("skills_page.tools_devops_category")}
            </h3>
            <ul>
              <li>
                <i className="fa-brands fa-github"></i>
                <div>
                  <strong>{t("skills_page.github_title")}</strong>
                  <p>{t("skills_page.github_description")}</p>
                </div>
              </li>
              <li>
                <i className="fa-brands fa-docker"></i>
                <div>
                  <strong>{t("skills_page.docker_title")}</strong>
                  <p>{t("skills_page.docker_description")}</p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-bug"></i>
                <div>
                  <strong>{t("skills_page.sonarqube_title")}</strong>
                  <p>{t("skills_page.sonarqube_description")}</p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-vial"></i>
                <div>
                  <strong>{t("skills_page.jest_title")}</strong>
                  <p>{t("skills_page.jest_description")}</p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-arrows-rotate"></i>
                <div>
                  <strong>{t("skills_page.ci_cd_title")}</strong>
                  <p>{t("skills_page.ci_cd_description")}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Plataformas Cloud */}
          <div className="skill-category">
            <h3>
              <i className="fas fa-cloud"></i>{" "}
              {t("skills_page.cloud_platforms_category")}
            </h3>
            <ul>
              <li>
                <i className="fa-brands fa-microsoft"></i>
                <div>
                  <strong>{t("skills_page.azure_title")}</strong>
                  <p>{t("skills_page.azure_description")}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Metodologias */}
          <div className="skill-category">
            <h3>
              <i className="fas fa-project-diagram"></i>{" "}
              {t("skills_page.methodologies_category")}
            </h3>
            <ul>
              <li>
                <i className="fa-solid fa-people-arrows"></i>
                <div>
                  <strong>{t("skills_page.agile_title")}</strong>
                  <p>{t("skills_page.agile_description")}</p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-broom"></i>
                <div>
                  <strong>{t("skills_page.clean_code_title")}</strong>
                  <p>{t("skills_page.clean_code_description")}</p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-cubes"></i>
                <div>
                  <strong>{t("skills_page.ddd_title")}</strong>
                  <p>{t("skills_page.ddd_description")}</p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-sitemap"></i>
                <div>
                  <strong>{t("skills_page.clean_architecture_title")}</strong>
                  <p>{t("skills_page.clean_architecture_description")}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="habilidades-ferramentas-section">
        <h2 className="habilidades-ferramentas-subtitle">
          {t("skills_page.soft_skills_title")}
        </h2>
        <div className="soft-skills-grid">
          <div className="soft-skill-item">
            <i className="fa-solid fa-comments"></i>
            <h4>{t("skills_page.communication_title")}</h4>
            <p>{t("skills_page.communication_description")}</p>
          </div>
          <div className="soft-skill-item">
            <i className="fa-solid fa-handshake"></i>
            <h4>{t("skills_page.teamwork_title")}</h4>
            <p>{t("skills_page.teamwork_description")}</p>
          </div>
          <div className="soft-skill-item">
            <i className="fa-solid fa-lightbulb"></i>
            <h4>{t("skills_page.problem_solving_title")}</h4>
            <p>{t("skills_page.problem_solving_description")}</p>
          </div>
          <div className="soft-skill-item">
            <i className="fa-solid fa-shuffle"></i>
            <h4>{t("skills_page.adaptability_title")}</h4>
            <p>{t("skills_page.adaptability_description")}</p>
          </div>
          <div className="soft-skill-item">
            <i className="fa-solid fa-user-graduate"></i>
            <h4>{t("skills_page.mentorship_title")}</h4>
            <p>{t("skills_page.mentorship_description")}</p>
          </div>
          <div className="soft-skill-item">
            <i className="fa-solid fa-rocket"></i>
            <h4>{t("skills_page.proactivity_title")}</h4>
            <p>{t("skills_page.proactivity_description")}</p>
          </div>
          <div className="soft-skill-item">
            <i className="fa-solid fa-magnifying-glass"></i>
            <h4>{t("skills_page.attention_to_detail_title")}</h4>
            <p>{t("skills_page.attention_to_detail_description")}</p>
          </div>
        </div>
      </section>

      <section className="habilidades-ferramentas-section">
        <h2 className="habilidades-ferramentas-subtitle">
          {t("skills_page.education_courses_title")}
        </h2>
        <ul className="courses-list">
          <li>
            <i className="fa-solid fa-book-open"></i>{" "}
            {t("skills_page.education_usp")}
          </li>
          <li>
            <i className="fa-solid fa-graduation-cap"></i>{" "}
            {t("skills_page.course_ignite")}
          </li>
          <li>
            <i className="fa-solid fa-graduation-cap"></i>{" "}
            {t("skills_page.course_cs50")}
          </li>
          <li>
            <i className="fa-solid fa-graduation-cap"></i>{" "}
            {t("skills_page.course_js_functional")}
          </li>
          <li>
            <i className="fa-solid fa-graduation-cap"></i>{" "}
            {t("skills_page.course_js_projects")}
          </li>
          <li>
            <i className="fa-solid fa-graduation-cap"></i>{" "}
            {t("skills_page.course_freecodecamp")}
          </li>
          <li>
            <i className="fa-solid fa-graduation-cap"></i>{" "}
            {t("skills_page.course_codecademy")}
          </li>
          <li>
            <i className="fa-solid fa-graduation-cap"></i>{" "}
            {t("skills_page.course_mdn")}
          </li>
        </ul>
      </section>
    </div>
  );
};

export default HabilidadesFerramentas;
