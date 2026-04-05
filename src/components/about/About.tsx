import { useTranslation } from "react-i18next";
import "../../styles/components/about/About.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        <h2 className="section-heading">{t("navbar.about")}</h2>
        <p className="section-subtext">{t("about.subtext")}</p>

        <div className="about-paragraphs">
          <div className="note-card about-intro">
            <p>{t("about.p1")}</p>
          </div>

          <div className="about-body">
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
