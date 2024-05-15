"use client";
import React from "react";
import PacMan from "../games/pacman";
import Yoshi from "../games/yoshi";
import PokeBall from "../games/pokeball";
import Luffy from "../games/luffy";

export default function MiniGames() { 

    return ( 
        <div id="MiniGames">
            <div id="MiniGamesContainer">
                <div id="PacMan">
                    <PacMan />
                </div>
                <div id="PokeBallAndYoshi">
                    <div id="PokeBall">
                        <PokeBall />
                    </div>
                    <div id="Yoshi">
                        <Yoshi />
                    </div>
                </div>
                <div id="Luffy">
                    <Luffy />
                </div>
                <div id="PikachuWaveContainer">
                    <img id="PikachuWave" src="/docs/pokemon/pikachu.gif" />
                </div>
            </div>
        <style>
            {`

                #MiniGames {
                    display: flex;
                    position: relative;
                    width: 99.7vw;
                    height: 400vh;
                    flex-direction: column;
                    justify-content: flex-end;
                    align-items: center;
                }

                #MiniGamesContainer {
                    display: flex;
                    position: relative;
                    width: 90%;
                    height: 95%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                #PacMan {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 50%;
                }

                #PokeBallAndYoshi {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 25%;
                    flex-direction: row;
                }   

                #PokeBall {
                    display: flex;
                    position: relative;
                    width: 50%;
                    height: 100%;
                    z-index: 1;
                    user-select: none;
                }

                #Yoshi {
                    display: flex;
                    position: relative;
                    width: 50%;
                    height: 100%;
                    background-color: black;
                    z-index: 2;
                    user-select: none;
                }

                #Luffy {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 20%;
                    user-select: none;
                }

                #PikachuWaveContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 5%;
                    justify-content: flex-end;
                    align-items: flex-end;
                }

                #PikachuWave {
                    height: 100%;
                }

                @media (max-width: 1000px) {

                    #MiniGames { height: 200vh; }

                    #PacMan { height: 30%; }

                    #PokeBallAndYoshi { flex-direction: column; height: 50%; }

                    #PokeBall, #Yoshi { width: 100%; height: 50%; }

                }
            `}
        </style>
        </div>
    );
};