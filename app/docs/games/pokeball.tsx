import React from "react";
import "./css/pokeball.scss";

const PokeBall: React.FC<{ pokeballClicked: () => void }> = ({ pokeballClicked }) => {

    const handlePokeBallClick = () => {

        const clickMe = document.getElementById("pokeball-header");
        const pokeBall = document.getElementById("pokeball-gif");
        const pikachuJump = document.getElementById("pikachu-jump");
        const pikachuRun = document.getElementById("pikachu-run");
        const textBox = document.getElementById("text-box");
        const textStill = document.getElementById("text-still");

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
                    pokeballClicked();

                    setTimeout(() => {

                        if (!textBox || !textStill) return;

                        textBox.style.display = "none";
                        textStill.style.display = "flex";

                    }, 3500);
                }, 1500);
            }, 1200);
        };
    };

    return (
        <div id="pokeball-container">
            <h2 id="pokeball-header">Click Me!</h2>
            <img id="pokeball-gif" src="/docs/pokemon/pokeball.gif" onClick={handlePokeBallClick} alt="Shaking Pokeball" />
            <img id="pikachu-jump" src="/docs/pokemon/pikachujump.gif" style={{ display: "none" }} alt="Jumping Pikachu" />
            <img id="pikachu-run" src="/docs/pokemon/pikachurun.gif" style={{ display: "none" }} alt="Running Pikachu" />
            <img id="text-box" src="/docs/pokemon/textbox.gif" style={{ display: "none" }} alt="Animated Textbox" />
            <img id="text-still" src="/docs/pokemon/textstill.webp" style={{ display: "none" }} alt="Still Textbox" />
        </div>
    );
};

export default PokeBall;