import { useState } from 'react';
import Navbar from '../navbar/Navbar'
import Typewriter from './Typewriter';

import  '../../styles/components/home/Home.css'

const Home = () => {
    const [showSubtitle, setShowSubtitle] = useState(false);

    const handleTypewriterComplete = () =>{
        setShowSubtitle(true);
    }
    
    return (
        <>
        <Navbar/>
        <div id="home" className="section">
            <div className="background"></div>
            <div className="overlay"></div>
            <h1 className="title">
                <Typewriter 
                    text="I'm Gabriel Habermann, welcome to my portfolio!" 
                    delay={50} 
                    repeat={false} 
                    onComplete={handleTypewriterComplete}
                />
            </h1>
            <div>
                {showSubtitle && (
                    <h2 className="subTitle">
                        Software Engineer with 6 years of experience, specializing in cloud-based development
                    </h2>
                )}
            </div>
            <div>
                {showSubtitle && ( 
                <>
                    <a href='https://www.linkedin.com/in/gabrielfranh/' target="_blank"><i className="fa-brands fa-linkedin fa-2xl homeIcons"></i></a>
                    <a href='https://github.com/gabrielfranh' target="_blank"><i className="fa-brands fa-github fa-2xl homeIcons"></i></a>
                </>
            )}
            </div>
        </div>

        </>
    )
}

export default Home;