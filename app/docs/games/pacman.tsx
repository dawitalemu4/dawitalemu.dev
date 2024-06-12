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
        <div id="pacman-container">   
            <img id="arcade" src="/docs/pacman/arcade.webp" />
            <img id="scene" src="/docs/pacman/pacmanScene.webp" />
            <div id="dots-container" ref={dotsContainerRef}>
                <img src={"/docs/pacman/" + images[imageIndex]} ref={dotsRef} />
            </div>
        </div>
    );
};