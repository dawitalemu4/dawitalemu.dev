"use client";
import React, { useState, useEffect, useRef } from "react";
import "./css/about.scss";

export default function About() {

    const [aboutScrollHeight, setAboutScrollHeight] = useState("0%");
    const aboutContainerRef = useRef<HTMLDivElement>(null);

    const handleAboutScroll = () => {

        const aboutContainer = aboutContainerRef.current;
        if (!aboutContainer) return;

        const containerHeight = aboutContainer.clientHeight;
        const containerTop = aboutContainer.getBoundingClientRect().top;
        const scrollPosition = Math.max(0, window.scrollY - containerTop - window.innerHeight * 1.9);

        const isContainerVisible = containerTop + containerHeight >= 0 && containerTop <= window.innerHeight;

        if (!isContainerVisible) {
            setAboutScrollHeight("0%");
        } else {
            const maxScroll = containerHeight * 2;
            const aboutScrollPercentage = Math.min((scrollPosition / maxScroll) * 100, 100);
            setAboutScrollHeight(`${aboutScrollPercentage}%`);
        };
    };

    useEffect(() => {

        window.addEventListener("scroll", handleAboutScroll);
        
        return () => {
            window.removeEventListener("scroll", handleAboutScroll);
        };

    }, []);

    return (
        <>
            <div id="about" ref={aboutContainerRef}>
                <div id="about-container">
                    <div id="about-paragraph">
                        <p>
                            Hello! My name is Dawit Alemu and I'm currently a senior at Towson University who loves to self-teach software engineering.
                            <br/><br/>
                            I'm mainly interested in full-stack web development, but open to learning new things.
                            <br/><br/>
                            Keep scrolling!
                        </p>
                    </div>                   
                    <div id="about-image">
                        <img src="da.webp" />
                    </div>                 
                    <div id="about-title">
                        <h1>About</h1>
                    </div>
                </div>
            </div>
            <style>
                {` 
                    :root { --aboutScrollHeight: ${aboutScrollHeight}; }
                `}
            </style>
        </>
    );
};