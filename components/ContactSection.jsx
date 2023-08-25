'use client';

import { FaWhatsapp, FaRegEnvelope, FaPhone } from "react-icons/fa6";
import { motion } from 'framer-motion'

export default function page() {
    const cardAnimationVariants = {
      initial: { opacity: 0, y: 15 },
      animate:{ opacity: 1 , y: 0},       
    }
  
    return (
      <section name="contacto" className="text-gray-600 font-primary py-16 mx-auto container px-8 md:px-32 font-montserrat">
        <div className="">
          <div className="flex flex-col text-center w-full mb-14">
            <h1 className="sm:text-5xl text-4xl font-bold text-primaryOrange mb-2">Contactate con nosotros</h1>
            <h2 className="lg:w-2/3 mx-auto leading-relaxed text-md text-gray-500">Estamos para ayudarte en lo que necesites.</h2>
          </div>
  
          <div className="flex flex-wrap -m-4">
  
            <motion.div
            variants={cardAnimationVariants}
            initial="initial"
            animate="animate"
            transition= {{ duration: 0.5, delay: 0.5 }} 
            className="p-4 w-full xl:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 p-2 mr-3 inline-flex items-center justify-center rounded-full bg-primaryOrange/80 text-white flex-shrink-0">
                    <FaWhatsapp size={60} />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">WhatsApp</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-md md:text-lg lg:text-xl text-black">+54 9 11 4494-0763</p>
                  <p className='font-secondary mt-4'>Contactanos a nuestro WhatsApp y un asesor responderá tu consulta a la brevedad.</p>
                </div>
              </div>
            </motion.div>
  
            <motion.div
            variants={cardAnimationVariants}
            initial="initial"
            animate="animate"
            transition= {{ duration: 0.5, delay: 0.6 }} 
            className="p-4 w-full xl:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 p-2 mr-3 inline-flex items-center justify-center rounded-full bg-primaryOrange/80 text-white flex-shrink-0">
                    <FaRegEnvelope size={60} />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">Correo electrónico</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-md md:text-lg lg:text-xl text-black">info@pc-sa.com.ar</p>
                  <p className='font-secondary mt-4'>Escribinos via e-mail y responderemos tu consulta.</p>
                </div>
              </div>
            </motion.div>
  
            <motion.div
            variants={cardAnimationVariants}
            initial="initial"
            animate="animate"
            transition= {{ duration: 0.5, delay: 0.7 }} 
            className="p-4 w-full xl:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 p-2 mr-3 inline-flex items-center justify-center rounded-full bg-primaryOrange/80 text-white flex-shrink-0">
                    <FaPhone size={60} />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">Teléfono</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-md md:text-lg lg:text-xl text-black">+54 9 11 5277-9500</p>
                  <p className='font-secondary mt-4'>Comunicate con nosotros al número en pantalla.</p>
                </div>
              </div>
            </motion.div>
  
          </div>
  
        </div>
  </section> 
  )}