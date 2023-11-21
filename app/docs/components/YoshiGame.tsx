"use client"
import React, { useEffect, useRef } from "react";

export default function Yoshi() {
    const yoshiRef = useRef<HTMLImageElement>(null);
    const eyesRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (!yoshiRef.current || !eyesRef.current) return;

        const eyes = eyesRef.current;
        const anchor = yoshiRef.current;
        const rekt = anchor.getBoundingClientRect();
        const anchorX = rekt.left + rekt.width / 2;
        const anchorY = rekt.top + rekt.height / 2;

        const onMouseMove = (e: MouseEvent) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const speed = 2.5;
            const limit = 7;
            let x = (mouseX - anchorX) * speed;
            let y = (mouseY - anchorY) * speed;
            x = Math.min(limit, Math.max(-limit, x));
            y = Math.min(limit, Math.max(-limit, y));
            eyes.style.transform = `translate(${x}px, ${y}px)`;
        };

        document.addEventListener('mousemove', onMouseMove);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
        };
        
    }, [yoshiRef, eyesRef]);

    return (
    <div id="YoshiContainer">
        <p id="BubbleText">Refresh and move your mouse around Yoshi to see what happens!</p>
        <div id="YoshiImgContainer">    
            <img id="Eyes" src="eyes.webp" ref={eyesRef} />
            <img id="YoshiImg" src="yoshi.webp" ref={yoshiRef} />
        </div>        
        <div id="MouseContainer">
            <img id="MousePointer" src="pointer.webp"/>
        </div>
        <style>
            {`

            @keyframes updown {
                0% { top: 0; }
                25% { top: -200px; }
                75% { top: 200px; }
                100% { top: 0; }
            }

            #YoshiContainer {
                display: flex;
                position: relative;
                width: 100%;
                height: 100%;
                flex-direction: row;
                justify-content: center;
                align-items: center;
            }
            
            #BubbleText {
                display: flex;
                position: absolute;
                top: 10%;
                font-size: 20px;
                text-align: center;
                color: white;
            }

            #MouseContainer {
                display: flex;
                position: relative;
                width: 10%;
                height: 100%;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            #MousePointer {
                width: 15px;
                position: relative;
                animation: updown 5s ease-in-out infinite;
            }

            #YoshiImgContainer {
                display: flex;
                position: relative;
                width: 50%;
                height: 50%;
                padding-left: 10%;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            #YoshiImg {
                position: absolute;
                width: 80%;
                height: 100%;
                z-index: 2;
            }

            #Eyes {
                position: absolute;
                top: 10%;
                width: 16%;
                height: 8%;
                z-index: 3;
            }

            @media (max-width: 1000px) {

                #BubbleText { font-size: 13px; }

                @keyframes updown {
                    0% { top: 0; }
                    25% { top: -100px; }
                    75% { top: 100px; }
                    100% { top: 0; }
                }

            }
            
            `}
        </style>
    </div>
    );
};