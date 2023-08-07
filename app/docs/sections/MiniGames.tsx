"use client"
import React from "react";
import PacMan from "../components/PacMan";
import Yoshi from "../components/Yoshi";
import PokeBall from "../components/PokeBall";
import Luffy from "../components/Luffy";

const MiniGames: React.FC = () => { 
    return ( 
        <div id='MiniGames'>
            <div id='MiniGamesContainer'>
                <div id="PacMan">
                    <div id="PacManContainer">
                        <PacMan />
                    </div>
                </div>
                <div id="PokeBallAndYoshi">
                    <div id="PokeBallAndYoshiContainer">
                        <div id="PokeBall">
                            <PokeBall />
                        </div>
                        <div id="Yoshi">
                            <Yoshi />
                        </div>
                    </div>
                </div>
                <div id="Luffy">
                    <Luffy />
                </div>
            </div>
            <div id="PikachuWaveContainer">
                <img id='PikachuWave' src="pikachu.gif" />
            </div>
        <style>
            {` 
                #MiniGames {
                    display: flex;
                    position: relative;
                    width: 99.7vw;
                    height: 550vh;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                #MiniGamesContainer {
                    display: flex;
                    position: relative;
                    width: 90%;
                    height: 90%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

            `}
        </style>
        </div>
    );
};

export default MiniGames;