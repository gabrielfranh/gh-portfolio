import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Certifications from "./components/certifications/Certifications";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      {/* Background fixo para todo o site */}
      <div className="background" aria-hidden="true"></div>
      <div className="background-overlay" aria-hidden="true"></div>
      
      {/* Conteúdo principal */}
      <main className="main-content">
        <Home />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;