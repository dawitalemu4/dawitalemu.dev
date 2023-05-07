'use client'
import React from 'react';
import HeroText from '../rcomponents/heroText';
import Yoshi from '../rcomponents/yoshi';

const Hero: React.FC = () => {

    return(
        <div id='Hero'>
        <HeroText />
        <Yoshi />
        </div>
    )
}

export default Hero;