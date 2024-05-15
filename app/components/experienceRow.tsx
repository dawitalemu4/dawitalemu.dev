import React from "react";
import { IconRow } from "../utils/types";

interface ExperienceRowProps {
    row: IconRow;
};

const ExperienceRow: React.FC<ExperienceRowProps> = ({ row }) => (
    <div id="SkillRow" key={row.id}>
        <div id="SkillRowHeaderContainer">
            <p id="SkillHeader">{row.header}</p>
        </div>
        <div id="SkillRowContainer">
            {row.images.map((image: string[], index: number) => (
                <div id="SkillRowItem" key={index}>
                    <img id="ItemLogo" src={"/devicons/" + image[0]} />
                    {image[1]}
                </div>
            ))}
        </div>
    </div>
);

export default ExperienceRow;
