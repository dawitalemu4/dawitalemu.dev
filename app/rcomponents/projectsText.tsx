"use client";
import React from "react";

const ProjectsText: React.FC = () => {

  return (
    <div id="projectsContainer">
      <div id="projectsHeaderContainer">
          <h6 id="projectsHeaderText">Projects</h6>
        
        <div id="projectsPokeballContainer">
          <img id="projectsPokeball" src="pokeball.gif" />
        </div>
      </div>
      <p id="projectsPar">   
            <b>// Misplaced</b> - Wrote over 100k lines of code creating a Lost and Found app/website for TU students (with expansion in progress). Made with MERN stack (React Native), JavaScript, and Google Cloud APIs. More details and demos on GitHub - <a href="https://misplaced.app" target="_blank"><span id="projectsLi">Misplaced.app (Beta)</span></a> & <a href="https://github.com/misplaced-dev/misplaced" target="_blank"><span id="projectsLi">GitHub</span></a>  
            <br/>
            <br/>
            <b>/* Light Mode Portfolio Website</b> - Click button on navbar to view progress! (Next.js, React.tsx, TypeScript, Tailwind CSS)
            <br/>
            <br/>
            <b>/// 2D Sonic Platformer</b> - Gained experience with physics and animation in Unity Game Engine & C# (30s Demo on <a href="https://github.com/dawitalemu4/sonic" target="_blank"><span id="projectsLi">GitHub</span></a>)
            <br/>
            <br/>
            <b># Cat Island Web Game</b> - In Progress (Angular)
            <br/>
            <br/>
            <b>' Additional Less Important Projects</b> - School projects such as VB.NET GUIs, Java, etc. (<a href="https://github.com/dawitalemu4" target="_blank"><span id="projectsLi">Browse My GitHub</span></a>)
      </p>

      <style>
        {`
    #projectsContainer {
      display: flex;
      position: absolute;
      top: 5%;
      bottom: 5%;
      left: 5%;
      right: 5%;
      width: 90%;
      height: 90%;
      justify-content: center;
      align-items: center;
      flex-direction: row;
    }
    #projectsHeaderContainer {
      display: flex;
      position: relative;
      right: 5%;
      width: 30%;
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
    #projectsHeaderText {
    color: white;
    font-family: Inter;
    font-size: 400%;
    margin-bottom: 15%;
    }
    #projectsPokeballContainer {
    display: flex;
    width: 100%;
    justify-content: center;
    }
    #projectsPar {
    position: relative;
    left: 5%;
    width: 60%;
    color: white;
    font-family: Inter;
    font-size: 170%;
    text-align: center;
    background-color: black;
    z-index: 2;
    }
    #projectsLi {
        color: #d6ddf2;
    text-decoration: underline;
    }
    #projectsLi:hover {
        opacity: 0.5;
    }


  @media (max-width: 1370px) {
      #projectsContainer {
        flex-direction: column;
    }
    #projectsHeaderContainer {
      right: 0;
      width: 100%;
    }
    #projectsPokeball {
      width: 30%;
    }
    #projectsHeaderTextContainer {
      justify-content: center;
    }
    #projectsPar {
      left: 0;
      width: 100%;
      margin-top: 5%;
    }
    #projectsHeaderText {
      font-size: 300%;
      margin-bottom: 5%;
    }
  }
  

  @media (max-width: 900px) {
    #projectsPar {
      font-size: 150%;
    }
    #projectsPokeball {
      width: 40%;
    }
    projectsHeaderText {
      font-size: 200%;
    }
  }
  @media (max-width: 560px) {
  #projectsPar {
  font-size: 100%;
  }
  #projectsHeaderText {
  font-size: 190%;
  margin-top: -15%;
  }
  #projectsPokeball {
    margin-bottom: 10%;
  }
  }

            `}
      </style>
    </div>
  );
};

export default ProjectsText;
