import React from "react";
import { IconRow } from "../../types/home";
import "./css/experience-row.scss";

interface ExperienceRowProps {
    row: IconRow;
};

const ExperienceRow: React.FC<ExperienceRowProps> = ({ row }) => {
    return (
        <div id="skill-row">
            <div id="skill-row-header">
                <h3>{row.header}</h3>
            </div>
            <div id="skill-row-container">
                {row.images.map((image: string[], index: number) => (
                    <div id="skill-row-item" key={index}>
                        <img src={"/devicons/" + image[0]} />
                        {image[1]}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceRow;
