import React from 'react';

function Navbar() {
  return (
    <div id="navbar-container" className="flex sticky top-0 w-full h-10 py-10 px-10 bg-transparent border border-color-white items-center text-white">      
       <img id="bars" src="../bars.jpg" className="hidden"/>
       <ul id="navbar-ul" className="flex flex-wrap py-5 px-10 rounded-md ml-auto text-2xl items-center">
    <li id="navbar-home" className="flex-shrink px-5">
      <a href="/" id="home" className="">Home</a>
    </li>
    <li id="navbar-experience" className="flex-shrink px-5">
      <a href="/" id="experience" className="">Experience</a>
    </li>
    <li id="navbar-projects" className="flex-shrink px-5">
      <a href="/" id="projects" className="">Projects</a>
    </li>
    <li id="navbar-contact" className="flex-shrink px-5">
      <a href="/" id="contact" className="">Contact</a>
    </li>
        </ul>
        <style>
        {`
          @media (max-width: 768px) {
            #bars{ display: block; position: absolute; left: 50%; }
            #navbar-ul { display: none; }
          }
        `}
      </style>
    </div>
  );
}

export default Navbar;
