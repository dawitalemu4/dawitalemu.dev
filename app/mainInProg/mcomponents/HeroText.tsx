'use client'
import React, { useState, useEffect, useRef } from 'react';
import { HiArrowNarrowDown } from 'react-icons/hi';

const HeroText: React.FC = () => {

    const [heroScrollHeight, setHeroScrollHeight] = useState('0%');
    const heroTextContainerRef = useRef<HTMLDivElement>(null);


    const handleHeroScroll = () => {
        const heroTextContainer = heroTextContainerRef.current;
        if (!heroTextContainer) return;
      
        const containerHeight = heroTextContainer.clientHeight;
        const containerTop = heroTextContainer.getBoundingClientRect().top;
        const scrollPosition = window.scrollY;

        const offset = containerHeight * 0.2;
        const isContainerVisible = containerTop + containerHeight >= offset && containerTop <= window.innerHeight;
      
        if (!isContainerVisible) {
          setHeroScrollHeight('0%');
        } else {
          const maxScroll = containerHeight * 0.20; 
          const heroScrollPercentage = Math.min((scrollPosition / maxScroll) * 50, 100);
          setHeroScrollHeight(`${heroScrollPercentage}%`);
          console.log(heroScrollPercentage);

          if (heroScrollPercentage === 100) {
                const leftContainer = document.getElementById('LeftContainer');
                const rightContainer = document.getElementById('RightContainer');
                if (leftContainer) leftContainer.style.display = 'none';
                if (rightContainer) rightContainer.style.display = 'none';
            } else {
                const leftContainer = document.getElementById('LeftContainer');
                const rightContainer = document.getElementById('RightContainer');
                if (leftContainer) leftContainer.style.display = 'flex';
                if (rightContainer) rightContainer.style.display = 'flex';
            }
        }
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
                    <div id='WhiteTriangleContainer'>
                        <img id='WhiteTriangle' src='whiteTriangle.png' />
                    </div>
                </div>
                <div id='RightContainer'>
                    <div id='BlackTriangleContainer'>
                        <img id='BlackTriangle' src='blackTriangle.png' />
                    </div>
                </div>
                <div id="ArrowContainer">
                        <div id='Arrow'>Scroll Down<HiArrowNarrowDown/></div>
                </div>                
                <div id="HeaderContainer">
                    <p id="HeaderText">Dawit Alemu</p>
                    <p id="HeaderSubText">Full-Stack Software Developer</p>
                </div>
            </div>
        <style>
            {` 
                :root { --heroScrollHeight: ${heroScrollHeight}; }

                #HeroText {
                    display: flex;
                    position: relative;
                    width: 99.7vw;
                    height: 160vh;
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
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                #LeftContainer, #RightContainer {
                    display: flex;
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    background-color: transparent;
                    z-index: 3;
                }

                #LeftContainer { left: calc(0.1% - var(--heroScrollHeight)); }
        
                #RightContainer { right: calc(0.1% - var(--heroScrollHeight)); }

                #WhiteTriangleContainer, #BlackTriangleContainer {
                    display: flex;
                    position: fixed;
                    top: 0;
                    height: 100vh;
                    width: 105vw;
                }

                #BlackTriangle, #WhiteTriangle {
                    height: 100%;
                    width: 100%;
                }

                #HeaderContainer {
                    display: flex;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    z-index: 2;
                    color: white;
                }

                #HeaderText { 
                    font-size: 100px; 
                    opacity: calc(20% + var(--heroScrollHeight)); 
                    text-align: center; 
                }

                #HeaderSubText { 
                    font-size: 30px; 
                    opacity: calc(20% + var(--heroScrollHeight)); 
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