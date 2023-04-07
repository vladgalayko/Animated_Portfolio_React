import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react'
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  
  useEffect(() => {
    setTimeout(() => {
    return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
                letterClass={letterClass}/>
            </h1>
            <p>As a front-end developer, I am an essential part of any web development team. My expertise in HTML, CSS, and JavaScript allows me to create visually appealing and user-friendly websites. I have a keen eye for design and a deep understanding of user experience, which enables me to design and develop responsive and dynamic web pages that engage and delight users.</p>
            <p>As a front-end developer, I possess problem-solving skills beyond coding and design. I am adept at troubleshooting issues that arise during the development process and finding creative solutions that meet the needs of the project. I have a passion for staying up-to-date with the latest web development technologies and trends, allowing me to bring innovative ideas to every project I work on.</p>
            <p>My attention to detail and commitment to quality make me a valuable member of any development team. I understand the importance of testing and debugging, and I take the time to ensure that the website is fully functional and error-free before it goes live. As a front-end developer, my passion for web development shines through in my work, as I strive to create exceptional user experiences that leave a lasting impression on my clients and users alike.</p>
        </div>

        <div className='stage-cube-cont'>
            <div className='cubespinner'>
              <div className='face1'>
                  <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
              </div>
              <div className='face2'>
                  <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
              </div>
              <div className='face3'>
                  <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
              </div>
              <div className='face4'>
                  <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
              </div>
              <div className='face5'>
                  <FontAwesomeIcon icon={faJsSquare} color="#EFD91D"/>
              </div>
              <div className='face6'>
                  <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
              </div>
            </div>
        </div>
    </div>
    <Loader type='pacman'/>
    </>
  )
}

export default About
