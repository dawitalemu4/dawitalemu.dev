"use client";
import React from "react";
import Link from "next/link";

const ExperienceText: React.FC = () => {

  return (
    <div id="experienceContainer">
      <div id="experienceParContainer">
      <p id="experiencePar">
        Above are some programming langauges and frameworks I use which consists of mainly React.tsx, React Native, Next.js, C#, and Java.
        <br />
        <br />
        I worked as a part time Full-Stack web developer at <Link href="https://www.letsalltapin.com/" target="_blank"><span id="TapIn">Let's Tap In LLC</span></Link> and interned at Urban Alliance during Summer 2023.
        <br />
        <br />
        <Link href="https://docs.google.com/document/d/1VA2JjizgZaup8Hw1dX10K6-6aRnEW3wpa1yVvscN2H4/edit?usp=sharing" target="_blank">
        <span id="Resume">Click me to view my resume!</span></Link>
      </p>
      </div>
      <div id="experienceHeaderContainer">    
          <h4 id="experienceHeaderText">Experience</h4>
      </div>

      <style>
        {`
    #experienceContainer {
      display: flex;
      position: absolute;
      bottom: 5%;
      left: 5%;
      width: 90%;
      align-items: center;
      flex-direction: row;
    }
    #experienceHeaderContainer {
      display: flex;
      position: relative;
      left: 5%;
      width: 30%;
      flex-direction: column;
      margin-bottom: 5%;
    }
    #experienceHeaderText {
    color: white;
    font-family: Inter;
    font-size: 400%;
    text-align: center;
    }
    #experienceParContainer {
      display: flex;
      position: relative;
      left: 0;
      width: 65%;
      height: 50%;
    }
    #experiencePar {
    position: relative;
    right: 0;
    width: 100%;
    color: white;
    font-family: Inter;
    font-size: 200%;
    text-align: center;
  }
  #Resume {
    color: #d6ddf2;
    text-decoration: underline;
  }
  #Resume:hover {
    opacity: 0.5;
  }
  #TapIn {
    color: #d6ddf2;
    text-decoration: underline;
  }
  #TapIn:hover {
    opacity: 0.5;
  }

  @media (max-width: 1370px) {
      #experienceContainer {
        flex-direction: column;
       height: 40%;
    }
    #experienceHeaderContainer {
      left: 0;
      top: 0;
      width: 100%;
      height: 20%;
      align-items: center;
    }
#experienceParContainer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80%;
}
    #experiencePar {
      left: 0;
      width: 100%;
      height: 100%;
      font-size: 180%;
    }
    #experienceHeaderText {
      font-size: 300%;
    }
  }
  

  @media (max-width: 900px) {
    #experiencePar {
      font-size: 150%;
    }
   #experienceHeaderContainer {
    height: 125%; 
  }
    #experienceHeaderText {
      font-size: 300%;
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
