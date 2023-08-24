'use client';

import Slider from 'react-infinite-logo-slider';
import Image from 'next/image';
import { aerolineas, anses, bancoChaco, bancoChubut, bancoCiudad, bancoColumbia, bancoIndustrial, 
        bancoPatagonia, bancoTierraDelFuego, bancoProvincia, BBVA, cemic, cencosud, codere, cordial, 
        globalBlue, rapidoArgentino, siderca, telefonica, ternium, univPalermo, allianz, atos, bancoCoinag,
        bancoCorrientes, bancoPiano, banelco, brinks, fadel, itau, movistar, supervielle, ypf } from '@public'



const Clientes = () => {

  return (
    <section className='h-auto py-20 w-full overflow-hidden bg-backgroundGray'>

      <div className='w-full h-full flex flex-col gap-12 justify-evenly items-center container px-8 md:px-32 mx-auto overflow-hidden text-center'>
      
        <h3 className='text-3xl font-bold py-4 text-center'>Confían en nosotros</h3>
      
      
        <Slider
            width="250px"
            duration={30}
            pauseOnHover={false}
            blurBorders={true}
            blurBoderColor={'#fff'}
        >
            <Slider.Slide>
                <Image priority={true} src={aerolineas} className='w-40' alt="aerolineas" title="Cliente que confía en nosotros"/>
            </Slider.Slide>
            <Slider.Slide>
                <Image priority={true} src={anses} className='w-40' alt="anses" title="Cliente que confía en nosotros" />
            </Slider.Slide>
            <Slider.Slide>
                <Image priority={true} src={bancoChaco} className='w-40' alt="bancoChaco" title="Cliente que confía en nosotros" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={bancoChubut} className='w-40' alt="bancoChubut" title="Cliente que confía en nosotros" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={bancoCiudad} className='w-40' alt="bancoCiudad" title="Cliente que confía en nosotros" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={bancoColumbia} className='w-40' alt="bancoColumbia" title="Cliente que confía en nosotros" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={bancoIndustrial} className='w-40' alt="bancoIndustrial" title="Cliente que confía en nosotros" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={bancoPatagonia} className='w-40' alt="bancoPatagonia" title="Cliente que confía en nosotros" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={bancoTierraDelFuego} className='w-40' alt="bancoTierraDelFuego" title="Cliente que confía en nosotros" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={bancoProvincia} className='w-40' alt="bancoProvincia" title="Cliente que confía en nosotros" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={BBVA} className='w-40' alt="BBVA" title="Cliente que confía en nosotros" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={cemic} className='w-40' alt="cemic" title="Cliente que confía en nosotros" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={cencosud} className='w-40' alt="cencosud" title="Cliente que confía en nosotros" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={codere} className='w-40' alt="codere" title="Cliente que confía en nosotros" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={cordial} className='w-40' alt="cordial" title="Cliente que confía en nosotros" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={globalBlue} className='w-40' alt="globalBlue" title="Cliente que confía en nosotros" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={rapidoArgentino} className='w-40' alt="rapidoArgentino" title="Cliente que confía en nosotros" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={siderca} className='w-40' alt="siderca" title="Cliente que confía en nosotros" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={telefonica} className='w-40' alt="telefonica" title="Cliente que confía en nosotros" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={ternium} className='w-40' alt="ternium" title="Cliente que confía en nosotros" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={univPalermo} className='w-40' alt="univPalermo" title="Cliente que confía en nosotros" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={allianz} className='w-40' alt="allianz" title="Cliente que confía en nosotros" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={atos} className='w-40' alt="atos" title="Cliente que confía en nosotros" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={bancoCoinag} className='w-40' alt="bancoCoinag" title="Cliente que confía en nosotros" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={bancoCorrientes} className='w-40' alt="bancoCorrientes" title="Cliente que confía en nosotros" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={bancoPiano} className='w-40' alt="bancoPiano" title="Cliente que confía en nosotros" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={banelco} className='w-40' alt="banelco" title="Cliente que confía en nosotros" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={brinks} className='w-40' alt="brinks" title="Cliente que confía en nosotros" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={fadel} className='w-40' alt="fadel" title="Cliente que confía en nosotros" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={itau} className='w-40' alt="itau" title="Cliente que confía en nosotros" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={movistar} className='w-40' alt="movistar" title="Cliente que confía en nosotros" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={supervielle} className='w-40' alt="supervielle" title="Cliente que confía en nosotros" />
            </Slider.Slide>
            <Slider.Slide>
              <Image priority={true} src={ypf} className='w-40' alt="ypf" title="Cliente que confía en nosotros" />
            </Slider.Slide>
        </Slider>
      </div>
    </section>
  )
}

export default Clientes