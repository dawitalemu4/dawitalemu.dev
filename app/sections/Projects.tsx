'use client'
import React, { useState, useEffect, useRef } from 'react';
import { ProjectsData } from './Data';
import Link from "next/link";
import { VscGithubAlt } from 'react-icons/vsc';
import { CiShare1 } from 'react-icons/ci';
import { IoIosPaper } from 'react-icons/io';
import { MdClose } from 'react-icons/md';

export default function Projects() {

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
                    {ProjectsData.map((data: any) => (
                        <div id={`Project${data.id}`} key={data.id}>
                            <div id="ProjectLeftContainer">
                                <div id="ProjectImageContainer">
                                    <img id="ProjectImage" src={data.image} onClick={() => {setGif(`${data.image}`); toggleModal(); }} />
                                </div>
                            </div>
                            <div id="ProjectRightContainer">
                                <div id="ProjectParagraphContainer">

                                    <div id="ProjectHeaderContainer">
                                        <p id="ProjectHeader">{data.header}</p>
                                    </div>
                                    
                                    <div id="ProjectTextContainer">
                                        <p id='ProjectParagraph'>{data.paragraph}</p>
                                    </div> 

                                    <div id="ProjectStackContainer">
                                        {data.images.map((image: any) => (
                                            <div id="StackIconContainer" key={image.id}>
                                                <img id={image[0]} src={image[1]} />
                                            </div>
                                        ))}
                                    </div>

                                </div>
                                <div id="ProjectIconsContainer">
                                    <div id="GithubIconContainer">
                                        <Link id="GithubLink" href={data.github} target='_blank'> <VscGithubAlt id='GithubIcon' />Video Demos</Link>
                                    </div>
                                    <div id="RedirectIconContainer">
                                        <Link id="RedirectLink" href={data.siteURL} target='_blank'> <CiShare1 id='RedirectIcon' />View Site</Link>
                                    </div>
                                    <div id="DocsIconContainer">
                                        <Link id="DocsLink" href="/docs"> <IoIosPaper id='DocsIcon' />Docs</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}              
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

                #ProjectLeftContainer {
                    display: flex;
                    position: relative;
                    width: 40%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                #ProjectImageContainer {
                    display: flex;
                    position: relative;
                    width: 90%;
                    height: 75%;
                    justify-content: center;
                    align-items: center;
                    object-fit: contain;
                    overflow: hidden;
                }

                #ProjectImage {
                    height: 100%;
                    object-fit: contain;
                    cursor: pointer;
                }

                #ProjectRightContainer {
                    display: flex;
                    position: relative;
                    width: 60%;
                    height: 100%;
                    flex-direction: row;
                    justify-content: center;
                    align-items: flex-start;
                }

                #ProjectParagraphContainer {
                    display: flex;
                    position: relative;
                    width: 85%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                #ProjectHeaderContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 20%;
                    justify-content: center;
                    align-items: center;
                }

                #ProjectHeader {
                    font-size: 30px;
                    color: white;
                    font-family: InterSemi;
                    text-align: center;
                }

                #ProjectTextContainer {
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

                #ProjectTextContainer::-webkit-scrollbar {
                    width: 5px;
                    background-color: black;
                }

                #ProjectTextContainer::-webkit-scrollbar-thumb {
                    background-color: white;
                    border-radius: 10px;
                }

                #ProjectParagraph {
                    font-size: 16px;
                    color: white;
                    font-family: Inter;
                    text-align: left;
                }

                #ProjectStackContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 25%;
                    justify-content: center;
                    align-items: center;
                }

                #StackIconContainer {
                    display: flex;
                    position: relative;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                }

                #StackIcon, #StackIconTS, #StackIconJS {
                    height: 80%;
                    margin-left: 3px;
                    margin-right: 3px;
                }

                #StackIconTS, #StackIconJS { margin-left: 7px; }

                #ProjectIconsContainer {
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

                    #ProjectLeftContainer { display: none; }

                    #ProjectRightContainer { 
                        width: 90%; 
                        flex-direction: column;
                        align-items: center;
                    }
                    
                    #ProjectParagraphContainer { width: 100%; height: 75%; }

                    #ProjectTextContainer { height: 40%; }

                    #ProjectStackContainer { height: 20%; margin-top: 5%; }

                    #ProjectIconsContainer { 
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
    );
};