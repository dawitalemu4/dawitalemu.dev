"use client";
import React, { useState, useEffect, useRef } from "react";
import { HiArrowNarrowDown } from "react-icons/hi";
import "./css/hero.scss";

export default function Hero() {

    const [heroScrollHeight, setHeroScrollHeight] = useState("0%");
    const heroContainerRef = useRef<HTMLDivElement>(null);

    const handleHeroScroll = () => {

        const heroContainer = heroContainerRef.current;
        if (!heroContainer) return;

        const containerHeight = heroContainer.clientHeight + 300;
        const containerTop = heroContainer.getBoundingClientRect().top;
        const scrollPosition = window.scrollY;

        const offset = containerHeight * 0.2;
        const isContainerVisible = containerTop + containerHeight >= offset && containerTop <= window.innerHeight;

        if (!isContainerVisible) {
            setHeroScrollHeight("0%");
        } else {
            const maxScroll = containerHeight * 0.20; 
            const heroScrollPercentage = Math.min((scrollPosition / maxScroll) * 50, 100);
            setHeroScrollHeight(`${heroScrollPercentage}%`);

            if (heroScrollPercentage === 100) {
                const leftContainer = document.getElementById("left-container");
                const rightContainer = document.getElementById("right-container");
                if (leftContainer) leftContainer.style.display = "none";
                if (rightContainer) rightContainer.style.display = "none";
            } else {
                const leftContainer = document.getElementById("left-container");
                const rightContainer = document.getElementById("right-container");
                if (leftContainer) leftContainer.style.display = "flex";
                if (rightContainer) rightContainer.style.display = "flex";
            };
        };
    };

    useEffect(() => {

        window.addEventListener("scroll", handleHeroScroll);

        return () => {
            window.removeEventListener("scroll", handleHeroScroll);
        };

    }, []);

    return (
        <>
            <div id="hero" ref={heroContainerRef}>
                <div id="hero-container">
                    <div id="left-container">
                        <div id="white-triangle">
                            <img src="whiteTriangle.webp" />
                        </div>
                    </div>
                    <div id="right-container">
                        <div id="black-triangle">
                            <img src="blackTriangle.webp" />
                        </div>
                    </div>
                    <div id="arrow-container">
                        <div id="arrow">Scroll Down<HiArrowNarrowDown/></div>
                    </div>                
                    <div id="header-container">
                        <p>Dawit Alemu</p>
                        <p>Full-Stack Software Engineer</p>
                    </div>
                </div>
            </div>
            <style>
                {`
                    :root { --heroScrollHeight: ${heroScrollHeight}; }
                `}
            </style>
        </>
    );
};