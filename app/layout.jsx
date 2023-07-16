// Global CSS
import './globals.css';

// NextFonts
import { Inter, Montserrat } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})


// Metadata
export const metadata = {
    title: 'Power Consultant S.A.',
    description: 'Power Consultant Cajeros Automaticos'
}

// Layout Components
import Nav from '@components/Nav';

const RootLayout = ({children}) => {
  return (
    <html lang='en' className={`${inter.variable} ${montserrat.variable}`}>
        <body>
            <div className='main'>
                <div className='gradient' />
            </div>

            <main className='app'>
                <Nav />
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;