"use client";
import React from "react";

const AboutText: React.FC = () => {
  return (
    <div id="aboutTextContainer">
    

    <style>
      {`
      #aboutTextContainer {
        display: flex;
        position: absolute;
        top: 310%;
        width: 100%;
        height: 2000px;
        border: 1px solid red;
        z-index: 7;
        flex-direction: column;
      }

    #meContainer {
        display: flex;
        postion: relative;
        width: 13%;
        height: 27%;
        margin-left: 54%;
        z-index: 7;
      justify-content: center;
      flex-direction: column;
    } 
    #aboutMe {
        display: flex;
        position: relative;
      bottom: 25%;
      font-size: 40px;
      padding-left: 4px;
    }
    #da {
      display: flex;
      position: relative;
      top: 68%;
      width: 110px;
      height: 110px;
      border-radius: 100px;
    }
        `}
    </style>
    

    <div id="aboutParContainer" >
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
      border: 1px solid red;

            `}
      </style>
    </div>
    </div>
  );
};

export default AboutText;
