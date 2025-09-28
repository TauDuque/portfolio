// src/pages/SobreMim/index.tsx
import React from "react";
import "./style.css"; // O CSS está na mesma pasta
import { useTranslation } from "../../hooks/useTranslation"; // <--- Caminho atualizado

const SobreMim: React.FC = () => {
  const { t } = useTranslation(); // Use o hook de tradução

  return (
    <main className="sobre-mim-page">
      <section className="sobre-mim-content">
        <div className="sobre-mim-header">
          {/* Espaço para a foto */}
          <div className="profile-photo-container">
            <img
              src="/assets/images/lisboa_livraria_1.jpeg" // Substitua por sua foto real
              alt={t("about_page.profile_alt")}
              className="profile-photo"
            />
          </div>
          {/* NOVO: Div para agrupar o título e o subtítulo */}
          <div className="sobre-mim-text-content">
            <h1 className="sobre-mim-title">
              {t("about_page.title")} {/* Usando a tradução para o título */}
            </h1>
            <p className="sobre-mim-subtitle">
              {t("about_page.subtitle")}{" "}
              {/* Usando a tradução para o subtítulo */}
            </p>
          </div>
        </div>

        <div className="sobre-mim-text-container">
          <p>
            {t("about_page.paragraph1")}{" "}
            {/* Usando a tradução para o parágrafo 1 */}
          </p>
          <p>
            {t("about_page.paragraph2")}{" "}
            {/* Usando a tradução para o parágrafo 2 */}
          </p>
          <p>
            {t("about_page.paragraph3")}{" "}
            {/* Usando a tradução para o parágrafo 3 */}
          </p>
          <p>
            {t("about_page.paragraph4")}{" "}
            {/* Usando a tradução para o parágrafo 4 */}
          </p>
          <p>
            {t("about_page.paragraph5")}{" "}
            {/* Usando a tradução para o parágrafo 5 */}
          </p>
        </div>
      </section>
    </main>
  );
};

export default SobreMim;
