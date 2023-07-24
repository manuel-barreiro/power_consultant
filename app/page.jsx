import Hero from "@components/home/Hero"
import QuienesSomos from "@components/home/QuienesSomos"
import NuestroDiferencial from "@components/home/NuestroDiferencial"
import Experiencia from "@components/home/Experiencia"

const Home = () => {
  return (
    <section className="font-montserrat">
      <Hero />
      <QuienesSomos />
      <NuestroDiferencial />
      <Experiencia />
    </section>
  )
}

export default Home