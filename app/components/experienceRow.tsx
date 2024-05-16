import React from "react";
import { IconRow } from "../utils/types";
import "./css/experienceRow.scss";

interface ExperienceRowProps {
    row: IconRow;
};

const ExperienceRow: React.FC<ExperienceRowProps> = ({ row }) => (
    <div id="skill-row">
        <div id="skill-row-header">
            <h3>{row.header}</h3>
        </div>
        <div id="skill-row-container">
            {row.images.map((image: string[]) => (
                <div id="skill-row-item">
                    <img src={"/devicons/" + image[0]} />
                    {image[1]}
                </div>
            ))}
        </div>
    </div>
);

export default ExperienceRow;
