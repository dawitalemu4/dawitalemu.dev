"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";

export default function Sidebar() {

    const [showMenu, setShowMenu] = useState(false);
    const [rightAmount, setRightAmount] = useState("-100%");
    const [textIndex, setTextIndex] = useState(0);

    const texts = [
        "if (SWE || dev) {return 'Click Me!'}",
        "for (docs+more) {return 'Click Me!'}",
        "for (miniGames) {return 'Click Me!'}",
    ];

    const toggleMenu = () => {
        setShowMenu(!showMenu);
        if (showMenu && window.innerWidth > 600) {
            setRightAmount("-380px");
        } else if (showMenu && window.innerWidth < 600) {
            setRightAmount("-100%");
        };
    };

    const handleMenuClick = (item: string) => {
        const itemPosition = document.getElementById(`${item}`);
        if (!itemPosition) return;

        window.scrollTo({
            top: itemPosition.offsetTop,
            left: 0,
            behavior: "smooth"
        });

        toggleMenu();
    };

    useEffect(() => {

        const timer = setTimeout(() => {
            setTextIndex((textIndex + 1) % texts.length);
        }, 4000);

        return () => {
            clearTimeout(timer);
        };

    }, [textIndex, texts.length]);

    return (
        <div id="Sidebar">
            <FaBars id="MenuBars" onClick={toggleMenu} />
            <div id="SidebarContainer" style={{ right: showMenu ? "0px" : `${rightAmount}`, transition: "right 0.5s ease-in-out" }}>
                <div id="XContainer">
                    <IoIosClose id="X" onClick={toggleMenu} />
                </div>
                <ul id="SidebarListContainer">
                    <li onClick={() => handleMenuClick("Hero")}>Home</li>
                    <li onClick={() => handleMenuClick("Experience")}>Experience</li>
                    <li onClick={() => handleMenuClick("Projects")}>Projects</li>
                    <li onClick={() => handleMenuClick("Contact")}>Contact</li>
                </ul>
                <div id="DevButtonContainer">
                    <Link id="DevButton" href="/docs">{texts[textIndex]}</Link>
                </div>
            </div>
        <style>
            {`

                #Sidebar {
                    display: flex;
                    position: fixed;
                    top: 0;
                    right: 0;
                    width: 0;
                    height: 0;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    z-index: 11;
                    user-select: none;
                }

                #MenuBars {
                    display: flex;
                    position: fixed;
                    right: 10px;
                    top: 10px;
                    font-size: 50px;
                    padding: 10px;
                    color: white;
                    background-color: black;
                    border-radius: 10px;
                    cursor: pointer;
                    z-index: 11;
                }

                #SidebarContainer {
                    display: flex;
                    position: fixed;
                    top: 0;
                    width: 380px;
                    height: 100%;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    background-color: white;
                    font-family: Inter;
                    border-left: 1px solid black;
                    z-index: 11;
                }

                #XContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 5%;
                    justify-content: flex-end;
                    align-items: center;
                    padding-right: 20px;
                }

                #X {
                    width: 100px;
                    height: 100px;
                    cursor: pointer;
                }

                #DevButtonContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 50px;
                    align-items: center;
                    justify-content: center;
                }

                #DevButton {
                    display: flex;
                    position: relative;
                    width: 90%;
                    height: 100%;
                    align-items: center;
                    justify-content: center;
                    background-color: black;
                    border-radius: 10px;
                    text-decoration: none;
                    font-family: Consolas;
                    color: #39FF14;
                    border: 1px solid #171717;
                    transition: transform 0.5s ease-in-out;
                    animation: dropdown 0.25s ease-in-out;
                }

                #DevButton:hover { opacity: 0.8; }

                #SidebarListContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 60%;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                }

                #SidebarListContainer li {
                    display: flex;
                    position: relative;
                    width: 95%;
                    height: 80px;
                    justify-content: center;
                    align-items: center;
                    font-size: 28px;
                    font-family: InterSemi;
                    cursor: pointer;
                }

                #SidebarListContainer li:hover {
                    font-family: Consolas;
                    color: #39FF14;
                    background-color: black;
                    border-radius: 25px;
                }

                @media (max-width: 600px) {
                    #Sidebar { width: 100%; }
                    #SidebarContainer { width: 100%; }
                }
            `}
        </style>
        </div>
    );
};