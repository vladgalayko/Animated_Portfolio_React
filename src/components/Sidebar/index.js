import React, { useState } from 'react';
import './index.scss';
import LogoV from '../../assets/images/logo-v.png';
import LogoSubtitle from '../../assets/images/logo-sub.png';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);


    return (
    <div className='nav-bar'>
        <Link className="logo" to='/'>
            <img src={LogoV} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="logosub" />
        </Link>
        <nav className={showNav ? "mobile-show" : ''}>
            <NavLink exact="true" onClick={() => setShowNav(false)} activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" onClick={() => setShowNav(false)} activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" onClick={() => setShowNav(false)} activeclassname="active" className="portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" onClick={() => setShowNav(false)} activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
            <FontAwesomeIcon
                onClick={() => setShowNav(false)}
                icon={faClose}
                color='#ffd700'
                size='3x'
                className='close-icon'
                />
        </nav>
        <ul>
            <li>
                <a 
                target="_blank" 
                rel='noreferrer'
                href='https://www.linkedin.com/in/vladyslav-halaiko/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a 
                target="_blank" 
                rel='noreferrer'
                href='https://github.com/vladgalayko'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a 
                target="_blank" 
                rel='noreferrer'
                href='https://www.linkedin.com/in/vladyslav-halaiko/'>
                    <FontAwesomeIcon icon={faFacebook} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a 
                target="_blank" 
                rel='noreferrer'
                href='https://www.linkedin.com/in/vladyslav-halaiko/'>
                    <FontAwesomeIcon icon={faSkype} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
        <FontAwesomeIcon 
            icon={faBars} 
            color='#ffd700' 
            size='3x'
            className='hamburger-icon'
            onClick={() => setShowNav(true)}/>
    </div>
    )
}

export default Sidebar
