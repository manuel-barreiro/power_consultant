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
    description: 'Cajeros Automaticos | Soluciones Tecnológicas'
}

// Layout Components
import Nav from '@components/Nav';
import Footer from '@components/Footer';

const RootLayout = ({children}) => {
  return (
    <html lang='es' className={`${montserrat.variable}`}>
        <body>
          <Nav />
          <main>
            {children}
          </main>
          <Footer />
        </body>
    </html>
  )
}

export default RootLayout;