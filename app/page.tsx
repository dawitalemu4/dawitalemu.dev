import { Metadata } from 'next';
import Navbar from './rcomponents/navBar';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import About from './sections/About';

export const metadata: Metadata = {
  title: 'Dawit Alemu',
  description: 'Portfolio By Dawit Alemu',
};

export default function Home(){

    return (
      <html>
    <body className='bg-black'>    
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </body>
    </html>
    )
}