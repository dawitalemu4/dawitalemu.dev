"use client";
import React from "react";
import Link from "next/link";
import { HiArrowNarrowUp } from "react-icons/hi";
import "./css/contact.scss";

export default function Contact() {

    const toTop = () => {
        window.scrollTo({
            top: 0,
            left: 0, 
            behavior: "smooth"
        });
    };

    return (
        <div id="Contact">
            <div id="ContactContainer">
                <div id="ContactHeaderContainer">
                    <h1 id="ContactHeader">Contact Me (You Should)</h1>
                </div>
                <div id="ContactBodyContainer">
                    <div id="ContactIconsContainer">
                        <Link id="ContactEmail" href="https://mail.google.com/mail?view=cm&fs=1&to=dndawita@gmail.com&su=Draft" target="_blank"><img id="EmailIcon" src="/icons/mail.webp" /></Link>
                        <Link id="ContactLinkedin" href="https://www.linkedin.com/in/dawit-alemu4" target="_blank"><img id="LinkedinIcon" src="/icons/in.webp" /></Link>
                        <Link id="ContactGitHub" href="https://github.com/dawitalemu4" target="_blank"><img id="GitHubIcon" src="/icons/github.webp" /></Link>
                    </div>
                    <div id="ContactButtonContainer">
                        <p id="ContactButtonText">Click the arrow to see it all in reverse!</p>
                        <button id="ContactButton" onClick={toTop}><HiArrowNarrowUp /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};
