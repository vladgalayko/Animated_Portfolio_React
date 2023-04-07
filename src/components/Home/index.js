import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Logo from './Logo';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray1 = [' ', 'V', 'l', 'a', 'd', 'i',];
  const nameArray2 = ['l', 'a', 'v']
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

  useEffect(() => {
    setTimeout(() => {
    return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <>
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
              <br/>
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters letterClass={letterClass} strArray={nameArray1} idx={15}/>
            <img src={LogoTitle} alt='developer'/>
            <AnimatedLetters letterClass={letterClass} strArray={nameArray2} idx={21}/>
            <br/>
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={24}/>
            </h1>
            <h2>Frontend Developer / JavaScript / React</h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>
        <Logo/>
    </div>
    <Loader type='pacman'/>
    </>
  )
}

export default Home;
