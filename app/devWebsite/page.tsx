import { Metadata } from 'next';
import Navbar from './components/navBar'
import MainButton from './components/mainButton'


export const metadata: Metadata = {
  title: 'Dawit Alemu',
  description: 'Portfolio By Dawit Alemu',
};

export default function Home(){

    return (
      <html>
    <body>    
     <Navbar />
     <MainButton />
    </body>
    </html>
    )
}