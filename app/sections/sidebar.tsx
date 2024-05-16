"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import "./css/sidebar.scss";

export default function Sidebar() {

    const [showMenu, setShowMenu] = useState(false);
    const [rightAmount, setRightAmount] = useState("-100%");
    const [textIndex, setTextIndex] = useState(0);

    const texts = [
        'if (SWE || dev) {return "Click Me!"}',
        'for (docs+more) {return "Click Me!"}',
        'for (miniGames) {return "Click Me!"}',
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
        </div>
    );
};