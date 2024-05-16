"use client";
import React from "react";
import PacMan from "../games/pacman";
import Yoshi from "../games/yoshi";
import PokeBall from "../games/pokeball";
import Luffy from "../games/luffy";
import "./css/miniGames.scss";

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
        </div>
    );
};