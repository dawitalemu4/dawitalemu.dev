import React from "react";
import Link from "next/link";
import { VscGithubAlt } from "react-icons/vsc";
import { CiShare1 } from "react-icons/ci";
import { IoIosPaper } from "react-icons/io";
import { Project } from "../utils/types";

interface ProjectCardProps {
    data: Project;
    setGif: (image: string) => void;
    toggleModal: () => void;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ data, setGif, toggleModal }) => (
    <div id={`Project${data.id}`} key={data.id}>
        <div id="ProjectLeftContainer">
            <div id="ProjectImageContainer">
                <img id="ProjectImage" src={"/gifs/" + data.image} onClick={() => { setGif(`${data.image}`); toggleModal(); }} />
            </div>
        </div>
        <div id="ProjectRightContainer">
            <div id="ProjectParagraphContainer">

                <div id="ProjectHeaderContainer">
                    <p id="ProjectHeader">{data.header}</p>
                </div>

                <div id="ProjectTextContainer">
                    <p id="ProjectParagraph">{data.paragraph}</p>
                </div> 

                <div id="ProjectStackContainer">
                    {data.images.map((image: any) => (
                        <div id="StackIconContainer" key={image.id}>
                            <img id={image[0]} src={"/devicons/" + image[1]} />
                        </div>
                    ))}
                </div>

            </div>
            <div id="ProjectIconsContainer">
                <div id="GithubIconContainer">
                    <Link id="GithubLink" href={data.github} target="_blank"><VscGithubAlt id="GithubIcon" />Video Demos</Link>
                </div>
                <div id="RedirectIconContainer">
                    <Link id="RedirectLink" href={data.siteURL} target="_blank"><CiShare1 id="RedirectIcon" />View Site</Link>
                </div>
                <div id="DocsIconContainer">
                    <Link id="DocsLink" href={`/docs/#${data.element_id}`}> <IoIosPaper id="DocsIcon" />Docs</Link>
                </div>
            </div>
        </div>
    </div>
);

export default ProjectCard;
