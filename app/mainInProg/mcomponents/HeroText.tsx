'use client'
import React, { useState, useEffect, useRef } from 'react';
import { HiArrowNarrowDown } from 'react-icons/hi';

const HeroText: React.FC = () => {

    const [heroScrollHeight, setHeroScrollHeight] = useState('');
    const heroTextContainerRef = useRef<HTMLDivElement>(null);

    const handleHeroScroll = () => {
        const heroTextContainer = heroTextContainerRef.current;
        if (!heroTextContainer) return;
        const totalHeroHeight = heroTextContainer.scrollHeight;
        const heroScrollPosition = window.scrollY;
        const heroScrollPercentage = (heroScrollPosition / totalHeroHeight) * 100;
        setHeroScrollHeight(`${heroScrollPercentage}%`);
    }
    
    useEffect(() => {
    window.addEventListener('scroll', handleHeroScroll);
    return () => {
        window.removeEventListener('scroll', handleHeroScroll);
    };
    }, []);


    return (
        <div id='HeroText' ref={heroTextContainerRef}>
            <div id='HeroTextContainer'>
                <div id='LeftContainer'>
                    <img id='WhiteTriangle' src='whiteTriangle.png' />
                </div>
                <div id="HeaderContainer">
                    <div id="ArrowContainer">
                        <div id='Arrow'>Scroll Down<HiArrowNarrowDown/></div>
                    </div>
                    <p id="HeaderText">Dawit Alemu</p>
                    <p id="HeaderSubText">Full-Stack Software Developer</p>
                </div>
                <div id='RightContainer'>
                    <img id='BlackTriangle' src='blackTriangle.png' />
                </div>
            </div>
        <style>
            {` 
                :root { --heroScrollHeight: ${heroScrollHeight}; }

                #HeroText {
                    display: flex;
                    position: relative;
                    width: 99.7vw;
                    height: 140vh;
                    justify-content: center;
                    align-items: center;
                    background-color: #171717;
                    font-family: Inter;
                    z-index: 5;
                    user-select: none;
                }

                #HeroTextContainer {
                    display: flex;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }

                #LeftContainer, #RightContainer {
                    display: flex;
                    position: absolute;
                    width: 150%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    z-index: 3;
                    border: 1px solid red;
                }

                #LeftContainer { left: calc(0.1% - var(--heroScrollHeight)); }
        
                #RightContainer { right: calc(0.1% - var(--heroScrollHeight)); }

                #BlackTriangle, #WhiteTriangle {
                    position: absolute;
                    height: 100%;
                    width: 150%;
                    border: 1px solid blue;
                }

                #HeaderContainer {
                    display: flex;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    z-index: 3;
                    color: white;
                }

                #HeaderText { 
                    font-size: 100px; 
                    opacity: calc(var(--heroScrollHeight)); 
                    text-align: center; 
                }

                #HeaderSubText { 
                    font-size: 30px; 
                    opacity: calc(var(--heroScrollHeight)); 
                    text-align: center; 
                }

                #ArrowContainer {
                    display: flex;
                    position: absolute;
                    left: 5%;
                    bottom: 5%;
                    width: 25%;
                    height: 25%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    z-index: 4;
                    animation: arrow 2s infinite;
                    overflow: hidden;
                }

                @keyframes arrow {
                    0% { transform: translateY(-5px); }
                    50% { transform: translateY(20px); }
                    100% { transform: translateY(-5px); }
                }

                #Arrow { 
                    display: flex;
                    position: relative;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    font-size: 50px; 
                    text-align: center;
                    color: black; 
                    opacity: calc(70% - var(--heroScrollHeight));
                }

                @media (max-width: 1000px) {
                    #HeaderText { font-size: 60px; }
                    #HeaderSubText { font-size: 22px; }
                    #Arrow { font-size: 30px; }

                    @keyframes arrow {
                        0% { transform: translateY(0px); }
                        50% { transform: translateY(10px); }
                        100% { transform: translateY(0px); }
                    }
                }
            `}
        </style>
        </div>
    )
}

export default HeroText;