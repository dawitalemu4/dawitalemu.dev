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

        const element = document.getElementById(elementId);

        if (element) {

            const elementRect = element.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const offset = (viewportHeight - elementRect.height) * 0.50;
            const targetPosition = elementRect.top - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        };
    };

    const isContainerVisible = () => {

        const container = document.getElementById("Hero");

        if (!container) return;

        const containerRect = container.getBoundingClientRect();
        const targetPosition = containerRect.bottom;
        const arrow = document.getElementById("BackContainer");

        if (!arrow) { return };

        if (targetPosition > 0) {
            arrow.style.display = "flex";
        } else {
            arrow.style.display = "none";
        };
    };
    
    const bottom = () => {

        const element = document.getElementById("MiniGames");

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
        <div id="Hero">
            <div id="BackContainer">
                <Link id="Back" href="/"><HiOutlineArrowSmLeft /></Link>
            </div>
            <div id="HeroContainer">
                <div id="HeroHeaderContainer">
                    <h1 id="HeroHeader">Docs</h1>
                    <p id="HeroSubHeader">Mini-games at the bottom</p>
                    <div id="Bottom" onClick={bottom}><HiArrowNarrowDown /></div>
                </div>
                <div id="HeroListContainer">
                    <div id="HeroList">
                        {HeroData.map((item: HeroOption) => (
                            <div id="HeroListItemContainer">
                                <div id="HeroListItem" onClick={() => scrollToElement(`${item.element_id}`)}>{item.title} <IoIosArrowDown /></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
