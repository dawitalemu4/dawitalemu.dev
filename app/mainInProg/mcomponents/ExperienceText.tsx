'use client'
import React from 'react';

const ExperienceText: React.FC = () => {

    return(
        <div id='ExperienceText'>
            <div id='ExperienceTextContainer'>
                <div id='ExperienceHeaderContainer'>
                    <p id='ExperienceHeader'>Experience/Skills</p>
                </div>
                <div id='ExperienceParagraphContainer'>
                    <p id='ExperienceParagraph'></p>
                </div>
            </div>
        <style>
            {` 
                #ExperienceText {
                    display: flex;
                    position: relative;
                    width: 99.7vw;
                    height: 130vh;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    background-color: black;
                    overflow: hidden;
                    z-index: 7;
                    color: white;
                }

                #ExperienceTextContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    
                }
            `}
        </style>
        </div>
    )
}

export default ExperienceText;