import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect} from 'react'
import Loader from 'react-loaders'
import React from 'react';
import 'swiper/swiper-bundle.css';








const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
    
        
        return () => clearTimeout(timer);
      }, []); 

    




    return (
    <>
        <div className="container about-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>
                    I am a highly ambitious backend developer and data engineer 
                    seeking a position within a well-established IT company 
                    that offers the chance to engage with cutting-edge technologies 
                    while tackling a variety of complex and diverse projects
                </p>
                <p align="LEFT">
                    My confidence, innate curiosity, and relentless dedication 
                    to refining my skills enable me to approach each data and software engineering 
                    challenge with unwavering determination.
                </p>
                <p>
                    If I need to define myself in one sentence that would be a family
                    person, a sports fanatic, and tech-obsessed!!!
                </p>
            </div>
            
        </div>

        <Loader type="pacman" />

    </>
    )
}

export default About