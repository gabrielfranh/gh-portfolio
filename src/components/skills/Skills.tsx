import { useTranslation } from "react-i18next";
import "../../styles/components/skills/Skills.css";

const skillGroups = [
  {
    category: "Backend",
    icon: "fa-brands fa-microsoft",
    skills: [
      { name: ".NET / C#", years: 6 },
      { name: "Node.js", years: 2 },
      { name: "REST APIs", years: 6 },
    ],
  },
  {
    category: "DevOps",
    icon: "fa-brands fa-docker",
    skills: [
      { name: "Docker", years: 4 },
      { name: "Kubernetes", years: 4 },
      { name: "CI/CD", years: 3 },
    ],
  },
  {
    category: "Cloud",
    icon: "fa-brands fa-aws",
    skills: [
      { name: "AWS", years: 2 },
      { name: "Lambda", years: 2 },
      { name: "S3 / SQS", years: 2 },
    ],
  },
  {
    category: "Frontend",
    icon: "fa-brands fa-react",
    skills: [
      { name: "React", years: 4 },
      { name: "TypeScript", years: 4 },
    ],
  },
  {
    category: "Architecture",
    icon: "fa-solid fa-network-wired",
    skills: [
      { name: "Microservices", years: 5 },
      { name: "SOLID", years: 6 },
      { name: "Design Patterns", years: 6 },
      { name: "Message Brokers", years: 4 },
    ],
  },
  {
    category: "Data",
    icon: "fa-solid fa-database",
    skills: [
      { name: "PostgreSQL", years: 6 },
      { name: "SQL Server", years: 6 },
      { name: "MySQL", years: 4 },
      { name: "Redis", years: 2 },
    ],
  },
  {
    category: "Testing",
    icon: "fa-solid fa-vial-circle-check",
    skills: [
      { name: "xUnit / NUnit", years: 6 },
      { name: "Unit Testing", years: 6 },
    ],
  },
];

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section className="skills-section" id="skills">
      <h2 className="section-heading">{t("skills.title")}</h2>
      <p className="section-subtext">{t("skills.subtext")}</p>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.category} className="skill-group">
            <div className="skill-group-header">
              <i className={`${group.icon} skill-group-icon`} />
              <span className="skill-group-title">// {group.category}</span>
            </div>
            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill.name} className="wiki-tag" title={`${skill.years} ${t("skills.years")}`}>
                  [[{skill.name}]]
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
