"use client";
import React from "react";

const AboutText: React.FC = () => {
  return (
    <div>
    <div id="aboutMe">
    <h4>About Me</h4>
    <h5>Dawit Alemu</h5>

    <style>
      {`
    #aboutMe {
        font-family: Inter, sans-serif; 
        font-weight: 500;
        color: white;
        display: flex;
        postion: relative;
        bottom: 100%;
        left: 50%;
        z-index: 7;
    } 
          `}
    </style>
    </div>

    <div id="aboutText" className="hidden">
      <p>
        Hello! My name is Dawit Alemu and I'm currently a junior at Towson
        University.
        <br />
        <br />
        My main interests are front end web and game development.
        <br />
        <br />
        Tap left click while he's pulling his fishing rod!
      </p>

      <style>
        {`
    

            `}
      </style>
    </div>
    </div>
  );
};

export default AboutText;
