'use client';

import { useState } from 'react'
import Image from 'next/image';
import {IoArrowRedoCircleSharp} from 'react-icons/io5'
import Link from 'next/link';
import { GoVideo } from "react-icons/go";
import { VscFilePdf } from "react-icons/vsc";

const ProductPage = ({ linea, img, name, car, tdn, parrafo, caracteristicas, tipoDeNegocio, isPdf, isVideo }) => {

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
              {name.length > 19 ? 
                  <h1 className="font-bold text-3xl bg-gradient-to-tr from-neutral-900 to-neutral-500 bg-clip-text text-transparent mb-4">{name}</h1>
                  :
                  <h1 className="font-bold text-4xl bg-gradient-to-tr from-neutral-900 to-neutral-500 bg-clip-text text-transparent mb-4">{name}</h1>
              }
          </div>
          <div className="w-4/5 h-full mx-auto flex flex-col md:flex-row gap-6 justify-between items-start">
            <div className='lg:basis-2/5 flex flex-col items-center justify-center'>
              <Image alt="ecommerce" src={img}/>
              {isPdf &&
                <Link href={isPdf} target='_blank'>
                  <div className="px-4 py-2 mt-4 w-full text-center rounded-md md:text-sm text-white bg-gradient-to-tr from-neutral-900 to-neutral-500 hover:scale-105 ease-in-out duration-300">
                    <p className="flex items-center gap-3"> <VscFilePdf /> Ver Especificaciones </p>
                  </div>
                </Link>
                }
              {isVideo &&
                <Link href={isVideo} target='_blank'>
                  <div className="px-4 py-2 mt-4 w-full text-center rounded-md md:text-sm text-white bg-primaryOrange hover:scale-105 ease-in-out duration-300">
                    <p className="flex items-center gap-3"> <GoVideo /> Video del Producto </p>
                  </div>
                </Link>
              }
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

                {!parrafo && 
                  <ul className='mt-6 font-medium'>
                    {charac && caracteristicas.map((item) => (
                      <li className='flex gap-2 items-center mb-2'>
                        <span>
                          <IoArrowRedoCircleSharp className='w-8 text-primaryOrange'/>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                }
                
                {parrafo && 
                  <div className='flex flex-col gap-4 items-start text-justify text-sm font-medium'>
                    {caracteristicas.map((item) => (
                      <p key={item.length}>{item}</p>
                    ))}
                  </div>

                }

                <ul className='font-medium'>
                  {typeOfBss && tipoDeNegocio.map((item) => (
                    <li className='flex gap-2 items-center mb-2'>
                      <span>
                        <IoArrowRedoCircleSharp className='w-8 text-primaryOrange'/>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

            </div>
          </div>
        </div>
      </section>
  )
}

export default ProductPage