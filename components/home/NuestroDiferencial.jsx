import { BiSupport } from "react-icons/bi"
import { FaGears } from "react-icons/fa6"
import { atm } from "@public"
import Image from "next/image"

const NuestroDiferencial = () => {
  return (
    <section className="h-auto py-20 w-full bg-backgroundGray">

        <div className="w-full h-full flex flex-col gap-16 justify-center items-center container px-8 md:px-32 mx-auto">

                
            <h3 className="text-3xl font-bold">Nuestro diferencial</h3>

            <div className="flex flex-col md:flex-row gap-10">

                <div className="flex flex-col gap-2 p-6 border-2 border-slate-300/60 rounded">
                    <Image src={atm}/>
                    <h4 className="font-semibold text-lg">Vanguardia en productos</h4>
                    <p className="font-base text-slate-500">La más innovadora tecnología a disposición de tu empresa.</p>
                </div>

                <div className="flex flex-col gap-2 p-6 border-2 border-slate-300/60 rounded">
                    <FaGears size={35} className="text-secondaryOrange"/>
                    <h4 className="font-semibold text-lg">Servicio técnico</h4>
                    <p className="font-base text-slate-500">Nos distinguimos por brindar calidad como servicio.</p>
                </div>

                <div className="flex flex-col gap-2 p-6 border-2 border-slate-300/60 rounded">
                    <BiSupport size={35} className="text-secondaryOrange"/>
                    <h4 className="font-semibold text-lg">Soporte 24/7</h4>
                    <p className="font-base text-slate-500">¿Algún problema? Nuestro equipo está para ayudarte.</p>
                </div>

            </div>
            
        </div>

    </section>
  )
}

export default NuestroDiferencial