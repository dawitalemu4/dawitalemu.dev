"use client";
import React from "react";
import PacMan from "../components/pacman";

const PacManSection: React.FC = () => {
  return (
    <div id="PacMan" className="flex relative">
      <PacMan />
      <style>
        {`
            #PacMan {
                margin-top: 10vh;
                height: 150vh;
            }
            @media (max-width: 1800px) and (min-height: 900px) {
                #PacMan {
                    height: 135vh;
                }
                }
            @media (max-width: 1700px) and (min-height: 900px) {
                #PacMan {
                    height: 100vh;
                }
                }
                @media (max-width: 1500px) and (min-height: 900px) {
                    #PacMan {
                        height: 110vh;
                    }
                    }
            @media (max-width: 1370px) {
            #PacMan {
                height: 175vh;
            }
            }
            @media (max-width: 1150px) {
            #PacMan {
                height: 150vh;
            }
            }
            @media (max-width: 900px) {
                #PacMan {
                    height: 155vh;
                }
                }
            @media (max-width: 750px) {
            #PacMan {
                height: 140vh;
            }
            }
            @media (max-width: 670px) {
                #PacMan {
                    height: 130vh;
                }
                }
            @media (max-width: 560px) {
            #PacMan {
                height: 100vh;
            }
            }
            @media (max-width: 450px) {
                #PacMan {
                    height: 85vh;
                }
                }
                @media (max-width: 400px) {
                    #PacMan {
                        height: 80vh;
                    }
                    }
            @media (max-height: 660px) {
                #PacMan {
                    height: 180vh;
            }
        }
            `}
      </style>
    </div>
  );
};

export default PacManSection;
