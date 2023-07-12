import Image from "next/image"

const Nav = () => {
  return (
    <nav className="container mx-auto w-full py-5 flex justify-between items-center border-b-2 border-gray-500 border-opacity-30 bg-neutral-100/20">
      <div className="flex justify-evenly items-center cursor-pointer">
        <Image src='/images/logoPower.png' alt="Logo Power Consultant" width={60} height={60} />
        <p className="text-2xl font-semibold ml-2">Power Consultant® </p>
      </div>
        <ul className="flex justify-evenly gap-5 text-primary-orange">
          <li className="cursor-pointer hover:border-b-2 border-opacity-20 border-primary-orange">Inicio</li>
          <li className="cursor-pointer hover:border-b-2 border-opacity-20 border-primary-orange">Productos</li>
          <li className="cursor-pointer hover:border-b-2 border-opacity-20 border-primary-orange">Integraciones</li>
          <li className="cursor-pointer hover:border-b-2 border-opacity-20 border-primary-orange">Servicio Técnico</li>
          <li className="cursor-pointer hover:border-b-2 border-opacity-20 border-primary-orange">Contacto</li>
        </ul>
    </nav>
  )
}

export default Nav