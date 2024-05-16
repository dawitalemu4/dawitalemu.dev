"use client";
import React from "react";
import PacMan from "../games/pacman";
import Yoshi from "../games/yoshi";
import PokeBall from "../games/pokeball";
import Luffy from "../games/luffy";
import "./css/miniGames.scss";

export default function MiniGames() { 

    return ( 
        <div id="mini-games">
            <div id="mini-games-container">
                <div id="pacman">
                    <PacMan />
                </div>
                <div id="pokeball-and-yoshi">
                    <div id="pokeball">
                        <PokeBall />
                    </div>
                    <div id="yoshi">
                        <Yoshi />
                    </div>
                </div>
                <div id="luffy">
                    <Luffy />
                </div>
                <div id="pikachu-wave">
                    <img src="/docs/pokemon/pikachu.gif" />
                </div>
            </div>
        </div>
    );
};