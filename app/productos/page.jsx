import ProductSwiper from "@components/productos/ProductSwiper/ProductSwiper"

export const metadata = {
  title: 'Productos',
  description: 'Cajeros automáticos, sistemas de recaudación, validación de identidad, reconocimiento facial, onboarding y mucho más.',
  openGraph: {
    images: '/favicon.ico',
    title: 'Productos | Power Consultant',
    description: 'Cajeros automáticos, sistemas de recaudación, validación de identidad, reconocimiento facial, onboarding y mucho más.',
    type: "website",
    url: "https://www.powerconsultant.com.ar/productos"
  },
  alternates: {
    canonical: '/productos'
  }
}

export default function page() {
  return (
    <ProductSwiper />
  )
}
