const Contacto = () => {
  return (
    <section className="h-auto py-20 w-full relative bg-backgroundGray">
        <div className="w-full h-full container px-8 md:px-32 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-bold text-primaryOrange mb-4">Contactanos.</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Un asesor se comunicará a la brevedad para responder su consulta.</p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                    <div className="p-2 w-1/2">
                        <div className="relative">
                            <label for="name" className="leading-7 text-sm text-gray-600">Nombre</label>
                            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primaryOrange focus:bg-white focus:ring-2 focus:ring-primaryOrange/50 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-8"/>
                        </div>
                    </div>
                    <div className="p-2 w-1/2">
                        <div className="relative">
                            <label for="email" className="leading-7 text-sm text-gray-600">Correo</label>
                            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primaryOrange focus:bg-white focus:ring-2 focus:ring-primaryOrange/50 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-8"/>
                        </div>
                    </div>
                    <div className="p-2 w-1/2">
                        <div className="relative">
                            <label for="name" className="leading-7 text-sm text-gray-600">Empresa</label>
                            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primaryOrange focus:bg-white focus:ring-2 focus:ring-primaryOrange/50 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-8"/>
                        </div>
                    </div>
                    <div className="p-2 w-1/2">
                        <div className="relative">
                            <label for="email" className="leading-7 text-sm text-gray-600">Teléfono</label>
                            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primaryOrange focus:bg-white focus:ring-2 focus:ring-primaryOrange/50 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-8"/>
                        </div>
                    </div>
                    <div className="p-2 w-full">
                        <div className="relative">
                            <label for="message" className="leading-7 text-sm text-gray-600">Consulta</label>
                            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primaryOrange focus:bg-white focus:ring-2 focus:ring-primaryOrange/50 h-14 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                    </div>
                    <div className="p-2 w-full">
                        <button className="px-4 py-2 rounded-md text-white bg-primaryOrange border border-primaryOrange hover:bg-white hover:text-primaryOrange duration-300 w-full">Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contacto