import ProductSwiper from "@components/productos/ProductSwiper/ProductSwiper"

export const metadata = {
  title: 'Productos',
  description: 'Innovadoras líneas de productos y soluciones, diseñadas para potenciar tu empresa con la última tecnología.',
  alternates: {
    canonical: '/productos'
  }
}

export default function page() {
  return (
    <ProductSwiper />
  )
}
