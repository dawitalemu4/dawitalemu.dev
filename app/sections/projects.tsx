"use client";
import React, { useState, useEffect, useRef } from "react";
import ProjectCard from "../components/project-card";
import { ProjectsData } from "../data";
import { Project } from "../../types/home";
import "./css/projects.scss";
import VideoModal from "../containers/modals/video";

export default function Projects() {

    const [projectScrollHeight, setProjectScrollHeight] = useState("0%");
    const [effectToggle, setEffectToggle] = useState(true);
    const [effectText, setEffectText] = useState("On");
    const [modalView, setModalView] = useState(false);
    const [video, setVideo] = useState("");
    const projectsContainerRef = useRef<HTMLDivElement>(null);

    const toggleModal = () => {
        setModalView(!modalView);
    };

    const toggleEffect = () => {

        setEffectToggle(!effectToggle);

        if (effectToggle === false) {
            setEffectText("On");
        } else {
            setEffectText("Off");
        };
    };

    const projectSelected = (url: string) => {
        setVideo(url);
        toggleModal();
    };

    const handleProjectScroll = () => {

        const projectsContainer = projectsContainerRef.current;
        const heroContainer = document.getElementById("hero-container");
        if (!projectsContainer) return;
        if (!heroContainer) return;

        const containerHeight = projectsContainer.clientHeight;
        const containerTop = projectsContainer.getBoundingClientRect().top;
        const scrollPosition = Math.max(0, window.scrollY - containerTop - window.innerHeight * 1.9);

        const isContainerVisible = containerTop + containerHeight >= 0 && containerTop <= window.innerHeight;

        if (!isContainerVisible) {
            setProjectScrollHeight("0%");
            heroContainer.style.display = "flex";
        } else {
            const maxScroll = containerHeight * (window.innerWidth > 900 ? 2.25 : 2.5);
            const projectScrollPercentage = Math.min((scrollPosition / maxScroll) * 100, 100);
            setProjectScrollHeight(`${projectScrollPercentage}%`);
            heroContainer.style.display = "none";
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
                    {ProjectsData.map((project: Project) => (
                        <>
                            <ProjectCard
                                key={project.element_id}
                                project={project}
                                projectSelected={projectSelected}
                            />
                        </>
                    ))}
                </div>
            </div>
            <div id="docs-link">
                <p>
                    And More... Browse My <a id="MoreGitHub" href="https://github.com/dawitalemu4" target="_blank">GitHub</a> or 
                    Visit the <a href="/docs">Docs Page for Devs</a>!
                </p>
            </div>
            {video !== "" && (
                <VideoModal
                    showModal={modalView}
                    hideModal={toggleModal}
                    url={video}
                />
            )}
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