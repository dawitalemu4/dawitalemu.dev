'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import { VscGithubAlt } from 'react-icons/vsc';
import { CiShare1 } from 'react-icons/ci';
import { IoIosPaper } from 'react-icons/io';
import { MdClose } from 'react-icons/md';

const Projects: React.FC = () => {

    const [projectScrollHeight, setProjectScrollHeight] = useState('0%');
    const [effectToggle, setEffectToggle] = useState(true);
    const [effectText, setEffectText] = useState('On');
    const [showModal, setshowModal] = useState(false);
    const [gif, setGif] = useState('');
    const projectsContainerRef = useRef<HTMLDivElement>(null);

    
    const toggleModal = () => {
        setshowModal(!showModal);
    }

    const toggleEffect = () => {

        setEffectToggle(!effectToggle);

        if (effectToggle === false) {
            setEffectText('On');
        } else {
            setEffectText('Off');
        }
    }

    const handleProjectScroll = () => {
        const projectsContainer = projectsContainerRef.current;
        if (!projectsContainer) return;
      
        const containerHeight = projectsContainer.clientHeight;
        const containerTop = projectsContainer.getBoundingClientRect().top;
        const scrollPosition = Math.max(0, window.scrollY - containerTop - window.innerHeight * 1.9);

        const isContainerVisible = containerTop + containerHeight >= 0 && containerTop <= window.innerHeight;
      
        if (!isContainerVisible) {
          setProjectScrollHeight('0%');
        } else {
          const maxScroll = containerHeight * 2.5;
          const projectScrollPercentage = Math.min((scrollPosition / maxScroll) * 100, 100);
          setProjectScrollHeight(`${projectScrollPercentage}%`);
        }
    }
    
    useEffect(() => {

        window.addEventListener('scroll', handleProjectScroll);
        
        return () => {
            window.removeEventListener('scroll', handleProjectScroll);
        };

    }, []);


    return (
        <div id='Projects' ref={projectsContainerRef}>
            <div id="ProjectsContainer">
                <div id="ProjectsHeaderContainer">
                    <p id="ProjectsHeader">Projects</p>
                    <button id="ProjectsHeaderToggle" onClick={toggleEffect}>Effect: {effectText}</button>
                </div>
                <div id="ProjectsListContainer">
                    <div id="Project1">
                        <div id="Project1LeftContainer">
                            <div id="Project1ImageContainer">
                                <img id="Project1Image" src="DTGif.webp" onClick={() => {setGif('DTGif.webp'); toggleModal(); }} />
                            </div>
                        </div>
                        <div id="Project1RightContainer">
                            <div id="Project1ParagraphContainer">

                                <div id="Project1HeaderContainer">
                                    <p id="Project1Header">Debre Tsion Church</p>
                                </div>
                                
                                <div id="Project1TextContainer">
                                    <p id='Project1Paragraph'>This website was created by 6 devs led by Dawit Alemu to give back to our childhood church.
                                    I taught junior devs, managed meading with church leadership, and recieved good feedback from teammates and was approved to push to production.
                                    </p>
                                </div>  

                                <div id="Project1StackContainer">
                                    <img id="StackIcon" src="angular.webp" />
                                    <img id="StackIcon" src="firebase.webp" />
                                    <img id="StackIcon" src="gcp.webp" />
                                    <img id="StackIconTS" src="ts.webp" />
                                </div>

                            </div>
                            <div id="Project1IconsContainer">
                                <div id="GithubIconContainer">
                                    <Link id="GithubLink" href="https://github.com/DebreTsionWeb/debretsion.org" target='_blank'> <VscGithubAlt id='GithubIcon' />Video Demos</Link>
                                </div>
                                <div id="RedirectIconContainer">
                                    <Link id="RedirectLink" href="https://debretsion.vercel.app/en" target='_blank'> <CiShare1 id='RedirectIcon' />View Site</Link>
                                </div>
                                <div id="DocsIconContainer">
                                    <Link id="DocsLink" href="/docs"> <IoIosPaper id='DocsIcon' />Docs</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Project2">
                        <div id="Project2LeftContainer">
                            <div id="Project2ImageContainer">
                                <img id="Project2Image" src="MisplacedGif.webp" onClick={() => {setGif('MisplacedGif.webp'); toggleModal(); }} />
                            </div>
                        </div>
                        <div id="Project2RightContainer">
                            <div id="Project2ParagraphContainer">

                                <div id="Project2HeaderContainer">
                                    <p id="Project2Header">Misplaced</p>
                                </div>

                                <div id="Project2TextContainer">
                                    <p id='Project2Paragraph'>Misplaced is a digitalized lost and found platform for TU students to retrieve lost items by posting information through an intuitive React Native UI and connecting with potential finders. 
                                    Wrote 100k+ lines of code and was recognized by VP and CIO of Towson University.
                                    </p>
                                </div>

                                <div id="Project2StackContainer">
                                    <img id="StackIcon" src="react.webp" />
                                    <img id="StackIcon" src="expo.webp" />
                                    <img id="StackIcon" src="mongo.webp" />
                                    <img id="StackIcon" src="node.webp" />
                                    <img id="StackIconJS" src="js.webp" />
                                </div>

                            </div>
                            <div id="Project2IconsContainer">
                                <div id="GithubIconContainer">
                                    <Link id="GithubLink" href="https://github.com/misplaced-dev/misplaced.app" target='_blank'> <VscGithubAlt id='GithubIcon' />Video Demos</Link>
                                </div>
                                <div id="RedirectIconContainer">
                                    <Link id="RedirectLink" href="https://misplaced.app" target='_blank'> <CiShare1 id='RedirectIcon' />View Site</Link>
                                </div>
                                <div id="DocsIconContainer">
                                    <Link id="DocsLink" href="/docs"> <IoIosPaper id='DocsIcon' />Docs</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Project3">
                        <div id="Project3LeftContainer">
                            <div id="Project3ImageContainer">
                                <img id="Project3Image" src="TapGif.webp" onClick={() => {setGif('TapGif.webp'); toggleModal(); }} />
                            </div>
                        </div>
                        <div id="Project3RightContainer">
                            <div id="Project3ParagraphContainer">

                                <div id="Project3HeaderContainer">
                                    <p id="Project3Header">Let's Tap In, LLC</p>
                                </div>

                                <div id="Project3TextContainer">
                                    <p id='Project3Paragraph'>This static website displays dummy events and allows you to checkout tickets.
                                    Led initiative on website preformance improvements, collaborated with other senior developers, and receieved approval to push to production.</p>
                                </div>

                                <div id="Project3StackContainer">
                                    <img id="StackIcon" src="react.webp" />
                                    <img id="StackIcon" src="next.webp" />
                                    <img id="StackIconTS" src="ts.webp" />
                                </div>

                            </div>
                            <div id="Project3IconsContainer">
                                <div id="GithubIconContainer">
                                    <Link id="GithubLink" href="https://github.com/dawitalemu4/TapInWebPage" target='_blank'> <VscGithubAlt id='GithubIcon' />Video Demos</Link>
                                </div>
                                <div id="RedirectIconContainer">
                                    <Link id="RedirectLink" href="https://tapinwebpage.vercel.app/" target='_blank'> <CiShare1 id='RedirectIcon' />View Site</Link>
                                </div>
                                <div id="DocsIconContainer">
                                    <Link id="DocsLink" href="/docs"> <IoIosPaper id='DocsIcon' />Docs</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Project4">
                        <div id="Project4LeftContainer">
                            <div id="Project4ImageContainer">
                                <img id="Project4Image" src="UAGif.webp" onClick={() => {setGif('UAGif.webp'); toggleModal(); }} />
                            </div>
                        </div>
                        <div id="Project4RightContainer">
                            <div id="Project4ParagraphContainer">

                                <div id="Project4HeaderContainer">
                                    <p id="Project4Header">Urban Alliance</p>
                                </div>

                                <div id="Project4TextContainer">
                                    <p id='Project4Paragraph'>This static website was a revamping of a partner companies template-service website. 
                                    Held meetings with the CEO and Co-Founder to align development with business needs.
                                    Sparked the start of the partner companies codebase using GitHub organizations, project-based repos, and protection rules.</p>
                                </div>

                                <div id="Project4StackContainer">
                                    <img id="StackIcon" src="react.webp" />
                                    <img id="StackIcon" src="gatsby.webp" />
                                    <img id="StackIconJS" src="js.webp" />
                                </div>

                            </div>
                            <div id="Project4IconsContainer">
                                <div id="GithubIconContainer">
                                    <Link id="GithubLink" href="https://github.com/EduCoGroup/educogroup.org" target='_blank'> <VscGithubAlt id='GithubIcon' />Video Demos</Link>
                                </div>
                                <div id="RedirectIconContainer">
                                    <Link id="RedirectLink" href="https://educogroup.vercel.app/" target='_blank'> <CiShare1 id='RedirectIcon' />View Site</Link>
                                </div>
                                <div id="DocsIconContainer">
                                    <Link id="DocsLink" href="/docs"> <IoIosPaper id='DocsIcon' />Docs</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Project5">
                        <div id="Project5LeftContainer">
                            <div id="Project5ImageContainer">
                                <img id="Project5Image" src="SonicGif.webp" onClick={() => {setGif('SonicGif.webp'); toggleModal(); }} />
                            </div>
                        </div>
                        <div id="Project5RightContainer">
                            <div id="Project5ParagraphContainer">

                                <div id="Project5HeaderContainer">
                                    <p id="Project5Header">2D Sonic Platformer</p>
                                </div>

                                <div id="Project5TextContainer">
                                    <p id='Project5Paragraph'>A sentimental first project where I decided to take action on my childhood dream to become a "game maker", and introduced me to the world of software development.
                                    Learned physics and animation in game development, and more importantly, how to self teach software development, which brought me where I am now.</p>
                                </div>

                                <div id="Project5StackContainer">
                                    <img id="StackIcon" src="c.webp" />
                                    <img id="StackIcon" src="unity.webp" />
                                </div>
                                
                            </div>
                            <div id="Project5IconsContainer">
                                <div id="GithubIconContainer">
                                    <Link id="GithubLink" href="https://github.com/dawitalemu4/sonic" target='_blank'> <VscGithubAlt id='GithubIcon' />Video Demos</Link>
                                </div>
                                <div id="RedirectIconContainer">
                                    <Link id="RedirectLink" href="https://github.com/dawitalemu4/sonic" target='_blank'> <CiShare1 id='RedirectIcon' />View Video</Link>
                                </div>
                                <div id="DocsIconContainer">
                                    <Link id="DocsLink" href="/docs"> <IoIosPaper id='DocsIcon' />Docs</Link>
                                </div>
                            </div>
                        </div>
                    </div>                
                </div>                    
                <div id="MoreContainer">
                    <p id="More">And More... Browse My <Link id='MoreGitHub' href='https://github.com/dawitalemu4' target="_blank">GitHub</Link> or Visit the <Link id='DocsA' href='/docs'>Docs Page for Devs</Link>!</p>
                </div>
                <div id="ModalContainer" style={{ display: showModal ? "flex" : "none" }} onClick={toggleModal}>
                    <div id='CloseModal' onClick={toggleModal}><MdClose /></div>
                    <img id="Img" src={gif} onClick={toggleModal} />
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
                    height: 100%;
                    object-fit: contain;
                    cursor: pointer;
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

                #GithubLink:hover, #RedirectLink:hover, #DocsLink:hover { opacity: 0.7; }

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

                #DocsA, #MoreGitHub { text-decoration: underline; }

                #DocsA:hover, #MoreGitHub:hover { opacity: 0.7; }

                #ModalContainer {
                    display: flex;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 99.7vw;
                    height: 100vh;
                    justify-content: center;
                    align-items: center;
                    background-color: rgba(0, 0, 0, 0.8);
                    cursor: pointer;
                    z-index: 11;
                }

                #CloseModal {
                    display: flex;
                    position: absolute;
                    top: 11%;
                    left: 3%;
                    width: 5%;
                    height: 5%;
                    justify-content: center;
                    align-items: center;
                    font-size: 50px;
                    color: white;
                    cursor: pointer;
                }

                #Img {
                    width: 80%;
                    height: 80%;
                    object-fit: contain;
                    cursor: pointer;
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