"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { HeroData } from "../utils/data";
import { HeroOption } from "../utils/types";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineArrowSmLeft, HiArrowNarrowDown} from "react-icons/hi";
import "./css/hero.scss";

export default function Hero() {

    const scrollToElement = (elementId: string) => {

        const project = document.getElementById(elementId);

        if (project) {
            window.scrollTo({
                top: project.getBoundingClientRect().top,
                behavior: "smooth"
            });
        };
    };

    const isContainerVisible = () => {

        const container = document.getElementById("hero");

        if (!container) return;

        const containerRect = container.getBoundingClientRect();
        const targetPosition = containerRect.bottom;
        const arrow = document.getElementById("back-arrow");

        if (!arrow) { return };

        if (targetPosition > 0) {
            arrow.style.display = "flex";
        } else {
            arrow.style.display = "none";
        };
    };
    
    const bottom = () => {

        const element = document.getElementById("mini-games");

        if (!element) return;

        window.scrollTo({
            top: element.getBoundingClientRect().top,
            behavior: "smooth"
        });
    };

    useEffect(() => {

        window.addEventListener("scroll", isContainerVisible);

        return () => {
            window.removeEventListener("scroll", isContainerVisible);
        };

    }, []);

    return (
        <div id="hero">
            <Link id="back-arrow" href="/"><HiOutlineArrowSmLeft /></Link>
            <div id="hero-container">
                <div id="hero-header">
                    <h1>Docs</h1>
                    <p>Mini-games at the bottom</p>
                    <div id="bottom-arrow" onClick={bottom}><HiArrowNarrowDown /></div>
                </div>
                <div id="hero-list">
                    {HeroData.map((item: HeroOption) => (
                        <div id="hero-list-item" onClick={() => scrollToElement(`${item.element_id}`)}>
                            <p>{item.title} <IoIosArrowDown /></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
