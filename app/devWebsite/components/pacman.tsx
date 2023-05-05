'use client'
import React from 'react';

const PacMan: React.FC = () => {

    const images: File[] = [
        new File([''], 'dots.png', { type: 'image/png' }),
        new File([''], 'dots2.png', { type: 'image/png' }),
        new File([''], '1.png', { type: 'image/png' }),
        new File([''], '2.png', { type: 'image/png' }),
        new File([''], '3.png', { type: 'image/png' }),
        new File([''], '4.png', { type: 'image/png' }),
        new File([''], '5.png', { type: 'image/png' }),
        new File([''], '6.png', { type: 'image/png' }),
        new File([''], '11.png', { type: 'image/png' }),
      ];
      let currentImage: number = 0;
      
      function changeImage(imageIndex: number): void {
        currentImage = imageIndex;
        const dotsImage = document.getElementById("dots") as HTMLImageElement;
        if (dotsImage) {
          dotsImage.src = URL.createObjectURL(images[currentImage]);
        }
      }
      
      document.addEventListener("scroll", function(event) {
        const currentScroll = window.scrollY / (document.body.offsetHeight - window.innerHeight) * 100;
        if (currentScroll >= 10 && currentScroll <= 33) {
          const newImageIndex = Math.floor((currentScroll - 10) / 2.5);
          if (newImageIndex !== currentImage) {
            changeImage(newImageIndex);
          }
        }
      });
      

  return (
    <div id="pacmanContainer">
        <img src="pacmanScene.jpg" id='scene'/>
        <img src="dots.png" id="dots"/>
    
      <style>
        {`
         #pacmanContainer {
            display: flex;
            position: relative;
            top: 850px;
            margin: 0;
         }
        #scene {
            position: relative;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1;
        }
        #dots {
            position: absolute;
            top: 0;
            left: 50%;
            z-index: 2;
        }
        `}
      </style>
    </div>
  );
};

export default PacMan;