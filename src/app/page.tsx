import { Inter } from 'next/font/google'
import Navbar from '../devWebsite/components/navBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main >
      <Navbar />
      
    </main>
  )
}
