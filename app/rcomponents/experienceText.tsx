"use client";
import React from "react";

const ExperienceText: React.FC = () => {

  return (
    <div id="experienceContainer">
      <div id="experienceHeaderContainer">
        <div id="experienceHeaderTextContainer">
          <h4 id="experienceHeaderText">Experience</h4>
        </div>
      </div>
      <p id="experiencePar">
      Above are some programming langauges I use which consists of mainly React.tsx, React Native, Next.js, C#, and Java.
        <br />
        <br />
        I worked as a full time Full-Stack software developer at Tap In Inc. and interned at Urban Alliance during Summer 2023.
        <br />
        <br />
        <a href="https://docs.google.com/document/d/1VA2JjizgZaup8Hw1dX10K6-6aRnEW3wpa1yVvscN2H4/edit?usp=sharing" target="_blank">
        <span id="Resume">Click me to view my resume!</span></a>
      </p>

      <style>
        {`
    #experienceContainer {
      display: flex;
      position: absolute;
      bottom: 0;
      left: 5%;
      width: 90%;
      justify-content: center;
      align-items: center;
      flex-direction: row;
    }
    #experienceHeaderContainer {
      display: flex;
      position: relative;
      right: 5%;
      width: 30%;
      flex-direction: column;
      justify-content: center;
    }
    #experienceHeaderTextContainer {
      display: flex;
      justify-content: center;
      margin-bottom: 5%;
      margin-top: 5%;
    }
    #experienceHeaderText {
    color: white;
    font-family: Inter;
    font-size: 400%;
    }
    #experienceHeaderImageContainer {
    display: flex;
    width: 100%;
    justify-content: center;
    }
    #experienceHeaderImage {
      border-radius: 10%;
    }
    #experiencePar {
    position: relative;
    left: 5%;
    width: 60%;
    color: white;
    font-family: Inter;
    font-size: 200%;
    text-align: center;
    }



  @media (max-width: 1370px) {
      #experienceContainer {
        flex-direction: column;
       
    }
    #experienceHeaderContainer {
      right: 0;
      width: 100%;
    }
    #experienceHeaderImageContainer {
      justify-content: center;
    }
    #experienceHeaderImage {
      width: 40%;
    }
    #experienceHeaderTextContainer {
      justify-content: center;
    }
    #experiencePar {
      left: 0;
      width: 100%;
      margin-top: 5%;
    }
    #experienceHeaderText {
      font-size: 300%;
    }
  }
  

  @media (max-width: 900px) {
    #experiencePar {
      font-size: 150%;
    }
    #experienceHeaderImage {
      width: 70%;
    }
    experienceHeaderText {
      font-size: 200%;
    }
  }
  @media (max-width: 560px) {
  #experiencePar {
  font-size: 100%;
  }
  #experienceHeaderText {
  font-size: 190%;
  }
  }

            `}
      </style>
    </div>
  );
};

export default ExperienceText;
