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

        const containerHeight = heroContainer.clientHeight;
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
                const leftContainer = document.getElementById("LeftContainer");
                const rightContainer = document.getElementById("RightContainer");
                if (leftContainer) leftContainer.style.display = "none";
                if (rightContainer) rightContainer.style.display = "none";
            } else {
                const leftContainer = document.getElementById("LeftContainer");
                const rightContainer = document.getElementById("RightContainer");
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
        <div id="Hero" ref={heroContainerRef}>
            <div id="HeroContainer">
                <div id="LeftContainer">
                    <div id="WhiteTriangleContainer">
                        <img id="WhiteTriangle" src="whiteTriangle.webp" />
                    </div>
                </div>
                <div id="RightContainer">
                    <div id="BlackTriangleContainer">
                        <img id="BlackTriangle" src="blackTriangle.webp" />
                    </div>
                </div>
                <div id="ArrowContainer">
                        <div id="Arrow">Scroll Down<HiArrowNarrowDown/></div>
                </div>                
                <div id="HeaderContainer">
                    <p id="HeaderText">Dawit Alemu</p>
                    <p id="HeaderSubText">Full-Stack Software Engineer</p>
                </div>
            </div>
            <style>
                {`
                    :root { --heroScrollHeight: ${heroScrollHeight}; }
                `}
            </style>
        </div>
    );
};