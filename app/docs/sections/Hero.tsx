"use client"
import React from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineArrowSmLeft } from "react-icons/hi";

const Hero: React.FC = () => {

    function Portfolio() {
        const Portfolio = document.getElementById("Portfolio")
        if (Portfolio) Portfolio.scrollIntoView({behavior: "smooth"})
    }

    function DebreTsion() { 
        const DebreTsion = document.getElementById("DebreTsion")
        if (DebreTsion) DebreTsion.scrollIntoView({behavior: "smooth"})
    }

    function Misplaced() {
        const Misplaced = document.getElementById("Misplaced")
        if (Misplaced) Misplaced.scrollIntoView({behavior: "smooth"})
    }

    function TapIn() {
        const TapIn = document.getElementById("TapIn")
        if (TapIn) TapIn.scrollIntoView({behavior: "smooth"})
    }

    function UA() {
        const UA = document.getElementById("UA")
        if (UA) UA.scrollIntoView({behavior: "smooth"})
    }

    function Sonic() {
        const Sonic = document.getElementById("Sonic")
        if (Sonic) Sonic.scrollIntoView({behavior: "smooth"})
    }

    function CreatorVerse() {
        const CreatorVerse = document.getElementById("CreatorVerse")
        if (CreatorVerse) CreatorVerse.scrollIntoView({behavior: "smooth"})
    }


    return (
        <div id="Hero">
            <div id="BackContainer">
                    <Link id="Back" href='/'><HiOutlineArrowSmLeft /></Link>
            </div>
            <div id="HeroContainer">    
                <div id="HeroHeaderContainer">
                    <p id="HeroHeader">Docs</p>
                    <p id="HeroSubHeader">Documentation for all of my works <br/> (In Progress)</p>
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

                        #BackContainer { top: 25px; left: 10px; }

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