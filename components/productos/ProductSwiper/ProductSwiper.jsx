'use client';

import { FiArrowUp } from 'react-icons/fi'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay } from 'swiper'

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './ProductSwiper.css'
import Link from 'next/link';


const ProductSwiper = () => {
    
    const slider = [
        {
            title: "ΩMEGA by Power",
            imgUrl: "/images/productos/lineaOmega/omega5000.png",
            lineaUrl: "/productos/lineaOmega"
          },
          {
            title: "Cajeros Express",
            imgUrl: "/images/productos/lineaGRG/grgH22.png",
            lineaUrl: "/productos/lineaGRG"
          },
          {
            title: "Servicio Técnico",
            imgUrl: "/images/productSwiper/servTecnico.jpg",
            lineaUrl: "/servicioTecnico"
          },
          {
            title: "Flujo de Personas",
            imgUrl: "/images/productSwiper/turnos.jpg",
            lineaUrl: "/productos/flujoDePersonas"
          },
          {
            title: "Recaudación Cool Pay",
            imgUrl: "/images/productSwiper/coolPay.jpg",
            isPdf: true,
            lineaUrl: "/productos/coolPay"
          },
          {
            title: "Reconocimiento Facial",
            imgUrl: "/images/productSwiper/facialRecog.jpg",
            isPdf: true,
            lineaUrl: "/productos/reconocimientoFacial"
          },
          {
            title: "Control Fronterizo",
            imgUrl: "/images/productSwiper/controlFronterizo.jpg",
            isPdf: true,
            lineaUrl: "/productos/controlFronterizo"
          },
          {
            title: "Salud",
            imgUrl: "/images/productSwiper/salud.jpg",
            lineaUrl: "/productos/lineaSalud"
          }
    ]


  return (
    <div className='font-montserrat w-full h-auto'>

        <div className='w-full h-full container px-8 md:px-32 pt-10 pb-24 mx-auto'>

            <div className='flex flex-col gap-10 justify-between items-center md:flex-row md:items-center md:justify-evenly md:gap-24'>

                <div className='md:basis-1/3'>
                    <div>
                        <span className='text-gray-500'>INNOVACIÓN A TU SERVICIO</span>
                        <h1 className='font-bold bg-gradient-to-tr from-neutral-900 to-neutral-500 bg-clip-text text-transparent text-3xl mb-3 mt-2'>Llevá tu negocio al siguiente nivel.</h1>
                        <hr className='bg-primaryOrange w-28 h-1' />
                        <p className='text-justify mt-3'>Te presentamos una selección de nuestras innovadoras líneas de productos y soluciones, diseñadas para <span className='font-bold'>potenciar</span> tu empresa con la última tecnología.</p>
                        <button className='px-4 py-2 mt-5 rounded-md md:text-lg text-white bg-primaryOrange border border-primaryOrange hover:bg-white hover:text-primaryOrange duration-300  hover:scale-105 ease-in-out'>
                            Contactanos
                        </button>
                    </div>
                </div>

                <Swiper
                className='w-full md:basis-2/3'
                modules={[Pagination, EffectCoverflow, Autoplay]}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 3,
                    slideShadows: true
                }}
                loop={true}
                pagination={{clickable: true}}

                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 1
                    },
                    1024: {
                        slidesPerView: 2
                    },
                    1560: {
                        slidesPerView: 3
                    },
                }}
                
                >
                    {
                        slider.map(data => (
                            <SwiperSlide key={data.title} className="myswiper-slider" style={{ backgroundImage: `url(${data.imgUrl})` }}>
                                <Link href={data.lineaUrl}>
                                    <div>
                                        <span className="w-10 h-10 text-2xl bg-primaryOrange rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-1 transition-all duration-300 mb-4"><FiArrowUp/></span>
                                        <h2 className='text-3xl font-bold text-white mb-2 text-center'>{data.title}</h2> 
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default ProductSwiper