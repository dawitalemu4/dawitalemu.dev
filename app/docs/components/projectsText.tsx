"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";

const ProjectsText: React.FC = () => {

  const pokeballRef = useRef<HTMLImageElement>(null);
  const pikachujumpRef = useRef<HTMLImageElement>(null);
  const pikachurunRef = useRef<HTMLImageElement>(null);
  const textboxRef = useRef<HTMLImageElement>(null);
  const textstillRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const pokeball = pokeballRef.current;
    const pikachujump = pikachujumpRef.current;
    const pikachurun = pikachurunRef.current;
    const textbox = textboxRef.current;
    const textstill = textstillRef.current;

    if (pokeball && pikachujump && pikachurun && textbox && textstill) {
      pokeball.addEventListener("mouseover", function () {
        pokeball.style.cursor = "pointer";
      });

      const handleClick = function(event: Event) {
        event.preventDefault();
        if (pokeball && pikachujump && pikachurun && textbox && textstill) {
          pokeball.style.display = "none";
          pikachujump.style.display = "flex";
          setTimeout(function () {
            pikachujump.style.display = "none";
            pikachurun.style.display = "flex";
            setTimeout(function () {
              pikachurun.style.display = "none";
              textbox.style.display = "flex";
              setTimeout(function () {
                textbox.style.display = "none";
                textstill.style.display = "flex";
              }, 3660);
            }, 1500);
          }, 1000);
        }
      }

     pokeball.addEventListener("click", handleClick);
     pokeball.addEventListener("contextmenu", handleClick);

      return () => {
        pokeball.removeEventListener("mouseover", function () {
        pokeball.style.cursor = "pointer";
        });
       pokeball.removeEventListener("click", handleClick);
       pokeball.removeEventListener("contextmenu", handleClick);        
      };
    }
  }, [pokeballRef, pikachujumpRef, pikachurunRef, textboxRef, textstillRef]);



  return (
    <div id="projectsContainer">
      <div id="projectsHeaderContainer">
          <h6 id="projectsHeaderText">Projects</h6>
        
        <div id="projectsPokeballContainer">
          <img id="projectsPokeball" ref={pokeballRef} src="/pokeball.gif" />
          <img id="pikachujump" ref={pikachujumpRef} src="/pikachujump.gif" style={{display: 'none'}}/>
          <img id="pikachurun" ref={pikachurunRef} src="/pikachurun.gif" style={{display: 'none'}}/>
          <img id="textbox" ref={textboxRef} src="/textbox.gif" style={{display: 'none'}}/>
          <img id="textstill" ref={textstillRef} src="/textstill.png" style={{display: 'none'}}/>
        </div>
      </div>
      <p id="projectsPar">   
            <b>// <i>Misplaced</i></b> - Wrote over 100k lines of code creating a Lost and Found app/website for TU students (with expansion in progress). Made with MERN stack (React Native), JavaScript, and Google Cloud APIs. More details and demos on GitHub - <Link href="https://misplaced.app" target="_blank"><span id="projectsLi">Misplaced.app (Beta)</span></Link> & <Link href="https://github.com/misplaced-dev/misplaced" target="_blank"><span id="projectsLi">GitHub</span></Link>  
            <br/>
            <br/>
            <b># <i>Mariam & Gebriel EOTC Website</i></b> - Led a team of 7 devs to make a website to give back to our childhood church in MEAN stack and TypeScript (In Progress)
            <br/>
            <br/>
            <b>/* <i>Light Mode Portfolio Website</i></b> - Click button on navbar to view progress! (Next.js, React.tsx, TypeScript, Tailwind CSS)
            <br/>
            <br/>
            <b>/// <i>2D Sonic Platformer</i></b> - Gained experience with physics and animation in Unity Game Engine & C# (30s Demo on <Link href="https://github.com/dawitalemu4/sonic" target="_blank"><span id="projectsLi">GitHub</span></Link>)
            <br/>
            <br/>
            <b>' <i>Additional Side Projects</i></b> - School projects such as VB.NET GUIs, Java, etc. (<Link href="https://github.com/dawitalemu4" target="_blank"><span id="projectsLi">Browse My GitHub</span></Link>)
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
    height: 330px;
    justify-content: center;
    align-items: center;
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


    #pikachujump {
      position: absolute;
      transform: scale(0.3);
      animation: jump 1s ease-in-out;
    }
    
    #pikachurun {
      display: flex;
      position: absolute;
      transform: scale(0.8);
      animation: run 3s ease-in-out;
    }

    #textbox, #textstill {
      display: flex; 
      top: 50%;  
      width: 300px;
      height: 150px;
    }
    
  @keyframes jump {
    0% {
      top: 20%;
    }
    50% {
      top: -20%;
    }
    100% {
      top: 20%;
    }
  }
  @keyframes run {
    0% {
      bottom: 0%;
      left: 0%;
    }
    50% {
      bottom: 0%;
      left: 150%;
    }
    100% {
      bottom: 0%;
      left: 150%;
    }
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
      width: 25%;
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
    #pikachujump {
      position: absolute;
     margin-top: -10%;
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
  #pikachujump {
    position: absolute;
   margin-top: -30%;
  }
  }

            `}
      </style>
    </div>
  );
};

export default ProjectsText;
