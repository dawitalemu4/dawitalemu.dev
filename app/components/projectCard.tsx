import React from "react";
import Link from "next/link";
import { VscGithubAlt } from "react-icons/vsc";
import { CiShare1 } from "react-icons/ci";
import { IoIosPaper } from "react-icons/io";
import { Project } from "../utils/types";
import "./css/projectCard.scss";

interface ProjectCardProps {
    data: Project;
    setGif: (image: string) => void;
    toggleModal: () => void;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ data, setGif, toggleModal }) => (
    <div id="project-card">
        <div id="project-image">
            <img src={"/gifs/" + data.image} onClick={() => { setGif(`${data.image}`); toggleModal(); }} />
        </div>
        <div id="project-text-container">
            <div id="project-header">
                <h3>{data.header}</h3>
            </div>
            <div id="project-paragraph">
                <p>{data.paragraph}</p>
            </div> 
            <div id="project-stack">
                {data.icons.map((icon: string) => (
                    <img src={"/devicons/" + icon} />
                ))}
            </div>
        </div>
        <div id="project-links">
            <a href={data.github} target="_blank"><VscGithubAlt />GitHub</a>
            <a href={data.siteURL} target="_blank"><CiShare1 />View Site</a>
            <Link href={`/docs/#${data.element_id}`}> <IoIosPaper />Docs</Link>
        </div>
    </div>
);

export default ProjectCard;
