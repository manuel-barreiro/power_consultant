'use client';

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
        imgUrl: "/images/productSwiper/facialRecog.jpg"
      },
      {
        title: "Control Fronterizo",
        imgUrl: "/images/productSwiper/controlFronterizo.jpg"
      },
]

const ProductSwiper = () => {
  return (
    <div className='font-montserrat container px-8 md:px-32 pt-10 pb-24 mx-auto'>
        

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
                    <SwiperSlide key={data.title} className="myswiper-slider" style={{ backgroundImage: `url(${data.imgUrl})` }}>
                        <div>
                            <span className="w-10 h-10 text-2xl bg-primaryOrange rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-1 transition-all duration-300 mb-4"><FiArrowUp/></span>
                            <h2 className='text-3xl font-bold text-white mb-2 text-center'>{data.title}</h2> 
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
  )
}

export default ProductSwiper