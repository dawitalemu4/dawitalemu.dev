import React from 'react';
import { Metadata } from 'next';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import MiniGames from './sections/MiniGames';

export const metadata: Metadata = {
  title: 'Dawit Alemu',
  description: 'Portfolio By Dawit Alemu',
};

export default function Home(){
  return (
    <html>
      <body>    
        <Hero />
        <Projects />
        <MiniGames />
      </body>
    </html>
  )
}