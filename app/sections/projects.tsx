"use client";
import React, { useState, useEffect, useRef } from "react";
import ProjectCard from "../components/projectCard";
import { ProjectsData } from "../utils/data";
import { Project } from "../utils/types";
import "./css/projects.scss";

export default function Projects() {

    const [projectScrollHeight, setProjectScrollHeight] = useState("0%");
    const [effectToggle, setEffectToggle] = useState(true);
    const [effectText, setEffectText] = useState("On");
    const [showModal, setshowModal] = useState(false);
    const [gif, setGif] = useState("");
    const projectsContainerRef = useRef<HTMLDivElement>(null);

    const toggleModal = () => {
        setshowModal(!showModal);
    };

    const toggleEffect = () => {

        setEffectToggle(!effectToggle);

        if (effectToggle === false) {
            setEffectText("On");
        } else {
            setEffectText("Off");
        };
    };

    const handleProjectScroll = () => {

        const projectsContainer = projectsContainerRef.current;
        if (!projectsContainer) return;

        const containerHeight = projectsContainer.clientHeight;
        const containerTop = projectsContainer.getBoundingClientRect().top;
        const scrollPosition = Math.max(0, window.scrollY - containerTop - window.innerHeight * 1.9);

        const isContainerVisible = containerTop + containerHeight >= 0 && containerTop <= window.innerHeight;

        if (!isContainerVisible) {
            setProjectScrollHeight("0%");
        } else {
            const maxScroll = containerHeight * (window.innerWidth > 900 ? 2.25 : 2.5);
            const projectScrollPercentage = Math.min((scrollPosition / maxScroll) * 100, 100);
            setProjectScrollHeight(`${projectScrollPercentage}%`);
        };
    };

    useEffect(() => {

        window.addEventListener("scroll", handleProjectScroll);

        return () => {
            window.removeEventListener("scroll", handleProjectScroll);
        };

    }, []);

    return (
        <div id="projects" ref={projectsContainerRef}>
            <div id="projects-container">
                <div id="projects-header">
                    <h1>Projects</h1>
                    <p onClick={toggleEffect}>Scroll Effect: {effectText}</p>
                </div>
                <div id="projects-list">
                    {ProjectsData.map((data: Project) => (
                        <ProjectCard data={data} setGif={(image: string) => setGif(image)} toggleModal={toggleModal} />
                    ))}
                </div>
            </div>
            <div id="docs-link">
                <p>
                    And More... Browse My <a id="MoreGitHub" href="https://github.com/dawitalemu4" target="_blank">GitHub</a> or 
                    Visit the <a href="/docs">Docs Page for Devs</a>!
                </p>
            </div>
            <div id="demo-modal" style={{ display: showModal ? "flex" : "none" }} onClick={toggleModal}>
                <img src={"/gifs/" + gif} />
            </div>
            <style>
                {`
                    .project-card:nth-child(1) {
                        left: ${effectToggle ? "65%" : "0"};
                        transform: ${effectToggle ? `translateX(calc(-2.4 * ${projectScrollHeight}))` : "none"};
                    }
                    
                    .project-card:nth-child(2) {
                        right: ${effectToggle ? "60%" : "0"};
                        transform: ${effectToggle ? `translateX(calc(1.65 * ${projectScrollHeight}))` : "none"};
                    }

                    .project-card:nth-child(3) {
                        left: ${effectToggle ? "65%" : "0"};
                        transform: ${effectToggle ? `translateX(calc(-1.425 * ${projectScrollHeight}))` : "none"};
                    }

                    .project-card:nth-child(4) {
                        right: ${effectToggle ? "70%" : "0"};
                        transform: ${effectToggle ? `translateX(calc(1.275 * ${projectScrollHeight}))` : "none"};
                    }

                    .project-card:nth-child(5) {
                        left: ${effectToggle ? "75%" : "0"};
                        transform: ${effectToggle ? `translateX(calc(-1.175 * ${projectScrollHeight}))` : "none"};
                    }
                    
                    .project-card:nth-child(6) {
                        right: ${effectToggle ? "80%" : "0"};
                        transform: ${effectToggle ? `translateX(calc(1.075 * ${projectScrollHeight}))` : "none"};
                    }

                    .project-card:nth-child(7) {
                        left: ${effectToggle ? "85%" : "0"};
                        transform: ${effectToggle ? `translateX(calc(-1.025 * ${projectScrollHeight}))` : "none"};
                    }

                    .project-card:nth-child(8) {
                        right: ${effectToggle ? "90%" : "0"};
                        transform: ${effectToggle ? `translateX(calc(1 * ${projectScrollHeight}))` : "none"};
                    }

                    @media (max-width: 900px) {

                        .project-card:nth-child(1) {
                            left: ${effectToggle ? "70%" : "0"};
                            transform: ${effectToggle ? `translateX(calc(-2.05 * ${projectScrollHeight}))` : "none"};
                        }
                        
                        .project-card:nth-child(2) {
                            right: ${effectToggle ? "65%" : "0"};
                            transform: ${effectToggle ? `translateX(calc(1.5 * ${projectScrollHeight}))` : "none"};
                        }

                        .project-card:nth-child(3) {
                            left: ${effectToggle ? "70%" : "0"};
                            transform: ${effectToggle ? `translateX(calc(-1.35 * ${projectScrollHeight}))` : "none"};
                        }

                        .project-card:nth-child(4) {
                            right: ${effectToggle ? "75%" : "0"};
                            transform: ${effectToggle ? `translateX(calc(1.25 * ${projectScrollHeight}))` : "none"};
                        }

                        .project-card:nth-child(5) {
                            left: ${effectToggle ? "80%" : "0"};
                            transform: ${effectToggle ? `translateX(calc(-1.175 * ${projectScrollHeight}))` : "none"};
                        }
                        
                        .project-card:nth-child(6) {
                            right: ${effectToggle ? "85%" : "0"};
                            transform: ${effectToggle ? `translateX(calc(1.1 * ${projectScrollHeight}))` : "none"};
                        }

                        .project-card:nth-child(7) {
                            left: ${effectToggle ? "90%" : "0"};
                            transform: ${effectToggle ? `translateX(calc(-1.05 * ${projectScrollHeight}))` : "none"};
                        }

                        .project-card:nth-child(8) {
                            right: ${effectToggle ? "95%" : "0"};
                            transform: ${effectToggle ? `translateX(calc(1.025 * ${projectScrollHeight}))` : "none"};
                        }
                    }
                `}
            </style>
        </div>
    );
};