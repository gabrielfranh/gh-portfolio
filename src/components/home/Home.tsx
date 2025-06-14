import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../navbar/Navbar";
import Typewriter from "./Typewriter";

import "../../styles/components/home/Home.css";

const Home = () => {
  const { t, i18n } = useTranslation();
  const [showSubtitle, setShowSubtitle] = useState(false);

  const handleTypewriterComplete = () => {
    setShowSubtitle(true);
  };

  useEffect(() => {
    setShowSubtitle(false);
  }, [i18n.language]);

  return (
    <>
      <Navbar />
      <div id="home" className="section">
        <h1 className="title">
          <Typewriter
            text={t("home.title")}
            delay={50}
            repeat={false}
            onComplete={handleTypewriterComplete}
          />
        </h1>
        <div>
          {showSubtitle && <h2 className="subTitle">{t("home.subTitle")}</h2>}
        </div>
        <div>
          {showSubtitle && (
            <>
              <a
                href="https://www.linkedin.com/in/gabrielfranh/?locale=en_US"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin fa-2xl homeIcons"></i>
              </a>
              <a href="https://github.com/gabrielfranh" target="_blank">
                <i className="fa-brands fa-github fa-2xl homeIcons"></i>
              </a>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
