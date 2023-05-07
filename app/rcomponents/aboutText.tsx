"use client";
import React from "react";

const AboutText: React.FC = () => {
  return (
    <div id="aboutParContainer">
      <p id="aboutPar">
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
    #aboutParContainer {
      display: flex;
      position: absolute;
      top: 330%;
      width: 100%;
      height: 100vh;
      border: 1px solid red;
    }
    #aboutPar {
    
    }
            `}
      </style>
    </div>
  );
};

export default AboutText;
