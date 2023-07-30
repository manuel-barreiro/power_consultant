import ProductGrid from "@components/productos/ProductGrid"
import Link from "next/link"
import Image from "next/image"
import { grgLogo, omega5000 } from "@public"

const page = () => {

  const products = [
    {
      key: 1,
      name: 'Salud 1',
      img: 'omega5000',
      urlName: 'omega5000'
    }
  ]

  return (
    <section className="font-montserrat w-full h-auto">
      <div className="w-full h-full container px-8 md:px-32 mx-auto py-20 md:pt-10">

            <div className='w-full rounded-3xl h-auto bg-gradient-to-tr from-orange-400 to-orange-600 flex justify-between px-6 py-3 items-center'>
                <div>
                    <h3 className='pb-4 font-bold text-xl xs:text-2xl sm:text-3xl bg-gradient-to-tr from-neutral-900 to-neutral-500 bg-clip-text text-transparent'>Línea GRG</h3>
                    <button className="px-4 py-2 rounded-md md:text-xs text-white bg-gradient-to-tr from-neutral-900 to-neutral-500 hover:scale-105 ease-in-out duration-300">Cotizá</button>
                </div>
                
                <div className="w-40">
                    <Image src={grgLogo}></Image>
                </div>

            </div>

            <ProductGrid products={products} />


         
        </div>
    </section>
  )
}

export default page