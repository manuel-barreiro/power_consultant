'use client';

import Link from 'next/link';

import { FiArrowUp } from 'react-icons/fi'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay } from 'swiper'

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import './ProductSwiper.css'

const slider = [
    {
        title: "Línea Omega",
        imgUrl: "/images/productos/omega5000.png"
      },
      {
        title: "Cajeros Express",
        imgUrl: "/images/productos/grgH22.png"
      },
      {
        title: "Servicio Técnico",
        imgUrl: "/images/productSwiper/servTecnico.jpg"
      },
      {
        title: "Turnos",
        imgUrl: "/images/productSwiper/turnos.jpg"
      },
      {
        title: "Cool Pay",
        imgUrl: "/images/productSwiper/coolPay.jpg"
      },
      {
        title: "Reconocimiento Facial",
        imgUrl: "/images/productSwiper/facialRecog.jpg",
        largo: true
      },
      {
        title: "Control Fronterizo",
        imgUrl: "/images/productSwiper/controlFronterizo.jpg"
      },
]

const ProductSwiper = () => {
  return (
    <div className='carousel font-montserrat container px-8 md:px-32 pt-10 pb-24 mx-auto'>
        <div>
            <div className='carousel-content md:pr-12'>
                <span className='text-gray-500'>DESCUBRÍ LA INNOVACIÓN</span>
                <h1 className='font-bold bg-gradient-to-tr from-neutral-900 to-neutral-500 bg-clip-text text-transparent'>Llevá tu negocio al siguiente nivel.</h1>
                <hr />
                <p className='text-justify'>Te presentamos una selección de nuestras innovadoras líneas de productos, diseñadas para <span className='font-bold'>potenciar</span> tu empresa con la última tecnología.</p>
                <button className='px-4 py-2 mt-6 rounded-md md:text-lg text-white bg-primaryOrange border border-primaryOrange hover:bg-white hover:text-primaryOrange duration-300  hover:scale-105 ease-in-out'>
                    Contactanos
                </button>
            </div>
        </div>

        <Swiper 
        className='myswiper'
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
                    <SwiperSlide key={data.title} className="myswiper-slider" style={{ backgroundImage: `url(${data.imgUrl})`}}>
                        <div>
                            <h2 className={data.largo ? 'text-lg font-bold text-white mb-4' : 'text-xl font-bold text-white mb-1' }>{data.title}</h2> 
                            <span className="w-8 h-8 text-lg bg-primaryOrange rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-1 transition-all duration-300"><FiArrowUp/></span>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
  )
}

export default ProductSwiper