'use client'
import React, { useState, useEffect, useRef } from 'react';
import { VscGithubAlt } from 'react-icons/vsc';
import { CiShare1 } from 'react-icons/ci';
import { IoIosPaper } from 'react-icons/io';

const Projects: React.FC = () => {

    const [projectScrollHeight, setProjectScrollHeight] = useState('0%');
    const [effectToggle, setEffectToggle] = useState(true);
    const [effectText, setEffectText] = useState('On');
    const projectTextContainerRef = useRef<HTMLDivElement>(null);

    const toggleEffect = () => {

        setEffectToggle(!effectToggle);

        if (effectToggle == false) {
            setEffectText('On');
        } else {
            setEffectText('Off');
        }
    }

    const handleProjectScroll = () => {
        const projectTextContainer = projectTextContainerRef.current;
        if (!projectTextContainer) return;
      
        const containerHeight = projectTextContainer.clientHeight;
        const containerTop = projectTextContainer.getBoundingClientRect().top;
        const scrollPosition = Math.max(0, window.scrollY - containerTop - window.innerHeight * 1.9);

        const isContainerVisible = containerTop + containerHeight >= 0 && containerTop <= window.innerHeight;
      
        if (!isContainerVisible) {
          setProjectScrollHeight('0%');
        } else {
          const maxScroll = containerHeight * 2.5;
          const projectScrollPercentage = Math.min((scrollPosition / maxScroll) * 100, 100);
          setProjectScrollHeight(`${projectScrollPercentage}%`);
          console.log(projectScrollPercentage);
        }
    }
    
    useEffect(() => {

        window.addEventListener('scroll', handleProjectScroll);
        
        return () => {
            window.removeEventListener('scroll', handleProjectScroll);
        };

    }, []);


    return (
        <div id='Projects' ref={projectTextContainerRef}>
            <div id="ProjectsContainer">
                <div id="ProjectsHeaderContainer">
                    <p id="ProjectsHeader">Projects</p>
                    <button id="ProjectsHeaderToggle" onClick={toggleEffect}>Effect: {effectText}</button>
                </div>
                <div id="ProjectsListContainer">
                    <div id="Project1">
                        <div id="Project1LeftContainer">
                            <div id="Project1ImageContainer">
                                <img id="Project1Image" src="" />
                            </div>
                        </div>
                        <div id="Project1RightContainer">
                            <div id="Project1ParagraphContainer">

                                <div id="Project1HeaderContainer">
                                    <p id="Project1Header">Debre Tsion Church</p>
                                </div>
                                
                                <div id="Project1TextContainer">
                                    <p id='Project1Paragraph'>A website for Debre Tsion Church made by a team of 7 student developers to give back to our childhood church led by Dawit Alemu. Created with Angular, Firebase, and TypeScript.</p>
                                </div>  

                                <div id="Project1StackContainer">
                                    <img id="StackIcon" src="angular.jpg" />
                                    <img id="StackIcon" src="firebase.png" />
                                    <img id="StackIcon" src="gcp.jpg" />
                                    <img id="StackIconTS" src="ts.jpg" />
                                </div>

                            </div>
                            <div id="Project1IconsContainer">
                                <div id="GithubIconContainer">
                                    <a id="GithubLink" href=""> <VscGithubAlt id='GithubIcon' />Video Demos</a>
                                </div>
                                <div id="RedirectIconContainer">
                                    <a id="RedirectLink" href=""> <CiShare1 id='RedirectIcon' />View Site</a>
                                </div>
                                <div id="DocsIconContainer">
                                    <a id="DocsLink" href=""> <IoIosPaper id='DocsIcon' />Docs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Project2">
                        <div id="Project2LeftContainer">
                            <div id="Project2ImageContainer">
                                <img id="Project2Image" src="" />
                            </div>
                        </div>
                        <div id="Project2RightContainer">
                            <div id="Project2ParagraphContainer">

                                <div id="Project2HeaderContainer">
                                    <p id="Project2Header">Misplaced</p>
                                </div>

                                <div id="Project2TextContainer">
                                    <p id='Project2Paragraph'>Misplaced is a digitalized lost and found platform for TU students to retrieve lost items by posting information through an intuitive React Native UI and connecting with potential finders. Utilizes MERN stack and Google Cloud APIs.</p>
                                </div>

                                <div id="Project2StackContainer">
                                    <img id="StackIcon" src="react.png" />
                                    <img id="StackIcon" src="expo.png" />
                                    <img id="StackIcon" src="mongo.png" />
                                    <img id="StackIcon" src="node.png" />
                                    <img id="StackIconJS" src="js.png" />
                                </div>

                            </div>
                            <div id="Project2IconsContainer">
                                <div id="GithubIconContainer">
                                    <a id="GithubLink" href=""> <VscGithubAlt id='GithubIcon' />Video Demos</a>
                                </div>
                                <div id="RedirectIconContainer">
                                    <a id="RedirectLink" href=""> <CiShare1 id='RedirectIcon' />View Site</a>
                                </div>
                                <div id="DocsIconContainer">
                                    <a id="DocsLink" href=""> <IoIosPaper id='DocsIcon' />Docs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Project3">
                        <div id="Project3LeftContainer">
                            <div id="Project3ImageContainer">
                                <img id="Project3Image" src="" />
                            </div>
                        </div>
                        <div id="Project3RightContainer">
                            <div id="Project3ParagraphContainer">

                                <div id="Project3HeaderContainer">
                                    <p id="Project3Header">Let's Tap In, LLC</p>
                                </div>

                                <div id="Project3TextContainer">
                                    <p id='Project3Paragraph'>This static webpage made for a client displays dummy recent events available and allows you to checkout tickets. Made with React, Next.js, and TypeScript. Click this repo to view short demo video!</p>
                                </div>

                                <div id="Project3StackContainer">
                                    <img id="StackIcon" src="react.png" />
                                    <img id="StackIcon" src="next.png" />
                                    <img id="StackIconTS" src="ts.jpg" />
                                </div>

                            </div>
                            <div id="Project3IconsContainer">
                                <div id="GithubIconContainer">
                                    <a id="GithubLink" href=""> <VscGithubAlt id='GithubIcon' />Video Demos</a>
                                </div>
                                <div id="RedirectIconContainer">
                                    <a id="RedirectLink" href=""> <CiShare1 id='RedirectIcon' />View Site</a>
                                </div>
                                <div id="DocsIconContainer">
                                    <a id="DocsLink" href=""> <IoIosPaper id='DocsIcon' />Docs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Project4">
                        <div id="Project4LeftContainer">
                            <div id="Project4ImageContainer">
                                <img id="Project4Image" src="" />
                            </div>
                        </div>
                        <div id="Project4RightContainer">
                            <div id="Project4ParagraphContainer">

                                <div id="Project4HeaderContainer">
                                    <p id="Project4Header">Urban Alliance</p>
                                </div>

                                <div id="Project4TextContainer">
                                    <p id='Project4Paragraph'>Upgraded EduCo’s main website by coding a new website from scratch, eliminating previous web template expenses. 
                                    Utilized Gatsby.js, React, and JavaScript to take advantage of Gatsby’s Static Site Generation for this static site.
                                    Held meetings with the CEO and Co-Founder to align development with business needs. Production: educogroup.org
                                    Sparked the start of EduCo Group’s codebase using GitHub organizations, project-based repos, and protection rules.</p>
                                </div>

                                <div id="Project4StackContainer">
                                    <img id="StackIcon" src="react.png" />
                                    <img id="StackIcon" src="gatsby.webp" />
                                    <img id="StackIconJS" src="js.png" />
                                </div>

                            </div>
                            <div id="Project4IconsContainer">
                                <div id="GithubIconContainer">
                                    <a id="GithubLink" href=""> <VscGithubAlt id='GithubIcon' />Video Demos</a>
                                </div>
                                <div id="RedirectIconContainer">
                                    <a id="RedirectLink" href=""> <CiShare1 id='RedirectIcon' />View Site</a>
                                </div>
                                <div id="DocsIconContainer">
                                    <a id="DocsLink" href=""> <IoIosPaper id='DocsIcon' />Docs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Project5">
                        <div id="Project5LeftContainer">
                            <div id="Project5ImageContainer">
                                <img id="Project5Image" src="" />
                            </div>
                        </div>
                        <div id="Project5RightContainer">
                            <div id="Project5ParagraphContainer">

                                <div id="Project5HeaderContainer">
                                    <p id="Project5Header">2D Sonic Platformer</p>
                                </div>

                                <div id="Project5TextContainer">
                                    <p id='Project5Paragraph'>A 2D Sonic platformer game that gave me experience with physics and animation in Unity Game Engine and C#. Click this repo for a quick video demo!</p>
                                </div>

                                <div id="Project5StackContainer">
                                    <img id="StackIcon" src="c.png" />
                                    <img id="StackIcon" src="unity.jpg" />
                                </div>
                                
                            </div>
                            <div id="Project5IconsContainer">
                                <div id="GithubIconContainer">
                                    <a id="GithubLink" href=""> <VscGithubAlt id='GithubIcon' />Video Demos</a>
                                </div>
                                <div id="RedirectIconContainer">
                                    <a id="RedirectLink" href=""> <CiShare1 id='RedirectIcon' />View Site</a>
                                </div>
                                <div id="DocsIconContainer">
                                    <a id="DocsLink" href=""> <IoIosPaper id='DocsIcon' />Docs</a>
                                </div>
                            </div>
                        </div>
                    </div>                
                </div>                    
                <div id="MoreContainer">
                    <p id="More">And More... Browse My <a id='MoreGitHub' href=''>GitHub</a> or Visit the <a id='DocsA' href=''>Docs Page for Devs</a>!</p>
                </div>
            </div>
        <style>
            {` 

                #Projects {
                    display: flex;
                    position: relative;
                    width: 99.7vw;
                    height: 285vh;
                    padding-bottom: 6vh;
                    background-color: white;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                    z-index: 8;
                }

                #ProjectsContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                }

                #ProjectsHeaderContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 8%;
                    padding-top: 1%;
                    justify-content: center;
                    align-items: center;
                }

                #ProjectsHeader {
                    font-size: 50px;
                    color: black;
                    font-family: InterBold;
                }

                #ProjectsHeaderToggle {
                    display: flex;
                    position: absolute;
                    top: 20%;
                    right: 5%;
                }

                #ProjectsListContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 90%;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                }

                #Project1, #Project2, #Project3, #Project4, #Project5 {
                    display: flex;
                    position: relative;
                    width: 90%;
                    height: 19%;
                    margin-top: 1%;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    background-color: black;
                    border-radius: 25px;
                    border: 3px solid #ccc;
                }

                #Project1 {
                    left: ${effectToggle ? '50%' : '0'};
                    transform: ${effectToggle ? `translateX(calc(-1.2 * ${projectScrollHeight}))` : 'none'};
                }
                
                #Project2 {
                    right: ${effectToggle ? '60%' : '0'};
                    transform: ${effectToggle ? `translateX(calc(1.1 * ${projectScrollHeight}))` : 'none'};
                }

                #Project3 {
                    left: ${effectToggle ? '70%' : '0'};
                    transform: ${effectToggle ? `translateX(calc(-1.05 * ${projectScrollHeight}))` : 'none'};
                }

                #Project4 {
                    right: ${effectToggle ? '80%' : '0'};
                    transform: ${effectToggle ? `translateX(calc(1 * ${projectScrollHeight}))` : 'none'};
                }

                #Project5 {
                    left: ${effectToggle ? '90%' : '0'};
                    transform: ${effectToggle ? `translateX(calc(-1 * ${projectScrollHeight}))` : 'none'};
                }

                #Project1LeftContainer, #Project2LeftContainer, #Project3LeftContainer, #Project4LeftContainer, #Project5LeftContainer {
                    display: flex;
                    position: relative;
                    width: 40%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                #Project1ImageContainer, #Project2ImageContainer, #Project3ImageContainer, #Project4ImageContainer, #Project5ImageContainer {
                    display: flex;
                    position: relative;
                    width: 90%;
                    height: 75%;
                    justify-content: center;
                    align-items: center;
                    object-fit: contain;
                    overflow: hidden;
                }

                #Project1Image, #Project2Image, #Project3Image, #Project4Image, #Project5Image {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }

                #Project1RightContainer, #Project2RightContainer, #Project3RightContainer, #Project4RightContainer, #Project5RightContainer {
                    display: flex;
                    position: relative;
                    width: 60%;
                    height: 100%;
                    flex-direction: row;
                    justify-content: center;
                    align-items: flex-start;
                }

                #Project1ParagraphContainer, #Project2ParagraphContainer, #Project3ParagraphContainer, #Project4ParagraphContainer, #Project5ParagraphContainer {
                    display: flex;
                    position: relative;
                    width: 85%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                #Project1HeaderContainer, #Project2HeaderContainer, #Project3HeaderContainer, #Project4HeaderContainer, #Project5HeaderContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 20%;
                    justify-content: center;
                    align-items: center;
                }

                #Project1Header, #Project2Header, #Project3Header, #Project4Header, #Project5Header {
                    font-size: 30px;
                    color: white;
                    font-family: InterSemi;
                    text-align: center;
                }

                #Project1TextContainer, #Project2TextContainer, #Project3TextContainer, #Project4TextContainer, #Project5TextContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 40%;
                    margin-top: 2%;
                    margin-bottom: 2%;
                    padding-right: 5px;
                    justify-content: center;
                    align-items: flex-start;
                    overflow-y: scroll;
                }

                #Project1TextContainer::-webkit-scrollbar, #Project2TextContainer::-webkit-scrollbar, #Project3TextContainer::-webkit-scrollbar, #Project4TextContainer::-webkit-scrollbar, #Project5TextContainer::-webkit-scrollbar {
                    width: 5px;
                    background-color: black;
                }

                #Project1TextContainer::-webkit-scrollbar-thumb, #Project2TextContainer::-webkit-scrollbar-thumb, #Project3TextContainer::-webkit-scrollbar-thumb, #Project4TextContainer::-webkit-scrollbar-thumb, #Project5TextContainer::-webkit-scrollbar-thumb {
                    background-color: white;
                    border-radius: 10px;
                }

                #Project1Paragraph, #Project2Paragraph, #Project3Paragraph, #Project4Paragraph, #Project5Paragraph {
                    font-size: 16px;
                    color: white;
                    font-family: Inter;
                    text-align: left;
                }

                #Project1StackContainer, #Project2StackContainer, #Project3StackContainer, #Project4StackContainer, #Project5StackContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 25%;
                    justify-content: center;
                    align-items: center;
                }

                #StackIcon, #StackIconTS, #StackIconJS {
                    height: 80%;
                    margin-left: 3px;
                    margin-right: 3px;
                }

                #StackIconTS, #StackIconJS { margin-left: 7px; }

                #Project1IconsContainer, #Project2IconsContainer, #Project3IconsContainer, #Project4IconsContainer, #Project5IconsContainer {
                    display: flex;
                    position: relative;
                    width: 15%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                #GithubIconContainer, #RedirectIconContainer, #DocsIconContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 33%;
                    justify-content: center;
                    align-items: center;
                }

                #GithubLink, #RedirectLink, #DocsLink {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    color: white;
                    font-size: 12px;
                    font-family: Inter;
                    text-align: center;
                }

                #GithubIcon, #RedirectIcon, #DocsIcon {
                    font-size: 45px;
                    color: white;
                }

                #MoreContainer {
                    display: flex;
                    position: absolute;
                    bottom: -3vh;
                    width: 100%;
                    height: 5vh;
                    justify-content: center;
                    text-align: center;
                    align-items: center;
                }

                #DocsA, #MoreGitHub {
                    text-decoration: underline;
                }

                @media (max-width: 900px) { 

                    #ProjectsHeaderToggle {
                        top: 15%;
                    }

                    #Project1, #Project2, #Project3, #Project4, #Project5 { width: 95%; margin-bottom: 3%; }

                    #Project1LeftContainer, #Project2LeftContainer, #Project3LeftContainer, #Project4LeftContainer, #Project5LeftContainer { display: none; }

                    #Project1RightContainer, #Project2RightContainer, #Project3RightContainer, #Project4RightContainer, #Project5RightContainer { 
                        width: 90%; 
                        flex-direction: column;
                        align-items: center;
                    }
                    
                    #Project1ParagraphContainer, #Project2ParagraphContainer, #Project3ParagraphContainer, #Project4ParagraphContainer, #Project5ParagraphContainer { width: 100%; height: 75%; }

                    #Project1TextContainer, #Project2TextContainer, #Project3TextContainer, #Project4TextContainer, #Project5TextContainer { height: 40%; }

                    #Project1StackContainer, #Project2StackContainer, #Project3StackContainer, #Project4StackContainer, #Project5StackContainer { height: 20%; margin-top: 5%; }

                    #Project1IconsContainer, #Project2IconsContainer, #Project3IconsContainer, #Project4IconsContainer, #Project5IconsContainer { 
                        width: 100%; 
                        height: 19%; 
                        margin-bottom: 1%; 
                        flex-direction: row; 
                    }

                    #GithubIconContainer, #RedirectIconContainer, #DocsIconContainer { width: 33%; height: 100%; }

                    #Project1 {
                        left: ${effectToggle ? '55%' : '0'};
                        transform: ${effectToggle ? `translateX(calc(-1.2 * ${projectScrollHeight}))` : 'none'};
                    }
                    
                    #Project2 {
                        right: ${effectToggle ? '65%' : '0'};
                        transform: ${effectToggle ? `translateX(calc(1.1 * ${projectScrollHeight}))` : 'none'};
                    }
    
                    #Project3 {
                        left: ${effectToggle ? '75%' : '0'};
                        transform: ${effectToggle ? `translateX(calc(-1.05 * ${projectScrollHeight}))` : 'none'};
                    }
    
                    #Project4 {
                        right: ${effectToggle ? '85%' : '0'};
                        transform: ${effectToggle ? `translateX(calc(1 * ${projectScrollHeight}))` : 'none'};
                    }
    
                    #Project5 {
                        left: ${effectToggle ? '95%' : '0'};
                        transform: ${effectToggle ? `translateX(calc(-1 * ${projectScrollHeight}))` : 'none'};
                    }
                }
            `}
        </style>
        </div>
    )
}

export default Projects;