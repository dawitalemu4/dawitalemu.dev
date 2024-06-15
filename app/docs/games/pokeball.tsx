import React from "react";
import "./css/pokeball.scss";

const PokeBall: React.FC<{ pokeballClicked: () => void }> = ({ pokeballClicked }) => {

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
        <div id="pokeball-container">
            <h2 id="pokeball-header">Click Me!</h2>
            <img id="pokeball-gif" src="/docs/pokemon/pokeball.gif" onClick={() => { handlePokeBallClick(); pokeballClicked(); }} />
            <img id="pikachu-jump" src="/docs/pokemon/pikachujump.gif" style={{ display: "none" }} />
            <img id="pikachu-run" src="/docs/pokemon/pikachurun.gif" style={{ display: "none" }} />
            <img id="text-box" src="/docs/pokemon/textbox.gif" style={{ display: "none" }} />
            <img id="text-still" src="/docs/pokemon/textstill.webp" style={{ display: "none" }} />
        </div>
    );
};

export default PokeBall;