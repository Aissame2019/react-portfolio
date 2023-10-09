import { useState, useEffect} from 'react'
import LogoTitle from '../../assets/images/logo.png'
import './index.scss'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import LogoS from '../../assets/images/home1.png'
import Loader from 'react-loaders'

const Home = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a','b','o','u','s','a','l','i', 'm']
  const jobArray = ['s','o','f','t','w','a','r','e',' ','&',' ','d','a','t','a']
  const suit = ['e','n','g','i','n','e','e','r']

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    
    return () => clearTimeout(timer);
  }, []); 

  return (
  <>
    <div className="container home-page">
        <div className="text-zone">
            <h1>
              <span className={letterClass} >H</span>
              <span class={`${letterClass} _12`} >i,</span>
              <br/> 
              <span className={`${letterClass} _13`} >I</span>
              <span className={`${letterClass} _14`} >'m</span>
              <img src={LogoTitle} alt="developer" />
              <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
              <br />
              <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={16}/>
              <br />
              <AnimatedLetters letterClass={letterClass} strArray={suit} idx={24}/>
            </h1>
            <h2>Back End Developer / Data Pipeline Architect</h2>
            
            <Link to="/contact" className="flat-button">
            CONTACT ME
            </Link>
        </div>
        <img className="solid-logo" src={LogoS} alt="$"/>
    </div>
    <Loader type="pacman" />
  </>

  );
}


export default Home