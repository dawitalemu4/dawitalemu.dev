'use client'
import React from 'react';

const Luffy: React.FC = () => {


  
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
            top: 0;
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
          display: none;
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