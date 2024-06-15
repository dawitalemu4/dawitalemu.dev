"use client";
import React, { useEffect, useRef } from "react";
import "./css/yoshi.scss";

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

        document.addEventListener("mousemove", onMouseMove);

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
        };

    }, [yoshiRef, eyesRef]);

    return (
        <div id="yoshi-container">
            <h2 id="bubble-text">Refresh and move your mouse around Yoshi to see what happens!</h2>
            <div id="yoshi-image-container">    
                <img id="yoshi-eyes" src="/docs/yoshi/eyes.webp" ref={eyesRef} />
                <img id="yoshi-body" src="/docs/yoshi/yoshi.webp" ref={yoshiRef} />
            </div>        
            <div id="mouse-pointer">
                <img src="/docs/yoshi/pointer.webp" />
            </div>
        </div>
    );
};