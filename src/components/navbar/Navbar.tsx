import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import '../../styles/components/navbar/Navbar.css'

const Navbar = () => {
    const [navbarTransparent, setNavbarTransparent] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setNavbarTransparent(window.scrollY < 200); // Muda para escuro após 200px
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg fixed-top navbar-dark ${navbarTransparent ? 'bg-transparent' : 'bg-dark'}`}>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
                    <Link className="nav-item nav-link" activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>About me</Link>
                    <Link className="nav-item nav-link" activeClass="active" to="skills" spy={true} smooth={true} offset={-70} duration={500}>Skills</Link>
                    <Link className="nav-item nav-link" activeClass="active" to="certifications" spy={true} smooth={true} offset={-70} duration={500}>Certifications</Link>
                    <Link className="nav-item nav-link" activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link>
                    <Link className="nav-item nav-link disabled" to="blog" smooth={true} offset={-70} duration={500}>Blog</Link>
                    <Link className="nav-item nav-link" activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
