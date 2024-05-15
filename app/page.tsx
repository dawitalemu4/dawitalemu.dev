import { Metadata } from "next";
import Sidebar from "./sections/sidebar";
import Hero from "./sections/hero";
import About from "./sections/about";
import Experience from "./sections/experience";
import Projects from "./sections/projects";
import Contact from "./sections/contact";
import "./globals.css";

export const metadata: Metadata = {
    title: "Dawit Alemu's Portfolio",
    description: "Portfolio By Dawit Alemu"
};

export default function Home() {
    return (
        <>
            <Sidebar/>
            <Hero/>
            <About/>
            <Experience/>
            <Projects/>
            <Contact/>
        </>
    );
};
