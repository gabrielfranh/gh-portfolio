import { useTranslation } from "react-i18next";
import "../../styles/components/skills/Skills.css";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="skills-section" id="skills">
        <h1 className="skills-title">{t("skills.title")}</h1>
        <div className="skills-grid">
          <div className="skill-card">
            <i className="fa-brands fa-microsoft skill-icon"></i>
            <p className="skill-name">.NET</p>
            <p className="skill-subtitle">{t("skills.backendDev")}</p>
            <div className="skill-overlay">6 {t("skills.years")}</div>
          </div>
          <div className="skill-card">
            <i className="fa-brands fa-react skill-icon"></i>
            <p className="skill-name">React</p>
            <p className="skill-subtitle">{t("skills.framework")}</p>
            <div className="skill-overlay">4 {t("skills.years")}</div>
          </div>
          <div className="skill-card">
            <i className="fa-brands fa-docker skill-icon"></i>
            <p className="skill-name">Docker</p>
            <p className="skill-subtitle">{t("skills.containerization")}</p>
            <div className="skill-overlay">4 {t("skills.years")}</div>
          </div>
          <div className="skill-card">
            <i className="fa-solid fa-cube skill-icon"></i>
            <p className="skill-name">Kubernetes</p>
            <p className="skill-subtitle">{t("skills.orchestration")}</p>
            <div className="skill-overlay">4 {t("skills.years")}</div>
          </div>
          <div className="skill-card">
            <i className="fa-brands fa-aws skill-icon"></i>
            <p className="skill-name">AWS</p>
            <p className="skill-subtitle">{t("skills.cloudProvider")}</p>
            <div className="skill-overlay">2 {t("skills.years")}</div>
          </div>
          <div className="skill-card">
            <i className="fa-solid fa-truck-fast skill-icon"></i>
            <p className="skill-name">CI/CD</p>
            <p className="skill-subtitle">Pipelines</p>
            <div className="skill-overlay">3 {t("skills.years")}</div>
          </div>
          <div className="skill-card">
            <i className="fa-solid fa-code skill-icon"></i>
            <p className="skill-name">SOLID & {t("skills.cleanCode")}</p>
            <p className="skill-subtitle">{t("skills.principles")}</p>
            <div className="skill-overlay">6 {t("skills.years")}</div>
          </div>
          <div className="skill-card">
            <i className="fa-solid fa-vial-circle-check skill-icon"></i>
            <p className="skill-name">{t("skills.unitTest")}</p>
            <p className="skill-subtitle">xUnit and NUnit</p>
            <div className="skill-overlay">6 {t("skills.years")}</div>
          </div>
          <div className="skill-card">
            <i className="fa-solid fa-message skill-icon"></i>
            <p className="skill-name">{t("skills.messageBrokers")}</p>
            <p className="skill-subtitle">RabbitMQ</p>
            <div className="skill-overlay">4 {t("skills.years")}</div>
          </div>
          <div className="skill-card">
            <i className="fa-solid fa-network-wired skill-icon"></i>
            <p className="skill-name">{t("skills.microservice")}</p>
            <p className="skill-subtitle"></p>
            <div className="skill-overlay">5 {t("skills.years")}</div>
          </div>
          <div className="skill-card">
            <i className="fa-solid fa-puzzle-piece skill-icon"></i>
            <p className="skill-name">{t("skills.designPatterns")}</p>
            <p className="skill-subtitle">{t("skills.puzzles")}</p>
            <div className="skill-overlay">
              Strategy, Chain of Responsability, Observer...
            </div>
          </div>
          <div className="skill-card">
            <i className="fa-solid fa-database skill-icon"></i>
            <p className="skill-name">{t("skills.database")}</p>
            <div className="skill-overlay">
              MySQL, PostgreSQL, SQL Server - 6 {t("skills.years")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
