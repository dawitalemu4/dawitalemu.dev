"use client";
import React from "react";
import PacMan from "../rcomponents/pacman";
import AboutText from "../rcomponents/aboutText";

const About: React.FC = () => {
  return (
    <div id="About" className="flex relative">
      <PacMan />
      <AboutText />
      <style>
        {`
            #About {
                height: 300vh;
            }
            @media (max-width: 1660px) {
                #About {
                    height: 290vh;
                }
                }
            @media (max-width: 1370px) {
            #About {
                height: 310vh;
            }
            }
            @media (max-width: 1150px) {
            #About {
                height: 300vh;
            }
            }
            @media (max-width: 750px) {
            #About {
                height: 280vh;
            }
            }
            @media (max-width: 560px) {
            #About {
                height: 200vh;
            }
            }
            @media (max-width: 450px) {
                #About {
                    height: 170vh;
                }
                }
            `}
      </style>
    </div>
  );
};

export default About;
