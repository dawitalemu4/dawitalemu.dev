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
    const positionPercentage = 5;

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
            const maxScroll = containerHeight * 2.25;
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
                    <div id="line1"></div>
                    <div id="line2"></div>
                    {ProjectsData.map((data: Project, index: number) => {

                        const sensitivityMultiplier = ProjectsData.length - index;

                        return (
                            <ProjectCard
                                data={data}
                                setGif={(image: string) => setGif(image)}
                                toggleModal={toggleModal}
                                position={ effectToggle ? ( index % 2 === 0 ? {
                                    right: `calc(${sensitivityMultiplier} * ${positionPercentage}%)`,
                                    transform: `translateX(calc(0.${sensitivityMultiplier} * ${projectScrollHeight}))`
                                } : {
                                    left: `calc(${sensitivityMultiplier} * ${positionPercentage}%)`,
                                    transform: `translateX(calc(-0.${sensitivityMultiplier} * ${projectScrollHeight}))`
                                }) : (undefined)}
                            />
                        )
                    })}
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
        </div>
    );
};