'use client'
import React from 'react';
import PacMan from '../rcomponents/pacman';
import AboutText from '../rcomponents/aboutText';

const About: React.FC = () => {

    return(
        <div>
        <PacMan/>
        <AboutText/>
        </div>
    )
}

export default About;