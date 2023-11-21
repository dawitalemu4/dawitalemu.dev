'use client'
import React, { useState, useEffect, useRef } from 'react';

export default function About() {

    const [aboutScrollHeight, setAboutScrollHeight] = useState('0%');
    const aboutContainerRef = useRef<HTMLDivElement>(null);

    const handleAboutScroll = () => {
        const aboutContainer = aboutContainerRef.current;
        if (!aboutContainer) return;
      
        const containerHeight = aboutContainer.clientHeight;
        const containerTop = aboutContainer.getBoundingClientRect().top;
        const scrollPosition = Math.max(0, window.scrollY - containerTop - window.innerHeight * 1.9);

        const isContainerVisible = containerTop + containerHeight >= 0 && containerTop <= window.innerHeight;
      
        if (!isContainerVisible) {
          setAboutScrollHeight('0%');
        } else {
          const maxScroll = containerHeight * 2;
          const aboutScrollPercentage = Math.min((scrollPosition / maxScroll) * 100, 100);
          setAboutScrollHeight(`${aboutScrollPercentage}%`);
        }
    }
    
    useEffect(() => {

        window.addEventListener('scroll', handleAboutScroll);
        
        return () => {
            window.removeEventListener('scroll', handleAboutScroll);
        };

    }, []);


    return (
        <div id='About' ref={aboutContainerRef}>
            <div id="AboutContainer">
                <div id="AboutParagraphContainer">
                    <p id='AboutParagraph'>Hello! My name is Dawit Alemu and I'm currently a junior at Towson University who loves to self-teach software development. 
                    <br/><br/> I'm mainly interested in full-stack web development, but open to learning new things. <br/><br/> Keep scrolling!</p>
                </div>                   
                <div id='AboutImageContainer'>
                    <img id='AboutImage' src='da.webp' alt='Dawit Alemu'/>
                </div>                 
                <div id='AboutTitleContainer'>
                    <p id='AboutTitle'>About</p>
                </div>
            </div>
        <style>
            {` 

                :root { --aboutScrollHeight: ${aboutScrollHeight}; }

                #About {
                    display: flex;
                    position: relative;
                    width: 99.7vw;
                    height: 230vh;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    background-color: white;
                    overflow: hidden;
                    z-index: 6;
                }

                #AboutContainer {
                    display: flex;
                    position: relative;
                    width: 90%;
                    height: 100%;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: flex-start;
                }

                #AboutParagraphContainer {
                    display: flex;
                    position: relative;
                    width: 90%;
                    height: 40%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    overflow-y: scroll;
                }

                #AboutParagraphContainer::-webkit-scrollbar {
                    width: 5px;
                    background-color: transparent;
                }

                #AboutParagraphContainer::-webkit-scrollbar-thumb {
                    background-color: #ccc;
                    border-radius: 10px;
                }

                #AboutParagraph {
                    font-size: 26px;
                    color: black;
                }

                #AboutImageContainer {
                    display: flex;
                    position: relative;
                    width: 50%;
                    height: 40%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                #AboutImage {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }

                #AboutTitleContainer {
                    display: flex;
                    position: absolute;
                    top: 30%;
                    width: 100%;
                    height: 20%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    z-index: 7;
                }

                #AboutTitle {
                    color: black;
                    font-family: InterSemi;
                    font-size: calc(400 * var(--aboutScrollHeight));
                    transform: translateY(calc(0.1 * var(--aboutScrollHeight))) translateX(calc(-1 * (0.09 * var(--aboutScrollHeight))));
                }

                @media (max-width: 1000px) {

                    #AboutContainer { 
                        flex-direction: column; 
                        justify-content: flex-start; 
                        align-items: center; 
                    }

                    #AboutParagraphContainer { 
                        width: 95%;
                        height: 21%;
                        text-align: center;
                    }

                    #AboutParagraph { font-size: 20px; }

                    #AboutImageContainer { width: 100%; height: 20%; }

                    #AboutImage { width: 70%; height: 70%; }

                    #AboutTitle {
                        font-size: calc(300 * var(--aboutScrollHeight));
                        transform: translateY(calc(0.4 * var(--aboutScrollHeight))) translateX(calc(-1 * (0.1 * var(--aboutScrollHeight))));
                    }
                }

            `}
        </style>
        </div>
    )
};