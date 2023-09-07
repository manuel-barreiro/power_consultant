import ProductGrid from "@components/productos/ProductGrid"
import { productosOmega } from "@public/productosOmega"
import { cajeros } from "@public/cajeros"
import { productosSalud } from "@public/productosSalud"
import { omegaLogo, cajerosLogo, saludLogo } from '@public'
import Link from "next/link"
import Image from "next/image"
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return [{ linea: 'lineaOmega' }, { linea: 'cajeros' }, { linea: 'lineaSalud' }]
}

export async function generateMetadata({ params }) {

  const linea = params.linea

    if (linea === 'lineaOmega'){
      return {
        title: 'Línea Omega',
        description: 'Cajeros Automáticos',
        alternates: {
          canonical: '/productos/lineaOmega'
        },
        openGraph: {
          title: 'Línea Omega | Power Consultant',
          description: 'Cajeros Automáticos',
          url: "https://www.powerconsultant.com.ar/productos/lineaOmega"
        }
        
      }
    } 
    else if (linea === 'cajeros'){
      return {
        title: 'Cajeros',
        description: 'Cajeros Automáticos',
        alternates: {
          canonical: '/productos/cajeros'
        },
        openGraph: {
          title: 'Cajeros | Power Consultant',
          description: 'Cajeros Automáticos',
          url: "https://www.powerconsultant.com.ar/productos/cajeros"
        }
      }
    }
    else if (linea === 'lineaSalud') {
      return {
        title: 'Línea Salud',
        description: 'Soluciones tecnológicas para el ámbito de la salud',
        alternates: {
          canonical: '/productos/lineaSalud'
        },
        openGraph: {
          title: 'Línea Salud | Power Consultant',
          description: 'Soluciones tecnológicas para el ámbito de la salud',
          url: "https://www.powerconsultant.com.ar/productos/lineaSalud"
        }
        
      }
    }
    else {
      notFound()
      return {
        title: 'Error 404'
      }
    }


}
  
export default function page({ params }) {

  function definirLinea() {
    if (params.linea === 'lineaOmega'){
      return productosOmega
    } 
    else if (params.linea === 'cajeros'){
      return cajeros
    }
    else if (params.linea === 'lineaSalud') {
      return productosSalud
    }
  }

  return (
    <section className="font-montserrat w-full h-auto">
      <div className="w-full h-full container px-8 md:px-32 mx-auto py-20 md:pt-10">

            <div className='w-full rounded-3xl h-auto bg-gradient-to-tr from-orange-400 to-orange-600 flex flex-col md:flex-row justify-between px-6 py-3 items-center'>
                <div>
                    <h3 className='pb-4 font-bold text-xl xs:text-2xl sm:text-3xl bg-gradient-to-tr from-neutral-900 to-neutral-500 bg-clip-text text-transparent'>
                      {params.linea === 'cajeros' ? 'Cajeros' : params.linea === 'lineaOmega' ? 'Línea Omega' : params.linea === 'lineaSalud' ? 'Línea Salud' : '404'}
                    </h3>

                      <Link href="/contacto" className="hidden md:block">
                          <button className="px-4 py-2 rounded-md md:text-xs text-white bg-gradient-to-tr from-neutral-900 to-neutral-500 hover:scale-105 ease-in-out duration-300">Cotizá</button>
                      </Link>
                </div>
        
                <Image src={params.linea === 'cajeros' ? cajerosLogo : params.linea === 'lineaOmega' ? omegaLogo : params.linea === 'lineaSalud' ? saludLogo : '404'} width={params.linea === 'lineaSalud' ? 110 : params.linea === 'lineaOmega' ? 200 : params.linea === 'cajeros' ? 300 : 1} title="GRG Banking Omega by Power Consultant, Productos Salud" alt="GRG Banking Omega by Power Consultant, Productos Salud" />

                
                

            </div>

            <ProductGrid products={definirLinea()} />


         
        </div>
    </section>
  )
}
