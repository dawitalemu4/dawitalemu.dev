"use client"
import React from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineArrowSmLeft } from "react-icons/hi";

const Hero: React.FC = () => {

    function scrollToElement(elementId: string) {
        const element = document.getElementById(elementId);
        if (element) {
            const elementRect = element.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const offset = (viewportHeight - elementRect.height) * 0.50;
            const targetPosition = elementRect.top - offset;
    
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth",
            });
        }
    }
    
    function Portfolio() {
        scrollToElement("Portfolio");
    }
    
    function DebreTsion() {
        scrollToElement("DebreTsion");
    }
    
    function Misplaced() {
        scrollToElement("Misplaced");
    }
    
    function TapIn() {
        scrollToElement("TapIn");
    }
    
    function UA() {
        scrollToElement("UA");
    }
    
    function Sonic() {
        scrollToElement("Sonic");
    }
    
    function CreatorVerse() {
        scrollToElement("CreatorVerse");
    }
    

    
    return (
        <div id="Hero">
            <div id="BackContainer">
                <Link id="Back" href='/'><HiOutlineArrowSmLeft /></Link>
            </div>
            <div id="HeroContainer">    
                <div id="HeroHeaderContainer">
                    <p id="HeroHeader">Docs</p>
                    <p id="HeroSubHeader">Documentation for all of my works</p>
                </div>
                <div id="HeroListContainer">
                    <div id="HeroList">
                        
                        <div id="HeroListItemContainer">
                            <div id="HeroListItem" onClick={Portfolio}>Portfolio <IoIosArrowDown /></div>
                        </div>

                        <div id="HeroListItemContainer">
                            <div id="HeroListItem" onClick={DebreTsion}>Debre Tsion Church <IoIosArrowDown /></div>
                        </div>
                        
                        <div id="HeroListItemContainer">
                            <div id="HeroListItem" onClick={Misplaced}>Misplaced <IoIosArrowDown /></div>
                        </div>
                        
                        <div id="HeroListItemContainer">
                            <div id="HeroListItem" onClick={TapIn}>Let's Tap In <IoIosArrowDown /></div>
                        </div>
                        
                        <div id="HeroListItemContainer">
                            <div id="HeroListItem" onClick={UA}>Urban Alliance <IoIosArrowDown /></div>
                        </div>
                        
                        <div id="HeroListItemContainer">
                            <div id="HeroListItem" onClick={Sonic}>2D Sonic Platformer <IoIosArrowDown /></div>
                        </div>

                        <div id="HeroListItemContainerBottom">
                            <div id="HeroListItem" onClick={CreatorVerse}>CreatorVerse <IoIosArrowDown /></div>
                        </div>

                    </div>
                </div>
            <style>
                {`
                    #Hero {
                        display: flex;
                        position: relative;
                        width: 99.7vw;
                        height: 100vh;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        color: white;
                        z-index: 1;
                    }

                    @keyframes fadeIn {
                        0% { opacity: 0; }
                        100% { opacity: 1; }
                    }

                    #HeroContainer {
                        display: flex;
                        position: relative;
                        width: 90%;
                        height: 100%;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                        animation: fadeIn 2s ease-in-out;
                    }

                    #BackContainer {
                        display: flex;
                        position: fixed;
                        top: 20px;
                        left: 20px;
                        width: 50px;
                        height: 50px;
                        justify-content: center;
                        align-items: center;
                        z-index: 2;
                    }

                    #Back { font-size: 50px; }

                    #Back:hover { opacity: 0.5;}

                    #HeroHeaderContainer {
                        display: flex;
                        position: relative;
                        width: 40%;
                        height: 100%;
                        padding-left: 5%;
                        flex-direction: column;
                        justify-content: center;
                    }

                    #HeroHeader {
                        font-size: 150px;
                        font-family: InterBold;
                        text-align: left;
                    }

                    #HeroSubHeader {
                        padding-left: 8px;
                        font-family: InterMedium;
                    }

                    #HeroListContainer {
                        display: flex;
                        position: relative;
                        width: 60%;
                        height: 100%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: flex-end;
                    }

                    #HeroList {
                        display: flex;
                        position: relative;
                        width: 90%;
                        height: 90%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }

                    #HeroListItemContainer, #HeroListItemContainerBottom {
                        display: flex;
                        position: relative;
                        width: 75%;
                        height: 13%;
                        justify-content: center;
                        align-items: center;
                        border-bottom: 3px solid #ccc;
                    }

                    #HeroListItemContainerBottom { border-bottom: none; }

                    #HeroListItem {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        gap: 10px;
                        font-size: 25px;
                        font-family: InterMedium;
                        cursor: pointer;
                    }

                    #HeroListItem:hover {
                        opacity: 0.8;
                    }

                    @media (max-width: 1000px) {

                        #HeroContainer { flex-direction: column; }

                        #BackContainer { top: 25px; left: 20px; }

                        #HeroHeaderContainer { 
                            width: 100%; 
                            height: 40%; 
                            padding-top: 5%;
                            padding-left: 0;
                            align-items: center;
                        }

                        #HeroHeader { font-size: 100px; }

                        #HeroSubHeader { padding-left: 0; }

                        #HeroListContainer { 
                            width: 100%; 
                            height: 60%; 
                            align-items: center; 
                            z-index: 3;
                            background-color: black;
                        }

                        #HeroList, #HeroListItemContainer, #HeroListItemContainerBottom { width: 95%; }
                    
                    }

                `}
            </style>
            </div>
        </div>
    )
}

export default Hero;