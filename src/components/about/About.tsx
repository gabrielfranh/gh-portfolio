import { useTranslation } from "react-i18next";
import "../../styles/components/about/About.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <div id="about" className="about-section">
      <div className="about-content">
        <div className="about-center">
          <h2 className="about-title">{t("navbar.about")}</h2>
          <p>{t("about.description")}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
