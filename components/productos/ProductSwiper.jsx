'use client';

// swiper
import{ Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { omega5000 } from "@public";

// import swiper style
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/pagination";
import 'swiper/css/effect-coverflow'

import Link from "next/link";
import Image from "next/image";

 
function ProductSwiper() {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={50}
        pagination={{ 
          clickable: true,
          dynamicBullets: true,
         }}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper text-black h-auto overflow-x-hidden'
      >
        <SwiperSlide>
          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <Link href={''}>
              <Image src={omega5000}
                    alt="nashe" className="h-80 w-72 object-cover rounded-t-xl"
            />
              <div className="px-4 py-3 w-72 flex flex-col gap-5">
                <p className="text-xl font-bold text-black truncate block text-center">Card 1</p>
                <button className="px-4 py-2 mt-1 w-full rounded-md md:text-xs text-white bg-gradient-to-tr from-neutral-900 to-neutral-500 hover:scale-105 ease-in-out duration-300">Más información</button>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <Link href={''}>
              <Image src={omega5000}
                    alt="nashe" className="h-80 w-72 object-cover rounded-t-xl"
            />
              <div className="px-4 py-3 w-72 flex flex-col gap-5">
                <p className="text-xl font-bold text-black truncate block text-center">Card 2</p>
                <button className="px-4 py-2 mt-1 w-full rounded-md md:text-xs text-white bg-gradient-to-tr from-neutral-900 to-neutral-500 hover:scale-105 ease-in-out duration-300">Más información</button>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <Link href={''}>
              <Image src={omega5000}
                    alt="nashe" className="h-80 w-72 object-cover rounded-t-xl"
            />
              <div className="px-4 py-3 w-72 flex flex-col gap-5">
                <p className="text-xl font-bold text-black truncate block text-center">Card 3</p>
                <button className="px-4 py-2 mt-1 w-full rounded-md md:text-xs text-white bg-gradient-to-tr from-neutral-900 to-neutral-500 hover:scale-105 ease-in-out duration-300">Más información</button>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <Link href={''}>
              <Image src={omega5000}
                    alt="nashe" className="h-80 w-72 object-cover rounded-t-xl"
            />
              <div className="px-4 py-3 w-72 flex flex-col gap-5">
                <p className="text-xl font-bold text-black truncate block text-center">Card 4</p>
                <button className="px-4 py-2 mt-1 w-full rounded-md md:text-xs text-white bg-gradient-to-tr from-neutral-900 to-neutral-500 hover:scale-105 ease-in-out duration-300">Más información</button>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <Link href={''}>
              <Image src={omega5000}
                    alt="nashe" className="h-80 w-72 object-cover rounded-t-xl"
            />
              <div className="px-4 py-3 w-72 flex flex-col gap-5">
                <p className="text-xl font-bold text-black truncate block text-center">Card 5</p>
                <button className="px-4 py-2 mt-1 w-full rounded-md md:text-xs text-white bg-gradient-to-tr from-neutral-900 to-neutral-500 hover:scale-105 ease-in-out duration-300">Más información</button>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <Link href={''}>
              <Image src={omega5000}
                    alt="nashe" className="h-80 w-72 object-cover rounded-t-xl"
            />
              <div className="px-4 py-3 w-72 flex flex-col gap-5">
                <p className="text-xl font-bold text-black truncate block text-center">Card 6</p>
                <button className="px-4 py-2 mt-1 w-full rounded-md md:text-xs text-white bg-gradient-to-tr from-neutral-900 to-neutral-500 hover:scale-105 ease-in-out duration-300">Más información</button>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <Link href={''}>
              <Image src={omega5000}
                    alt="nashe" className="h-80 w-72 object-cover rounded-t-xl"
            />
              <div className="px-4 py-3 w-72 flex flex-col gap-5">
                <p className="text-xl font-bold text-black truncate block text-center">Card 7</p>
                <button className="px-4 py-2 mt-1 w-full rounded-md md:text-xs text-white bg-gradient-to-tr from-neutral-900 to-neutral-500 hover:scale-105 ease-in-out duration-300">Más información</button>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <Link href={''}>
              <Image src={omega5000}
                    alt="nashe" className="h-80 w-72 object-cover rounded-t-xl"
            />
              <div className="px-4 py-3 w-72 flex flex-col gap-5">
                <p className="text-xl font-bold text-black truncate block text-center">Card 8</p>
                <button className="px-4 py-2 mt-1 w-full rounded-md md:text-xs text-white bg-gradient-to-tr from-neutral-900 to-neutral-500 hover:scale-105 ease-in-out duration-300">Más información</button>
              </div>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ProductSwiper;