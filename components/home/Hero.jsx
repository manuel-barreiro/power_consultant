'use client';

import Image from "next/image"
import Link from "next/link"
import { motion } from 'framer-motion'
import { hero } from "@public";

const Hero = () => {
  return (
    <section className="h-auto md:h-[80vh]">

        <span id="skew-bg"></span>

        <div className="w-full h-full flex justify-center items-center container px-8 md:px-32 pt-20 md:pt-10 mx-auto">

            <div className="w-full flex flex-col gap-7 justify-between items md:flex-row md:gap-0">

                <div className="basis-2/3">

                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition= {{ duration: 0.5, delay: 0.5 }} 
                    >
                        <h1 className="pb-4 font-bold text-5xl md:text-6xl lg:text-7xl bg-gradient-to-tr from-neutral-900 to-neutral-500 bg-clip-text text-transparent">Líderes en <br className="hidden md:flex" />soluciones<br className="hidden md:flex" />  tecnológicas</h1>
                    </motion.div>
                    
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition= {{ duration: 0.5, delay: 0.7 }} 
                        className="mt-2 md:mt-6"
                    >
                        <button className='px-4 py-2 rounded-md md:text-lg text-white bg-gradient-to-tr from-neutral-900 to-neutral-500 hover:scale-105 ease-in-out duration-300'>
                            ¿Quiénes Somos?
                        </button>
                    </motion.div>
                </div>

                <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition= {{ duration: 1, delay: 0.7 }} 
                    className="basis-1/3"
                >
                    <Image src={hero} className="hover:scale-105 ease-in-out duration-300"/>
                </motion.div>

            </div>

      
        </div>

    </section>
    
  )
}

export default Hero