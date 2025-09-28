// src/pages/Trajetoria/index.tsx
import React from "react";
import "./style.css"; // Importa os estilos específicos da página
// Importe seu hook de tradução aqui, por exemplo:
import { useTranslation } from "../../hooks/useTranslation"; // Exemplo usando react-i18next

const Trajetoria: React.FC = () => {
  const { t } = useTranslation(); // Inicializa o hook de tradução

  return (
    <div className="trajetoria-container">
      <section className="trajetoria-section">
        <h1 className="trajetoria-title">{t("trajectory_page.main_title")}</h1>
        <p className="trajetoria-intro">
          {t("trajectory_page.intro_paragraph")}
        </p>
      </section>

      <section className="trajetoria-section">
        <h2 className="trajetoria-subtitle">
          {t("trajectory_page.section1_title")}
        </h2>
        <p>{t("trajectory_page.section1_paragraph")}</p>
        <ul className="trajetoria-list">
          <li
            dangerouslySetInnerHTML={{
              __html: t("trajectory_page.section1_item1"),
            }}
          />
          <li
            dangerouslySetInnerHTML={{
              __html: t("trajectory_page.section1_item2"),
            }}
          />
          <li
            dangerouslySetInnerHTML={{
              __html: t("trajectory_page.section1_item3"),
            }}
          />
        </ul>
      </section>

      <section className="trajetoria-section">
        <h2 className="trajetoria-subtitle">
          {t("trajectory_page.section2_title")}
        </h2>
        <p>{t("trajectory_page.section2_paragraph")}</p>
        <ul className="trajetoria-list">
          <li
            dangerouslySetInnerHTML={{
              __html: t("trajectory_page.section2_item1"),
            }}
          />
        </ul>
      </section>

      <section className="trajetoria-section">
        <h2 className="trajetoria-subtitle">
          {t("trajectory_page.section3_title")}
        </h2>
        <p>{t("trajectory_page.section3_paragraph")}</p>
        <ul className="trajetoria-list">
          <li
            dangerouslySetInnerHTML={{
              __html: t("trajectory_page.section3_item1"),
            }}
          />
          <li>
            <span
              dangerouslySetInnerHTML={{
                __html: t("trajectory_page.section3_item2_intro"),
              }}
            />
            <ul className="trajetoria-sublist">
              <li
                dangerouslySetInnerHTML={{
                  __html: t("trajectory_page.section3_item2_subitem1"),
                }}
              />
              <li
                dangerouslySetInnerHTML={{
                  __html: t("trajectory_page.section3_item2_subitem2"),
                }}
              />
              <li
                dangerouslySetInnerHTML={{
                  __html: t("trajectory_page.section3_item2_subitem3"),
                }}
              />
              <li
                dangerouslySetInnerHTML={{
                  __html: t("trajectory_page.section3_item2_subitem4"),
                }}
              />
            </ul>
            <span
              dangerouslySetInnerHTML={{
                __html: t("trajectory_page.section3_item2_conclusion"),
              }}
            />
          </li>
        </ul>
      </section>

      <section className="trajetoria-section">
        <h2 className="trajetoria-subtitle">
          {t("trajectory_page.section4_title")}
        </h2>
        <p>{t("trajectory_page.section4_paragraph")}</p>
      </section>
    </div>
  );
};

export default Trajetoria;
