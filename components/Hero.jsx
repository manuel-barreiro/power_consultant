'use client';

import Image from "next/image"
import Link from "next/link"
import { motion } from 'framer-motion'
import { hero } from "@public";

const Hero = () => {
  return (
    <div>

        <span id="skew-bg"></span>

        <div className="w-full h-[80vh] flex justify-center items-center px-16 pt-6">

            <div className="w-full flex flex-col gap-5 justify-between items md:flex-row md:gap-0">

                <div className="basis-2/3 md:pl-10 lg:pl-16">

                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition= {{ duration: 0.5, delay: 0.5 }} 
                    >
                        <h1 className="pb-4 font-bold text-4xl md:text-6xl lg:text-7xl bg-gradient-to-tr from-neutral-900 to-neutral-500 bg-clip-text text-transparent">Líderes en <br className="hidden md:flex" />soluciones<br className="hidden md:flex" />  tecnológicas</h1>
                    </motion.div>
                    
                    <motion.button
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition= {{ duration: 0.5, delay: 0.7 }} 
                        className='px-4 py-2 rounded-md md:text-lg text-white bg-gradient-to-tr from-neutral-900 to-neutral-500 hover:scale-105
                        hover:text-primaryOrange ease-in-out duration-300'
                    >
                        ¿Quiénes Somos?
                    </motion.button>
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

    </div>
    
  )
}

export default Hero