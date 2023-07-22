'use client';

import Image from "next/image"
import Link from "next/link"
import { motion } from 'framer-motion'
import { hero } from "@public";

const Hero = () => {
  return (
    <div className="w-full h-[80vh] flex justify-center items-center px-16 pt-6">

        <div className="w-full flex flex-col gap-5 justify-center md:flex-row md:gap-0">

            <div className="basis-2/3">

                <div className="max-w-md lg:max-w-lg mb-6">
                    <h1 className="pb-4 font-bold text-5xl md:text-6xl lg:text-7xl bg-gradient-to-tr from-neutral-900 to-neutral-500 bg-clip-text text-transparent">Líderes en soluciones tecnológicas</h1>
                </div>
                
                <motion.button
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, ease: "easeIn" }}
                    className='px-4 py-2 rounded-md md:text-lg text-white bg-gradient-to-tr from-neutral-900 to-neutral-500 hover:scale-105
                    hover:text-primaryOrange duration-300'
                >
                    ¿Quiénes Somos?
                </motion.button>
            </div>

            <div className="basis-1/3">
                <Image src={hero} />
            </div>

        </div>

      
    </div>
  )
}

export default Hero