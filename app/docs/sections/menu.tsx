"use client";
import React, { useEffect } from "react";
import { Link } from "next-view-transitions";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineArrowSmLeft, HiArrowNarrowDown } from "react-icons/hi";
import { MenuData } from "../data";
import { MenuOption } from "../../../types/docs";
import "./css/menu.scss";

export default function Menu() {

    const scrollToElement = (elementId: string) => {

        const project = document.getElementById(elementId);

        if (project) {
            project.scrollIntoView({ behavior: "smooth", block: "start" }); 
        };
    };

    const isContainerVisible = () => {

        const container = document.getElementById("menu");

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

    useEffect(() => {

        window.addEventListener("scroll", isContainerVisible);

        return () => {
            window.removeEventListener("scroll", isContainerVisible);
        };

    }, []);

    return (
        <div id="menu">
            <Link id="back-arrow" href="/" scroll={false}><HiOutlineArrowSmLeft /></Link>
            <div id="menu-container">
                <div id="menu-header">
                    <h1>Docs</h1>
                    <p>Mini-games at the bottom</p>
                    <div id="bottom-arrow" onClick={() => scrollToElement("mini-games")}><HiArrowNarrowDown /></div>
                </div>
                <div id="menu-list">
                    {MenuData.map((item: MenuOption) => (
                        <div id="menu-list-item" key={item.element_id} onClick={() => scrollToElement(`${item.element_id}`)}>
                            <p>{item.title} <IoIosArrowDown /></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
