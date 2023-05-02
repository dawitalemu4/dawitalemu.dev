'use client'
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [shouldShowMenu, setShouldShowMenu] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setShouldShowMenu(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="navbar-container" className="flex sticky top-0 w-full h-10 py-10 px-10 bg-transparent items-center text-white">
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
          <a href="/" id="home" className="">
            Home
          </a>
        </li>
        <li id="navbar-experience" className="flex-shrink px-5">
          <a href="/" id="experience" className="">
            Experience
          </a>
        </li>
        <li id="navbar-projects" className="flex-shrink px-5">
          <a href="/" id="projects" className="">
            Projects
          </a>
        </li>
        <li id="navbar-contact" className="flex-shrink px-5">
          <a href="/" id="contact" className="">
            Contact
          </a>
        </li>
      </ul>
      <style>
        {`
          @media (max-width: 768px) {
            #bars {
              margin-top: 3%;
              margin-bottom: 3%;
              cursor: pointer;
              display: flex;
              justify-content: center;
              align-items: center;
              scale: 10%;
            }
            #navbar-ul {
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              background-color: rgba(255, 255, 255, 0.9);
              position: absolute;
              top: 100%;
              left: 0;
              right: 0;
              z-index: 1;
              padding: 10px;
              border-radius: 10px;
            }
            #navbar-ul li {
              margin-bottom: 10px;
              font-size: 1.5rem;
            }
            #navbar-ul a {
              color: black;
              text-decoration: none;
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
