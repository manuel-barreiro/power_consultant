'use client';

import Slider from 'react-infinite-logo-slider';
import Image from 'next/image';
import { aerolineas, anses, bancoChaco, bancoChubut, bancoCiudad, bancoColumbia, bancoIndustrial, 
        bancoPatagonia, bancoTierraDelFuego, bancoProvincia, BBVA, cemic, cencosud, codere, cordial, 
        globalBlue, rapidoArgentino, siderca, telefonica, ternium, univPalermo } from '@public'



const Clientes = () => {

  return (
    <section className='h-auto py-32 w-full overflow-hidden bg-backgroundGray'>

      <div className='w-full h-full flex flex-col gap-20 justify-evenly items-center container px-8 md:px-32 mx-auto overflow-hidden text-center'>
      
        <h1 className='text-3xl font-bold py-4 text-center'>Confían en nosotros</h1>
      
      
        <Slider
            width="250px"
            duration={30}
            pauseOnHover={false}
            blurBorders={true}
            blurBoderColor={'#fff'}
        >
            <Slider.Slide>
                <Image priority={true} src={aerolineas} className='w-40' alt="aerolineas"/>
            </Slider.Slide>
            <Slider.Slide>
                <Image priority={true} src={anses} className='w-40' alt="anses" />
            </Slider.Slide>
            <Slider.Slide>
                <Image priority={true} src={bancoChaco} className='w-40' alt="bancoChaco" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={bancoChubut} className='w-40' alt="bancoChubut" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={bancoCiudad} className='w-40' alt="bancoCiudad" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={bancoColumbia} className='w-40' alt="bancoColumbia" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={bancoIndustrial} className='w-40' alt="bancoIndustrial" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={bancoPatagonia} className='w-40' alt="bancoPatagonia" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={bancoTierraDelFuego} className='w-40' alt="bancoTierraDelFuego" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={bancoProvincia} className='w-40' alt="bancoProvincia" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={BBVA} className='w-40' alt="BBVA" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={cemic} className='w-40' alt="cemic" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={cencosud} className='w-40' alt="cencosud" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={codere} className='w-40' alt="codere" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={cordial} className='w-40' alt="cordial" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={globalBlue} className='w-40' alt="globalBlue" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={rapidoArgentino} className='w-40' alt="rapidoArgentino" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={siderca} className='w-40' alt="siderca" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={telefonica} className='w-40' alt="telefonica" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={ternium} className='w-40' alt="ternium" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={univPalermo} className='w-40' alt="univPalermo" />
            </Slider.Slide>
        </Slider>
      </div>
    </section>
  )
}

export default Clientes