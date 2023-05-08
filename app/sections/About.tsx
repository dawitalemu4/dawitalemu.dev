'use client'
import React from 'react';
import PacMan from '../rcomponents/pacman';
import AboutText from '../rcomponents/aboutText';

const About: React.FC = () => {

    return(
        <div id='About' className='flex border border-red-500 h-screen'>
        <PacMan/>
        <AboutText/>
        </div>
    )
}

export default About;