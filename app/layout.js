import './globals.css'
import Navbar from '../components/navigation/Navbar'
import Footer from '@/components/footer/footer'
import Top from '@/components/top'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <head />
      <body className='font-montserrat'>
        
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
