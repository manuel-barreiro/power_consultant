import Hero from "@components/home/Hero"
import QuienesSomos from "@components/home/QuienesSomos"
import NuestroDiferencial from "@components/home/NuestroDiferencial"
import Experiencia from "@components/home/Experiencia"
import Clientes from "@components/home/Clientes"
import ProductosHome from "@components/home/ProductosHome"
import ContactForm from "@components/ContactForm"

const Home = () => {
  return (
    <section className="font-montserrat">
      <Hero />
      <QuienesSomos />
      <ProductosHome/>
      <NuestroDiferencial />
      <Experiencia />
      <Clientes />
    </section>
  )
}

export default Home