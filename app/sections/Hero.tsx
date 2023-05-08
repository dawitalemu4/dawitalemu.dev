'use client'
import React from 'react';
import HeroText from '../rcomponents/heroText';
import Yoshi from '../rcomponents/yoshi';

const Hero: React.FC = () => {

    return(
        <div id='Hero' className='flex border border-red-500 h-screen'>
        <HeroText />
        <Yoshi />
        </div>
    )
}

export default Hero;