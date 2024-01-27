'use client'
import React, { useState, useEffect, useRef } from 'react';
import { ExperienceData } from './Data';
import Link from "next/link";
import { Experience } from '../types';

export default function Experience() {

    const [experienceScrollHeight, setExperienceScrollHeight] = useState('0%');
    const experienceContainerRef = useRef<HTMLDivElement>(null);

    const handleExperienceScroll = () => {
        const experienceContainer = experienceContainerRef.current;
        if (!experienceContainer) return;
      
        const containerHeight = experienceContainer.clientHeight;
        const containerTop = experienceContainer.getBoundingClientRect().top;
        const scrollPosition = Math.max(0, window.scrollY - containerTop - window.innerHeight * 1.9);

        const isContainerVisible = containerTop + containerHeight >= 0 && containerTop <= window.innerHeight;
      
        if (!isContainerVisible) {
          setExperienceScrollHeight('0%');
        } else {
          const maxScroll = containerHeight * 2;
          const experienceScrollPercentage = Math.min((scrollPosition / maxScroll) * 100, 100);
          setExperienceScrollHeight(`${experienceScrollPercentage}%`);
        }
    }
    
    useEffect(() => {

        window.addEventListener('scroll', handleExperienceScroll);
        
        return () => {
            window.removeEventListener('scroll', handleExperienceScroll);
        };

    }, []);
    

    return (
        <div id='Experience' ref={experienceContainerRef}>
            <div id='ExperienceContainer'>
                <div id='ExperienceHeaderContainer'>
                    <p id='ExperienceHeader'>Experience && Skills</p>
                </div>
                <div id="ExperienceAndSkillsContainer">
                    <div id='ExperienceParagraphContainer'>
                        <p id='ExperienceParagraph'>
                            In Fall 2023 and Spring 2024, I interned at Baltimore Life Insurance as a Front End Software Engineer on the Platform Team working on the Internal Agent Portal using React (JavaScript), Swagger, and a variety of packages.
                            <br/><br/>
                            I also completed multiple contracts during Summer 2023, but the most notable one is a website I built for my childhood church, where I led a team of 6 junior developers and taught/learned Angular (TypeScript), Firebase, and Google Cloud Platform.
                            <br/><br/>
                            <b>Keep scrolling</b> for more in-depth information about some of my works!
                            <br/><br/>
                            <Link id='ResumeLink' href="https://docs.google.com/document/d/1VA2JjizgZaup8Hw1dX10K6-6aRnEW3wpa1yVvscN2H4/edit?usp=sharing" target="_blank">Click me to view Dawit's resume!</Link>
                        </p>
                    </div>
                    <div id='SkillsContainer'>
                        <div id='SkillsListContainer'>
                            {ExperienceData.map((list: Experience, index: number) => (
                                <div id="SkillList" key={index}>
                                    <div id='SkillsListHeaderContainer'>
                                        <p id='SkillsHeader'>{list.header}</p>
                                    </div>
                                    <div id='SkillsRowContainer'>
                                        {list.images.map((image: string[], index: number) => (
                                            <div id='SkillsRowItem' key={index}>
                                                <img id="ItemLogo" src={image[0]} />
                                                {image[1]}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        <style>
            {` 

                :root { --experienceScrollHeight: ${experienceScrollHeight}; }

                #Experience {
                    display: flex;
                    position: relative;
                    width: 99.7vw;
                    height: 130vh;
                    padding-top: 2vh;
                    padding-bottom: 5vh;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    background-color: black;
                    overflow: hidden;
                    z-index: 7;
                    color: white;
                }

                #ExperienceContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                #ExperienceHeaderContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 15%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                #ExperienceHeader {
                    font-size: 50px;
                    font-family: InterBold;
                }

                #ExperienceAndSkillsContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 85%;
                    flex-direction: row;
                    justify-content: space-evenly;
                    align-items: center;
                }

                #ExperienceParagraphContainer {
                    display: flex;
                    position: relative;
                    width: 40%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    overflow-y: scroll;
                }

                #ExperienceParagraphContainer::-webkit-scrollbar { 
                    width: 5px;
                    background-color: black;
                }

                #ExperienceParagraphContainer::-webkit-scrollbar-thumb {
                    background-color: white;
                    border-radius: 10px;
                }

                #ExperienceParagraph {
                    font-family: Inter;
                    font-size: 20px;
                }

                #SkillsContainer {
                    display: flex;
                    position: relative;
                    width: 50%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                #SkillsListContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                #SkillList {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 50%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                #SkillsListHeaderContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 15%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                #SkillsHeader {
                    font-size: 20px;
                    text-align: center;
                    font-family: InterSemi;
                }

                #SkillsRowContainer {
                    display: grid;
                    position: relative;
                    width: 100%;
                    height: 85%;
                    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
                    justify-content: center;
                    align-items: flex-start;
                }

                #SkillsRowItem {
                    display: flex;
                    position: relative;
                    height: 50%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    object-fit: contain;
                    text-align: center;
                    font-family: Inter;
                    transform: translateY(calc(0.7 * var(--experienceScrollHeight)));
                }

                #ItemLogo {
                    width: 85px;
                    height: 85px;
                    margin-bottom: 10px;
                }

                #ItemLogo:hover { transform: scale(1.1); }

                #ResumeLink { font-size: 22px; font-family: InterSemi; text-decoration: underline; }

                @media (max-width: 1000px) {
                    
                    #Experience { height: 170vh; }

                    #ExperienceHeaderContainer { width: 90%;  }

                    #ExperienceHeader { font-size: 51px; text-align: center; }

                    #ExperienceAndSkillsContainer { flex-direction: column; justify-content: flex-start; }

                    #ExperienceParagraphContainer { width: 95%; height: 45%; margin-bottom: 5vh; }

                    #ExperienceParagraph { font-size: 16px; text-align: center; }

                    #SkillsContainer { width: 90%; height: 50%; }

                    #SkillsHeader{ font-size: 18px; }

                    #SkillsRowItem { font-size: 11px; margin-top: -10px; }
                    
                    #ItemLogo { width: 60px; height: 60px; padding: 0px 3px; }

                    #ResumeLink { font-size: 18px; }
                }

            `}
        </style>
        </div>
    )
};