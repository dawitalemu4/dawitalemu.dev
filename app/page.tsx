import { Metadata } from 'next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
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
