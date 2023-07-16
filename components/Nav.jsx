import Image from "next/image"

const Nav = () => {
  return (
    <nav className="container mx-auto w-full py-5 flex justify-between items-center border-b-2 border-gray-500 border-opacity-30 bg-neutral-100/20 font-montserrat">
      <div className="flex justify-evenly items-center cursor-pointer">
        <Image src='/images/logoPower.png' alt="Logo Power Consultant" width={60} height={60} />
        <p className="text-2xl font-semibold ml-2">Power Consultant </p>
      </div>
        <ul className="flex justify-evenly gap-5 text-primaryOrange">
          <li className="cursor-pointer hover:border-b-2 border-opacity-20 border-primaryOrange">Inicio</li>
          <li className="cursor-pointer hover:border-b-2 border-opacity-20 border-primaryOrange">Productos</li>
          <li className="cursor-pointer hover:border-b-2 border-opacity-20 border-primaryOrange">Integraciones</li>
          <li className="cursor-pointer hover:border-b-2 border-opacity-20 border-primaryOrange">Servicio Técnico</li>
          <li className="cursor-pointer hover:border-b-2 border-opacity-20 border-primaryOrange">Contacto</li>
        </ul>
    </nav>
  )
}

export default Nav