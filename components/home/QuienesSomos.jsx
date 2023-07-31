"use client";
import { quienesSomos } from "@public"
import Image from "next/image"
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import Link from "next/link";

const QuienesSomos = () => {
  //TypeWriter Effect   
  const [text] = useTypewriter({
    words: ['Power.', 'Innovación.', 'Calidad.', 'Seguridad.'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 140
  })

  return (
    <section id="quienesSomos" className="h-auto lg:h-[80vh] my-40">
        <div className="w-full h-full flex justify-center items-center container px-8 md:px-32 mx-auto">
            <div className="w-full flex flex-col gap-0 justify-between lg:flex-row">
                <Image src={quienesSomos} />

                <div className="w-[full] flex flex-col gap-4 p-10 h-auto bg-gradient-to-tr from-orange-400 to-orange-600 text-white text-justify">
                    <h1 className="text-2xl font-bold">Somos <br className="md:hidden" /> {text}<Cursor/></h1>
                    <p className="font-medium"><span className="font-bold">Power Consultant®</span> está basada en la conjunción de Industria, Conocimiento, Tecnología, Innovación y Servicio, pero por sobre todas las cosas <span className="underline decoration-white underline-offset-4">cercanía con nuestros clientes.</span></p>
                    <p className="font-medium">Destacamos “industria”, para llegar a los productos que surgen del conocimiento, la tecnología y la creatividad (innovación). El servicio lo fundamentamos en nuestros recursos, profesionales, con procesos de capacitación continua y orientada a la calidad.</p>
                    <Link href="#nuestroDiferencial">
                      <button className="px-4 py-2 rounded-md md:text-lg text-primaryOrange bg-white hover:scale-105 ease-in-out duration-300">Más Sobre Nosotros</button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default QuienesSomos