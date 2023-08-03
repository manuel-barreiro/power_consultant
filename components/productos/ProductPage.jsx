'use client';
import { useState } from 'react'
import Image from 'next/image';

const ProductPage = ({ linea, img, name, descr, details }) => {
  return (
    <section className="font-montserrat h-auto text-gray-600 overflow-hidden">
        <div className="container px-5 py-16 mx-auto">
          <div className="w-4/5 h-full mx-auto flex flex-col md:flex-row gap-6 justify-between items-center">
            <div className='lg:basis-2/5'>
              <Image alt="ecommerce" src={img} />
            </div>
            <div className="lg:basis-3/5">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">{linea}</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{name}</h1>
              <div className="flex mb-4">
                <a className="flex-grow text-primaryOrange border-b-2 border-primaryOrange py-2 text-lg px-1">Description</a>
                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
              </div>
              <p className="leading-relaxed mb-4 text-justify">El cajero automático modelo "Omega 5000" es una innovadora y avanzada solución para satisfacer las necesidades de servicios bancarios automatizados. Diseñado con la última tecnología y seguridad de vanguardia, este cajero automático ofrece una experiencia de usuario intuitiva y confiable.</p>

              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-500">Tipo de producto</span>
                <span className="ml-auto text-gray-900">Cajero Automático</span>
              </div>
              <button className="px-4 py-2 mt-1 w-1/2 text-center rounded-md md:text-sm text-white bg-gradient-to-tr from-neutral-900 to-neutral-500 hover:scale-105 ease-in-out duration-300">PDF con Especificaciones</button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ProductPage