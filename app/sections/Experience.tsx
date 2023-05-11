"use client";
import React from "react";
import ExperienceText from "../rcomponents/experienceText";
import Luffy from "../rcomponents/luffy";

const Experience: React.FC = () => {
  return (
    <div id="Experience" className="flex relative">
      <ExperienceText />
      <Luffy />
      <style>
        {`
            #Experience {
                height: 160vh;
            }
            @media (max-width: 1370px) {
                #Experience {
                        height: 180vh;
                    }
                    @media (max-width: 900px) {
                        #Experience {
                                height: 130vh;
                            }
                            
            @media (max-height: 650px) {
                #Experience {
                    height: 180vh;
                }
            }
            `}
      </style>
    </div>
  );
};

export default Experience;
