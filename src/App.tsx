import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './components/home/Home';
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Certifications from './components/certifications/Certifications'
import Contact from './components/contact/Contact'

function App() {
  return (
    <>
    <Home />
    <About />
    <Skills />
    < Certifications />
    <Contact />
    </>
  )
}

export default App