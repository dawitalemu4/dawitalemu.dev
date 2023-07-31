'use client'
import React, { useState } from 'react';
import Navbar from '../mcomponents/navBar';

const Header: React.FC = () => {

    const [hovered, setHovered] = useState(false);

    const handleHover = () => {
        setHovered(true);
    }

    const handleLeave = () => {
        setHovered(false);
    }

    return (
        <div id='HeaderContainer' >
            <Navbar />
        <style>
            {` 
                #HeaderContainer {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    width: 99.5vw;
                    height: 10vh;
                    background-color: transparent;
                    border: 1px solid black;
                }
            `}
        </style>
        </div>
    )
}

export default Header;