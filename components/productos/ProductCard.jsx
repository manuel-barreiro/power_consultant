import Link from "next/link"
import Image from "next/image"
import { grgLogo, omega5000 } from "@public"


const ProductCard = ({img, name, urlName}) => {
  return (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <Link href={urlName}>
          <Image src={{img}}
                  alt="Product" className="h-80 w-72 object-cover rounded-t-xl"
           />
          <div className="px-4 py-3 w-72 flex flex-col gap-5">
              <p className="text-xl font-bold text-black truncate block text-center">{name}</p>
              <button className="px-4 py-2 mt-1 w-full rounded-md md:text-xs text-white bg-gradient-to-tr from-neutral-900 to-neutral-500 hover:scale-105 ease-in-out duration-300">Más información</button>
          </div>
      </Link>
    </div>
  )
}

export default ProductCard