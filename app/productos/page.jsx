'use client';

import Image from "next/image"
import Link from "next/link"
import { motion } from 'framer-motion'
import { omega5000, grgH22, totemParaTurnosWeb } from "@public";
import { FiArrowUp } from 'react-icons/fi'

const Productos = () => {
  return (
    <section className=" font-montserrat w-full h-auto bg-gradient-to-tr from-orange-400 to-orange-600">
        <div className="w-full h-full container px-8 md:px-32 mx-auto py-20 md:pt-10">
            <div className="flex flex-col max-w-xl mx-auto">
                <h1 className="pb-4 font-bold text-4xl xs:text-5xl bg-gradient-to-tr from-neutral-900 to-neutral-500 bg-clip-text text-transparent">Llevá tu negocio al siguiente nivel.</h1>

                <p className="font-normal">Te presentamos una selección de nuestras innovadoras líneas de productos, diseñadas para <span className="font-bold">potenciar</span> tu empresa con la última tecnología.</p>
            </div>

            <div className="w-full flex justify-evenly items-center">

                <div className="max-w-[200px] bg-gradient-to-tr from-neutral-900 to-neutral-500 rounded-3xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:scale-105 duration-300 ease-in-out">
                    <Link href='/lineaOmega'>
                        <Image className="rounded-t-3xl" src={omega5000} alt="lineaOmega" />
                    </Link>

                    <div className="p-5 flex gap-4 items-center justify-center">
                        <h5 className="text-md font-bold tracking-tight text-white">Línea Omega</h5>
                        <span className="w-8 h-8 text-lg bg-primaryOrange rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"><FiArrowUp/></span>
                    </div>
                </div>

                <div className="max-w-[200px] bg-gradient-to-tr from-neutral-900 to-neutral-500 rounded-3xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:scale-105 duration-300 ease-in-out">
                    <Link href='/lineaOmega'>
                        <Image className="rounded-t-3xl" src={omega5000} alt="lineaOmega" />
                    </Link>

                    <div className="p-5 flex gap-4 items-center justify-center">
                        <h5 className="text-md font-bold tracking-tight text-white">Línea Omega</h5>
                        <span className="w-8 h-8 text-lg bg-primaryOrange rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"><FiArrowUp/></span>
                    </div>
                </div>

                <div className="max-w-[200px] bg-gradient-to-tr from-neutral-900 to-neutral-500 rounded-3xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:scale-105 duration-300 ease-in-out">
                    <Link href='/lineaOmega'>
                        <Image className="rounded-t-3xl" src={omega5000} alt="lineaOmega" />
                    </Link>

                    <div className="p-5 flex gap-4 items-center justify-center">
                        <h5 className="text-md font-bold tracking-tight text-white">Línea Omega</h5>
                        <span className="w-8 h-8 text-lg bg-primaryOrange rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"><FiArrowUp/></span>
                    </div>
                </div>

                

            </div>
        </div>
    </section>
  )
}

export default Productos