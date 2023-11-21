import React from "react";

export default function PokeBall() {

    const handlePokeBallClick = () => {
        const clickMe = window.document.getElementById("ClickMe");
        const pokeBall = window.document.getElementById("PokeBallGif");
        const pikachuJump = window.document.getElementById("PikachuJump");
        const pikachuRun = window.document.getElementById("PikachuRun");
        const textBox = window.document.getElementById("TextBox");
        const textStill = window.document.getElementById("TextStill");

        if (!clickMe || !pokeBall || !pikachuJump || !pikachuRun || !textBox || !textStill) {
            return;
        }
        if (clickMe && pokeBall && pikachuJump && pikachuRun && textBox && textStill) {
            clickMe.style.display = "none";
            pokeBall.style.display = "none";
            pikachuJump.style.display = "flex";
            setTimeout(function () {
                if (!pikachuJump || !pikachuRun) {
                    return;
                }
                pikachuJump.style.display = "none";
                pikachuRun.style.display = "flex";
                setTimeout(function () {
                    if (!pikachuRun || !textBox) {
                        return;
                    }
                    pikachuRun.style.display = "none";
                    textBox.style.display = "flex";
                    setTimeout(function () {
                        if (!textBox || !textStill) {
                            return;
                        }
                        textBox.style.display = "none";
                        textStill.style.display = "flex";
                    }, 3660);
                }, 1500);
            }, 1000);
        }
    };
    

    return (
        <div id="PokeBallContainer">
            <div id="ClickMe">Click Me!</div>
            <img id="PokeBallGif" src="/pokeball.gif" onClick={handlePokeBallClick}/>
            <img id="PikachuJump" src="/pikachujump.gif" style={{display: 'none'}}/>
            <img id="PikachuRun" src="/pikachurun.gif" style={{display: 'none'}}/>
            <img id="TextBox" src="/textbox.gif" style={{display: 'none'}}/>
            <img id="TextStill" src="/textstill.webp" style={{display: 'none'}}/>
            
            <style> 
                {`

                    @keyframes pikachuJump {
                        0% { transform: translateY(0px); }
                        50% { transform: translateY(-150px); }
                        100% { transform: translateY(0px); }
                    }

                    @keyframes pikachuRun {
                        0% { transform: translateX(0px); }
                        100% { transform: translateX(650px); }
                    }

                    #PokeBallContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 100%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }

                    #ClickMe {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 5%;
                        justify-content: center;    
                        align-items: center;
                        font-size: 40px;
                        color: white;
                        margin-bottom: 5%;
                    }

                    #PokeBallGif {
                        display: flex;
                        position: relative;
                        width: 50%;
                        height: 50%;
                        justify-content: center;
                        align-items: center;
                        cursor: pointer;
                    }

                    #PikachuJump {
                        display: flex;
                        position: relative;
                        width: 15%;
                        height: 20%;
                        justify-content: center;
                        align-items: center;
                        animation: pikachuJump 1s ease-in-out;
                    }

                    #PikachuRun {
                        display: flex;
                        position: relative;
                        width: 30%;
                        height: 20%;
                        justify-content: center;
                        align-items: center;
                        animation: pikachuRun 1.7s ease-in-out;
                    }

                    #TextBox {
                        display: flex;
                        position: relative;
                        width: 50%;
                        height: 20%;
                        justify-content: center;
                        align-items: center;
                    }

                    #TextStill {
                        display: flex;
                        position: relative;
                        width: 50%;
                        height: 20%;
                        justify-content: center;
                        align-items: center;
                    }

                    @media (max-width: 1000px) {

                        @keyframes pikachuJump {
                            0% { top: 0; }
                            50% { top: -100px; }
                            100% { top: 0; }
                        }

                        #ClickMe { font-size: 22px; }

                    }

                `}
            </style>
        </div>
    )
};