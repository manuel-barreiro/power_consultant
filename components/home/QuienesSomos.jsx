import { quienesSomos } from "@public"
import Image from "next/image"

const QuienesSomos = () => {
  return (
    <section className="h-auto lg:h-[80vh] my-40">
        <div className="w-full h-full flex justify-center items-center container px-8 md:px-32 mx-auto">
            <div className="w-full flex flex-col gap-0 justify-between lg:flex-row">
                <Image src={quienesSomos} />

                <div className="w-[full] flex flex-col gap-4 p-10 h-auto bg-gradient-to-tr from-orange-400 to-orange-600 text-white text-justify">
                    <h1 className="text-2xl font-bold">¿Quiénes somos?</h1>
                    <p className="font-medium">Power Consultant® nació a partir de necesidad del mercado de contar con soluciones integrales con criterios prácticos y con tecnología adecuada.</p>
                    <p className="font-medium">Su evolución se fundamentó en la confiabilidad de los productos Producidos, representados y ofrecidos, la agilidad en las respuestas, la adaptación a los requerimientos de cada cliente y su estructura de costos altamente competitivos.</p>
                    <button className="px-4 py-2 rounded-md md:text-lg text-primaryOrange bg-white hover:scale-105 ease-in-out duration-300">Más Sobre Nosotros</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default QuienesSomos