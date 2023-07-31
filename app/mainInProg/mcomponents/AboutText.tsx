'use client'
import React, { useState, useEffect, useRef } from 'react';

const AboutText: React.FC = () => {

    const [aboutScrollHeight, setAboutScrollHeight] = useState('0%');
    const [isVisible, setIsVisible] = useState(false);
    const aboutTextContainerRef = useRef<HTMLDivElement>(null);

    const handleAboutScroll = () => {
        const aboutTextContainer = aboutTextContainerRef.current;
        if (!aboutTextContainer) return;
      
        const containerHeight = aboutTextContainer.clientHeight;
        const containerTop = aboutTextContainer.getBoundingClientRect().top;
        const scrollPosition = Math.max(0, window.scrollY - containerTop - window.innerHeight * 1.9);

        const isContainerVisible = containerTop + containerHeight >= 0 && containerTop <= window.innerHeight;
      
        if (!isContainerVisible) {
          setAboutScrollHeight('0%');
        } else {
          const maxScroll = containerHeight * 2;
          const aboutScrollPercentage = Math.min((scrollPosition / maxScroll) * 100, 100);
          setAboutScrollHeight(`${aboutScrollPercentage}%`);
          console.log(aboutScrollPercentage);
          setIsVisible(true);
        }
    }
    
    useEffect(() => {

        window.addEventListener('scroll', handleAboutScroll);
        
        return () => {
            window.removeEventListener('scroll', handleAboutScroll);
        };

    }, []);


    return (
        <div id='AboutText' ref={aboutTextContainerRef}>
            <div id="AboutTextContainer" style={{ animation: isVisible ? 'fadeIn 2.5s ease-in-out' : 'none' }}>
                <div id="AboutParagraphContainer">
                    <p id='AboutParagraph'>Hello! My name is Dawit Alemu and I'm currently a junior at Towson University who loves to self-teach software development. 
                    <br/><br/> I'm mainly interested in full-stack web development, but open to learning new things. <br/><br/> Keep scrolling!</p>
                </div>                   
                <div id='AboutImageContainer'>
                    <img id='AboutImage' src='da.jpg' alt='Dawit Alemu'/>
                </div>                 
                <div id='AboutTitleContainer'>
                    <p id='AboutTitle'>About</p>
                </div>
            </div>
        <style>
            {` 

                :root { --aboutScrollHeight: ${aboutScrollHeight}; }

                #AboutText {
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

                @keyframes fadeIn { 
                    0% {
                        top: 50px;
                        opacity: 0;
                    } 
                    100% {
                        top: 0;
                        opacity: 1;
                    }
                }

                #AboutTextContainer {
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
                    background: transparent;
                }

                #AboutParagraphContainer::-webkit-scrollbar-thumb {
                    color: #ccc;
                    border-radius: 20px;
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
                    font-size: calc(400 * var(--aboutScrollHeight));
                    transform: translateY(calc(0.1 * var(--aboutScrollHeight))) translateX(calc(-1 * (0.09 * var(--aboutScrollHeight))));
                }

                @media (max-width: 1000px) {

                    #AboutTextContainer { 
                        flex-direction: column; 
                        justify-content: flex-start; 
                        align-items: center; 
                    }

                    #AboutParagraphContainer { 
                        width: 95%;
                        height: 20%;
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
}

export default AboutText;