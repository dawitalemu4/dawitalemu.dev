'use client'
import React, {useState, useEffect} from 'react';

const PacMan: React.FC = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    'dots.png',
    'dots2.png',
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '11.png'
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      const index = Math.floor((scrollPercentage - 10) / (100 / images.length));
      setImageIndex(Math.min(Math.max(index, 0), images.length - 1)); // clamp index to array bounds
      //console.log('scrolling. index:', index);
    };

    window.addEventListener('scroll', handleScroll);

    //console.log('effect called with index', imageIndex);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [imageIndex]);

  return (
    <div id="pacmanContainer">   
      <img src="arcade.png" id='arcade'/>
      <img src="pacmanScene.jpg" id='scene'/>
          <div id="meContainer">
            <h2 id="aboutMe">About Me</h2>
            <img id="da" src="da.jpg"/>
          </div>
        <div id='dotsContainer'>
        <img src={images[imageIndex]} id="dots"/>
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
        #meContainer {
          position: absolute;
          width: -10%;
          height: 27%;
          z-index: 7;
        justify-content: center;
        flex-direction: column;
        border: 1px solid red;
      } 
      #aboutMe {
        position: absolute;
        bottom: 25%;
        font-size: 40px;
        padding-left: 4px;
        border: 1px solid red;
      }
      #da {
        position: absolute;
        top: 68%;
        width: 110px;
        height: 110px;
        border-radius: 100px;
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