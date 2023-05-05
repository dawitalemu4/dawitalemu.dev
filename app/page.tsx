import { Metadata } from 'next';
import Navbar from './mcomponents/navBar';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

export const metadata: Metadata = {
  title: 'Dawit Alemu',
  description: 'Portfolio By Dawit Alemu',
};

export default function Home() {
  return (
    <html>
  <body className="bg-white">
    <Navbar/>
    <Hero/>
    <Experience/>
    <Projects/>
    <Contact/>
  </body>
  </html>
  )
}
