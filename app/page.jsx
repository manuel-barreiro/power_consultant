import Hero from "@components/home/Hero"
import QuienesSomos from "@components/home/QuienesSomos"
import NuestroDiferencial from "@components/home/NuestroDiferencial"
import Experiencia from "@components/home/Experiencia"
import Clientes from "@components/home/Clientes"
import ProductosHome from "@components/home/ProductosHome"
import ContactForm from "@components/home/ContactForm"

const Home = () => {
  return (
    <section className="font-montserrat">
      <Hero />
      <QuienesSomos />
      <NuestroDiferencial />
      <Experiencia />
      <Clientes />
      <ProductosHome/>
      <ContactForm/>
    </section>
  )
}

export default Home