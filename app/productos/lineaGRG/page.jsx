import { grgLogo, omega5000, grgH22, totemParaTurnosWeb } from "@public"
import Image from "next/image"

const page = () => {
  return (

    <section className="font-montserrat w-full h-auto">
      <div className="w-full h-full container px-8 md:px-32 mx-auto py-20 md:pt-10">

            <div className='w-full rounded-xl h-auto bg-gradient-to-tr from-orange-400 to-orange-600 flex justify-between px-6 py-3 items-center'>
                <div>
                    <h3 className='pb-4 font-bold text-xl xs:text-2xl sm:text-3xl bg-gradient-to-tr from-neutral-900 to-neutral-500 bg-clip-text text-transparent'>Línea GRG</h3>
                    <button className="px-4 py-2 rounded-md md:text-xs text-white bg-gradient-to-tr from-neutral-900 to-neutral-500 hover:scale-105 ease-in-out duration-300">Cotizá</button>
                </div>
                
                <div className="w-40">
                    <Image src={grgLogo}></Image>
                </div>

            </div>


          {/* // <!-- ✅ Grid Section - Starts Here 👇 --> */}
          <div id="Projects"
              className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

              {/* <!--   ✅ Product card 1 - Starts Here 👇 --> */}
              <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                  <a href="#">
                      <Image src={omega5000}
                              alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                      <div className="px-4 py-3 w-72 flex flex-col gap-5">
                          <p className="text-xl font-bold text-black truncate block text-center">Omega 5000</p>
                          <button className="px-4 py-2 mt-1 w-full rounded-md md:text-xs text-white bg-gradient-to-tr from-neutral-900 to-neutral-500 hover:scale-105 ease-in-out duration-300">Más información</button>
                      </div>
                  </a>
              </div>
              {/* <!--   🛑 Product card 1 - Ends Here  --> */}

              {/* <!--   ✅ Product card 2 - Starts Here 👇 --> */}
              <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                  <a href="#">
                      <Image src={omega5000}
                              alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                      <div className="px-4 py-3 w-72 flex flex-col gap-5">
                          <p className="text-xl font-bold text-black truncate block text-center">Omega 5000</p>
                          <button className="px-4 py-2 mt-1 w-full rounded-md md:text-xs text-white bg-gradient-to-tr from-neutral-900 to-neutral-500 hover:scale-105 ease-in-out duration-300">Más información</button>
                      </div>
                  </a>
              </div>
              {/* <!--   🛑 Product card 2- Ends Here  --> */}

              {/* <!--   ✅ Product card 3 - Starts Here 👇 --> */}
              <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                  <a href="#">
                      <Image src={omega5000}
                              alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                      <div className="px-4 py-3 w-72 flex flex-col gap-5">
                          <p className="text-xl font-bold text-black truncate block text-center">Omega 5000</p>
                          <button className="px-4 py-2 mt-1 w-full rounded-md md:text-xs text-white bg-gradient-to-tr from-neutral-900 to-neutral-500 hover:scale-105 ease-in-out duration-300">Más información</button>
                      </div>
                  </a>
              </div>
              {/* <!--   🛑 Product card 3 - Ends Here  --> */}

              {/* <!--   ✅ Product card 4 - Starts Here 👇 --> */}
              <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                  <a href="#">
                      <Image src={omega5000}
                              alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                      <div className="px-4 py-3 w-72 flex flex-col gap-5">
                          <p className="text-xl font-bold text-black truncate block text-center">Omega 5000</p>
                          <button className="px-4 py-2 mt-1 w-full rounded-md md:text-xs text-white bg-gradient-to-tr from-neutral-900 to-neutral-500 hover:scale-105 ease-in-out duration-300">Más información</button>
                      </div>
                  </a>
              </div>
              {/* <!--   🛑 Product card 4 - Ends Here  --> */}

              {/* <!--   ✅ Product card 5 - Starts Here 👇 --> */}
              <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                  <a href="#">
                      <Image src={omega5000}
                              alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                      <div className="px-4 py-3 w-72 flex flex-col gap-5">
                          <p className="text-xl font-bold text-black truncate block text-center">Omega 5000</p>
                          <button className="px-4 py-2 mt-1 w-full rounded-md md:text-xs text-white bg-gradient-to-tr from-neutral-900 to-neutral-500 hover:scale-105 ease-in-out duration-300">Más información</button>
                      </div>
                  </a>
              </div>
              {/* <!--   🛑 Product card 5 - Ends Here  --> */}

              {/* <!--   ✅ Product card 6 - Starts Here 👇 --> */}
              <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                  <a href="#">
                      <Image src={omega5000}
                              alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                      <div className="px-4 py-3 w-72 flex flex-col gap-5">
                          <p className="text-xl font-bold text-black truncate block text-center">Omega 5000</p>
                          <button className="px-4 py-2 mt-1 w-full rounded-md md:text-xs text-white bg-gradient-to-tr from-neutral-900 to-neutral-500 hover:scale-105 ease-in-out duration-300">Más información</button>
                      </div>
                  </a>
              </div>
              {/* <!--   🛑 Product card 6 - Ends Here  --> */}

        </div>
        </div>
      </section>

// <!-- 🛑 Grid Section - Ends Here -->
  )
}

export default page