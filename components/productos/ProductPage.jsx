'use client';

import { useState } from 'react'
import Image from 'next/image';
import {IoArrowRedoCircleSharp} from 'react-icons/io5'

const ProductPage = ({ linea, img, name, car, tdn, parrafo, caracteristicas, tipoDeNegocio }) => {

  const [charac, setCharac] = useState(true)
  const [typeOfBss, setTypeOfBss] = useState(false)

  function handleCharacClick() {
    setCharac(true)
    setTypeOfBss(false)
  }

  function handleTDNClick() {
    setTypeOfBss(true)
    setCharac(false)
  }


  return (
    <section className="font-montserrat h-auto text-gray-600 overflow-hidden">
        <div className="container px-5 pt-10 pb-32 mx-auto">
          <div className="w-4/5 mx-auto">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">{linea}</h2>
              <h1 className="font-bold text-4xl bg-gradient-to-tr from-neutral-900 to-neutral-500 bg-clip-text text-transparent mb-4">{name}</h1>
          </div>
          <div className="w-4/5 h-full mx-auto flex flex-col md:flex-row gap-6 justify-between items-start">
            <div className='lg:basis-2/5'>
              <Image alt="ecommerce" src={img} />
              <button className="px-4 py-2 mt-6 w-full text-center rounded-md md:text-sm text-white bg-gradient-to-tr from-neutral-900 to-neutral-500 hover:scale-105 ease-in-out duration-300">PDF con Especificaciones</button>
            </div>
            <div className="lg:basis-3/5 lg:-mt-16">
              <div className="flex mb-4">

                <div 
                  onClick={handleCharacClick} 
                  className={charac ? "flex-grow text-primaryOrange border-b-2 border-primaryOrange py-2 text-xs md:text-lg px-1 cursor-pointer hover:bg-gray-100" : "flex-grow text-gray-400 border-b-2 border-gray-300 py-2 text-xs md:text-lg px-1 cursor-pointer hover:bg-gray-100" }>
                    CARACTERÍSTICAS
                </div>

                {tdn && <div 
                  onClick={handleTDNClick} 
                  className={typeOfBss ? "flex-grow text-primaryOrange border-b-2 border-primaryOrange py-2 text-xs md:text-lg px-1 cursor-pointer hover:bg-gray-100" : "flex-grow text-gray-400 border-b-2 border-gray-300 py-2 text-xs md:text-lg px-1 cursor-pointer hover:bg-gray-100" }>
                    TIPO DE NEGOCIO
                </div>}
              </div>
              {charac && caracteristicas.map((item) => (
                <p key={item} className="leading-relaxed mb-1 text-sm flex gap-1 items-center"><IoArrowRedoCircleSharp className='w-8 text-primaryOrange'/>{item}</p>
              ))}

              {typeOfBss && tipoDeNegocio.map((item) => (
                <p key={item} className="leading-relaxed mb-1 text-sm flex gap-1 items-center"><IoArrowRedoCircleSharp className='w-8 text-primaryOrange'/>{item}</p>
              ))}

            </div>
          </div>
        </div>
      </section>
  )
}

export default ProductPage