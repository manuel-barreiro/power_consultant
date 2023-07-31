import ProductPage from "@components/productos/ProductPage"

import { productosOmega } from "@public/productosOmega"
import { productosGRG } from "@public/productosGRG"
import { productosSalud } from "@public/productosSalud"


const page = ({ params }) => {
  const linea = params.linea === 'lineaOmega' ? 'Línea Omega' : params.linea === 'lineaGRG' ? 'Línea GRG' : params.linea === 'lineaSalud' ? 'Línea Salud' : '404'

  function definirLinea() {
            if (params.linea === 'lineaOmega'){
                return productosOmega
            } 
            else if (params.linea === 'lineaGRG'){
                return productosGRG
            }
            else if (params.linea === 'lineaSalud') {
                return productosSalud
            }
        }

  const objetoBuscado = definirLinea().find((item) => item.urlName === params.producto);

  return (
    <ProductPage linea={linea} img={objetoBuscado.img} name={objetoBuscado.name} />
  )
}

export default page