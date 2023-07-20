import { logoPower } from "@public"
import Image from "next/image"
import Link from "next/link"

const Nav = () => {
  return (
    <nav className="font-montserrat flex justify-between items-center w-full h-20 lg:h-[12vh] shadow-navbarShadow px-8">

      <div>
        <Image src={logoPower} width={65} alt="logo" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex">
        <ul className="flex justify-evenly items-center gap-10">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/productos">
            <li>Productos</li>
          </Link>
          <Link href="/servicioTecnico">
            <li>Servicio Técnico</li>
          </Link>
          <Link href="/contacto">
            <li>Contacto</li>
          </Link>
        </ul>
      </div>
      
      {/* Mobile Menu */}

      <div className='w-6 h-5 flex flex-col justify-between items-center md:hidden text-4xl text-primaryOrange cursor-pointer overflow-hidden group'>
        <span className='w-full h-[2px] bg-primaryOrange inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
        <span className='w-full h-[2px] bg-primaryOrange inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300'></span>
        <span className='w-full h-[2px] bg-primaryOrange inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>
      </div>

      
    </nav>
  )
}

export default Nav