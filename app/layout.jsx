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
    keywords: ['Power Consultant', 'Cajero', 'Cajero Automático', 'ATM', 'Argentina', 'Control Fronterizo', 'Control Identidad', 'Innovación', 'Salud'],
    alternates: {
      canonical: 'https://www.powerconsultant.com.ar/'
    },
    title: {
      default: 'Power Consultant S.A.',
      template: `%s | Power Consultant `
    },
    description: 'Power Consultant está basada en la conjunción de Industria, Conocimiento, Tecnología, Innovación y Servicio.',
    themeColor: 'white',
    openGraph: {
      images: '/favicon.ico',
      title: 'Power Consultant S.A.',
      description: 'Power Consultant está basada en la conjunción de Industria, Conocimiento, Tecnología, Innovación y Servicio.',
      type: "website",
      url: "https://www.powerconsultant.com.ar/"
    },
    
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