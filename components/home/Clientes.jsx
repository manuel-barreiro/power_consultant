'use client';

import Slider from 'react-infinite-logo-slider';
import Image from 'next/image';
import {Cliente6, Cliente7, Cliente8, Cliente9, Cliente10, Cliente11, Cliente12, Cliente13, Cliente14, Cliente15, Cliente16, Cliente17, Cliente18, Cliente19, Cliente20, Cliente21, Cliente22, Cliente23, Cliente24, Cliente25, Cliente26 } from '@public'



const Clientes = () => {

  return (
    <section className='h-auto py-24 w-full overflow-hidden bg-backgroundGray'>

      <div className='w-full h-full flex flex-col gap-16 justify-evenly items-center container px-8 md:px-32 mx-auto overflow-hidden'>
      
        <h1 className='text-3xl font-bold py-4'>Confían en nosotros</h1>
      
      
        <Slider
            width="250px"
            duration={20}
            pauseOnHover={false}
            blurBorders={false}
            blurBoderColor={'#fff'}
        >
            <Slider.Slide>
                <Image src={Cliente6} width={144} alt="any"/>
            </Slider.Slide>
            <Slider.Slide>
                <Image src={Cliente7} width={144} alt="any2" />
            </Slider.Slide>
            <Slider.Slide>
                <Image src={Cliente8} width={144} alt="any3" />
            </Slider.Slide>
            <Slider.Slide>
              <Image src={Cliente9} width={144} alt="any3" />
            </Slider.Slide>

        </Slider>
      </div>
    </section>
  )
}

export default Clientes