import "./App.css";
import Sidebar from "./components/navbar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
// import Notes from "./components/notes/Notes"; // hidden until content is ready
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <Home />
        <About />
        <Skills />
        <Projects />
        {/* <Notes /> */}{/* hidden until content is ready */}
        <Contact />
      </main>
    </div>
  );
}

export default App;
