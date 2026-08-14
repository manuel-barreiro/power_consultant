// Global CSS
import './globals.css';

// NextFonts
import { Montserrat } from 'next/font/google'

// Google Tag Manager
import Script from 'next/script'

const GTM_ID = 'GTM-52WJ7SC'

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
        <head>
          <meta name="google-site-verification" content="tpL_fagep6l8H-GO8x2JGnqC8F_Nt0LLbiJkX_QvIB0" />
          {/* Google Tag Manager */}
          <Script id="gtm-script" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
          {/* End Google Tag Manager */}
        </head>
        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          {/* End Google Tag Manager (noscript) */}
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