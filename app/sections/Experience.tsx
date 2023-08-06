'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link";

const Experience: React.FC = () => {

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
                            In Summer 2023, I interned at Urban Alliance as a Front End Engineer and created a website for a partner company's main website using React, Gatsby.js, and JavaScript.
                            <br/><br/>
                            I also completed multiple contracts during Summer 2023, but the most notable one is a website I built for my childhood church, where I led a team of 6 junior developers and taught/learned Angular.
                            <br/><br/>
                            <b>Keep scrolling</b> for more in-depth information about all my work!
                            <br/><br/>
                            <Link id='ResumeLink' href="https://docs.google.com/document/d/1VA2JjizgZaup8Hw1dX10K6-6aRnEW3wpa1yVvscN2H4/edit?usp=sharing" target="_blank">Click me to view Dawit's resume!</Link>
                        </p>
                    </div>
                    <div id='SkillsContainer'>
                        <div id='SkillsListContainer'>
                            <div id="SkillList">
                                <div id='SkillsListHeaderContainer'>
                                    <p id='SkillsHeader'>Front End Development</p>
                                </div>
                                <div id='SkillsRowContainer'>
                                    <div id='SkillsRowItem'><img id="ItemLogo" src="ts.jpg" />TypeScript</div>
                                    <div id='SkillsRowItem'><img id="ItemLogo" src="js.png" />JavaScript</div>
                                    <div id='SkillsRowItem'><img id="ItemLogo" src="react.png" />React</div>
                                    <div id='SkillsRowItem'><img id="ItemLogo" src="angular.jpg" />Angular</div>
                                    <div id='SkillsRowItem'><img id="ItemLogo" src="next.png" />Next.js</div>
                                    <div id='SkillsRowItem'><img id="ItemLogo" src="gatsby.webp" />Gatsby.js</div>
                                </div>
                            </div>
                            <div id="SkillList">
                                <div id='SkillsListHeaderContainer'>
                                    <p id='SkillsHeader'>Back End Development</p>
                                </div>
                                <div id='SkillsRowContainer'>
                                    <div id='SkillsRowItem'><img id="ItemLogo" src="python.png" />Python</div>
                                    <div id='SkillsRowItem'><img id="ItemLogo" src="java.png" />Java</div>
                                    <div id='SkillsRowItem'><img id="ItemLogo" src="node.png" />Node.js</div>
                                    <div id='SkillsRowItem'><img id="ItemLogo" src="firebase.png" />Firebase</div>
                                    <div id='SkillsRowItem'><img id="ItemLogo" src="mongo.png" />MongoDB</div>
                                    <div id='SkillsRowItem'>Learning More...</div>
                                </div>
                            </div>
                            <div id="DoubleSkillListContainer">
                                <div id="DoubleSkillList">
                                    <div id='DoubleSkillsListHeaderContainer'>
                                        <p id='DoubleSkillsHeader'>App Development</p>
                                    </div>
                                    <div id='DoubleSkillsRowContainer'>
                                        <div id='DoubleSkillsRowItem'><img id="DoubleItemLogo" src="react.png" />React Native</div>
                                        <div id='DoubleSkillsRowItem'><img id="DoubleItemLogo" src="expo.png" />Expo</div>
                                    </div>
                                </div>
                                <div id="DoubleSkillList">
                                    <div id='DoubleSkillsListHeaderContainer'>
                                        <p id='DoubleSkillsHeader'>Game Development</p>
                                    </div>
                                    <div id='DoubleSkillsRowContainer'>
                                        <div id='DoubleSkillsRowItem'><img id="DoubleItemLogo" src="c.png" />C#</div>
                                        <div id='DoubleSkillsRowItem'><img id="DoubleItemLogo" src="unity.jpg" />Unity Game Engine</div>
                                    </div>
                                </div>
                            </div>
                            <div id="SkillList">
                                <div id='SkillsListHeaderContainer'>
                                    <p id='SkillsHeader'>Miscellaneous</p>
                                </div>
                                <div id='SkillsRowContainer'>
                                    <div id='BottomSkillsRowItem'><Link id="GitHubA" href="https://github.com/dawitalemu4" target="_blank"><img id="GitHubItemLogo" src="github.jpg" />GitHub</Link></div>
                                    <div id='BottomSkillsRowItem'><img id="ItemLogo" src="git.png" />Git</div>
                                    <div id='BottomSkillsRowItem'><img id="ItemLogo" src="gcp.jpg" />Google Cloud</div>
                                    <div id='BottomSkillsRowItem'><img id="ItemLogo" src="bash.png" />Bash</div>
                                    <div id='BottomSkillsRowItem'><img id="ItemLogo" src="vercel.png" />Vercel</div>
                                    <div id='BottomSkillsRowItem'><img id="ItemLogo" src="figma.png" />Figma</div>
                                </div>
                            </div>
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

                #SkillsListContainer, #DoubleSkillListContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                #DoubleSkillListContainer {
                    height: 40%;
                    flex-direction: row;
                }

                #SkillList, #DoubleSkillList {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 50%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                #DoubleSkillList {
                    height: 100%;
                }

                #SkillsListHeaderContainer, #DoubleSkillsListHeaderContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 15%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                #DoubleSkillsListHeaderContainer {
                    height: 25%;
                }

                #SkillsHeader, #DoubleSkillsHeader {
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
                
                #DoubleSkillsRowContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 75%;
                    flex-direction: row;
                    justify-content: center;
                    align-items: flex-start;
                }

                #SkillsRowItem, #DoubleSkillsRowItem, #BottomSkillsRowItem {
                    display: flex;
                    position: relative;
                    height: 50%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    object-fit: contain;
                    text-align: center;
                    font-family: Inter;
                    transform: translateY(calc(0.8 * var(--experienceScrollHeight)));
                }

                #DoubleSkillsRowItem {
                    margin-left: 10px;
                    margin-right: 10px;
                    transform: translateY(calc(0.6 * var(--experienceScrollHeight)));
                }

                #BottomSkillsRowItem { transform: translateY(calc(0.7 * var(--experienceScrollHeight))); }

                #ItemLogo, #GitHubItemLogo {
                    width: 90px;
                    height: 90px;
                    margin-bottom: 10px;
                }

                #DoubleItemLogo {
                    width: 90px;
                    height: 90px;
                    margin-bottom: 10px;
                }

                #ItemLogo:hover, #DoubleItemLogo:hover, #GitHubA:hover { transform: scale(1.1); }

                #GitHubA {
                    width
                    font-size: 16px;
                    text-decoration: underline;
                }

                #GitHubA:hover { opacity: 0.8; }

                #ResumeLink { font-size: 22px; font-family: InterSemi; text-decoration: underline; }

                @media (max-width: 1000px) {
                    
                    #Experience { height: 170vh; }

                    #ExperienceHeaderContainer { width: 90%;  }

                    #ExperienceHeader { font-size: 51px; text-align: center; }

                    #ExperienceAndSkillsContainer { flex-direction: column; justify-content: flex-start; }

                    #ExperienceParagraphContainer { width: 95%; height: 45%; margin-bottom: 5vh; }

                    #ExperienceParagraph { font-size: 16px; text-align: center; }

                    #SkillsContainer { width: 90%; height: 50%; }

                    #DoubleSkillListContainer { margin-bottom: 15px; }

                    #SkillsHeader, #DoubleSkillsHeader { font-size: 18px; }

                    #SkillsRowItem, #BottomSkillsRowItem { font-size: 11px; margin-top: -10px; }

                    #DoubleSkillsRowItem { font-size: 11px; }
                    
                    #ItemLogo, #GitHubItemLogo { width: 60px; height: 60px; padding: 0px 3px; }

                    #DoubleItemLogo { width: 65px; height: 65px; }

                    #GitHubA { font-size: 11px; }

                    #ResumeLink { font-size: 18px; }
                }

            `}
        </style>
        </div>
    )
}

export default Experience;