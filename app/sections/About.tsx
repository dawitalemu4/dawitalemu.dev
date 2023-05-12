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
            @media (max-width: 1800px) and (min-height: 900px) {
                #About {
                    height: 270vh;
                }
                }
            @media (max-width: 1700px) and (min-height: 900px) {
                #About {
                    height: 200vh;
                }
                }
                @media (max-width: 1500px) and (min-height: 900px) {
                    #About {
                        height: 220vh;
                    }
                    }
            @media (max-width: 1370px) {
            #About {
                height: 350vh;
            }
            }
            @media (max-width: 1150px) {
            #About {
                height: 300vh;
            }
            }
            @media (max-width: 900px) {
                #About {
                    height: 310vh;
                }
                }
            @media (max-width: 750px) {
            #About {
                height: 280vh;
            }
            }
            @media (max-width: 670px) {
                #About {
                    height: 260vh;
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
                @media (max-width: 400px) {
                    #About {
                        height: 160vh;
                    }
                    }
            @media (max-height: 660px) {
                #About {
                    height: 360vh;
            }
        }
            `}
      </style>
    </div>
  );
};

export default About;
