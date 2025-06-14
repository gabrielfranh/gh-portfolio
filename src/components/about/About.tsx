import { useTranslation } from "react-i18next";
import "../../styles/components/about/About.css";
import me from "../../assets/images/me.jpg";

const About = () => {
  const { t } = useTranslation();

  return (
    <div id="about" className="about-section">
      <div className="about-content">
        <div className="about-left">
          <img src={me} alt="Gabriel Habermann" className="about-photo" />
          <div className="about-icons">
            <a
              href="https://www.linkedin.com/in/gabrielfranh/?locale=en_US"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin fa-2xl homeIcons"></i>
            </a>
            <a href="https://github.com/gabrielfranh" target="_blank">
              <i className="fa-brands fa-github fa-2xl homeIcons"></i>
            </a>
          </div>
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
