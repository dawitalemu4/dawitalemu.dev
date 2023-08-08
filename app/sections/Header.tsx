'use client'
import React, { useState, useEffect } from 'react';
import Link from "next/link";

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showList, setShowList] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [hovered, setHovered] = useState(false);


  const handleHover = () => {
      setHovered(true);
  }

  const handleLeave = () => {
      setHovered(false);
      setShowList(false);
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu);  
    setShowList(!showList);  
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
    handleLeave();
  };


  const handleExperienceClick = () => {
    const experiencePosition = document.getElementById('Experience');
    if (!experiencePosition) return;

    window.scrollTo({
      top: experiencePosition.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
    handleLeave();
  };
  

  const handleProjectsClick = () => {
    const projectsPosition = document.getElementById('Projects');
    if (!projectsPosition) return;
    
    window.scrollTo({
      top: projectsPosition.offsetTop,
      left: 0,
      behavior: 'smooth' 
    });
    handleLeave();
  };


  const handleContactClick = () => {
    const targetPosition = document.body.scrollHeight * 1;
    window.scrollTo({
      top: targetPosition,
      left: 0,
      behavior: 'smooth'
    });
    handleLeave();
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
    <div id="Navbar" onMouseOver={handleHover} onMouseOut={handleLeave}>
      <img id="MenuBars" src="bars.jpg" style={{display: hovered ? 'none' : 'flex'}}/>
      <div id="NavbarContainer" style={{ display: hovered ? "flex" : "none"}}>
        <img id="Bars" src="bars.jpg" style={{display: showMenu ? 'flex' : 'hidden'}} onClick={toggleMenu}/>
        <ul id="NavbarListContainer" style={{ display: showList ? 'flex' : 'none' }}>
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
          <li>
            <Link id="DevButton" href="/docs">{texts[textIndex]}</Link>
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
            width: 99.7vw;
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
        
          #NavbarContainer {
            display: flex;
            position: relative;
            width: 100%;
            height: 100%;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            background-color: white;
            font-family: Inter;
            border-bottom: 1px solid #ccc;
            animation: dropdown 0.3s ease-in-out;
          }

          #DevButton {
            font-family: Consolas;
            color: #39FF14;
            border: 1px solid #171717;
            padding: 10px;
            border-radius: 10px;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            background-color: black;
            position: fixed;
            top: 8px;
            left: -1px;
            scale: 0.9;
            transform: scale(1);
            transition: transform 0.5s ease-in-out;
            animation: dropdown 0.25s ease-in-out;
          }

          #DevButton:hover { opacity: 0.8; }

          #NavbarListContainer {
            display: flex;
            position: relative;
            width: 40%;
            height: 100%;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }

          #NavbarListContainer li {
            font-size: 20px;
            font-family: InterMedium;
          }

          #home, #experience, #projects, #contact {
            cursor: pointer;
          }

          #home:hover, #experience:hover, #projects:hover, #contact:hover {
            opacity: 0.8;
          }

          @media (max-width: 900px) {
            #Navbar {
              display: flex !important;
            }

            #MenuBars {
              background-color: transparent; 
            }

            #NavbarContainer { 
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

            #Bars {
              cursor: pointer;
              display: flex;
              width: 70px;
              height: 70px;
              position: fixed;
              right: 15px;
              z-index: 4;
            }

            #NavbarListContainer {
              width: 100%;
              height: 250px;
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

            #NavbarListContainer li {
              padding: 6px;
              font-size: 17px;
            }

            #home, #experience, #projects, #contact {
              color: white;
            }

            #DevButton {
              position: static;
              padding: 4px;
              text-align: center;
              margin-top: -5px;
              color: #39FF14 !important;
            }

            #Bars:hover {
              opacity: 0.5;
            }
          }

          @media (min-width: 901px) {
            #Bars {
              display: none;
            }
            
            #NavbarListContainer {
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
