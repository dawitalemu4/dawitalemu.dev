import { Metadata } from 'next';
import Navbar from './mcomponents/navBar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import "./globals.css"

export const metadata: Metadata = {
  title: 'Dawit Alemu',
  description: 'Portfolio By Dawit Alemu',
};

export default function Home() {
  return (
    <html>
      <body>
        <Navbar/>
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
      </body>
  </html>
  )
}
