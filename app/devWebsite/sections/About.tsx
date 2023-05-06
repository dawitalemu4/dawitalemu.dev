'use client'
import React from 'react';
import PacMan from '../components/pacman';
import AboutText from '../components/aboutText';

const About: React.FC = () => {

    return(
        <div>
        <PacMan/>
        <AboutText/>
        </div>
    )
}

export default About;