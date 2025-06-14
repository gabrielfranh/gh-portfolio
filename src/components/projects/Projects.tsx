import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
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
      language === "All"
        ? repos
        : repos.filter((repo) => repo.language === language)
    );
  };

  if (loading) return <p className="loading">{t("projects.loading")}</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <section className="projects-section" id="projects">
      <h2>{t("projects.title")}</h2>

      <div className="filter-container">
        <label>{t("projects.filter")}</label>
        <select
          value={selectedLanguage}
          onChange={(e) => filterProjects(e.target.value)}
        >
          <option value="All">{t("projects.all")}</option>
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
      >
        {filteredRepos.map((repo) => (
          <SwiperSlide key={repo.id}>
            <div className="project-card">
              <h3>{repo.name}</h3>
              <p>{repo.description || "Without description"}</p>
              <p className="language">{repo.language || "Not specified"}</p>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
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
