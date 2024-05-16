import React from "react";
import Link from "next/link";
import HighlightCode from "../components/highlightCode";
import { Project } from "../utils/types";
import { VscGithubAlt } from "react-icons/vsc";
import { CiShare1 } from "react-icons/ci";
import "./css/projectSection.scss";

interface ProjectSectionProps {
    project: Project;
};

const ProjectSection: React.FC<ProjectSectionProps> = ({ project }) => (
    <div id={project.divID}>
        <div id="DocsHeaderContainer">
            <p id="DocsHeader">{project.header}</p>
        </div>
        <div id="DocsTextContainer">
            <div id="DocsLeftContainer">
                <div id="DocsChallengeContainer">
                    <div id="DocsChallengeHeaderContainer">
                        <p id="DocsChallengeHeader">Favorite Challenge</p>
                    </div>
                    <div id="DocsChallengeContainer">
                        <p id="DocsChallenge">{project.paragraph}</p>
                    </div>
                </div>
            </div>
            <div id="DocsRightContainer">
                <div id="DocsCodeContainer">
                    <div id="DocsCodeHeaderContainer">
                        <p id="DocsCodeHeader">Code</p>
                    </div>
                    <div id="DocsCodeContainer">
                        <div id="DocsCode"><HighlightCode code={project.code} /></div>
                    </div>  
                </div>
            </div>
        </div>  
        <div id="BottomContainer">
            <div id="DocsIconsContainer">
                <div id="GithubIconContainer">
                    <Link id="GithubLink" href={project.github} target="_blank"> <VscGithubAlt id="GithubIcon" />Video Demos</Link>
                </div>
                <div id="RedirectIconContainer">
                    <Link id="RedirectLink" href={project.siteURL} target="_blank"> <CiShare1 id="RedirectIcon" />View Site</Link>
                </div>
            </div>                     
            <div id="DocsStackContainer">
                {project.images.map((image: any) => (
                    <div id="StackIconContainer" key={image.id}>
                        <img id={image[0]} src={"/devicons/" + image[1]} />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default ProjectSection;
