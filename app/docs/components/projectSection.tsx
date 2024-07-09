import React from "react";
import HighlightCode from "../components/highlightCode";
import { VscGithubAlt } from "react-icons/vsc";
import { CiShare1 } from "react-icons/ci";
import { Project } from "../utils/types";
import "./css/projectSection.scss";

interface ProjectSectionProps {
    project: Project;
};

const ProjectSection: React.FC<ProjectSectionProps> = ({ project }) => (
    <div id={project.divID} className="project-section">
        <div id="project-header">
            <h1>{project.header}</h1>
        </div>
        <div id="project-text-container">
            <div id="project-paragraph-container">
                <div className="project-text-header">
                    <h2>Favorite Challenge</h2>
                </div>
                <div id="project-text">
                    <p>{project.paragraph}</p>
                </div>
            </div>
            <div id="project-code-container">
                <div className="project-text-header">
                    <h2>Code</h2>
                </div>
                <div id="project-code">
                    <HighlightCode code={project.code} />
                </div>  
            </div>
        </div>  
        <div id="project-icons-container">
            <div id="project-links">
                <a href={project.github} target="_blank"><VscGithubAlt />Video Demos</a>
                <a href={project.siteURL} target="_blank"><CiShare1 />View Site</a>
            </div>                     
            <div id="project-stack">
                {project.images.map((image: string) => (
                    <img src={"/devicons/" + image} />
                ))}
            </div>
        </div>
    </div>
);

export default ProjectSection;
