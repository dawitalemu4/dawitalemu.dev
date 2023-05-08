"use client";
import React from "react";

const AboutText: React.FC = () => {

  return (
    <div id="aboutContainer">
      <div id="aboutHeaderContainer">
        <div id="aboutHeaderTextContainer">
          <h4 id="aboutHeaderText">About Me</h4>
        </div>
        <div id="aboutHeaderImageContainer">
          <img id="aboutHeaderImage" src="da.jpg" />
        </div>
      </div>
      <p id="aboutPar">
        Hello! My name is Dawit Alemu and I'm currently a junior at Towson
        University who loves to self-teach software development.
        <br />
        <br />
        My interests are front end web and game software development.
        <br />
        <br />
        Tap left click while he's pulling his fishing rod!
      </p>

      <style>
        {`
    #aboutContainer {
      display: flex;
      position: absolute;
      top: 310%;
      left: 5%;
      width: 90%;
      justify-content: center;
      align-items: center;
      border: 1px solid red;
      flex-direction: row;
    }
    #aboutHeaderContainer {
      display: flex;
      position: relative;
      right: 5%;
      width: 30%;
      flex-direction: column;
      justify-content: center;
    }
    #aboutHeaderTextContainer {
      display: flex;
      justify-content: center;
      margin-bottom: 5%;
      margin-top: 5%;
    }
    #aboutHeaderText {
    color: white;
    font-family: Inter;
    font-size: 400%;
    }
    #aboutHeaderImageContainer {
    display: flex;
    width: 100%;
    justify-content: center;
    }
    #aboutHeaderImage {
      border-radius: 10%;
    }
    #aboutPar {
    position: relative;
    left: 5%;
    width: 60%;
    color: white;
    font-family: Inter;
    font-size: 200%;
    text-align: center;
    }



  @media (max-width: 1370px) {
      #aboutContainer {
        flex-direction: column;
       
    }
    #aboutHeaderContainer {
      right: 0;
      width: 100%;
    }
    #aboutHeaderImageContainer {
      justify-content: center;
    }
    #aboutHeaderImage {
      width: 40%;
    }
    #aboutHeaderTextContainer {
      justify-content: center;
    }
    #aboutPar {
      left: 0;
      width: 100%;
      margin-top: 5%;
    }
    #aboutHeaderText {
      font-size: 300%;
    }
  }
  

  @media (max-width: 900px) {
    #aboutPar {
      font-size: 150%;
    }
    #aboutHeaderImage {
      width: 70%;
    }
    aboutHeaderText {
      font-size: 200%;
    }
  }
  @media (max-width: 560px) {
  #aboutPar {
  font-size: 100%;
  }
  #aboutHeaderText {
  font-size: 190%;
  }
  }

            `}
      </style>
    </div>
  );
};

export default AboutText;
