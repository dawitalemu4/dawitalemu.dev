"use client";
import React, { useState, useEffect } from "react";
import { Link } from "next-view-transitions";
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
        'for (miniGames) {return "Click Me!"}'
    ];

    const toggleMenu = () => {

        setShowMenu(!showMenu);

        if (showMenu && window.innerWidth > 600) {
            setRightAmount("-380px");
        } else if (showMenu && window.innerWidth < 600) {
            setRightAmount("-100%");
        };
    };

    const handleMenuClick = (sectionId: string) => {

        const section = document.getElementById(`${sectionId}`);

        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" }); 
            toggleMenu();
        };
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
        <>
            <div id="sidebar-open">
                <FaBars onClick={toggleMenu} />
            </div>
            <div id="sidebar" style={{ right: showMenu ? "0" : `${rightAmount}` }}>
                <IoIosClose id="sidebar-close" onClick={toggleMenu} />
                <ul>
                    <li onClick={() => handleMenuClick("hero")}>Home</li>
                    <li onClick={() => handleMenuClick("experience")}>Experience</li>
                    <li onClick={() => handleMenuClick("projects")}>Projects</li>
                    <li onClick={() => handleMenuClick("contact")}>Contact</li>
                </ul>
                <Link id="sidebar-docs" href="/docs" scroll={false}>{texts[textIndex]}</Link>
            </div>
        </>
    );
};