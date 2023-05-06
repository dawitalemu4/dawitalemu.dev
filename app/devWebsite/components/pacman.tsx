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
      <div id='gameBorder'>
        <img src="pacLogo.png" id='pacLogo'/>
        <img src="pacmanScene.jpg" id='scene'/>
        <img src="dots.png" id="dots" className='hidden'/>
    
      <style>
        {`
         #pacmanContainer {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 110%;
            justify-content: center;
            align-items: center;
            background-color: yellow;
            border-top: 150px solid yellow;
            border-bottom: 150px solid yellow;
         }  
        #gameBorder {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 80%;
        justify-content: center;
        align-items: center;
        border: 100px solid red;
        background-color: black;
        }
        #pacLogo {
            position: relative;
            display: flex;
            top: -150px;
         }
        #scene {
            position: relative;
            display: flex;
            bottom: 150px;
            left: 0;
            width: 90%;
            z-index: 1;
            border: 1px solid green;
        }
        #dots {
            position: relative;
            top: 1px;
            z-index: 2;
        }

        @media (max-width: 750px) {
            #gameBorder {
                width: 100%;
                border: 0px;
            }
            #scene {
                width: 100%;
                transform: translateY(150px);
                border: 0px;
            }
            #pacLogo {
                display: none;
            }
            #pacmanContainer {
            border: 0px;
            }
        }
       @media (max-width: 1120px) {
        #pacLogo {
            transform: translateY(80px);
        `}
      </style>
    </div>
    </div>
  );
};

export default PacMan;