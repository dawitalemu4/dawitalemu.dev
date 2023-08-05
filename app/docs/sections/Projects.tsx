import React from "react";
import Link from "next/link";
import { VscGithubAlt } from 'react-icons/vsc';
import { CiShare1 } from 'react-icons/ci';

const Projects: React.FC = () => {

    return (
        <div id="Projects">
            <div id="ProjectsContainer">

                <div id="Portfolio">

                    <div id="PortfolioHeaderContainer">
                        <p id="PortfolioHeader">Portfolio</p>
                    </div>

                    <div id="PortfolioTextContainer">

                        <div id="PortfolioLeftContainer">
                            <div id="PortfolioChallengeContainer">
                                <div id="PortfolioChallengeContainer">
                                    <div id="PortfolioTopChallengeContainer">
                                        <p id="PortfolioChallengeHeader">Favorite Challenge</p>
                                    </div>
                                    <div id="PortfolioBottomChallengeContainer">
                                        <p id="PortfolioChallenge"></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="PortfolioRightContainer">
                            <div id="PortfolioParagraphContainer">

                                <div id="PortfolioSubHeaderContainer">
                                    <p id="PortfolioSubHeader">Portfolio</p>
                                </div>
                                
                                <div id="PortfolioTextContainer">
                                    <p id='PortfolioParagraph'>A website for Debre Tsion Church made by a team of 7 student developers to give back to our childhood church led by Dawit Alemu. Created with Angular, Firebase, and TypeScript.</p>
                                </div>  

                            </div>

                        </div>
                    </div>  

                        <div id="PortfolioIconsContainer">
                            <div id="GithubIconContainer">
                                <Link id="GithubLink" href="https://github.com/DebreTsionWeb/debretsion.org" target='_blank'> <VscGithubAlt id='GithubIcon' />Video Demos</Link>
                            </div>
                            <div id="RedirectIconContainer">
                                <Link id="RedirectLink" href="https://debretsion.vercel.app/en" target='_blank'> <CiShare1 id='RedirectIcon' />View Site</Link>
                            </div>
                        </div>                     
                    
                    <div id="PortfolioStackContainer">
                        <img id="StackIcon" src="react.png" />
                        <img id="StackIcon" src="next.png" />
                        <img id="StackIconTS" src="ts.jpg" />
                        
                    </div>

                </div>

                <div id="DebreTsion">

                    <div id="DebreTsionHeaderContainer">
                        <p id="DebreTsionHeader">Debre Tsion Church</p>
                    </div>

                    <div id="DebreTsionLeftContainer">
                        <div id="DebreTsionChallengeContainer">
                            <div id="DebreTsionChallengeContainer">
                                <div id="DebreTsionTopChallengeContainer">
                                    <p id="DebreTsionChallengeHeader">Favorite Challenge</p>
                                </div>
                                <div id="DebreTsionBottomChallengeContainer">
                                    <p id="DebreTsionChallenge"></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="DebreTsionRightContainer">
                        <div id="DebreTsionParagraphContainer">

                            <div id="DebreTsionSubHeaderContainer">
                                <p id="DebreTsionSubHeader">Debre Tsion Church</p>
                            </div>
                            
                            <div id="DebreTsionTextContainer">
                                <p id='DebreTsionParagraph'>A website for Debre Tsion Church made by a team of 7 student developers to give back to our childhood church led by Dawit Alemu. Created with Angular, Firebase, and TypeScript.</p>
                            </div>  

                        </div>
                        <div id="DebreTsionIconsContainer">
                            <div id="GithubIconContainer">
                                <Link id="GithubLink" href="https://github.com/DebreTsionWeb/debretsion.org" target='_blank'> <VscGithubAlt id='GithubIcon' />Video Demos</Link>
                            </div>
                            <div id="RedirectIconContainer">
                                <Link id="RedirectLink" href="https://debretsion.vercel.app/en" target='_blank'> <CiShare1 id='RedirectIcon' />View Site</Link>
                            </div>
                        </div>
                    </div>

                    <div id="DebreTsionStackContainer">
                        <img id="StackIcon" src="angular.jpg" />
                        <img id="StackIcon" src="firebase.png" />
                        <img id="StackIcon" src="gcp.jpg" />
                        <img id="StackIconTS" src="ts.jpg" />
                    </div>

                </div>

                <div id="Misplaced">

                    <div id="MisplacedHeaderContainer">
                        <p id="MisplacedHeader">Misplaced</p>
                    </div>

                    <div id="MisplacedLeftContainer">
                        <div id="MisplacedChallengeContainer">
                            <div id="MisplacedTopChallengeContainer">
                                <p id="MisplacedChallengeHeader">Favorite Challenge</p>
                            </div>
                            <div id="MisplacedBottomChallengeContainer">
                                <p id="MisplacedChallenge"></p>
                            </div>
                        </div>
                    </div>

                    <div id="MisplacedRightContainer">
                        <div id="MisplacedParagraphContainer">

                            <div id="MisplacedSubHeaderContainer">
                                <p id="MisplacedSubHeader">Misplaced</p>
                            </div>

                            <div id="MisplacedTextContainer">
                                <p id='MisplacedParagraph'>Misplaced is a digitalized lost and found platform for TU students to retrieve lost items by posting information through an intuitive React Native UI and connecting with potential finders. Utilizes MERN stack and Google Cloud APIs.</p>
                            </div>

                        </div>
                        <div id="MisplacedIconsContainer">
                            <div id="GithubIconContainer">
                                <Link id="GithubLink" href="https://github.com/misplaced-dev/misplaced.app" target='_blank'> <VscGithubAlt id='GithubIcon' />Video Demos</Link>
                            </div>
                            <div id="RedirectIconContainer">
                                <Link id="RedirectLink" href="https://misplaced.app" target='_blank'> <CiShare1 id='RedirectIcon' />View Site</Link>
                            </div>
                        </div>
                    </div>

                    <div id="MisplacedStackContainer">
                        <img id="StackIcon" src="react.png" />
                        <img id="StackIcon" src="expo.png" />
                        <img id="StackIcon" src="mongo.png" />
                        <img id="StackIcon" src="node.png" />
                        <img id="StackIconJS" src="js.png" />
                    </div>

                </div>

                <div id="TapIn">

                    <div id="TapInHeaderContainer">
                        <p id="TapInHeader">Let's Tap In, LLC</p>
                    </div>

                    <div id="TapInLeftContainer">
                        <div id="TapInChallengeContainer">
                            <div id="TapInChallengeContainer">
                                <div id="TapInTopChallengeContainer">
                                    <p id="TapInChallengeHeader">Favorite Challenge</p>
                                </div>
                                <div id="TapInBottomChallengeContainer">
                                    <p id="TapInChallenge"></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="TapInRightContainer">
                        <div id="TapInParagraphContainer">

                            <div id="TapInSubHeaderContainer">
                                <p id="TapInSubHeader">Let's Tap In, LLC</p>
                            </div>

                            <div id="TapInTextContainer">
                                <p id='TapInParagraph'>This static webpage made for a client displays dummy recent events available and allows you to checkout tickets. Made with React, Next.js, and TypeScript. Click this repo to view short demo video!</p>
                            </div>

                        </div>
                        <div id="TapInIconsContainer">
                            <div id="GithubIconContainer">
                                <Link id="GithubLink" href="https://github.com/dawitalemu4/TapInWebPage" target='_blank'> <VscGithubAlt id='GithubIcon' />Video Demos</Link>
                            </div>
                            <div id="RedirectIconContainer">
                                <Link id="RedirectLink" href="https://tapinwebpage.vercel.app/" target='_blank'> <CiShare1 id='RedirectIcon' />View Site</Link>
                            </div>
                        </div>
                    </div>

                    <div id="TapInStackContainer">
                        <img id="StackIcon" src="react.png" />
                        <img id="StackIcon" src="next.png" />
                        <img id="StackIconTS" src="ts.jpg" />
                    </div>

                </div>

                <div id="UA">

                    <div id="UAHeaderContainer">
                        <p id="UAHeader">Urban Alliance</p>
                    </div>

                    <div id="UALeftContainer">
                        <div id="UAChallengeContainer">
                            <div id="UAChallengeContainer">
                                <div id="UATopChallengeContainer">
                                    <p id="UAChallengeHeader">Favorite Challenge</p>
                                </div>
                                <div id="UABottomChallengeContainer">
                                    <p id="UAChallenge"></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="UARightContainer">
                        <div id="UAParagraphContainer">

                            <div id="UASubHeaderContainer">
                                <p id="UASubHeader">Urban Alliance</p>
                            </div>

                            <div id="UATextContainer">
                                <p id='UAParagraph'>Upgraded EduCo’s main website by coding a new website from scratch, eliminating previous web template expenses. 
                                Utilized Gatsby.js, React, and JavaScript to take advantage of Gatsby’s Static Site Generation for this static site.
                                Held meetings with the CEO and Co-Founder to align development with business needs. Production: educogroup.org
                                Sparked the start of EduCo Group’s codebase using GitHub organizations, project-based repos, and protection rules.</p>
                            </div>

                        </div>
                        <div id="UAIconsContainer">
                            <div id="GithubIconContainer">
                                <Link id="GithubLink" href="https://github.com/EduCoGroup/educogroup.org" target='_blank'> <VscGithubAlt id='GithubIcon' />Video Demos</Link>
                            </div>
                            <div id="RedirectIconContainer">
                                <Link id="RedirectLink" href="https://educogroup.vercel.app/" target='_blank'> <CiShare1 id='RedirectIcon' />View Site</Link>
                            </div>
                        </div>
                    </div>

                    <div id="UAStackContainer">
                        <img id="StackIcon" src="react.png" />
                        <img id="StackIcon" src="gatsby.webp" />
                        <img id="StackIconJS" src="js.png" />
                    </div>

                </div>

                <div id="Sonic">

                    <div id="SonicHeaderContainer">
                        <p id="SonicHeader">2D Sonic Platformer</p>
                    </div>

                    <div id="SonicLeftContainer">
                        <div id="SonicChallengeContainer">
                            <div id="SonicChallengeContainer">
                                <div id="SonicTopChallengeContainer">
                                    <p id="SonicChallengeHeader">Favorite Challenge</p>
                                </div>
                                <div id="SonicBottomChallengeContainer">
                                    <p id="SonicChallenge"></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="SonicRightContainer">
                        <div id="SonicParagraphContainer">

                            <div id="SonicSubHeaderContainer">
                                <p id="SonicSubHeader">2D Sonic Platformer</p>
                            </div>

                            <div id="SonicTextContainer">
                                <p id='SonicParagraph'>A 2D Sonic platformer game that gave me experience with physics and animation in Unity Game Engine and C#. Click this repo for a quick video demo!</p>
                            </div>

                        </div>
                        <div id="SonicIconsContainer">
                            <div id="GithubIconContainer">
                                <Link id="GithubLink" href="https://github.com/dawitalemu4/sonic" target='_blank'> <VscGithubAlt id='GithubIcon' />Video Demos</Link>
                            </div>
                            <div id="RedirectIconContainer">
                                <Link id="RedirectLink" href="https://github.com/dawitalemu4/sonic" target='_blank'> <CiShare1 id='RedirectIcon' />View Video</Link>
                            </div>
                        </div>
                    </div>                            
                    
                    <div id="SonicStackContainer">
                        <img id="StackIcon" src="c.png" />
                        <img id="StackIcon" src="unity.jpg" />
                    </div>

                </div> 

                <div id="CreatorVerse">

                    <div id="CVHeaderContainer">
                        <p id="CVHeader">CreatorVerse</p>
                    </div>

                    <div id="CVLeftContainer">
                        <div id="CVChallengeContainer">
                            <div id="CVChallengeContainer">
                                <div id="CVTopChallengeContainer">
                                    <p id="CVChallengeHeader">Favorite Challenge</p>
                                </div>
                                <div id="CVBottomChallengeContainer">
                                    <p id="CVChallenge"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div id="CVRightContainer">
                        <div id="CVParagraphContainer">

                            <div id="CVSubHeaderContainer">
                                <p id="CVSubHeader">Debre Tsion Church</p>
                            </div>
                            
                            <div id="CVTextContainer">
                                <p id='CVParagraph'>A website for Debre Tsion Church made by a team of 7 student developers to give back to our childhood church led by Dawit Alemu. Created with Angular, Firebase, and TypeScript.</p>
                            </div>  

                        </div>
                        <div id="CVIconsContainer">
                            <div id="GithubIconContainer">
                                <Link id="GithubLink" href="https://github.com/DebreTsionWeb/debretsion.org" target='_blank'> <VscGithubAlt id='GithubIcon' />Video Demos</Link>
                            </div>
                            <div id="RedirectIconContainer">
                                <Link id="RedirectLink" href="https://debretsion.vercel.app/en" target='_blank'> <CiShare1 id='RedirectIcon' />View Site</Link>
                            </div>
                        </div>
                    </div> 

                    <div id="CVStackContainer">
                        <img id="StackIcon" src="angular.jpg" />
                        <img id="StackIcon" src="firebase.png" />
                        <img id="StackIcon" src="gcp.jpg" />
                        <img id="StackIconTS" src="ts.jpg" />
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
                }

                #ProjectsContainer {
                    display: flex;
                    position: relative;
                    width: 90%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                #Portfolio, #DebreTsion, #Misplaced, #TapIn, #UA, #Sonic, #CreatorVerse {
                    display: flex;
                    position: relative;
                    width: 95%;
                    height: 14%;
                    flex-direction: row;
                    justify-content: center;
                    align-items: flex-start;
                    background-color: black;
                    border-radius: 25px;
                }

                #PortfolioHeaderContainer, #DebreTsionHeaderContainer, #MisplacedHeaderContainer, #TapInHeaderContainer, #UAHeaderContainer, #SonicHeaderContainer, #CVHeaderContainer {
                    display: flex;
                    position: absolute;
                    top: 0;
                    width: 100%;
                    height: 20%;
                    justify-content: center;
                    align-items: center;
                }

                #PortfolioHeader, #DebreTsionHeader, #MisplacedHeader, #TapInHeader, #UAHeader, #SonicHeader, #CVHeader {
                    font-size: 50px;
                    color: white;
                    font-family: InterSemi;
                    text-align: center;
                }

                #PortfolioLeftContainer, #DebreTsionLeftContainer, #MisplacedLeftContainer, #TapInLeftContainer, #UALeftContainer, #SonicLeftContainer, #CVLeftContainer {
                    display: flex;
                    position: relative;
                    width: 40%;
                    height: 90%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                #PortfolioChallengeContainer, #DebreTsionChallengeContainer, #MisplacedChallengeContainer, #TapInChallengeContainer, #UAChallengeContainer, #SonicChallengeContainer, #CVChallengeContainer {
                    display: flex;
                    position: relative;
                    width: 90%;
                    height: 75%;
                    justify-content: center;
                    align-items: center;
                    object-fit: contain;
                    overflow: hidden;
                }

                #PortfolioTopChallengeContainer, #DebreTsionTopChallengeContainer, #MisplacedTopChallengeContainer, #TapInTopChallengeContainer, #UATopChallengeContainer, #SonicTopChallengeContainer, #CVTopChallengeContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 20%;
                    justify-content: center;
                    align-items: center;
                }

                #PortfolioChallengeHeader, #DebreTsionChallengeHeader, #MisplacedChallengeHeader, #TapInChallengeHeader, #UAChallengeHeader, #SonicChallengeHeader, #CVChallengeHeader {
                    font-size: 30px;
                    color: white;
                    font-family: InterSemi;
                    text-align: center;
                }

                #PortfolioBottomChallengeContainer, #DebreTsionBottomChallengeContainer, #MisplacedBottomChallengeContainer, #TapInBottomChallengeContainer, #UABottomChallengeContainer, #SonicBottomChallengeContainer, #CVBottomChallengeContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 80%;
                    justify-content: center;
                    align-items: center;
                }

                #PortfolioChallenge, #DebreTsionChallenge, #MisplacedChallenge, #TapInChallenge, #UAChallenge, #SonicChallenge, #CVChallenge {
                    font-size: 20px;
                    color: white;
                    font-family: Inter;
                    text-align: center;
                }

                #PortfolioRightContainer, #DebreTsionRightContainer, #MisplacedRightContainer, #TapInRightContainer, #UARightContainer, #SonicRightContainer, #CVRightContainer {
                    display: flex;
                    position: relative;
                    width: 60%;
                    height: 90%;
                    flex-direction: row;
                    justify-content: center;
                    align-items: flex-start;
                }

                #PortfolioParagraphContainer, #DebreTsionParagraphContainer, #MisplacedParagraphContainer, #TapInParagraphContainer, #UAParagraphContainer, #SonicParagraphContainer, #CVParagraphContainer {
                    display: flex;
                    position: relative;
                    width: 85%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                #PortfolioSubHeaderContainer, #DebreTsionSubHeaderContainer, #MisplacedSubHeaderContainer, #TapInSubHeaderContainer, #UASubHeaderContainer, #SonicSubHeaderContainer, #CVSubHeaderContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 10%;
                    justify-content: center;
                    align-items: center;
                }

                #PortfolioSubHeader, #DebreTsionSubHeader, #MisplacedSubHeader, #TapInSubHeader, #UASubHeader, #SonicSubHeader, #CVSubHeader {
                    font-size: 30px;
                    color: white;
                    font-family: Inter;
                    text-align: center;
                }

                #PortfolioTextContainer, #DebreTsionTextContainer, #MisplacedTextContainer, #TapInTextContainer, #UATextContainer, #SonicTextContainer, #CVTextContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 40%;
                    margin-top: 2%;
                    margin-bottom: 2%;
                    padding-right: 15px;
                    padding-left: 10px;
                    justify-content: center;
                    align-items: center;
                    background-color: #171717;
                    overflow-y: scroll;
                }

                #PortfolioTextContainer::-webkit-scrollbar, #DebreTsionTextContainer::-webkit-scrollbar, #MisplacedTextContainer::-webkit-scrollbar, #TapInTextContainer::-webkit-scrollbar, #UATextContainer::-webkit-scrollbar, #SonicTextContainer::-webkit-scrollbar, #CVTextContainer::-webkit-scrollbar {
                    width: 5px;
                    background-color: black;
                }

                #PortfolioTextContainer::-webkit-scrollbar-thumb, #DebreTsionTextContainer::-webkit-scrollbar-thumb, #MisplacedTextContainer::-webkit-scrollbar-thumb, #TapInTextContainer::-webkit-scrollbar-thumb, #UATextContainer::-webkit-scrollbar-thumb, #SonicTextContainer::-webkit-scrollbar-thumb, #CVTextContainer::-webkit-scrollbar-thumb {
                    background-color: white;
                    border-radius: 10px;
                }

                #PortfolioParagraph, #DebreTsionParagraph, #MisplacedParagraph, #TapInParagraph, #UAParagraph, #SonicParagraph, #CVParagraph {
                    font-family: Consolas;
                    color: white;
                    text-align: left;
                }

                #PortfolioStackContainer, #DebreTsionStackContainer, #MisplacedStackContainer, #TapInStackContainer, #UAStackContainer, #SonicStackContainer, #CVStackContainer {
                    display: flex;
                    position: absolute;
                    bottom: 5%;
                    width: 100%;
                    height: 15%;
                    justify-content: center;
                    align-items: center;
                }

                #StackIcon, #StackIconTS, #StackIconJS {
                    height: 80%;
                    margin-left: 3px;
                    margin-right: 3px;
                }

                #StackIconTS, #StackIconJS { margin-left: 7px; }

                #PortfolioIconsContainer, #DebreTsionIconsContainer, #MisplacedIconsContainer, #TapInIconsContainer, #UAIconsContainer, #SonicIconsContainer, #CVIconsContainer {
                    display: flex;
                    position: relative;
                    width: 25%;
                    height: 100%;
                    flex-direction: row;
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

            `}
        </style>
        </div>
    )
}

export default Projects;