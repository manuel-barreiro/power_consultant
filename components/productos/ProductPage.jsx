'use client';
import { useState } from 'react'
import Image from 'next/image';
import {IoArrowRedoCircleSharp} from 'react-icons/io5'

const ProductPage = ({ linea, img, name, car, tdn, parrafo, caracteristicas, tipoDeNegocio }) => {
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
                <a className="flex-grow text-primaryOrange border-b-2 border-primaryOrange py-2 text-xs md:text-lg px-1">CARACTERÍSTICAS</a>
                <a className="flex-grow border-b-2 border-gray-300 py-2 text-xs md:text-lg px-1">TIPO DE NEGOCIO</a>
              </div>
              {caracteristicas.map((carac) => (
                <p key={carac} className="leading-relaxed mb-1 text-sm flex gap-1 items-center"><IoArrowRedoCircleSharp className='w-8 text-primaryOrange'/>{carac}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}

export default ProductPage