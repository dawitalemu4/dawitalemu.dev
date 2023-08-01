'use client'
import React, { useState, useEffect, useRef } from 'react';
import { VscGithubAlt } from 'react-icons/vsc';
import { CiShare1 } from 'react-icons/ci';
import { IoIosPaper } from 'react-icons/io';

const ProjectsText: React.FC = () => {

    const [projectScrollHeight, setProjectScrollHeight] = useState('0%');
    const projectTextContainerRef = useRef<HTMLDivElement>(null);

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
          const maxScroll = containerHeight * 2;
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
        <div id='ProjectsText' ref={projectTextContainerRef}>
            <div id="ProjectsTextContainer">
                <div id="ProjectsHeaderContainer">
                    <p id="ProjectsHeader">Projects</p>
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
                                    <p id="Project1Header">Debre Tsion Mariam & Gabriel Church</p>
                                </div>
                                
                                <p id='Project1Paragraph'>A website for Debre Tsion Church made by a team of 7 student developers to give back to our childhood church led by Dawit Alemu. Created with Angular, Firebase, and TypeScript. Live production at https://debretsion.org/en.</p>

                                <div id="Project1StackContainer">
                                    <img id="StackIcon" src="" />
                                    <img id="StackIcon" src="" />
                                    <img id="StackIcon" src="" />
                                </div>

                            </div>
                            <div id="Project1IconsContainer">
                                <div id="GithubIconContainer">
                                    <a id="GithubLink" href=""> <VscGithubAlt id='GithubIcon' />GitHub <br/> (Video Demos)</a>
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

                                <p id='Project2Paragraph'></p>

                                <div id="Project1StackContainer">
                                    <img id="StackIcon" src="" />
                                    <img id="StackIcon" src="" />
                                    <img id="StackIcon" src="" />
                                </div>

                            </div>
                            <div id="Project2IconsContainer">
                                <div id="GithubIconContainer">
                                    <a id="GithubLink" href=""> <VscGithubAlt id='GithubIcon' />GitHub <br/> (Video Demos)</a>
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
                                    <p id="Project3Header">Let's Tap In</p>
                                </div>

                                <p id='Project3Paragraph'></p>

                                <div id="Project1StackContainer">
                                    <img id="StackIcon" src="" />
                                    <img id="StackIcon" src="" />
                                    <img id="StackIcon" src="" />
                                </div>

                            </div>
                            <div id="Project3IconsContainer">
                                <div id="GithubIconContainer">
                                    <a id="GithubLink" href=""> <VscGithubAlt id='GithubIcon' />GitHub <br/> (Video Demos)</a>
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
                                    <p id="Project4Header">Urban Alliance / EduCo Group</p>
                                </div>

                                <p id='Project4Paragraph'></p>

                                <div id="Project1StackContainer">
                                    <img id="StackIcon" src="" />
                                    <img id="StackIcon" src="" />
                                    <img id="StackIcon" src="" />
                                </div>

                            </div>
                            <div id="Project4IconsContainer">
                                <div id="GithubIconContainer">
                                    <a id="GithubLink" href=""> <VscGithubAlt id='GithubIcon' />GitHub <br/> (Video Demos)</a>
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

                                <p id='Project5Paragraph'></p>

                                <div id="Project1StackContainer">
                                    <img id="StackIcon" src="" />
                                    <img id="StackIcon" src="" />
                                    <img id="StackIcon" src="" />
                                </div>
                                
                            </div>
                            <div id="Project5IconsContainer">
                                <div id="GithubIconContainer">
                                    <a id="GithubLink" href=""> <VscGithubAlt id='GithubIcon' />GitHub <br/> (Video Demos)</a>
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
            </div>
        <style>
            {` 

                :root { --projectScrollHeight: ${projectScrollHeight}; }

                #ProjectsText {
                    display: flex;
                    position: relative;
                    width: 99.7vw;
                    height: 250vh;
                    background-color: white;
                    justify-content: center;
                    align-items: center;
                    z-index: 8;
                }

                #ProjectsTextContainer {
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
                    height: 10%;
                    justify-content: center;
                    align-items: center;
                }

                #ProjectsHeader {
                    font-size: 50px;
                    color: black;
                    font-weight: bold;
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
                    margin-bottom: 1%;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    background-color: black;
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

                #Project1RightContainer, #Project2RightContainer, #Project3RightContainer, #Project4RightContainer, #Project5RightContainer {
                    display: flex;
                    position: relative;
                    width: 60%;
                    height: 100%;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }

                #Project1HeaderContainer, #Project2HeaderContainer, #Project3HeaderContainer, #Project4HeaderContainer, #Project5HeaderContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 25%;
                    justify-content: center;
                    align-items: center;
                }

                #Project1Header, #Project2Header, #Project3Header, #Project4Header, #Project5Header {
                    font-size: 30px;
                    color: white;
                    text-align: center;
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

                #Project1ParagraphContainer, #Project2ParagraphContainer, #Project3ParagraphContainer, #Project4ParagraphContainer, #Project5ParagraphContainer {
                    display: flex;
                    position: relative;
                    width: 85%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                #Project1Paragraph, #Project2Paragraph, #Project3Paragraph, #Project4Paragraph, #Project5Paragraph {
                    font-size: 15px;
                    color: white;
                    text-align: left;
                }

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
                    text-align: center;
                }

                #GithubIcon, #RedirectIcon, #DocsIcon {
                    font-size: 45px;
                    color: white;
                }
                    
            `}
        </style>
        </div>
    )
}

export default ProjectsText;