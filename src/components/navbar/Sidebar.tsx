import { useState } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import "../../styles/components/navbar/Sidebar.css";

const navItems = [
  { to: "home",     icon: "fa-solid fa-house",        key: "navbar.home" },
  { to: "about",    icon: "fa-solid fa-user",          key: "navbar.about" },
  { to: "skills",   icon: "fa-solid fa-code",          key: "navbar.skills" },
  { to: "projects", icon: "fa-solid fa-folder-open",   key: "navbar.projects" },
  // { to: "notes", icon: "fa-solid fa-file-lines", key: "navbar.notes" }, // hidden until content is ready
{ to: "contact",  icon: "fa-solid fa-paper-plane",   key: "navbar.contact" },
];

const Sidebar = () => {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ── Desktop sidebar ── */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <span className="sidebar-logo-icon">⬡</span>
          <span className="sidebar-logo-text">gabriel.md</span>
        </div>

        <div className="sidebar-divider" />

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <Link
              key={item.to}
              className="sidebar-nav-item"
              activeClass="sidebar-nav-item--active"
              to={item.to}
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
            >
              <i className={`${item.icon} sidebar-nav-icon`} />
              <span className="sidebar-nav-label">{t(item.key)}</span>
            </Link>
          ))}
        </nav>

        <div className="sidebar-spacer" />

        <div className="sidebar-divider" />
        <div className="sidebar-lang">
          <button
            className={`sidebar-lang-btn ${i18n.language === "en" ? "sidebar-lang-btn--active" : ""}`}
            onClick={() => i18n.changeLanguage("en")}
          >
            EN
          </button>
          <span className="sidebar-lang-sep">/</span>
          <button
            className={`sidebar-lang-btn ${i18n.language === "pt" ? "sidebar-lang-btn--active" : ""}`}
            onClick={() => i18n.changeLanguage("pt")}
          >
            PT
          </button>
        </div>
      </aside>

      {/* ── Mobile bottom nav ── */}
      <nav className="mobile-nav">
        {navItems.slice(0, 5).map((item) => (
          <Link
            key={item.to}
            className="mobile-nav-item"
            activeClass="mobile-nav-item--active"
            to={item.to}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <i className={`${item.icon}`} />
          </Link>
        ))}
        <button
          className={`mobile-nav-item ${mobileOpen ? "mobile-nav-item--active" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="More"
        >
          <i className="fa-solid fa-ellipsis" />
        </button>

        {mobileOpen && (
          <div className="mobile-nav-drawer">
            <div className="mobile-nav-drawer-lang">
              <button
                className={`sidebar-lang-btn ${i18n.language === "en" ? "sidebar-lang-btn--active" : ""}`}
                onClick={() => { i18n.changeLanguage("en"); setMobileOpen(false); }}
              >
                EN
              </button>
              <span className="sidebar-lang-sep">/</span>
              <button
                className={`sidebar-lang-btn ${i18n.language === "pt" ? "sidebar-lang-btn--active" : ""}`}
                onClick={() => { i18n.changeLanguage("pt"); setMobileOpen(false); }}
              >
                PT
              </button>
            </div>
            <Link
              className="mobile-nav-item"
              activeClass="mobile-nav-item--active"
              to="contact"
              spy={true}
              smooth={true}
              duration={300}
              onClick={() => setMobileOpen(false)}
            >
              <i className="fa-solid fa-paper-plane" />
              <span>{t("navbar.contact")}</span>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Sidebar;
