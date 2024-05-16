import React from "react";
import "./css/pokeball.scss";

export default function PokeBall() {

    const handlePokeBallClick = () => {

        const clickMe = document.getElementById("ClickMe");
        const pokeBall = document.getElementById("PokeBallGif");
        const pikachuJump = document.getElementById("PikachuJump");
        const pikachuRun = document.getElementById("PikachuRun");
        const textBox = document.getElementById("TextBox");
        const textStill = document.getElementById("TextStill");

        if (!clickMe || !pokeBall || !pikachuJump || !pikachuRun || !textBox || !textStill) return;

        if (clickMe && pokeBall && pikachuJump && pikachuRun && textBox && textStill) {

            clickMe.style.display = "none";
            pokeBall.style.display = "none";
            pikachuJump.style.display = "flex";

            setTimeout(() => {

                if (!pikachuJump || !pikachuRun) return;

                pikachuJump.style.display = "none";
                pikachuRun.style.display = "flex";

                setTimeout(() => {

                    if (!pikachuRun || !textBox) return;

                    pikachuRun.style.display = "none";
                    textBox.style.display = "flex";

                    setTimeout(() => {

                        if (!textBox || !textStill) return;

                        textBox.style.display = "none";
                        textStill.style.display = "flex";

                    }, 3660);
                }, 1500);
            }, 1000);
        };
    };

    return (
        <div id="PokeBallContainer">
            <div id="ClickMe">Click Me!</div>
            <img id="PokeBallGif" src="/docs/pokemon/pokeball.gif" onClick={handlePokeBallClick} />
            <img id="PikachuJump" src="/docs/pokemon/pikachujump.gif" style={{ display: "none" }} />
            <img id="PikachuRun" src="/docs/pokemon/pikachurun.gif" style={{ display: "none" }} />
            <img id="TextBox" src="/docs/pokemon/textbox.gif" style={{ display: "none" }} />
            <img id="TextStill" src="/docs/pokemon/textstill.webp" style={{ display: "none" }} />
        </div>
    );
};