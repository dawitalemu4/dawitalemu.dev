"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import CodeHighlight from "../components/codeHighlight";
import { ProjectsData } from "../utils/data";
import { HiArrowNarrowUp } from "react-icons/hi";
import { VscGithubAlt } from "react-icons/vsc";
import { CiShare1 } from "react-icons/ci";

export default function Projects() {

    const top = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    };

    const isContainerVisible = () => {

        const container = document.getElementById("Projects");

        if (!container) return;

        const containerRect = container.getBoundingClientRect();
        const targetPosition = containerRect.top;
        const arrow = document.getElementById("UpContainer");

        if (!arrow) return;

        if (targetPosition < 0) {
            arrow.style.display = "flex";
        } else {
            arrow.style.display = "none";
        };
    };

    useEffect(() => {

        window.addEventListener("scroll", isContainerVisible);

        return () => {
            window.removeEventListener("scroll", isContainerVisible);
        };

    }, []);

    return (
        <div id="Projects">
            <div id="UpContainer">
                <div id="Up" onClick={top}><HiArrowNarrowUp /></div>
            </div>
            <div id="ProjectsContainer">
                {ProjectsData.map((project: any) => (
                    <div id={project.divID} key={project.id}>
                        <div id="DocsHeaderContainer">
                            <p id="DocsHeader">{project.header}</p>
                        </div>
                        <div id="DocsTextContainer">
                            <div id="DocsLeftContainer">
                                <div id="DocsChallengeContainer">
                                    <div id="DocsChallengeHeaderContainer">
                                        <p id="DocsChallengeHeader">Favorite Challenge</p>
                                    </div>
                                    <div id="DocsChallengeContainer">
                                        <p id="DocsChallenge">{project.paragraph}</p>
                                    </div>
                                </div>
                            </div>
                            <div id="DocsRightContainer">
                                <div id="DocsCodeContainer">
                                    <div id="DocsCodeHeaderContainer">
                                        <p id="DocsCodeHeader">Code</p>
                                    </div>
                                    <div id="DocsCodeContainer">
                                        <div id="DocsCode"><CodeHighlight code={project.code} /></div>
                                    </div>  
                                </div>
                            </div>
                        </div>  
                        <div id="BottomContainer">
                            <div id="DocsIconsContainer">
                                <div id="GithubIconContainer">
                                    <Link id="GithubLink" href={project.github} target="_blank"> <VscGithubAlt id="GithubIcon" />Video Demos</Link>
                                </div>
                                <div id="RedirectIconContainer">
                                    <Link id="RedirectLink" href={project.siteURL} target="_blank"> <CiShare1 id="RedirectIcon" />View Site</Link>
                                </div>
                            </div>                     
                            <div id="DocsStackContainer">
                                {project.images.map((image: any) => (
                                    <div id="StackIconContainer" key={image.id}>
                                        <img id={image[0]} src={"/devicons/" + image[1]} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        <style>
            {` 
                #Projects {
                    display: flex;
                    position: relative;
                    width: 99.7vw;
                    height: 700vh;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    color: white;
                    z-index: 1;
                }

                #UpContainer {
                    display: none;
                    position: fixed;
                    top: 20px;
                    left: 20px;
                    width: 50px;
                    height: 50px;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    z-index: 2;
                }

                #Up { font-size: 50px; }

                #Up:hover { opacity: 0.5;}

                #ProjectsContainer {
                    display: flex;
                    position: relative;
                    width: 90%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                }

                #Portfolio, #DebreTsion, #Misplaced, #TapIn, #UA, #Sonic, #CreatorVerse {
                    display: flex;
                    position: relative;
                    width: 95%;
                    height: 11%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    background-color: black;
                    z-index: 3;
                }

                #DocsHeaderContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 10%;
                    justify-content: center;
                    align-items: center;
                }

                #DocsHeader {
                    font-size: 50px;
                    font-family: InterBold;
                    text-align: center;
                }

                #DocsTextContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 75%;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }

                #DocsLeftContainer, #DocsRightContainer {
                    display: flex;
                    position: relative;
                    width: 50%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                #DocsChallengeContainer, #DocsCodeContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                #DocsChallengeHeaderContainer, #DocsCodeHeaderContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 19%;
                    justify-content: center;
                    align-items: center;
                }

                #DocsChallengeHeader, #DocsCodeHeader {
                    font-size: 30px;
                    font-family: InterSemi;
                    text-align: center;
                }

                #DocsChallengeContainer, #DocsCodeContainer {
                    display: flex;
                    position: relative;
                    width: 90%;
                    height: 81%;
                    justify-content: flex-start;
                    align-items: center;
                }

                #DocsCodeContainer { width: 100%; }

                #DocsChallenge {
                    font-size: 15px;
                    font-family: Inter;
                    text-align: left;
                    margin-top: 2%;
                    padding-right: 2%;
                    overflow-y: scroll;
                }

                #DocsChallenge::-webkit-scrollbar {
                    width: 5px;
                    background-color: transparent;
                }

                #DocsChallenge::-webkit-scrollbar-thumb {
                    background-color: white;
                    border-radius: 10px;
                }

                #DocsCode { 
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    justify-content: flex-start;
                    align-items: flex-start;
                    overflow: scroll;
                    font-size: 11px;
                    background-color: #1d1f21;
                }

                #DocsCode::-webkit-scrollbar {
                    width: 5px;
                    height: 5px;
                    background-color: transparent;
                }

                #DocsCode::-webkit-scrollbar-thumb {
                    background-color: white;
                    border-radius: 10px;
                }

                #BottomContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 15%;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }

                #DocsIconsContainer {
                    display: flex;
                    position: relative;
                    width: 50%;
                    height: 100%;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }

                #GithubIconContainer, #RedirectIconContainer, #DocsIconContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
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

                #DocsStackContainer {
                    display: flex;
                    position: relative;
                    width: 50%;
                    height: 100%;
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

                @media (max-width: 1000px) {

                    #Projects { height: 800vh; }

                    #UpContainer { top: 25px; left: 20px; }

                    #DocsHeader { font-size: 34px; }

                    #DocsTextContainer { flex-direction: column; }

                    #DocsLeftContainer, #DocsRightContainer { width: 100%; height: 50%; }

                    #DocsChallengeHeader { font-size: 25px; }

                    #DocsChallengeContainer { width: 100%; }
                    
                    #DocsCodeHeaderContainer { margin-bottom: 5%; }

                    #DocsCodeHeader { font-size: 25px; }

                    #DocsStackContainer { flex-wrap: wrap; }

                    #StackIcon, #StackIconTS, #StackIconJS { height: 40%; }
                }

            `}
        </style>
        </div>
    )
};
