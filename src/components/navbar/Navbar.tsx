import { Link } from "react-scroll";
import '../../styles/components/navbar/Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
            <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link
                        className="nav-item nav-link"
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Home
                    </Link>
                    <Link
                        className="nav-item nav-link"
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        About me
                    </Link>
                    <Link
                        className="nav-item nav-link"
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Skills
                    </Link>
                    <Link
                        className="nav-item nav-link disabled"
                        to="blog"
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Blog
                    </Link>
                    <Link
                        className="nav-item nav-link"
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
