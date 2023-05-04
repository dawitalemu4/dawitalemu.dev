'use client'
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [shouldShowMenu, setShouldShowMenu] = useState(typeof window !== 'undefined' && window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setShouldShowMenu(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleHomeClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
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
    <div id="navbar-container" className="flex sticky top-0 w-full h-10 py-10 px-10 items-center text-white">
      <img
        id="bars"
        src="bars.jpg"
        className={shouldShowMenu ? 'block' : 'hidden'}
        onClick={() => setShowMenu(!showMenu)}
      />
      <ul
        id="navbar-ul"
        style={{ display: shouldShowMenu ? (showMenu ? 'flex' : 'none') : 'flex' }}
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
        <li id="navbar-contact" className="flex-shrink px-5">
          <a href="/" id="contact" className="" onClick={handleContactClick}>
            Contact
          </a>
        </li>
      </ul>
      <style>
        {`
        #navbar-container {
          background-color: #171717;
        }
          @media (max-width: 768px) {
            #navbar-container { 
              width: 100%;
              display: flex;
              justify-content: center;
              background-color: #171717;
              position: fixed;
              top: 0;
              left: 0;
              z-index: 1;
              height: 70px;
            }
            #bars {
              cursor: pointer;
              display: flex;
              width: 70px;
              height: 70px;
              position: fixed;
              top: 1;
              z-index: 1;
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
              z-index: 1; 
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
            #bars:hover {
              opacity: 0.5;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;
