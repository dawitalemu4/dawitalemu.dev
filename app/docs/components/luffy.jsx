"use client"
import React, { useEffect } from 'react';

const Luffy = () => {

    useEffect(() => {
        let gif = document.getElementById("LuffyImg");
        let gifs = ["hatclose.png", "hatmid.png", "hatopen.png"];
        let message = document.getElementById("WarningMessage");
        let gameIntervalId;
        let startTime;

        startGame();

        gif.addEventListener("click", onClick);
        gif.addEventListener("contextmenu", onClick);

        function startGame() {

            message.style.display = "none";
            startTime = Date.now();
            gif.src = "luffy.gif";

            gameIntervalId = setInterval(function() {
                startTime = Date.now();
                gif.src = "luffy.gif";
            }, 5040);
        }

        function onClick(event) {

            event.preventDefault();
            let now = Date.now();

            if (now - startTime >= 3700 && now - startTime <= 5040) {
                message.style.display = "none";
                displayWinOutcome();
                console.log("You clicked at the right time");
            } else {
                message.style.display = "flex";
                console.log("You clicked too early or too late");

                setTimeout(function() {
                    message.style.display = "none";
                }, 2000);
            }
        }

        function displayWinOutcome() {

            clearInterval(gameIntervalId);
            let i = 0;

            gameIntervalId = setInterval(function() {

                gif.src = gifs[i];
                console.log(gifs[i]);
                i++;

                if (i === gifs.length) {
                    clearInterval(gameIntervalId);
                    gif.src = gifs[i-1];
                    message.style.display = "none";
                }

                if(i == gifs[1]) {message.style.display = "none";}
            }, 400);
            gif.removeEventListener("click", onClick);
            gif.removeEventListener("contextmenu", onClick);
        }

    }, []);

    return (
        <div id="LuffyContainer">
            <img id="LuffyImg" src="luffy.gif" />
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

export default Luffy;