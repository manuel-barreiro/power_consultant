// Global CSS
import './globals.css';

// NextFonts
import { Montserrat } from 'next/font/google'

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
    <html lang='en' className={`${montserrat.variable}`}>
        <body>
          <Nav />
          <main>
            {children}
          </main>
        </body>
    </html>
  )
}

export default RootLayout;