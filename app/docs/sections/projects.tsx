"use client";
import React, { useEffect } from "react";
import ProjectSection from "../components/project-section";
import { HiArrowNarrowUp } from "react-icons/hi";
import { ProjectsData } from "../data";
import { Project } from "../../../types/docs";
import "./css/projects.scss";

export default function Projects() {

    const top = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    };

    const isContainerVisible = () => {

        const container = document.getElementById("projects");

        if (!container) return;

        const containerRect = container.getBoundingClientRect();
        const targetPosition = containerRect.top;
        const arrow = document.getElementById("up-arrow");

        if (!arrow) return;

        if (targetPosition < 0) {
            arrow.style.display = "flex";
        } else {
            arrow.style.display = "none";
        };
    };

    useEffect(() => {

        window.addEventListener("scroll", isContainerVisible);

        return () => {
            window.removeEventListener("scroll", isContainerVisible);
        };

    }, []);

    return (
        <>
            <div id="projects">
                <div id="up-arrow" onClick={top}><HiArrowNarrowUp /></div>
                <div id="projects-list">
                    {ProjectsData.map((project: Project) => (
                        <ProjectSection key={project.divID} project={project} />
                    ))}
                </div>
            </div>
            <style>
                {`
                    :root { --projects-height: calc(${ProjectsData.length} * 100vh) }
                `}
            </style>
        </>
    );
};
