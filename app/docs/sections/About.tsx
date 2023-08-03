"use client";
import React from "react";
import AboutText from "../rcomponents/aboutText";

const About: React.FC = () => {
  return (
    <div id="About" className="flex relative">
      <AboutText />
      <style>
        {`
              #About {
                height: 150vh;
            }
            @media (max-width: 1800px) and (min-height: 900px) {
                #About {
                    height: 135vh;
                }
                }
            @media (max-width: 1700px) and (min-height: 900px) {
                #About {
                    height: 100vh;
                }
                }
                @media (max-width: 1500px) and (min-height: 900px) {
                    #About {
                        height: 110vh;
                    }
                    }
            @media (max-width: 1370px) {
            #About {
                height: 175vh;
            }
            }
            @media (max-width: 1150px) {
            #About {
                height: 150vh;
            }
            }
            @media (max-width: 900px) {
                #About {
                    height: 155vh;
                }
                }
            @media (max-width: 750px) {
            #About {
                height: 140vh;
            }
            }
            @media (max-width: 670px) {
                #About {
                    height: 130vh;
                }
                }
            @media (max-width: 560px) {
            #About {
                height: 100vh;
            }
            }
            @media (max-width: 450px) {
                #About {
                    height: 85vh;
                }
                }
                @media (max-width: 400px) {
                    #About {
                        height: 80vh;
                    }
                    }
            @media (max-height: 660px) {
                #About {
                    height: 180vh;
            }
        }
            
            `}
      </style>
    </div>
  );
};

export default About;
