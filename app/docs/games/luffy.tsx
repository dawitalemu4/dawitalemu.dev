"use client";
import React, { useEffect } from "react";

export default function Luffy() {

    useEffect(() => {

        let gif: any = document.getElementById("LuffyImg");
        let gifs: any[] = ["hatclose.webp", "hatmid.webp", "hatopen.webp"];
        let message: any = document.getElementById("WarningMessage");
        let gameIntervalId: any;
        let startTime: number;

        const startGame = () => {

            message.style.display = "none";
            startTime = Date.now();
            gif.src = "/docs/luffy/luffy.gif";

            gameIntervalId = setInterval(() => {
                startTime = Date.now();
                gif.src = "/docs/luffy/luffy.gif";
            }, 5040);
        };

        const onClick = () => {

            let now = Date.now();

            if (now - startTime >= 3700 && now - startTime <= 5040) {

                message.style.display = "none";
                displayWinOutcome();

            } else {

                message.style.display = "flex";

                setTimeout(() => {
                    message.style.display = "none";
                }, 2000);
            };
        };

        const displayWinOutcome = () => {

            clearInterval(gameIntervalId);
            let i = 0;

            gameIntervalId = setInterval(() => {

                gif.src = "/docs/luffy/" + gifs[i];
                i++;

                if (i === gifs.length) {
                    clearInterval(gameIntervalId);
                    gif.src = "/docs/luffy/" + gifs[i-1];
                    message.style.display = "none";
                };

                if (i == gifs[1]) { 
                    message.style.display = "none"; 
                };

            }, 400);

            gif.removeEventListener("click", onClick);
            gif.removeEventListener("contextmenu", onClick);
        };

        startGame();

        gif.addEventListener("click", onClick);
        gif.addEventListener("contextmenu", onClick);

    }, []);

    return (
        <div id="LuffyContainer">
            <img id="LuffyImg" src="/docs/luffy/luffy.gif" />
            <div id="WarningMessageContainer">
                <p id="WarningMessage">Tap left click while luffy is pulling - Don't drag or hold</p>
            </div>
        <style>
            {`

                #LuffyContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                }

                #LuffyImg {
                    height: 90%;
                    cursor: pointer;
                }

                #WarningMessageContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 10%;
                    justify-content: center;
                    align-items: center;
                }

                #WarningMessage {
                    color: white;
                    text-align: center;
                }

                @media (max-width: 1000px ) {

                    #WarningMessage { font-size: 12px; }

                }
            `}
        </style>
        </div>
    );
};