import { useTranslation } from "react-i18next";
import "../../styles/components/about/About.css";
import me from "../../assets/images/me.jpg";

const About = () => {
  const { t } = useTranslation();

  return (
    <div id="about" className="about-section">
      <div className="about-content">
        <div className="about-left">
          <img src={me} alt="Gabriel Habermann" className="about-photo" loading="lazy" />
        </div>
        <div className="about-right">
          <h2 className="about-title">{t("navbar.about")}</h2>
          <p>{t("about.description")}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
