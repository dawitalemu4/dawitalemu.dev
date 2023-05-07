'use client'
import React, { useState, useEffect } from 'react';
import Link from "next/link";

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "Website For Recruiters",
    "Main Website",
    "Light Mode Website",
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
      left: 0
    });
    location.reload();
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
    <div id="navbarContainer" className="flex fixed top-0 w-full h-10 py-10 px-10 items-center text-white">
      <img
        id="bars"
        src="bars.jpg"
        className={showMenu ? 'block' : 'hidden'}
        onClick={() => setShowMenu(!showMenu)}
      />
      <ul
        id="navbar-ul" style={{ display: showMenu ? 'flex' : 'none' }}
        className="flex flex-wrap py-5 px-10 rounded-md ml-auto text-2xl items-center"
      >
        <li id="navbar-home" className="flex-shrink px-5">
          <a href="/" id="home" className="" onClick={handleHomeClick}>
            Home
          </a>
        </li>
        <li id="navbar-experience" className="flex-shrink px-5">
          <a href="/" id="experience" className="" onClick={handleExperienceClick}>
            Experience
          </a>
        </li>
        <li id="navbar-projects" className="flex-shrink px-5">
          <a href="/" id="projects" className="" onClick={handleProjectsClick}>
            Projects
          </a>
        </li>
        <li id="navbar-contact" >
          <a href="/" id="contact" className="flex-shrink px-5" onClick={handleContactClick}>
            Contact
          </a>
        </li>
        <li>
        <Link id="mainButton" className="flex-shrink px-5" href="/mainWebsite">{texts[textIndex]}</Link>
        </li>
      </ul>
      <style>
        {`
       
        #navbarContainer {
          background-color: #171717;
          font-family: Inter, sans-serif; 
          font-weight: 500;
          z-index: 5;
        }

        #mainButton {
          border: 2px solid #ccc;
          padding: 10px;
          border-radius: 10px;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          background-color: #f2f2f2;
          color: black;
          position: fixed;
          top: 13px;
          left: 13px;
          z-index: 4;
          scale: 0.8;
          }

          @media (max-width: 900px) {
            #navbarContainer { 
              width: 100%;
              display: flex;
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
              top: 1;
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
            #mainButton {
              position: static;
              padding: 10px;
              text-align: center;
              margin-top: -5px;
              color: black !important;
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
            }}
        `}
      </style>
    </div>
  );
};

export default Navbar;
