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
    metadataBase: new URL("https://www.powerconsultant.com.ar/"),
    title: {
      default: 'Power Consultant S.A.',
      template: `%s | Power Consultant `
    },
    description: 'Cajeros Automaticos | Soluciones Tecnológicas'
}

// Layout Components
import Nav from '@components/Nav';
import WhatsappButton from '@components/WhatsappButton';
import Footer from '@components/Footer';

const RootLayout = ({children}) => {
  return (
    <html lang='es' className={`${montserrat.variable}`}>
        <body>
          <Nav />
          <main>
            {children}
            <WhatsappButton/>
          </main>
          <Footer />
        </body>
    </html>
  )
}

export default RootLayout;