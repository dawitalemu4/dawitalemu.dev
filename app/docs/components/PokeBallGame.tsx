"use client";
import React, { useRef } from "react";

const PokeBall: React.FC = () => {

    const clickMe = useRef<HTMLDivElement>(null);
    const pokeBall = useRef<HTMLImageElement>(null);
    const pikachuJump = useRef<HTMLImageElement>(null);
    const pikachuRun = useRef<HTMLImageElement>(null);
    const textBox = useRef<HTMLImageElement>(null);
    const textStill = useRef<HTMLImageElement>(null);

    const handlePokeBallClick = () => {
        if (!clickMe || !pokeBall.current || !pikachuJump.current || !pikachuRun.current || !textBox.current || !textStill.current) {
            return;
        }
        if (clickMe.current && pokeBall.current && pikachuJump.current && pikachuRun.current && textBox.current && textStill.current) {
            clickMe.current.style.display = "none";
            pokeBall.current.style.display = "none";
            pikachuJump.current.style.display = "flex";
            setTimeout(function () {
                if (!pikachuJump.current || !pikachuRun.current) {
                    return;
                }
                pikachuJump.current.style.display = "none";
                pikachuRun.current.style.display = "flex";
                setTimeout(function () {
                    if (!pikachuRun.current || !textBox.current) {
                        return;
                    }
                    pikachuRun.current.style.display = "none";
                    textBox.current.style.display = "flex";
                    setTimeout(function () {
                        if (!textBox.current || !textStill.current) {
                            return;
                        }
                        textBox.current.style.display = "none";
                        textStill.current.style.display = "flex";
                    }, 3660);
                }, 1500);
            }, 1000);
        }
    };
    

    return (
        <div id="PokeBallContainer">
            <div id="ClickMe" ref={clickMe}>Click Me!</div>
            <img id="PokeBallGif" ref={pokeBall} src="/pokeball.gif" onClick={handlePokeBallClick}/>
            <img id="PikachuJump" ref={pikachuJump} src="/pikachujump.gif" style={{display: 'none'}}/>
            <img id="PikachuRun" ref={pikachuRun} src="/pikachurun.gif" style={{display: 'none'}}/>
            <img id="TextBox" ref={textBox} src="/textbox.gif" style={{display: 'none'}}/>
            <img id="TextStill" ref={textStill} src="/textstill.webp" style={{display: 'none'}}/>
            
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
}

export default PokeBall;