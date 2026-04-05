import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Typewriter from "./Typewriter";
import me from "../../assets/images/me.jpg";
import "../../styles/components/home/Home.css";

const Home = () => {
  const { t, i18n } = useTranslation();
  const [showRest, setShowRest] = useState(false);

  useEffect(() => {
    setShowRest(false);
  }, [i18n.language]);

  return (
    <section className="home-section" id="home">
      <div className="home-content">

        <div className="home-left">
          <div className="frontmatter">
            <span className="fm-delimiter">---</span>

            <div className="fm-line">
              <span className="fm-key">{t("home.labels.name")}:</span>
              <span className="fm-value">
                <Typewriter
                  key={i18n.language}
                  text={t("home.title")}
                  delay={50}
                  repeat={false}
                  onComplete={() => setShowRest(true)}
                />
              </span>
            </div>

            {showRest && (
              <>
                <div className="fm-line fm-animate">
                  <span className="fm-key">{t("home.labels.role")}:</span>
                  <span className="fm-value">{t("home.role")}</span>
                </div>
                <div className="fm-line fm-animate" style={{ animationDelay: "0.1s" }}>
                  <span className="fm-key">{t("home.labels.stack")}:</span>
                  <span className="fm-value fm-stack">.NET · React · Docker · Kubernetes · AWS</span>
                </div>
                <div className="fm-line fm-animate" style={{ animationDelay: "0.2s" }}>
                  <span className="fm-key">{t("home.labels.experience")}:</span>
                  <span className="fm-value fm-number">6 {t("home.years")}</span>
                </div>
              </>
            )}

            <span className="fm-delimiter">---</span>
          </div>

          {showRest && (
            <div className="home-links fm-animate" style={{ animationDelay: "0.35s" }}>
              <a
                href="https://www.linkedin.com/in/gabrielfranh/?locale=en_US"
                target="_blank"
                rel="noreferrer"
                className="home-link"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/gabrielfranh"
                target="_blank"
                rel="noreferrer"
                className="home-link"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github" />
                <span>GitHub</span>
              </a>
            </div>
          )}
        </div>

        <div className="home-right">
          <img src={me} alt="Gabriel Habermann" className="home-photo" loading="lazy" />
        </div>

      </div>
    </section>
  );
};

export default Home;
