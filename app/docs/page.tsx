import React from 'react';
import { Metadata } from 'next';
import Hero from './containers/Hero';
import Projects from './containers/Projects';
import MiniGames from './containers/MiniGames';

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