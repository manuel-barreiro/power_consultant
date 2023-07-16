import Image from "next/image"

const Hero = () => {
  return (
    <section className="text-gray-600 font-montserrat">
    <div className="container mx-auto flex py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-bold text-gray-900">Líderes en
                <br className="hidden lg:inline-block"/>soluciones tecnológicas.
            </h1>
            <p className="mb-8 leading-relaxed pr-20"><span className="font-semibold">Power Consultant®</span> está basada en la conjunción de Industria, Conocimiento, Tecnología, Innovación y Servicio, pero por sobre todas las cosas, la cercanía con nuestros clientes.</p>
            <div className="flex justify-center">
                <button className="inline-flex text-white bg-primaryOrange border-0 py-2 px-6 focus:outline-none hover:bg-orange-900 rounded text-lg">¿Quiénes somos?</button>
                
            </div>
        </div>
    </div>
</section>
  )
}

export default Hero