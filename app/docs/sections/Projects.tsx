"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import { HiArrowNarrowUp } from "react-icons/hi";
import { VscGithubAlt } from 'react-icons/vsc';
import { CiShare1 } from 'react-icons/ci';
import CodeHighlight, { portfolioCode, debreTsionCode, misplacedCode, tapInCode, UACode, sonicCode, CVCode } from "./Codes";

const Projects: React.FC = () => {

    const Top = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const isContainerVisble = () => {
        const container = document.getElementById("Projects");
        if (!container) { return }
        const containerRect = container.getBoundingClientRect();
        const targetPosition = containerRect.top;
        const arrow = document.getElementById("UpContainer");
        if (!arrow) { return }
        if (targetPosition < 0) {
            arrow.style.display = "flex";
        } else {
            arrow.style.display = "none";
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", isContainerVisble);
        return () => {
            window.removeEventListener("scroll", isContainerVisble);
        }
    }, []);

    return (
        <div id="Projects">
            <div id="UpContainer">
                <div id="Up" onClick={Top}><HiArrowNarrowUp /></div>
            </div>
            <div id="ProjectsContainer">

                <div id="Portfolio">
                    <div id="DocsHeaderContainer">
                        <p id="DocsHeader">Portfolio</p>
                    </div>
                    <div id="DocsTextContainer">
                        <div id="DocsLeftContainer">
                            <div id="DocsChallengeContainer">
                                <div id="DocsChallengeHeaderContainer">
                                    <p id="DocsChallengeHeader">Favorite Challenge</p>
                                </div>
                                <div id="DocsChallengeContainer">
                                    <p id="DocsChallenge">Thought the parallax effect was cool? Here's the code for the effect on the projects section! 
                                    Even though this function is almost the same as the other functions in the other sections, this one has an on and off button to toggle the effect.
                                    In short, I took the height of the div and the top, the scroll position of the user, and calculated the % of where their scroll position is on the div.
                                    I also offset the top a bit for timing reasons, as it would start counting the % immediately as the top of the div showed up on the screen, but the effect is 
                                    cooler when you can see it happening😹. Why I'm using this component's parallax function is, because believe it or not, I spent 20 minutes or so confused
                                    why 'if (effectToggle === true)' wouldn't display 'On', until I tried false like how it is now. Don't ask me why it works. (jk)</p>
                                </div>
                            </div>
                        </div>
                        <div id="DocsRightContainer">
                            <div id="DocsCodeContainer">
                                <div id="DocsCodeHeaderContainer">
                                    <p id="DocsCodeHeader">Code</p>
                                </div>
                                <div id="DocsCodeContainer">
                                    <div id="DocsCode"><CodeHighlight code={portfolioCode} /></div>
                                </div>  
                            </div>
                        </div>
                    </div>  
                    <div id="BottomContainer">
                        <div id="DocsIconsContainer">
                            <div id="GithubIconContainer">
                                <Link id="GithubLink" href="https://github.com/DebreTsionWeb/debretsion.org" target='_blank'> <VscGithubAlt id='GithubIcon' />Video Demos</Link>
                            </div>
                            <div id="RedirectIconContainer">
                                <Link id="RedirectLink" href="/" target='_blank'> <CiShare1 id='RedirectIcon' />View Site</Link>
                            </div>
                        </div>                     
                        <div id="DocsStackContainer">
                            <img id="StackIcon" src="react.png" />
                            <img id="StackIcon" src="next.png" />
                            <img id="StackIconTS" src="ts.jpg" />
                        </div>
                    </div>
                </div>

                <div id="DebreTsion">
                    <div id="DocsHeaderContainer">
                        <p id="DocsHeader">Debre Tsion Church</p>
                    </div>
                    <div id="DocsTextContainer">
                        <div id="DocsLeftContainer">
                            <div id="DocsChallengeContainer">
                                <div id="DocsChallengeHeaderContainer">
                                    <p id="DocsChallengeHeader">Favorite Challenge</p>
                                </div>
                                <div id="DocsChallengeContainer">
                                    <p id="DocsChallenge">This website is one of my favorites </p>
                                </div>
                            </div>
                        </div>
                        <div id="DocsRightContainer">
                            <div id="DocsCodeContainer">
                                <div id="DocsCodeHeaderContainer">
                                    <p id="DocsCodeHeader">Code</p>
                                </div>
                                <div id="DocsCodeContainer">
                                    <div id='DocsCode'><CodeHighlight code={debreTsionCode} /></div>
                                </div>  
                            </div>
                        </div>
                    </div>  
                    <div id="BottomContainer">
                        <div id="DocsIconsContainer">
                            <div id="GithubIconContainer">
                                <Link id="GithubLink" href="https://github.com/DebreTsionWeb/debretsion.org" target='_blank'> <VscGithubAlt id='GithubIcon' />Video Demos</Link>
                            </div>
                            <div id="RedirectIconContainer">
                                <Link id="RedirectLink" href="https://debretsion.vercel.app/en" target='_blank'> <CiShare1 id='RedirectIcon' />View Site</Link>
                            </div>
                        </div>
                        <div id="DocsStackContainer">
                            <img id="StackIcon" src="angular.jpg" />
                            <img id="StackIcon" src="firebase.png" />
                            <img id="StackIcon" src="gcp.jpg" />
                            <img id="StackIconTS" src="ts.jpg" />
                        </div>
                    </div>
                </div>

                <div id="Misplaced">
                    <div id="DocsHeaderContainer">
                        <p id="DocsHeader">Misplaced</p>
                    </div>
                    <div id="DocsTextContainer">
                        <div id="DocsLeftContainer">
                            <div id="DocsChallengeContainer">
                                <div id="DocsChallengeHeaderContainer">
                                    <p id="DocsChallengeHeader">Favorite Challenge</p>
                                </div>
                                <div id="DocsChallengeContainer">
                                    <p id="DocsChallenge">Challenge</p>
                                </div>
                            </div>
                        </div>
                        <div id="DocsRightContainer">
                            <div id="DocsCodeContainer">
                                <div id="DocsCodeHeaderContainer">
                                    <p id="DocsCodeHeader">Code</p>
                                </div>
                                <div id="DocsCodeContainer">
                                    <div id='DocsCode'><CodeHighlight code={misplacedCode} /></div>
                                </div>  
                            </div>
                        </div>
                    </div>  
                    <div id="BottomContainer">
                        <div id="DocsIconsContainer">
                            <div id="GithubIconContainer">
                                <Link id="GithubLink" href="https://github.com/misplaced-dev/misplaced.app" target='_blank'> <VscGithubAlt id='GithubIcon' />Video Demos</Link>
                            </div>
                            <div id="RedirectIconContainer">
                                <Link id="RedirectLink" href="https://misplaced.app" target='_blank'> <CiShare1 id='RedirectIcon' />View Site</Link>
                            </div>
                        </div>                        
                        <div id="DocsStackContainer">
                            <img id="StackIcon" src="react.png" />
                            <img id="StackIcon" src="expo.png" />
                            <img id="StackIcon" src="mongo.png" />
                            <img id="StackIcon" src="node.png" />
                            <img id="StackIconJS" src="js.png" />
                        </div>
                    </div>
                </div>

                <div id="TapIn">
                    <div id="DocsHeaderContainer">
                        <p id="DocsHeader">Let's Tap In</p>
                    </div>
                    <div id="DocsTextContainer">
                        <div id="DocsLeftContainer">
                            <div id="DocsChallengeContainer">
                                <div id="DocsChallengeHeaderContainer">
                                    <p id="DocsChallengeHeader">Favorite Challenge</p>
                                </div>
                                <div id="DocsChallengeContainer">
                                    <p id="DocsChallenge">Challenge</p>
                                </div>
                            </div>
                        </div>
                        <div id="DocsRightContainer">
                            <div id="DocsCodeContainer">
                                <div id="DocsCodeHeaderContainer">
                                    <p id="DocsCodeHeader">Code</p>
                                </div>
                                <div id="DocsCodeContainer">
                                    <div id='DocsCode'><CodeHighlight code={tapInCode} /></div>
                                </div>  
                            </div>
                        </div>
                    </div>  
                    <div id="BottomContainer">
                        <div id="DocsIconsContainer">
                            <div id="GithubIconContainer">
                                <Link id="GithubLink" href="https://github.com/dawitalemu4/TapInWebPage" target='_blank'> <VscGithubAlt id='GithubIcon' />Video Demos</Link>
                            </div>
                            <div id="RedirectIconContainer">
                                <Link id="RedirectLink" href="https://tapinwebpage.vercel.app/" target='_blank'> <CiShare1 id='RedirectIcon' />View Site</Link>
                            </div>
                        </div>
                        <div id="DocsStackContainer">
                            <img id="StackIcon" src="react.png" />
                            <img id="StackIcon" src="next.png" />
                            <img id="StackIconTS" src="ts.jpg" />
                        </div>
                    </div>
                </div>

                <div id="UA">
                    <div id="DocsHeaderContainer">
                        <p id="DocsHeader">Urban Alliance</p>
                    </div>
                    <div id="DocsTextContainer">
                        <div id="DocsLeftContainer">
                            <div id="DocsChallengeContainer">
                                <div id="DocsChallengeHeaderContainer">
                                    <p id="DocsChallengeHeader">Favorite Challenge</p>
                                </div>
                                <div id="DocsChallengeContainer">
                                    <p id="DocsChallenge">Trying to avoid reptitve code</p>
                                </div>
                            </div>
                        </div>
                        <div id="DocsRightContainer">
                            <div id="DocsCodeContainer">
                                <div id="DocsCodeHeaderContainer">
                                    <p id="DocsCodeHeader">Code</p>
                                </div>
                                <div id="DocsCodeContainer">
                                    <div id='DocsCode'><CodeHighlight code={UACode} /></div>
                                </div>  
                            </div>
                        </div>
                    </div>  
                    <div id="BottomContainer">
                        <div id="DocsIconsContainer">
                            <div id="GithubIconContainer">
                                <Link id="GithubLink" href="https://github.com/EduCoGroup/educogroup.org" target='_blank'> <VscGithubAlt id='GithubIcon' />Video Demos</Link>
                            </div>
                            <div id="RedirectIconContainer">
                                <Link id="RedirectLink" href="https://educogroup.vercel.app/" target='_blank'> <CiShare1 id='RedirectIcon' />View Site</Link>
                            </div>
                        </div>
                        <div id="DocsStackContainer">
                            <img id="StackIcon" src="react.png" />
                            <img id="StackIcon" src="gatsby.webp" />
                            <img id="StackIconJS" src="js.png" />
                        </div>
                    </div>
                </div>

                <div id="Sonic">
                    <div id="DocsHeaderContainer">
                        <p id="DocsHeader">2D Sonic Platformer</p>
                    </div>
                    <div id="DocsTextContainer">
                        <div id="DocsLeftContainer">
                            <div id="DocsChallengeContainer">
                                <div id="DocsChallengeHeaderContainer">
                                    <p id="DocsChallengeHeader">Favorite Challenge</p>
                                </div>
                                <div id="DocsChallengeContainer">
                                    <p id="DocsChallenge">Challenge</p>
                                </div>
                            </div>
                        </div>
                        <div id="DocsRightContainer">
                            <div id="DocsCodeContainer">
                                <div id="DocsCodeHeaderContainer">
                                    <p id="DocsCodeHeader">Code</p>
                                </div>
                                <div id="DocsCodeContainer">
                                    <div id='DocsCode'><CodeHighlight code={sonicCode} /></div>
                                </div>  
                            </div>
                        </div>
                    </div>  
                    <div id="BottomContainer">
                        <div id="DocsIconsContainer">
                            <div id="GithubIconContainer">
                                <Link id="GithubLink" href="https://github.com/dawitalemu4/sonic" target='_blank'> <VscGithubAlt id='GithubIcon' />Video Demos</Link>
                            </div>
                            <div id="RedirectIconContainer">
                                <Link id="RedirectLink" href="https://github.com/dawitalemu4/sonic" target='_blank'> <CiShare1 id='RedirectIcon' />View Video</Link>
                            </div>
                        </div>  
                        <div id="DocsStackContainer">
                            <img id="StackIcon" src="c.png" />
                            <img id="StackIcon" src="unity.jpg" />
                        </div>
                    </div>
                </div> 

                <div id="CreatorVerse">
                    <div id="DocsHeaderContainer">
                        <p id="DocsHeader">CreatorVerse</p>
                    </div>
                    <div id="DocsTextContainer">
                        <div id="DocsLeftContainer">
                            <div id="DocsChallengeContainer">
                                <div id="DocsChallengeHeaderContainer">
                                    <p id="DocsChallengeHeader">Favorite Challenge</p>
                                </div>
                                <div id="DocsChallengeContainer">
                                    <p id="DocsChallenge">Challenge</p>
                                </div>
                            </div>
                        </div>
                        <div id="DocsRightContainer">
                            <div id="DocsCodeContainer">
                                <div id="DocsCodeHeaderContainer">
                                    <p id="DocsCodeHeader">Code</p>
                                </div>
                                <div id="DocsCodeContainer">
                                    <div id='DocsCode'><CodeHighlight code={CVCode} /></div>
                                </div>  
                            </div>
                        </div>
                    </div>  
                    <div id="BottomContainer">
                        <div id="DocsIconsContainer">
                            <div id="GithubIconContainer">
                                <Link id="GithubLink" href="https://github.com/dawitalemu4/CodePath103PreWork" target='_blank'> <VscGithubAlt id='GithubIcon' />Video Demos</Link>
                            </div>
                            <div id="RedirectIconContainer">
                                <Link id="RedirectLink" href="https://creatorverse-da.vercel.app" target='_blank'> <CiShare1 id='RedirectIcon' />View Site</Link>
                            </div>
                        </div>
                        <div id="DocsStackContainer">
                            <img id="StackIcon" src="react.png" />
                            <img id="StackIcon" src="supabase.png" />
                            <img id="StackIconJS" src="js.png" />
                        </div>
                    </div>
                </div>

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
}

export default Projects;