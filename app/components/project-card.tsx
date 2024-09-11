import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { CiShare1 } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { Project } from "../../types/home";
import "./css/project-card.scss";

interface ProjectCardProps {
    data: Project;
    setVideo: (url: string) => void;
    toggleModal: () => void;
    position?: Object;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ data, setVideo, toggleModal, position }) => {
    return (
        <div id={data.element_id} className="project-card" style={position}>
            {data.thumbnail && (
                <div id="project-image">
                    <img src={"/thumbnails/" + data.thumbnail} onClick={() => { setVideo(String(data.video)); toggleModal(); }} />
                    <div onClick={() => { setVideo(String(data.video)); toggleModal(); }}><FaPlay /></div>
                </div>
            )}
            <div id="project-text-container" style={ data.thumbnail ? undefined : { marginLeft: "10%" }}>
                <div id="project-header">
                    <h3>{data.header}</h3>
                </div>
                <div id="project-paragraph">
                    <p>{data.paragraph}</p>
                    <span>{data.footnote}</span>
                </div> 
                <div id="project-stack">
                    {data.icons.map((icon: string, index: number) => (
                        <img key={index} src={"/devicons/" + icon} />
                    ))}
                </div>
            </div>
            <div id="project-links">
                <a href={data.github} target="_blank"><VscGithubAlt />GitHub</a>
                <a href={data.siteURL} target="_blank"><CiShare1 />View Site</a>
                <a href={`/docs/#${data.element_id}`}> <IoIosPaper />Docs</a>
            </div>
        </div>
    );
};

export default ProjectCard;
