import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser'


import React from 'react'
import Loader from 'react-loaders';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
        return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_ipzkk23',
                'template_vnejwpt',
                refForm.current,
                'XiZHZ-6PDRTg1k7zH'
            )
            .then(
                () => {
                    alert('Message successfuly sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send message, please try again')
                }
            )
    }

  return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} idx={15} letterClass={letterClass} />
                </h1>
                <p>
                    I am interested in freelance opportunities - especially ambitious or large projects.
                    However, if you have other request or questions, don't hesitate to contact me using below from either.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required/>
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required/>
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" required/>
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value="SEND"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Halaiko Vladislav,
                <br/>
                Ukraine,
                <br/>
                Lviv <br/>
                <span>lorddarkvlad@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[49.83, 24]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={[49.83, 24]}>
                        <Popup>Vldislav lives here, come over for a cup of coffee :)</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type='pacman'/>
    </>
  )
}

export default Contact
