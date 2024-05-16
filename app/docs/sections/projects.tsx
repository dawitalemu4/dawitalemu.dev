"use client";
import React, { useEffect } from "react";
import ProjectSection from "../components/projectSection";
import { ProjectsData } from "../utils/data";
import { Project } from "../utils/types";
import { HiArrowNarrowUp } from "react-icons/hi";
import "./css/projects.scss";

export default function Projects() {

    const top = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    };

    const isContainerVisible = () => {

        const container = document.getElementById("Projects");

        if (!container) return;

        const containerRect = container.getBoundingClientRect();
        const targetPosition = containerRect.top;
        const arrow = document.getElementById("UpContainer");

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
        <div id="Projects">
            <div id="UpContainer">
                <div id="Up" onClick={top}><HiArrowNarrowUp /></div>
            </div>
            <div id="ProjectsContainer">
                {ProjectsData.map((project: Project) => (
                    <ProjectSection project={project} />
                ))}
            </div>
        </div>
    );
};
