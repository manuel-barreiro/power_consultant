'use client';

import { FiArrowUp } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

import { omega5000, grgH22, controlFronterizo, coolPaySwiper, facialRecog, identidad, servTecnico, salud, turnos } from '@public';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import '../productos/ProductSwiper/ProductSwiper.css';


const ProductosHome = () => {
    
  const slider = [
    {
        title: "ΩMEGA",
        subtitle: "by Power",
        img: omega5000,
        lineaUrl: "/productos/lineaOmega"
      },
      {
        title: "Control Fronterizo",
        img: controlFronterizo,
        lineaUrl: "/productos/controlFronterizo"
      },
      {
        title: "Cajeros",
        subtitle: "Cajero Express",
        img: grgH22,
        lineaUrl: "/productos/cajeros"
      },
      {
        title: "Servicio Técnico",
        img: servTecnico,
        lineaUrl: "/servicioTecnico"
      },
      {
        title: "Flujo de Personas",
        subtitle: "Turnos",
        isPdf: true,
        img: turnos,
        lineaUrl: "https://drive.google.com/file/d/1nhn8qiKG7ScDzRjP7FW-rKAes_XY6gR4/view?usp=drive_link"
      },
      {
        title: "Sistema de Recaudación",
        subtitle: "Cool Pay",
        img: coolPaySwiper,
        lineaUrl: "/productos/coolPay"
      },
      {
        title: "Reconocimiento Facial",
        subtitle: "Matching de Rostros",
        img: facialRecog,
        isPdf: true,
        lineaUrl: "https://drive.google.com/file/d/1FCHX6KrmZC7kT1uitjuO-cPLE34dkpqL/view?usp=drive_link"
      },
      {
        title: "Onboarding",
        subtitle: "Validación de Identidad",
        img: identidad,
        lineaUrl: "/productos/onboarding"
      },
      {
        title: "Salud",
        img: salud,
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
                        <h2 className='font-bold bg-gradient-to-tr from-neutral-900 to-neutral-500 bg-clip-text text-transparent text-3xl mb-3 mt-2'>Potenciá tu negocio con nuestras soluciones</h2>
                        <hr className='bg-primaryOrange w-28 h-1' />
                        
                        
                    </div>
                </div>

                <Swiper
                className='w-full md:w-[60%]'
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
                            <SwiperSlide key={data.title}>

                              <Link href={data.lineaUrl} target={data.isPdf ? "_blank" : "_self"}>

                                <div className="h-[400px] relative flex flex-col justify-end items-center w-full">

                                  <Image src={data.img} priority={true} className="w-full h-full object-cover absolute"/>

                                  <div className='absolute h-full w-full bg-black/25'></div>

                                  <div className="relative pb-10 flex flex-col justify-evenly items-center">
                                      <span className="w-10 h-10 text-2xl bg-primaryOrange rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-1 transition-all duration-300 mb-4">
                                        <FiArrowUp/>
                                      </span>
                                      <h3 className='text-3xl font-bold text-white mb-2 text-center'>
                                        {data.title}
                                      </h3>
                                      {data.subtitle && <h4 className='text-xl font-bold text-white mb-2 text-center'>
                                        {data.subtitle}
                                      </h4>}
                                  </div>

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