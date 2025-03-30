import '../../styles/components/about/About.css'

const About = () => {
    return (
        <div id="about" className="about-section">
            <div className="about-content">
                <div className="about-left">
                    <img
                        src="/src/assets/images/me.jpg"
                        alt="Gabriel Habermann"
                        className="about-photo"
                    />
                    <div className='about-icons'>
                        <a href='https://www.linkedin.com/in/gabrielfranh/?locale=en_US' target="_blank"><i className="fa-brands fa-linkedin fa-2xl homeIcons"></i></a>
                        <a href='https://github.com/gabrielfranh' target="_blank"><i className="fa-brands fa-github fa-2xl homeIcons"></i></a>
                    </div>
                </div>
                <div className="about-right">
                    <h2 className='about-title'>About me</h2>
                    <p>
                    Graduated in Computer Science from UNESP and certified as an AWS Cloud Practitioner, I started my career as a developer in 2017 while still in high school and technical education.

                    Since then, I have been working as a backend software engineer, developing solutions in the .NET ecosystem (Core and Framework) with C#. I work with various technologies, including Kubernetes, Docker, and MySQL, applying best practices such as SOLID and KISS to ensure clean and efficient code.

                    Although my primary focus is on backend development, I also have experience in full-stack development, using React on the front end to build dynamic and responsive interfaces. Additionally, I have strong knowledge of unit testing with tools like xUnit and NUnit, as well as expertise in leveraging the AWS environment for software delivery.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;