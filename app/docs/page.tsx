import React from "react";
import { Metadata } from "next";
import Hero from "./sections/hero";
import Projects from "./sections/projects";
import MiniGames from "./sections/miniGames";

export const metadata: Metadata = {
    title: "Dawit Alemu's Docs",
    description: "Portfolio By Dawit Alemu"
};

export default function Docs() {
    return (
        <>
            <Hero />
            <Projects />
            <MiniGames />
        </>
    );
};