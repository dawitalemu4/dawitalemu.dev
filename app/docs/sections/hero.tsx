"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { HeroData } from "../utils/data";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineArrowSmLeft, HiArrowNarrowDown} from "react-icons/hi";

export default function Hero() {

    const scrollToElement = (elementId: string) => {

        const element = document.getElementById(elementId);

        if (element) {

            const elementRect = element.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const offset = (viewportHeight - elementRect.height) * 0.50;
            const targetPosition = elementRect.top - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        };
    };

    const isContainerVisible = () => {

        const container = document.getElementById("Hero");

        if (!container) return;

        const containerRect = container.getBoundingClientRect();
        const targetPosition = containerRect.bottom;
        const arrow = document.getElementById("BackContainer");

        if (!arrow) { return };

        if (targetPosition > 0) {
            arrow.style.display = "flex";
        } else {
            arrow.style.display = "none";
        };
    };
    
    const bottom = () => {

        const element = document.getElementById("MiniGames");

        if (!element) return;

        window.scrollTo({
            top: element.getBoundingClientRect().top,
            behavior: "smooth"
        });
    };

    useEffect(() => {

        window.addEventListener("scroll", isContainerVisible);

        return () => {
            window.removeEventListener("scroll", isContainerVisible);
        };

    }, []);

    return (
        <div id="Hero">
            <div id="BackContainer">
                <Link id="Back" href="/"><HiOutlineArrowSmLeft /></Link>
            </div>
            <div id="HeroContainer">
                <div id="HeroHeaderContainer">
                    <h1 id="HeroHeader">Docs</h1>
                    <p id="HeroSubHeader">Mini-games at the bottom</p>
                    <div id="Bottom" onClick={bottom}><HiArrowNarrowDown /></div>
                </div>
                <div id="HeroListContainer">
                    <div id="HeroList">
                        {HeroData.map((item: any) => (
                            <div id="HeroListItemContainer" key={item.id}>
                                <div id="HeroListItem" onClick={() => scrollToElement(`${item.element_id}`)}>{item.title} <IoIosArrowDown /></div>
                            </div>
                        ))}
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
                    margin-top: -5%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    user-select: none;
                }

                #HeroHeader {
                    font-size: 150px;
                    margin-bottom: 10px;
                }

                #HeroSubHeader {
                    text-align: center;
                    font-family: InterMedium;
                    margin-bottom: 80px;
                }

                #Bottom {
                    display: flex;
                    position: absolute;
                    top: 80%;
                    width: 100%;
                    justify-content: center;
                    align-items: center;
                    font-size: 50px;
                    cursor: pointer;
                }

                #Bottom:hover { opacity: 0.5; }

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

                #HeroListItemContainer {
                    display: flex;
                    position: relative;
                    width: 75%;
                    height: 13%;
                    justify-content: center;
                    align-items: center;
                    border-bottom: 3px solid #ccc;
                }

                #HeroListItemContainer:last-child { border-bottom: none; }

                #HeroListItem {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 10px;
                    font-size: 25px;
                    font-family: InterMedium;
                    cursor: pointer;
                    user-select: none;
                }

                #HeroListItem:hover {
                    opacity: 0.8;
                }

                @media (max-width: 1000px) {

                    #Hero { height: 110vh; }

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

                    #Bottom { top: 90%; }

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
    );
};
