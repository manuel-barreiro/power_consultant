import Image from "next/image"
import { omegaLogo, omega5000, grgH22, totemParaTurnosWeb } from "@public"
import ProductGrid from "@components/productos/ProductGrid"

const page = () => {
  return (
    <section className="font-montserrat w-full h-auto">
        <div className="w-full h-full container px-8 md:px-32 mx-auto py-20 md:pt-10">

            <div className='w-full rounded-3xl h-auto bg-gradient-to-tr from-orange-400 to-orange-600 flex justify-between px-6 py-3 items-center'>
                <div>
                    <h3 className='pb-4 font-bold text-xl xs:text-2xl sm:text-3xl bg-gradient-to-tr from-neutral-900 to-neutral-500 bg-clip-text text-transparent'>Línea Omega</h3>
                    <button className="px-4 py-2 rounded-md md:text-xs text-white bg-gradient-to-tr from-neutral-900 to-neutral-500 hover:scale-105 ease-in-out duration-300">Cotizá</button>
                </div>
                
                <div className="w-40">
                    <Image src={omegaLogo}></Image>
                </div>

            </div>

            <section class="text-gray-600 body-font">
                <div class="container px-5 pt-16 pb-24 mx-auto">
                    <div class="flex flex-wrap -m-4">
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                        <a class="block relative h-48 rounded overflow-hidden">
                            <Image alt="ecommerce"  src={omega5000}/>
                        </a>
                        <div class="mt-4">
                            <h2 class="text-gray-900 title-font text-lg font-medium text-center">OMEGA 5000</h2>
                            <button className="px-4 py-2 mt-1 w-full rounded-md md:text-xs text-white bg-gradient-to-tr from-neutral-900 to-neutral-500 hover:scale-105 ease-in-out duration-300">Más información</button>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                        <a class="block relative h-48 rounded overflow-hidden">
                            <Image alt="ecommerce"  src={omega5000}/>
                        </a>
                        <div class="mt-4">
                            <h2 class="text-gray-900 title-font text-lg font-medium text-center">OMEGA 5000</h2>
                            <button className="px-4 py-2 mt-1 w-full rounded-md md:text-xs text-white bg-gradient-to-tr from-neutral-900 to-neutral-500 hover:scale-105 ease-in-out duration-300">Más información</button>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                        <a class="block relative h-48 rounded overflow-hidden">
                            <Image alt="ecommerce"  src={omega5000}/>
                        </a>
                        <div class="mt-4">
                            <h2 class="text-gray-900 title-font text-lg font-medium text-center">OMEGA 5000</h2>
                            <button className="px-4 py-2 mt-1 w-full rounded-md md:text-xs text-white bg-gradient-to-tr from-neutral-900 to-neutral-500 hover:scale-105 ease-in-out duration-300">Más información</button>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                        <a class="block relative h-48 rounded overflow-hidden">
                            <Image alt="ecommerce"  src={omega5000}/>
                        </a>
                        <div class="mt-4">
                            <h2 class="text-gray-900 title-font text-lg font-medium text-center">OMEGA 5000</h2>
                            <button className="px-4 py-2 mt-1 w-full rounded-md md:text-xs text-white bg-gradient-to-tr from-neutral-900 to-neutral-500 hover:scale-105 ease-in-out duration-300">Más información</button>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                        <a class="block relative h-48 rounded overflow-hidden">
                            <Image alt="ecommerce"  src={omega5000}/>
                        </a>
                        <div class="mt-4">
                            <h2 class="text-gray-900 title-font text-lg font-medium text-center">OMEGA 5000</h2>
                            <button className="px-4 py-2 mt-1 w-full rounded-md md:text-xs text-white bg-gradient-to-tr from-neutral-900 to-neutral-500 hover:scale-105 ease-in-out duration-300">Más información</button>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                        <a class="block relative h-48 rounded overflow-hidden">
                            <Image alt="ecommerce"  src={omega5000}/>
                        </a>
                        <div class="mt-4">
                            <h2 class="text-gray-900 title-font text-lg font-medium text-center">OMEGA 5000</h2>
                            <button className="px-4 py-2 mt-1 w-full rounded-md md:text-xs text-white bg-gradient-to-tr from-neutral-900 to-neutral-500 hover:scale-105 ease-in-out duration-300">Más información</button>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                        <a class="block relative h-48 rounded overflow-hidden">
                            <Image alt="ecommerce"  src={omega5000}/>
                        </a>
                        <div class="mt-4">
                            <h2 class="text-gray-900 title-font text-lg font-medium text-center">OMEGA 5000</h2>
                            <button className="px-4 py-2 mt-1 w-full rounded-md md:text-xs text-white bg-gradient-to-tr from-neutral-900 to-neutral-500 hover:scale-105 ease-in-out duration-300">Más información</button>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                        <a class="block relative h-48 rounded overflow-hidden">
                            <Image alt="ecommerce"  src={omega5000}/>
                        </a>
                        <div class="mt-4">
                            <h2 class="text-gray-900 title-font text-lg font-medium text-center">OMEGA 5000</h2>
                            <button className="px-4 py-2 mt-1 w-full rounded-md md:text-xs text-white bg-gradient-to-tr from-neutral-900 to-neutral-500 hover:scale-105 ease-in-out duration-300">Más información</button>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

        </div>
    </section>
  )
}

export default page
