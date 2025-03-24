import '../../styles/components/skills/Skills.css';

const Skills = () => {
    return (
        <>
            <section className="skills-section" id='skills'>
                <h1 className='skills-title'>I'm good at:</h1>
                <div className="skills-grid">
                    <div className="skill-card">
                        <i className="fa-brands fa-microsoft skill-icon"></i>
                        <p className="skill-name">.NET</p>
                        <p className="skill-subtitle">Backend Development</p>
                        <div className="skill-overlay">6 Years Experience</div>
                    </div>
                    <div className="skill-card">
                        <i className="fa-brands fa-react skill-icon"></i>
                        <p className="skill-name">React</p>
                        <p className="skill-subtitle">The framework behind this portfolio!</p>
                        <div className="skill-overlay">3 Years Experience</div>
                    </div>
                    <div className="skill-card">
                        <i className="fa-brands fa-docker skill-icon"></i>
                        <p className="skill-name">Docker</p>
                        <p className="skill-subtitle">Containerization</p>
                        <div className="skill-overlay">4 Years Experience</div>
                    </div>
                    <div className="skill-card">
                        <i className="fa-solid fa-cube skill-icon"></i>
                        <p className="skill-name">Kubernetes</p>
                        <p className="skill-subtitle">Orchestration</p>
                        <div className="skill-overlay">4 Years Experience</div>
                    </div>
                    <div className="skill-card">
                        <i className="fa-brands fa-aws skill-icon"></i>
                        <p className="skill-name">AWS</p>
                        <p className="skill-subtitle">Cloud Provider</p>
                        <div className="skill-overlay">3 Years Experience</div>
                    </div>
                    <div className="skill-card">
                        <i className="fa-solid fa-truck-fast skill-icon"></i>
                        <p className="skill-name">CI/CD</p>
                        <p className="skill-subtitle">Pipelines</p>
                        <div className="skill-overlay">3 Years Experience</div>
                    </div>
                    <div className="skill-card">
                        <i className="fa-solid fa-code skill-icon"></i>
                        <p className="skill-name">SOLID & Clean Code</p>
                        <p className="skill-subtitle">Principles</p>
                        <div className="skill-overlay">6 Years Experience</div>
                    </div>
                    <div className="skill-card">
                        <i className="fa-solid fa-vial-circle-check skill-icon"></i>
                        <p className="skill-name">Unit Testing</p>
                        <p className="skill-subtitle">xUnit and NUnit</p>
                        <div className="skill-overlay">6 Years Experience</div>
                    </div>
                    <div className="skill-card">
                        <i className="fa-solid fa-message skill-icon"></i>
                        <p className="skill-name">Message Brokers</p>
                        <p className="skill-subtitle">RabbitMQ</p>
                        <div className="skill-overlay">4 Years Experience</div>
                    </div>
                    <div className="skill-card">
                        <i className="fa-solid fa-network-wired skill-icon"></i>
                        <p className="skill-name">Microservice Architecture</p>
                        <p className="skill-subtitle"></p>
                        <div className="skill-overlay">5 Years Experience</div>
                    </div>
                    <div className="skill-card">
                        <i className="fa-solid fa-puzzle-piece skill-icon"></i>
                        <p className="skill-name">Design Patterns</p>
                        <p className="skill-subtitle">Puzzles?!</p>
                        <div className="skill-overlay">Strategy, Chain of Responsability, Observer...</div>
                    </div>
                </div>
            </section>
    </>
    );
};

export default Skills;
