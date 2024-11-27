"use client";
import React from "react";
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
        <div id="contact">
            <div id="contact-header">
                <h1>Contact Me (You Should)</h1>
            </div>
            <div id="contact-container">
                <div id="contact-icons">
                    <a href="https://mail.google.com/mail?view=cm&fs=1&to=dndawita@gmail.com&su=Draft" target="_blank" aria-label="Email Dawit Alemu">
                        <img src="/icons/mail.webp" alt="Email Icon" />
                    </a>
                    <a href="https://github.com/dawitalemu4" target="_blank" aria-label="View Dawit Alemu's GitHub">
                        <img src="/icons/github.webp" alt="GitHub Icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/dawit-alemu4" target="_blank" aria-label="Visit Dawit Alemu's Linkedin">
                        <img src="/icons/in.webp" alt="Linkedin Icon" />
                    </a>
                </div>
                <div id="contact-arrow-button">
                    <h3>Click the arrow to see it all in reverse!</h3>
                    <HiArrowNarrowUp onClick={toTop} />
                </div>
            </div>
        </div>
    );
};
