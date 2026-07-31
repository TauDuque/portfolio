// src/pages/HomePageContent.tsx

import { useTranslation } from "../../hooks/useTranslation";

const HomePageContent = () => {
  const { t } = useTranslation();

  return (
    <main className="hero-section">
      <div className="illustration-wrapper">
        <img
          src="/assets/images/portada.png"
          alt={t("app_page.hero_illustration_alt")}
          className="main-illustration-placeholder"
        />
      </div>
      <h1 className="hero-tagline">{t("app_page.hero_tagline")}</h1>
    </main>
  );
};

export default HomePageContent;
