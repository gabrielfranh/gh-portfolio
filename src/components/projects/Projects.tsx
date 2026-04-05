import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";
import "swiper/swiper-bundle.css";
import "../../styles/components/projects/Projects.css";

type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
};

const Projects = () => {
  const { t } = useTranslation();
  const [repos, setRepos] = useState<Repo[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<Repo[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/gabrielfranh/repos")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setFilteredRepos(data);
        setLoading(false);
        const uniqueLanguages = Array.from(
          new Set(data.map((repo: Repo) => repo.language).filter(Boolean))
        ) as string[];
        setLanguages(uniqueLanguages);
      })
      .catch(() => {
        setError(t("projects.error"));
        setLoading(false);
      });
  }, []);

  const filterProjects = (language: string) => {
    setSelectedLanguage(language);
    setFilteredRepos(
      language === "All" ? repos : repos.filter((repo) => repo.language === language)
    );
  };

  if (loading) return (
    <section className="projects-section" id="projects">
      <p className="projects-loading">{t("projects.loading")}</p>
    </section>
  );

  if (error) return (
    <section className="projects-section" id="projects">
      <p className="projects-error">{error}</p>
    </section>
  );

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-heading">{t("projects.title")}</h2>
      <p className="section-subtext">{t("projects.subtext")}</p>

      <div className="projects-filter">
        <button
          className={`lang-filter-btn ${selectedLanguage === "All" ? "lang-filter-btn--active" : ""}`}
          onClick={() => filterProjects("All")}
        >
          #{t("projects.all")}
        </button>
        {languages.map((lang) => (
          <button
            key={lang}
            className={`lang-filter-btn ${selectedLanguage === lang ? "lang-filter-btn--active" : ""}`}
            onClick={() => filterProjects(lang)}
          >
            #{lang}
          </button>
        ))}
      </div>

      <Swiper
        className="projects-swiper"
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640:  { slidesPerView: 2, spaceBetween: 16 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
          1400: { slidesPerView: 4, spaceBetween: 20 },
        }}
      >
        {filteredRepos.map((repo) => (
          <SwiperSlide key={repo.id}>
            <div className="project-card">
              <div className="project-card-header">
                <i className="fa-solid fa-file-code project-card-icon" />
                <span className="project-card-filename">{repo.name}.md</span>
              </div>
              {repo.language && (
                <span className="project-lang-tag">#{repo.language}</span>
              )}
              <p className="project-description">
                {repo.description || t("projects.noDescription")}
              </p>
              <a
                className="project-link"
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github" />
                {t("projects.github")} →
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
