"use client";
import React, { useState, useEffect, useRef } from "react";

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
        <style>
            {`

                #PacmanContainer {
                    display: flex;
                    position: absolute;
                    top: 5%;
                    left: 10%;
                    width: 80%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                #Arcade {
                    display: flex;
                    position: relative;
                    width: 100%;
                    z-index: 1;
                }

                #Scene {
                    position: absolute;
                    left: 24.9%;
                    top: 31.5%;
                    width: 42%;
                    height: 42%;
                    border: 50px solid black;
                    z-index: 2;
                }

                #DotsContainer {
                    display: flex;
                    position: absolute;
                    top: 35%;
                    width: 50%;
                    height: 50%;
                    align-items: center;
                    justify-content: center;
                    z-index: 3;
                }

                #Dots {
                    position: absolute;
                    top: 0;
                    width: 7%;
                    z-index: 3;
                }

                @media (max-width: 900px) {

                    #PacmanContainer {
                        width: 100%;
                        left: 0;
                    }

                    #DotsContainer {
                        top: 31.5%;
                        width: 50%;
                        height: 54.3%;
                    }

                    #Scene {
                        border: 0px;
                    }

                    #Dots{
                        bottom: 37%;
                    }   
                }

                @media (min-width: 1650px) {

                    #DotsContainer {
                        top: 34%;
                    }
                }
            `}
        </style>
        </div>
    );
};