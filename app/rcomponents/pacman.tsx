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
        <div id='dotsContainer'>
          <img src={images[imageIndex]} id="dots"/>
        </div>
        <div id="meContainer">
          <div id='topMeContainer'>
            <h3 id="aboutMe">About Me</h3>
          </div>
          <div id='bottomMeContainer'>
            <img id="da" src="da.jpg"/>
          </div>
        </div>
    
      <style>
        {`
         #pacmanContainer {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 5%;
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
          display: flex;
          position: absolute;
          top: 46%;
          right: 29%;
          width: 16%;
          height: 26%;
          z-index: 2;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        } 
        #topMeContainer {
          display: flex;
          position: relative;
          top: 0;
          margin-bottom: 33%;
          width: 100%;
          height: 32%;
          align-items: center;
          justify-content: center;
        }
        #bottomMeContainer {
          display: flex;
          position: relative;
          bottom: 0;
          margin-top: 33%;
          width: 100%;
          height: 34%;
          align-items: center;
          justify-content: center;
        }
        #aboutMe {
          display: flex;
          position: absolute;
          font-family: Press Start P;
          color: white;
          font-size: 200%;
          z-index: 2;
          margin-top: 3%;
        }
        
        #da {
          display: flex;
          position: absolute;
          left: 22%;
          width: 55%;
          height: 90%;
          margin-bottom: 3%;
          border-radius: 10px;
          z-index: 2;
        }

        @media (min-width: 2000px) {
          #aboutMe {
            margin-left: 10%;
            margin-top: 0;
          }
        #da {
          margin-bottom: 0;
          left: 25%;
        }
        }

        @media (max-width: 1300px) {
        #meContainer {
          display: none;
        }
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