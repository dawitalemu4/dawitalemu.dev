"use client";
import React, { useState } from "react";
import PacMan from "../games/pacman";
import Yoshi from "../games/yoshi";
import PokeBall from "../games/pokeball";
import Luffy from "../games/luffy";
import "./css/miniGames.scss";

export default function MiniGames() { 

    const [showPikachu, setShowPikachu] = useState(false);

    return ( 
        <div id="mini-games">
            <div id="mini-games-container">
                <div id="pacman">
                    <PacMan />
                </div>
                <div id="pokeball-and-yoshi">
                    <div id="pokeball">
                        <PokeBall pokeballClicked={() => setShowPikachu(true)} />
                    </div>
                    <div id="yoshi">
                        <Yoshi />
                    </div>
                </div>
                <div id="luffy">
                    <Luffy />
                </div>
                <div id="pikachu-wave">
                    {showPikachu &&
                        <img src="/docs/pokemon/pikachu.gif" />
                    }
                </div>
            </div>
        </div>
    );
};