'use client'
import React, { useState, useEffect } from 'react';
import Link from "next/link";

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [hovered, setHovered] = useState(false);


  const handleHover = () => {
      setHovered(true);
  }

  const handleLeave = () => {
      setHovered(false);
  }


  const texts = [
    "if (developer) {return 'Click Me!'}",
    "for (website++) {return 'Click Me!'}",
    "for (darkMode) {return 'Click Me!'}",
  ];


  useEffect(() => {
  
    const timer = setTimeout(() => {
      setTextIndex((textIndex + 1) % texts.length);
    }, 4000);
  
    return () => {
      clearTimeout(timer);
    };

  }, [textIndex, texts.length]);


  const handleHomeClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const targetPosition = document.body.scrollHeight * 0;
    window.scrollTo({
      top: targetPosition,
      left: 0, 
      behavior: 'smooth'
    });
  };


  const handleExperienceClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const targetPosition = document.body.scrollHeight * 0.47;
    window.scrollTo({
      top: targetPosition,
      left: 0,
      behavior: 'smooth'
    });
  };
  

  const handleProjectsClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const targetPosition = document.body.scrollHeight * 0.67;
    window.scrollTo({
      top: targetPosition,
      left: 0,
      behavior: 'smooth' 
    });
  };


  const handleContactClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const targetPosition = document.body.scrollHeight * 1;
    window.scrollTo({
      top: targetPosition,
      left: 0,
      behavior: 'smooth'
    });
  };


  return (
    <div id="Navbar" onMouseOver={handleHover} onMouseOut={handleLeave}>
      <img id="MenuBars" src="bars.jpg" style={{display: hovered ? 'none' : 'flex'}}/>
      <div id="navbar-container" className="flex fixed top-0 w-full h-10 py-10 px-10 items-center text-black" style={{ display: hovered ? "flex" : "none"}}>
        <img id="bars" src="bars.jpg" className={showMenu ? 'flex' : 'hidden'} onClick={() => setShowMenu(!showMenu)}/>
        <ul id="navbar-ul" style={{ display: showMenu ? 'flex' : 'none' }} className="flex flex-wrap py-5 px-10 rounded-md ml-auto text-2xl items-center">
          <li id="navbar-home" className="flex-shrink px-5">
            <a href="/" id="home" className="" onClick={handleHomeClick}>Home</a>
          </li>
          <li id="navbar-experience" className="flex-shrink px-5">
            <a href="/" id="experience" className="" onClick={handleExperienceClick}>Experience</a>
          </li>
          <li id="navbar-projects" className="flex-shrink px-5">
            <a href="/" id="projects" className="" onClick={handleProjectsClick}>Projects</a>
          </li>
          <li id="navbar-contact" >
            <a href="/" id="contact" className="flex-shrink px-5" onClick={handleContactClick}>Contact</a>
          </li>
          <li>
            <Link id="devButton" href="/">{texts[textIndex]}</Link>
          </li>
        </ul>
        <style>
          {`

          #Navbar {
            display: flex;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            width: 100vw;
            height: 70px;
            justify-content: center;
            align-items: center;
            z-index: 10;
          }

          @keyframes dropdown {
            0% {
              top: -50px;
            }
            100% {
              top: 0;
            }
          }

          #MenuBars {
            display: flex;
            position: fixed;
            right: 10px;
            top: 10px;
            width: 70px;
            height: 70px;
            background-color: black;
            border-radius: 10px;
          }

          #MenuBars:hover {
            opacity: 0;
          }
        
          #navbar-container {
            background-color: white;
            font-family: Inter, sans-serif;
            font-weight: 500;
            border-bottom: 1px solid #ccc;
            z-index: 5;
            animation: dropdown 0.3s ease-in-out;
          }

          #devButton {
            font-family: Courier New, Courier, monospace;
            color: #39FF14;
            border: 1px solid #171717;
            padding: 10px;
            border-radius: 10px;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            background-color: black;
            position: fixed;
            top: 13px;
            left: -1px;
            z-index: 4;
            scale: 0.8;
            transform: scale(1);
            transition: transform 0.5s ease-in-out;
            animation: dropdown 0.25s ease-in-out;
            }

            a:hover {
              opacity: 0.5;
            }

            @media (max-width: 1177px) and (min-width: 900px) {
              #devButton {
                transform: scale(0.8) translateX(-70px);
                transition: transform 0.4s ease-in-out;  
              }
            }

            @media (max-width: 1048px) and (min-width: 900px){
              #devButton {
                transform: scale(0.7) translateX(-150px);
                transition: transform 0.4s ease-in-out;  
              }
            }

            @media (max-width: 953px) and (min-width: 900px){
              #devButton {
                transform: scale(0.6) translateX(-200px);
                transition: transform 0.4s ease-in-out;  
              }
            }

            @media (max-width: 916px) and (min-width: 900px){
              #devButton {
                transform: scale(0.6) translateX(-250px);
                transition: transform 0.4s ease-in-out;  
              }
            }

            @media (max-width: 900px) {
              #Navbar {
                display: flex !important;
              }

              #MenuBars {
                background-color: transparent; 
              }

              #navbar-container { 
                width: 100%;
                display: flex !important;
                justify-content: center;
                background-color: #171717;
                position: fixed;
                top: 0;
                left: 0;
                z-index: 5;
                height: 70px;
              }

              #bars {
                cursor: pointer;
                display: flex;
                width: 70px;
                height: 70px;
                position: fixed;
                right: 15px;
                z-index: 4;
              }

              #navbar-ul {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background-color: #171717;
                position: fixed;
                top: 70px;
                left: 0;
                z-index: 3; 
                border-bottom-left-radius: 30px;
                border-bottom-right-radius: 30px;
              }

              #navbar-ul li {
                padding: 6px;
                font-size: 1.5rem;
              }

              #navbar-ul a {
                color: white;
              }

              #devButton {
                position: static;
                padding: 4px;
                text-align: center;
                margin-top: -5px;
                color: #39FF14 !important;
              }

              #bars:hover {
                opacity: 0.5;
              }
            }

            @media (min-width: 901px) {
              #bars {
                display: none;
              }
              
              #navbar-ul {
                display: flex !important;
              }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Navbar;
