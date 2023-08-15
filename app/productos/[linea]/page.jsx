import ProductGrid from "@components/productos/ProductGrid"
import Image from "next/image"
import { grgLogo, omegaLogo } from '@public' //Agregar saludLogo
import { productosOmega } from "@public/productosOmega"
import { productosGRG } from "@public/productosGRG"
import { productosSalud } from "@public/productosSalud"
import Link from "next/link"
  
const page = ({ params }) => {

  function definirLinea() {
    if (params.linea === 'lineaOmega'){
      return productosOmega
    } 
    else if (params.linea === 'Cajeros'){
      return productosGRG
    }
    else if (params.linea === 'lineaSalud') {
      return productosSalud
    }
  }

  // function definirImagenLinea() {
  //   if (params.linea === 'lineaOmega'){
  //     return omegaLogo
  //   } 
  //   else if (params.linea === 'lineaGRG'){
  //     return grgLogo
  //   }
  //   else {
  //     return productosSalud
  //   }
  // }



  return (
    <section className="font-montserrat w-full h-auto">
      <div className="w-full h-full container px-8 md:px-32 mx-auto py-20 md:pt-10">

            <div className='w-full rounded-3xl h-auto bg-gradient-to-tr from-orange-400 to-orange-600 flex justify-between px-6 py-3 items-center'>
                <div>
                    <h3 className='pb-4 font-bold text-xl xs:text-2xl sm:text-3xl bg-gradient-to-tr from-neutral-900 to-neutral-500 bg-clip-text text-transparent'>
                      {params.linea === 'Cajeros' ? 'Cajeros' : params.linea === 'lineaOmega' ? 'Línea Omega' : params.linea === 'lineaSalud' ? 'Línea Salud' : '404'}</h3>
                    
                </div>
                
                <Link href="/contacto">
                  <button className="px-4 py-2 rounded-md md:text-xs text-white bg-gradient-to-tr from-neutral-900 to-neutral-500 hover:scale-105 ease-in-out duration-300">Cotizá</button>
                </Link>

                {/* <div className="w-40">
                    <Image src={definirImagenLinea()}></Image>
                </div> */}

            </div>

            <ProductGrid products={definirLinea()} />


         
        </div>
    </section>
  )
}

export default page