'use client';

import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'
import Link from 'next/link';
import { FaHandshakeSimple } from 'react-icons/fa6';
import { BsGraphUpArrow } from 'react-icons//bs';
import { MdVerified } from 'react-icons/md';
import { useState } from 'react';

const Experiencia = () => {

  //Counter
  const [counterOn, setCounterOn] = useState(false);


  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
        <section className="h-auto py-20 w-full">
            <div className="w-full h-full container px-8 md:px-32 mx-auto">

                <div className="w-full h-full flex flex-col md:flex-row justify-center items-center gap-14 ">
                
                    <div className="flex flex-col w-full md:w-[50%]">

                        <div className="p-6 h-36 md:h-32 relative rounded shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] w-[60%] self-end -mb-5 z-30 bg-gradient-to-tr from-slate-50 to-gray-100 hover:scale-105 ease-in-out duration-300">
                            <FaHandshakeSimple size={40} className='absolute -top-5 -right-5 text-primaryOrange' />
                            <h2 className='font-bold text-4xl md:text-5xl'>
                                {counterOn &&
                                    <CountUp start={0} prefix='+' end={170} duration={4} delay={0}/>
                                }
                            </h2>
                            <p className='text-slate-500 border-l-4 border-primaryOrange pl-2 ml-4 mt-2'>Clientes</p>
                        </div>


                        <div className="p-6 h-36 md:h-32 relative rounded shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] w-[70%] bg-gradient-to-tr from-slate-50 to-gray-100 hover:scale-105 ease-in-out duration-300">
                            <BsGraphUpArrow size={40} className='absolute -top-8 -left-5 text-primaryOrange' />
                            <h2 className='font-bold text-4xl md:text-5xl'>
                                {counterOn &&
                                    <CountUp start={0} prefix='+' end={14000} separator='.' duration={4} delay={0}/>
                                }
                            </h2>
                            <p className='text-slate-500 border-l-4 border-primaryOrange pl-2 ml-4 mt-2'>Equipos instalados</p>
                        </div>

                        <div className="p-6 h-36 md:h-32 relative rounded shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] w-[60%] self-end -mt-5 z-30 bg-gradient-to-tr from-slate-50 to-gray-100 hover:scale-105 ease-in-out duration-300">
                            <MdVerified size={40} className='absolute -bottom-5 -right-5 text-primaryOrange' />
                            <h2 className='font-bold text-4xl md:text-5xl'>
                                {counterOn &&
                                    <CountUp start={0} prefix='+' end={22} duration={4} delay={0}/>
                                }
                            </h2>
                            <p className='text-slate-500 border-l-4 border-primaryOrange pl-2 ml-4 mt-2'>Años de experiencia</p>
                        </div>

                    </div>

                    <div className="md:w-[50%] flex flex-col gap-5 items-start">
                        <h1 className="text-2xl md:text-4xl text-primaryOrange font-bold">El <span className='font-extrabold'>compromiso</span> y la <span className='font-extrabold'>calidad</span> como banderas</h1>
                        <p className="text-justify">Lideramos la industria, acompañando siempre a nuestros clientes y poniendo su satisfacción como máxima prioridad.</p>
                        <p>Contamos con certificación <span className='font-semibold'>ISO:9001</span>, cumpliendo los más altos estándares de calidad en el mercado.</p>
                        <Link href="/contacto">
                            <button className='px-4 py-2 rounded-md text-white bg-primaryOrange border border-primaryOrange hover:bg-white hover:text-primaryOrange duration-300 '>Contactanos</button>
                        </Link>
                    </div>

                </div>

            </div>
        </section>
    </ScrollTrigger>
  )
}

export default Experiencia