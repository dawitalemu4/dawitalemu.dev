import { Metadata } from 'next';
import Link from "next/link";
import DevButton from './components/devButton';


export const metadata: Metadata = {
  title: 'Dawit Alemu',
  description: 'Portfolio By Dawit Alemu',
};

export default function Home() {
  return (
    <html>
  <body>
   <DevButton/>
  </body>
  </html>
  )
}
