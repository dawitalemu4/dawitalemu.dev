import { Metadata } from 'next';
import Navbar from './mcomponents/navBar';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dawit Alemu',
  description: 'Portfolio By Dawit Alemu',
};

export default function Home() {
  return (
    <html>
  <body className="bg-white">
    <Navbar/>
    <div className='flex h-screen lg:h-auto justify-center items-center flex-col'>
    <img src='inProg.png' className='w-1/2'/>
    <h1 className='text-center font-inter font-medium text-gray-800 text-lg px-5'>
    In Progress. For now, visit the dev version of my portfolio by clicking the black button at the top left!</h1>
    <Link href='mainInProg'>Click Me To See Progress on Main Page!</Link>
    </div>
    <Hero/>
    <Experience/>
    <Projects/>
    <Contact/>
  </body>
  </html>
  )
}
