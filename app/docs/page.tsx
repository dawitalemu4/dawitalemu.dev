import { Metadata } from 'next';
import Link from 'next/link';
// import Navbar from './rcomponents/navBar';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import About from './sections/About';
import PacManSection from './sections/PacMan';

export const metadata: Metadata = {
  title: 'Dawit Alemu',
  description: 'Portfolio By Dawit Alemu',
};

export default function Home(){

    return (
      <html>
    <body className='bg-black flex flex-col relative'>    
      {/* <Navbar />
      <Hero />
      <PacManSection />
      <About />
      <Experience />
      <Projects />
      <Contact /> */}
          <img src='inProg.png' className='w-1/2'/>
    <h1 className='text-center font-inter font-medium text-gray-800 text-lg px-5'>
    In Progress. For now, visit the main version of my portfolio by clicking the black button at the top left!</h1>
    <Link href='/'>Go back to main page!</Link>
    </body>
    </html>
    )
}