"use client";
import React, { useRef } from "react";

const PokeBall: React.FC = () => {

    const pokeBall = useRef<HTMLImageElement>(null);
    const pikachuJump = useRef<HTMLImageElement>(null);
    const pikachuRun = useRef<HTMLImageElement>(null);
    const textBox = useRef<HTMLImageElement>(null);
    const textStill = useRef<HTMLImageElement>(null);

    const handlePokeBallClick = () => {
        if (!pokeBall.current || !pikachuJump.current || !pikachuRun.current || !textBox.current || !textStill.current) {
            return;
        }
        if (pokeBall.current && pikachuJump.current && pikachuRun.current && textBox.current && textStill.current) {
            pokeBall.current.style.display = "none";
            pikachuJump.current.style.display = "flex";
            setTimeout(function () {
                if (!pikachuJump.current || !pikachuRun.current) {
                    return;
                }
                pikachuJump.current.style.display = "none";
                pikachuRun.current.style.display = "flex";
                setTimeout(function () {
                    if (!pikachuRun.current || !textBox.current) {
                        return;
                    }
                    pikachuRun.current.style.display = "none";
                    textBox.current.style.display = "flex";
                    setTimeout(function () {
                        if (!textBox.current || !textStill.current) {
                            return;
                        }
                        textBox.current.style.display = "none";
                        textStill.current.style.display = "flex";
                    }, 3660);
                }, 1500);
            }, 1000);
        }
    };
    

  return (
    <div id="projectsContainer">
        <div id="projectsPokeBallContainer">
          <img id="projectsPokeBall" ref={pokeBall} src="/pokeball.gif" onClick={handlePokeBallClick}/>
          <img id="pikachuJump" ref={pikachuJump} src="/pikachuJump.gif" style={{display: 'none'}}/>
          <img id="pikachuRun" ref={pikachuRun} src="/pikachuRun.gif" style={{display: 'none'}}/>
          <img id="textBox" ref={textBox} src="/textBox.gif" style={{display: 'none'}}/>
          <img id="textStill" ref={textStill} src="/textStill.png" style={{display: 'none'}}/>
        </div>
        <style> 
            {`
            #projectsPokeBallContainer {
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
            
            
                #pikachuJump {
                  position: absolute;
                  transform: scale(0.3);
                  animation: jump 1s ease-in-out;
                }
                
                #pikachuRun {
                  display: flex;
                  position: absolute;
                  transform: scale(0.8);
                  animation: run 3s ease-in-out;
                }
            
                #textBox, #textStill {
                  display: flex; 
                  top: 50%;  
                  width: 300px;
                  height: 150px;
                }
            `}
        </style>
    </div>
    )
}

export default PokeBall;