'use client'
import React, {useEffect} from 'react';

const PacMan: React.FC = () => {
      

  return (
    <div id="pacmanContainer">   
      <img src="arcade.png" id='arcade'/>
        <img src="pacmanScene.jpg" id='scene'/>
        <div id='dotsContainer'>
        <img src="dots.png" id="dots"/>
       </div>
    
      <style>
        {`
         #pacmanContainer {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 120%;
            left: 10%;
            width: 80%;
            justify-content: center;
            align-items: center;
         }  
          #arcade {
            position: relative;
            display: flex;
            width: 100%;
            z-index: 1;
          }
        #scene {
            position: absolute;
            left: 24.9%;
            top: 31.5%;
            width: 50%;
            height: 54.3%;
            border: 50px solid black;
            z-index: 2;
        }
        #dotsContainer {
            position: absolute;
            display: flex;
            top: 31%;
            width: 50%;
            height: 54.3%;
            z-index: 3;
            align-items: center;
            justify-content: center;
          }
        #dots {
            position: relative;
            bottom: 30%;
            width: 5%;
            z-index: 3;
        }

        @media (max-width: 900px) {
          #pacmanContainer {
            width: 100%;
            left: 0;
          }
            #scene {
                border: 0px;
            }     
          #dots{
            bottom: 37%;
          }   
        }
       
        `}
      </style>
    </div>
    
  );
};

export default PacMan;