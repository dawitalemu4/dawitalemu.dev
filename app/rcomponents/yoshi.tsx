'use client'
import React, { useRef, useEffect } from 'react';

const Yoshi: React.FC = () => {
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
    <div id="yoshiContainer">
        <div id="bubbleContainer">
        <h1 id="text">Yoshi's eyes follow your mouse, move your mouse around him to see what happens!</h1>
        </div>
      <img src="yoshi.png" id="yoshi" ref={yoshiRef} />
      <img src="eyes.png" id="eyes" ref={eyesRef} />
      <style>
        {`
          #yoshiContainer {
            display: flex;
            position: absolute;
            top: 50%;
            left: 80%;
            width: 360px;
            height: 450px;
            flex-wrap: wrap;
            transform: translate(-50%,-35%);
          }
          #yoshi {
            display: flex;
            position: relative;   
            transform: scale(0.8);
            margin-top: 0;
            z-index: 1;
          }
          #eyes {
            display: flex;
            position: relative;
            height: 32px;
            bottom: 405px;
            left: 145px;
            z-index: 2;
            flex-shrink: 0;
          }
          #bubbleContainer {
            display: flex;
            position: relative;
            top: 0;
            left: 0;
            align-items: center;
            justify-content: center;
            width: 350px;
            z-index: 1;
          }
          #text {
          display: flex;
          text-align: center;
          font-size: 1rem;
          z-index: 1;
          }
          @media (max-width: 840px) {
            #yoshiContainer {
              transform: translate(-99%,-20%);
              scale: 0.6;
            }
            #bubbleContainer {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Yoshi;