import Image from 'next/image';
import { estructura } from '@public';
import { FaGears } from "react-icons/fa6";
import { argentina } from '@public';

export const metadata = {
    title: 'Servicio Técnico',
    description: 'Se brinda atención directa a los usuarios, resolviendo la mayor cantidad de solicitudes de servicio en el primer contacto en línea o derivamos a los sectores de soporte necesarios para la solución, realizando un seguimiento detallado de la evolución del incidente. Se dispone de una herramienta de software que permite la gestión integral del servicio.',
    alternates: {
        canonical: '/servicioTecnico'
    }
  }

export default function page() {
  return (
    <section className='w-full h-auto'>

        <div className='mx-auto text-white relative w-full h-full container px-8 md:px-32 mx-auto"'>

            <div className='py-10'>
                <span className='text-gray-500 flex items-center gap-2'> <FaGears />SERVICIO TÉCNICO DE MANTENIMIENTO</span>
                <h1 className='font-bold bg-gradient-to-tr from-neutral-900 to-neutral-500 bg-clip-text text-transparent text-3xl md:text-5xl mb-3 mt-2 pb-2'>Despreocupate, nosotros nos encargamos.</h1>
                <hr className='bg-primaryOrange w-32 h-1' /> 
            </div>

            <div className='flex flex-col md:flex-row justify-evenly items-start gap-6'>
                <Image src={argentina} className='h-[500px]' />
                <div>
                    <p className='font-bold bg-gradient-to-tr from-neutral-900 to-neutral-500 bg-clip-text text-transparent text-xl mb-4'>Nuestra empresa cuenta con un sistema de gestión de servicio técnico de mantenimiento certificado según la norma ISO 9001-2008.</p>

                    <div className='text-justify bg-gradient-to-tr from-neutral-900 to-neutral-500 bg-clip-text text-transparent flex flex-col gap-4 justify-evenly border border-slate-400/50 p-6'>
                        <p className='bg-gradient-to-tr from-neutral-900 to-neutral-500 bg-clip-text text-transparent'>Se brinda atención directa a los usuarios, resolviendo la mayor cantidad de solicitudes de servicio en el primer contacto en línea o derivamos a los sectores de soporte necesarios para la solución, realizando un seguimiento detallado de la evolución del incidente. Se dispone de una herramienta de software que permite la gestión integral del servicio.</p>

                        <p className='bg-gradient-to-tr from-neutral-900 to-neutral-500 bg-clip-text text-transparent'>A través de un software integral para help desk y seguimiento de incidentes - TITANIUM Customer Help Desk, que incrementa la capacidad de soporte y asegura un seguimiento real de los incidentes previniendo situaciones de caída de los servicios, a través de su sistema de alarmas y monitoreo y optimiza la gestión permitiendo dar a los usuarios un servicio eficiente. </p>

                        <p className='bg-gradient-to-tr from-neutral-900 to-neutral-500 bg-clip-text text-transparent'>Además a través de la creación de las bases de conocimientos se mejoran los índices de resolución de incidentes en el primer contacto del usuario con la mesa de ayuda. Esta herramienta permite tener la disponibilidad de información que ayuda a la acción proactiva para la resolución de problemas</p>
                    </div>
                </div>
            </div>

        </div>

        <div className='mt-12'>
            <Image src={estructura} className='w-full bg-slate-700 mix-blend-hard-light'/>
        </div>
    </section>
  )
}

