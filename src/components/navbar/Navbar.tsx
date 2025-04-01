import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import '../../styles/components/navbar/Navbar.css'
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [navbarTransparent, setNavbarTransparent] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setNavbarTransparent(window.scrollY < 200);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg fixed-top navbar-dark ${navbarTransparent ? 'bg-transparent' : 'bg-dark'}`}>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}>{t("navbar.home")}</Link>
                    <Link className="nav-item nav-link" activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>{t("navbar.about")}</Link>
                    <Link className="nav-item nav-link" activeClass="active" to="skills" spy={true} smooth={true} offset={-70} duration={500}>{t("navbar.skills")}</Link>
                    <Link className="nav-item nav-link" activeClass="active" to="certifications" spy={true} smooth={true} offset={-70} duration={500}>{t("navbar.certifications")}</Link>
                    <Link className="nav-item nav-link" activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}>{t("navbar.projects")}</Link>
                    <Link className="nav-item nav-link disabled" to="blog" smooth={true} offset={-70} duration={500}>Blog</Link>
                    <Link className="nav-item nav-link" activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>{t("navbar.contact")}</Link>
                    <div className="nav-item dropdown">
                        <button 
                            className="nav-link dropdown-toggle"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            🌎 {t("navbar.language")}
                        </button>
                        {dropdownOpen && (
                            <div className="dropdown-menu show">
                                <button className="dropdown-item" onClick={() => i18n.changeLanguage("en")}>English</button>
                                <button className="dropdown-item" onClick={() => i18n.changeLanguage("pt")}>Português</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
