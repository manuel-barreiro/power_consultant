import { FaLocationDot, FaPhone, FaEnvelope, FaLinkedinIn, FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa6'
import Image from 'next/image'
import { logoPower } from '@public'

const Footer = () => {
  return (
    <footer className="w-full h-auto border border-y-2 border-gray-200">
        <div className="w-full h-full container px-8 md:px-32 mx-auto py-12">

            <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-14">

                <div className='flex flex-col gap-10'>

                    <p className='flex justify-center md:justify-start items-center gap-2'><FaLocationDot size={25} className="text-secondaryOrange"/>Grito de Asencio 3544, CABA</p>
                    <p className='flex justify-center md:justify-start items-center gap-2'><FaPhone size={25} className="text-secondaryOrange"/>+54 9 11 5277-9500</p>
                    <p className='flex justify-center md:justify-start items-center gap-2'><FaWhatsapp size={25} className="text-secondaryOrange"/>+54 9 11 4494-0763</p>
                    <p className='flex justify-center md:justify-start items-center gap-2'><FaEnvelope size={25} className="text-secondaryOrange"/>info@pc-sa.com.ar</p>

                </div>

                <div className='flex flex-col gap-4 justify-center items-center'>
                    <Image src={logoPower} width={150} />

                    <div className='flex justify-evenly items-center gap-4'>
                        <a href="https://www.linkedin.com/company/power-consultant/" target="_blank">
                            <span className="w-8 h-8 text-md text-white bg-black rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                <FaLinkedinIn />
                             </span>
                        </a>
                        <a href="https://www.facebook.com/PowerConsultant" target="_blank">
                            <span className="w-8 h-8 text-md text-white bg-black rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                <FaFacebookF />
                             </span>
                        </a>
                        <a href="https://instagram.com/powerconsultantsa?igshid=MzRlODBiNWFlZA==" target="_blank">
                            <span className="w-8 h-8 text-md text-white bg-black rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                <FaInstagram />
                             </span>
                        </a>
                        <a href="https://api.whatsapp.com/send/?phone=%2B5491144940763&text&type=phone_number&app_absent=0" target="_blank">
                            <span className="w-8 h-8 text-md text-white bg-black rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                <FaWhatsapp />
                             </span>
                        </a>

                    </div>
                </div>

                <div className='overflow-hidden rounded-lg shadow-lg'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.2767954850597!2d-58.413883125533275!3d-34.6477119598207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5903eb4e74d%3A0x2d9c42ddfa928ea6!2sPower%20Consultant%20S.A.!5e0!3m2!1ses!2sar!4v1690430977821!5m2!1ses!2sar" width="100%" height="100%" title="map"></iframe>
                </div>

            </div>
            
        </div>
        <div className="py-6 bg-gradient-to-tr from-orange-400 to-orange-600 text-white text-center h-full">
                <p>Power Consultant® | 2023 <br/> Todos los derechos reservados</p>
        </div>

    </footer>
  )
}

export default Footer