import React from "react";
import { Metadata } from "next";
import Menu from "./sections/menu";
import Projects from "./sections/projects";
import MiniGames from "./sections/mini-games";

export const metadata: Metadata = {
    title: "Dawit Alemu's Docs",
    description: "Portfolio By Dawit Alemu"
};

export default function Docs() {
    return (
        <>
            <Menu />
            <Projects />
            <MiniGames />
        </>
    );
};