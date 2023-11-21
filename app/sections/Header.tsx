'use client'
import React, { useState, useEffect } from 'react';
import Link from "next/link";

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [rightAmount, setRightAmount] = useState('-380px');
  const [textIndex, setTextIndex] = useState(0);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    if (showMenu && window.innerWidth > 600) {
      setRightAmount('-380px');
    } else if (showMenu && window.innerWidth < 600) {
      setRightAmount('-100%');
    }
  };


  const texts = [
    "if (SWE || dev) {return 'Click Me!'}",
    "for (docs+more) {return 'Click Me!'}",
    "for (miniGames) {return 'Click Me!'}",
  ];


  const handleHomeClick = () => {
    const targetPosition = document.body.scrollHeight * 0;
    window.scrollTo({
      top: targetPosition,
      left: 0, 
      behavior: 'smooth'
    });
    toggleMenu();
  };


  const handleExperienceClick = () => {
    const experiencePosition = document.getElementById('Experience');
    if (!experiencePosition) return;

    window.scrollTo({
      top: experiencePosition.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
    toggleMenu();
  };
  

  const handleProjectsClick = () => {
    const projectsPosition = document.getElementById('Projects');
    if (!projectsPosition) return;
    
    window.scrollTo({
      top: projectsPosition.offsetTop,
      left: 0,
      behavior: 'smooth' 
    });
    toggleMenu();
  };


  const handleContactClick = () => {
    const targetPosition = document.body.scrollHeight * 1;
    window.scrollTo({
      top: targetPosition,
      left: 0,
      behavior: 'smooth'
    });
    toggleMenu();
  };


  useEffect(() => {
  
    const timer = setTimeout(() => {
      setTextIndex((textIndex + 1) % texts.length);
    }, 4000);
  
    return () => {
      clearTimeout(timer);
    };

  }, [textIndex, texts.length]);



  return (
    <div id="Navbar">
      <img id="MenuBars" src="bars.webp" onClick={toggleMenu} />
      <div id="NavbarContainer" style={{ right: showMenu ? "0px" : `${rightAmount}`, transition: "right 0.5s ease-in-out" }}>
        <div id="XContainer">
          <img id="X" src="x.webp" onClick={toggleMenu} />
        </div>
        <ul id="NavbarListContainer">
          <li id="NavbarHome">
            <div id="home" onClick={handleHomeClick}>Home</div>
          </li>
          <li id="NavbarExperience">
            <div id="experience" onClick={handleExperienceClick}>Experience</div>
          </li>
          <li id="NavbarProjects">
            <div id="projects" onClick={handleProjectsClick}>Projects</div>
          </li>
          <li id="NavbarContact">
            <div id="contact" onClick={handleContactClick}>Contact</div>
          </li>
        </ul>
        <div id="DevButtonContainer">
          <Link id="DevButton" href="/docs">{texts[textIndex]}</Link>
        </div>
        <style>
          {`

          #Navbar {
            display: flex;
            position: fixed;
            top: 0;
            right: 0;
            width: 380px;
            height: 100vh;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 10;
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
            cursor: pointer;
          }
        
          #NavbarContainer {
            display: flex;
            position: fixed;
            top: 0;
            width: 380px;
            height: 100%;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            background-color: white;
            font-family: Inter;
            border-left: 1px solid black;
          }

          #XContainer {
            display: flex;
            position: relative;
            width: 100%;
            height: 5%;
            justify-content: flex-end;
            align-items: center;
            padding-right: 20px;
          }

          #X {
            width: 60px;
            height: 60px;
            cursor: pointer;
          }

          #DevButtonContainer {
            display: flex;
            position: relative;
            width: 100%;
            height: 50px;
            align-items: center;
            justify-content: center;
          }

          #DevButton {
            display: flex;
            position: relative;
            width: 90%;
            height: 100%;
            align-items: center;
            justify-content: center;
            background-color: black;
            border-radius: 10px;
            font-family: Consolas;
            color: #39FF14;
            border: 1px solid #171717;
            transition: transform 0.5s ease-in-out;
            animation: dropdown 0.25s ease-in-out;
          }

          #DevButton:hover { opacity: 0.8; }

          #NavbarListContainer {
            display: flex;
            position: relative;
            width: 100%;
            height: 60%;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
          }

          #NavbarListContainer li {
            font-size: 28px;
            font-family: InterSemi;
          }

          #home, #experience, #projects, #contact {
            cursor: pointer;
          }

          #home:hover, #experience:hover, #projects:hover, #contact:hover {
            opacity: 0.8;
          }

          @media (max-width: 600px) {
            #Navbar { width: 100%; }
            #NavbarContainer { width: 100%; }
          }
          
          `}
        </style>
      </div>
    </div>
  );
};

export default Navbar;
