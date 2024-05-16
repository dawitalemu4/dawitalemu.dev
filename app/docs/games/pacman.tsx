"use client";
import React, { useState, useEffect, useRef } from "react";
import "./css/pacman.scss";

export default function PacMan() {
    
    const [imageIndex, setImageIndex] = useState(0);
    const dotsRef = useRef<HTMLImageElement>(null);
    const dotsContainerRef = useRef<HTMLDivElement>(null);

    const images = [
        "1.webp",
        "2.webp",
        "3.webp",
        "4.webp",
        "5.webp",
        "6.webp",
        "7.webp",
        "8.webp",
        "9.webp",
        "10.webp",
        "11.webp",
        "12.webp",
        "13.webp",
        "14.webp",
        "15.webp",
        "final.webp"
    ];

    useEffect(() => {

        const changeImage = (imageIndex: number) => {

            setImageIndex(imageIndex);

            if (dotsRef.current) {
                dotsRef.current.src = "/docs/pacman/" + images[imageIndex];
            };
        };

        const handleScroll = () => {

            const dotsContainer = dotsContainerRef.current;
            if (!dotsContainer) return;

            const containerTop = dotsContainer.getBoundingClientRect().top;
            const containerBottom = dotsContainer.getBoundingClientRect().bottom;
            const viewportHeight = window.innerHeight;

            if (containerTop <= viewportHeight && containerBottom >= 0) {

                const scrollPercentage = (viewportHeight - containerTop) / (viewportHeight + containerBottom);
                const newImageIndex = Math.floor(scrollPercentage * images.length);

                if (newImageIndex !== imageIndex) {
                    changeImage(newImageIndex);
                };
            };
        };

        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("scroll", handleScroll);
        };

    }, [dotsRef, dotsContainerRef]);

    return (
        <div id="PacmanContainer">   
            <img id="Arcade" src="/docs/pacman/arcade.webp" />
            <img id="Scene" src="/docs/pacman/pacmanScene.webp" />
            <div id="DotsContainer" ref={dotsContainerRef}>
                <img id="Dots" src={"/docs/pacman/" + images[imageIndex]} ref={dotsRef} />
            </div>
        </div>
    );
};