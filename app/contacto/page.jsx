import ContactSection from '@components/ContactSection'

export const metadata = {
  title: 'Contacto',
  description: 'Contactate con nosotros via Whatsapp, teléfono o correo electrónioco. Estamos para brindarte soporte en lo que necesites.',
  openGraph: {
      images: '/favicon.ico',
      title: 'Contacto | Power Consultant',
      description: 'Contactate con nosotros via Whatsapp, teléfono o correo electrónioco. Estamos para brindarte soporte en lo que necesites.',
      type: "website",
      url: "https://www.powerconsultant.com.ar/contacto"
    },
  alternates: {
      canonical: '/servicioTecnico'
  }
}

export default function page() {
  return (
    <ContactSection />
)}

