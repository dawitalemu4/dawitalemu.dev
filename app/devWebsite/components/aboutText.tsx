'use client'
import React from 'react';


const AboutText: React.FC = () => {

    return(
        <div>
        <div id="AboutText">
<p>Hello! My name is Dawit Alemu and I'm currently a junior at Towson University.

<br/><br/>My main interests are front end web and game development.

<br/><br/>Tap left click while he's pulling his fishing rod!</p>
            
            <style>
            {`
            #AboutText {
            display: flex;
            flex-direction: column;
            position: relative;
            top: 17%;
            left: 0;
            padding: 20px;
            }
            p{
                font-family: Inter, sans-serif;
                font-weight: 700;
                color: white;
                font-size: 4rem;
                opacity: 0;
            transform: translateX(-50px);
            animation: fadeInLeft 3s ease forwards;
            }
            h2 {
                font-family: Inter, sans-serif;
                font-weight: 600;
                color: white;
                font-size: 2.2rem;
                animation-delay: 1s;
            }

            @keyframes fadeInLeft {
                from {
                  opacity: 0;
                  transform: translateX(-50px);
                }
                to {
                  opacity: 1;
                  transform: translateX(0);
                }
              }


            `}
            </style>
            
        </div>
        <div id="scroll-down-animation">        
            <span id="mouse">
              <span id="move"></span>
            </span>
           
        <style>
            {`
                          #scroll-down-animation {
                            position: absolute;
                            top: 100%;
                            left: 50%;
                            transform: translate(-50%,-50%);
                          }
                          
                          
                          #mouse {
                            margin: 0 auto;
                            display: block;
                            border-radius: 50px;
                            border: 2px solid #fff;
                            height: 100px;
                            width: 50px;
                            position: relative;
                          }
                          
                          #move {
                            position: absolute;
                            background-color: #fff;
                            height: 10px;
                            width: 10px;
                            border-radius: 50%;
                            left: 50%;
                            transform: translateX(-50%);
                            animation: move 3s linear infinite;
                          }
                          
                          
                          @keyframes move {
                            0% {
                              transform: translate(-50%,10px);
                              opacity: 0;
                            }
                            50% {
                              transform: translate(-50%,40px);
                              opacity: 1;
                            }
                            100% {
                              transform: translate(-50%,80px);
                              opacity: 0;
                            }
                          }
                          
                          
            `}
        </style>
        </div>
        </div>
    )
}

export default AboutText;
