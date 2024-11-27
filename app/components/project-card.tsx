import React, { RefObject, useRef } from "react";
import { Link } from "next-view-transitions";
import { VscGithubAlt } from "react-icons/vsc";
import { CiShare1 } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { Project } from "../../types/home";
import "./css/project-card.scss";

interface ProjectCardProps {
    project: Project;
    projectSelected: (projectID: string, url: string) => void;
    videoDemoRef: RefObject<HTMLVideoElement>;
    position?: Object;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, projectSelected, videoDemoRef, position }) => {

    const thumbnailRef = useRef<HTMLImageElement>(null);

    const thumbnailClicked = () => {

        projectSelected(project.element_id + "-thumbnail", String(project.video));

        if (thumbnailRef.current) {
            thumbnailRef.current.style.viewTransitionName = "video-demo";
        };

        document.startViewTransition(() => {
            if (thumbnailRef.current && videoDemoRef.current) {
                thumbnailRef.current.style.viewTransitionName = "";
                videoDemoRef.current.style.viewTransitionName = "video-demo";
            }; 
        });
    };

    return (
        <div id={project.element_id} className="project-card" style={position}>
            {project.thumbnail && (
                <div id="project-image">
                    <img
                        id={project.element_id + "-thumbnail"}
                        src={"/thumbnails/" + project.thumbnail}
                        alt="Project Thumbnail"
                        onClick={thumbnailClicked}
                        ref={thumbnailRef}
                    />
                    <div onClick={thumbnailClicked}><FaPlay /></div>
                </div>
            )}
            <div id="project-text-container" style={ project.thumbnail ? undefined : { marginLeft: "10%" }}>
                <div id="project-header">
                    <h3>{project.header}</h3>
                </div>
                <div id="project-paragraph">
                    <p>{project.paragraph}</p>
                    <span>{project.footnote}</span>
                </div> 
                <div id="project-stack">
                    {project.icons.map((icon: string, index: number) => (
                        <img key={index} src={"/devicons/" + icon} alt="Dev Icon" />
                    ))}
                </div>
            </div>
            <div id="project-links">
                {project.github && <a href={project.github} target="_blank"><VscGithubAlt />GitHub</a>}
                {project.siteURL && <a href={project.siteURL} target="_blank"><CiShare1 />View Site</a>}
                <Link href={`/docs/#${project.element_id}`}><IoIosPaper />Docs</Link>
            </div>
        </div>
    );
};

export default ProjectCard;
