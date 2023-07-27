import Hero from "@components/home/Hero"
import QuienesSomos from "@components/home/QuienesSomos"
import NuestroDiferencial from "@components/home/NuestroDiferencial"
import Experiencia from "@components/home/Experiencia"
import Clientes from "@components/home/Clientes"
import Contacto from "@components/home/Contacto"

const Home = () => {
  return (
    <section className="font-montserrat">
      <Hero />
      <QuienesSomos />
      <NuestroDiferencial />
      <Experiencia />
      <Clientes />
      <Contacto/>
    </section>
  )
}

export default Home