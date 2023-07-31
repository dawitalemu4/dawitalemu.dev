'use client'
import React, { useState, useEffect, useRef } from 'react';

const AboutText: React.FC = () => {

    const [aboutScrollHeight, setAboutScrollHeight] = useState('');
    const aboutTextContainerRef = useRef<HTMLDivElement>(null);

    const handleAboutScroll = () => {
        const scrollAboutPosition = window.scrollY;
        const aboutTextContainer = aboutTextContainerRef.current;
        if (!aboutTextContainer) return;
        const totalAboutHeight = aboutTextContainer.scrollHeight - aboutTextContainer.getBoundingClientRect().height;
        const aboutScrollPercentage = (scrollAboutPosition / totalAboutHeight) * 100;
        setAboutScrollHeight(`${aboutScrollPercentage}%`);
    }
    
    // useEffect(() => {
    // window.addEventListener('scroll', handleAboutScroll);
    // return () => {
    //     window.removeEventListener('scroll', handleAboutScroll);
    // };
    // }, []);


    return (
        <div id='AboutText' ref={aboutTextContainerRef}>
            <div id="AboutTextContainer">
                <div id='LeftContainer'>
                    <div id="AboutParagraphContainer">
                        <p id='AboutParagraph'>Hello! My name is Dawit Alemu and I'm currently a junior at Towson University who loves to self-teach software development. 
                        <br/> I'm mainly interested in full-stack web development, but open to learning new things. <br/> Keep scrolling!</p>
                    </div>
                </div>
                <div id='RightContainer'>
                    <div id='AboutTitleContainer'>
                        <p id='AboutTitle'>About Me</p>
                    </div>
                    <div id='AboutImageContainer'>
                        <img id='AboutImage' src='da.jpg' alt='Dawit Alemu'/>
                    </div>
                </div>
            </div>
        <style>
            {` 

                :root { --aboutScrollHeight: ${aboutScrollHeight}; }

                #AboutText {
                    display: flex;
                    position: relative;
                    width: 99.7vw;
                    height: 130vh;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    background-color: white;
                    overflow: hidden;
                    z-index: 6;
                }

                #AboutTextContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }

                #LeftContainer, #RightContainer {
                    display: flex;
                    position: relative;
                    width: 50%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                #AboutParagraphContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
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
                    font-size: 16px;
                    color: black;
                }

                #AboutTitleContainer {
                    display: flex;
                    position: fixed;
                    width: 100%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    z-index: 7;
                }

                #AboutTitle {

                }

                #AboutImageContainer {

                }

                #AboutImage {

                }

            `}
        </style>
        </div>
    )
}

export default AboutText;