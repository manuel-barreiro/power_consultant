import { BiSupport } from "react-icons/bi"
import { FaGears } from "react-icons/fa6"
import { atm } from "@public"
import Image from 'next/image'
import Link from 'next/link'
 
export default function NotFound() {
  
  return (
    <section>

        <div className="container flex items-center justify-center w-full h-full px-8 md:px-32 mx-auto font-montserrat py-12">
            <div className="w-full">
                <div className="flex flex-col items-center max-w-2xl mx-auto text-center">
                    <p className="text-sm font-medium text-primaryOrange">ERROR 404</p>
                    <h1 className="mt-3 text-2xl font-semibold md:text-3xl bg-gradient-to-tr from-neutral-900 to-neutral-500 bg-clip-text text-transparent">No encontramos lo que estás buscando.</h1>

                    <div className="flex items-center justify-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
                        <Link href="/"> 
                            <button className="flex items-center justify-center gap-x-2 w-auto px-5 py-2 text-sm rounded-lg text-white bg-primaryOrange border border-primaryOrange hover:bg-white hover:text-primaryOrange duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                </svg>
                                <span>Volver a la página principal</span>
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="grid w-full max-w-6xl grid-cols-1 gap-8 mx-auto mt-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="p-6 rounded-lg bg-gray-100">
                        <Image src={atm} title="Power Consultant Cajeros Automáticos" alt="Power Consultant Cajeros Automáticos"/>
                        
                        <h3 className="mt-6 font-medium text-gray-700">Productos</h3>

                        <p className="mt-2 text-gray-500">Te presentamos un catálogo con nuestras innovadoras soluciones tecnológicas.</p>

                        <Link href="/productos" className="inline-flex items-center mt-4 text-sm text-primaryOrange underline-offset-4 gap-x-2 hover:underline">
                            <span>Visitar</span>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </Link>
                    </div>

                    <div className="p-6 rounded-lg bg-gray-100">
                        
                        <FaGears size={35} className="text-secondaryOrange"/>
                        
                        <h3 className="mt-6 font-medium text-gray-700">Servicio Técnico</h3>

                        <p className="mt-2 text-gray-500">Conocé nuestro mecanismo para asistir a nuestros clientes en todo momento.</p>

                        <Link href="/servicioTecnico" className="inline-flex items-center mt-4 text-sm text-primaryOrange underline-offset-4 gap-x-2 hover:underline">
                            <span>Visitar</span>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </Link>
                    </div>

                    <div className="p-6 rounded-lg bg-gray-100">

                        <BiSupport size={35} className="text-secondaryOrange"/>
                        
                        <h3 className="mt-6 font-medium text-gray-700">Contactanos</h3>

                        <p className="mt-2 text-gray-500">Un integrante del equipo responderá cualquier consulta que tengas.</p>

                        <Link href="/contacto" className="inline-flex items-center mt-4 text-sm text-primaryOrange underline-offset-4 gap-x-2 hover:underline">
                            <span>Visitar</span>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}