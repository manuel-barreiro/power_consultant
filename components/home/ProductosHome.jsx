'use client';

import { FiArrowUp } from 'react-icons/fi'
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay } from 'swiper'

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import '../productos/ProductSwiper/ProductSwiper.css'


const ProductosHome = () => {
    
    const slider = [
        {
            title: "ΩMEGA",
            subtitle: "by Power",
            imgUrl: "/images/productos/lineaOmega/omega5000.png",
            lineaUrl: "/productos/lineaOmega"
          },
          {
            title: "Cajeros",
            subtitle: "Cajero Express",
            imgUrl: "/images/productos/lineaGRG/grgH22.png",
            lineaUrl: "/productos/Cajeros"
          },
          {
            title: "Servicio Técnico",
            imgUrl: "/images/productSwiper/servTecnico.jpg",
            lineaUrl: "/servicioTecnico"
          },
          {
            title: "Flujo de Personas",
            subtitle: "Turnos",
            isPdf: true,
            imgUrl: "/images/productSwiper/turnos.jpg",
            lineaUrl: "https://drive.google.com/file/d/1nhn8qiKG7ScDzRjP7FW-rKAes_XY6gR4/view?usp=drive_link"
          },
          {
            title: "Sistema de Recaudación",
            subtitle: "Cool Pay",
            imgUrl: "/images/productSwiper/coolPay.jpg",
            lineaUrl: "/productos/coolPay"
          },
          {
            title: "Reconocimiento Facial",
            subtitle: "Matching de Rostros",
            imgUrl: "/images/productSwiper/facialRecog.jpg",
            isPdf: true,
            lineaUrl: "https://drive.google.com/file/d/1FCHX6KrmZC7kT1uitjuO-cPLE34dkpqL/view?usp=drive_link"
          },
          {
            title: "Onboarding",
            subtitle: "Validación de Identidad",
            imgUrl: "/images/productSwiper/identidad.png",
            lineaUrl: "/productos/reconocimientoFacial"
          },
          {
            title: "Control Fronterizo",
            imgUrl: "/images/productSwiper/controlFronterizo.jpg",
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

        <div className='w-full h-full container px-8 md:px-32 pb-20 mx-auto'>

            <div className='flex flex-col gap-10 justify-between items-center'>

                <div className='md:basis-1/3 max-w-lg'>
                    <div>
                        <span className='text-gray-500'>INNOVACIÓN A TU SERVICIO</span>
                        <h1 className='font-bold bg-gradient-to-tr from-neutral-900 to-neutral-500 bg-clip-text text-transparent text-3xl mb-3 mt-2'>Potenciá tu negocio con nuestras soluciones.</h1>
                        <hr className='bg-primaryOrange w-28 h-1' />
                        
                        
                    </div>
                </div>

                <Swiper
                className='w-full md:w-[60%] md:basis-2/3'
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
                                <Link href={data.lineaUrl} target={data.isPdf ? "_blank" : "_self"}>
                                    <div>
                                        <span className="w-10 h-10 text-2xl bg-primaryOrange rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-1 transition-all duration-300 mb-4"><FiArrowUp/></span>
                                        <h2 className='text-3xl font-bold text-white mb-2 text-center'>{data.title}</h2>
                                        {data.subtitle && <h4 className='text-xl font-bold text-white mb-2 text-center'>{data.subtitle}</h4> }
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

export default ProductosHome