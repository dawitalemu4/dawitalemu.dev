'use client'
import React, {useEffect} from 'react';

const Luffy = () => {

  useEffect(() => {
    let gif = document.getElementById("luffy");
let gifs = ["hatclose.png", "hatmid.png", "hatopen.png"];
let message = document.getElementById("warningMessage");
let gameIntervalId;
let startTime;

startGame();

gif.addEventListener("click", onClick);
gif.addEventListener("contextmenu", onClick);

gif.addEventListener("mouseover", function() {
  gif.style.cursor = "pointer";
});

function startGame() {
  message.style.visibility = "hidden";
  startTime = Date.now();
  gif.src = "luffy.gif";
  gameIntervalId = setInterval(function() {
    startTime = Date.now();
    gif.src = "luffy.gif";
  }, 5040);
}

function onClick(event) {
  event.preventDefault();
  let now = Date.now();
  if (now - startTime >= 3700 && now - startTime <= 5040) {
    message.style.visibility = "hidden";
    displayWinOutcome();
  } else {
    message.style.visibility = "visible";
    setTimeout(function() {
      message.style.visibility = "hidden";
    }, 2000);
  }
}

function displayWinOutcome() {
  clearInterval(gameIntervalId);
  let i = 0;
  gameIntervalId = setInterval(function() {
    gif.src = gifs[i];
    i++;
    if (i === gifs.length) {
      clearInterval(gameIntervalId);
      gif.src = gifs[i-1];
      message.style.visibility = "hidden";
    }
    if(i == gifs[1]) {message.style.visibility = "hidden";}
  }, 400);
}

  }, []);
  
  return (
    <div id="luffyContainer">
      <img src="luffy.gif" id="luffy"/>
      <div id="warningMessageContainer">
        <h5 id="warningMessage">Tap left click while he is pulling - Don't drag or hold</h5>
        </div>
      <style>
        {`
          #luffyContainer {
            display: flex;
            position: absolute;
            top: 0;
            left: 5%;
            right: 5%;
            width: 90%;
            height: 60%;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
          }
          #luffy {
            display: flex;
            position: relative;  
            z-index: 1;
            width: 35%;
          }
          #warningMessageContainer {
            display: flex;
            position: relative;
            top: -5%;
            width: 100%;
            align-items: center;
            justify-content: center;
            z-index: 1;
          }
          #warningMessage {
          display: flex;
          font-family: Inter;
          color: white;
          text-align: center;
          font-size: 150%;
          z-index: 1;
          }
          @media (max-width: 1370px) {
            #luffyContainer {
              height: 55%;
            }
            #luffy {
              width: 45%;
            }
          @media (max-width: 900px) {
            #warningMessage {
              font-size: 100%;
            }
            #luffy {
              width: 65%;
            }
          }
          @media (max-width: 700px) {
            #luffy {
              width: 80%;
            }
          }
          @media (max-width: 400px) {
            #luffy {
              width: 85%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Luffy;