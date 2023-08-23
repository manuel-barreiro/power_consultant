import ProductPage from "@components/productos/ProductPage"

import { productosOmega } from "@public/productosOmega"
import { cajeros } from "@public/cajeros"
import { productosSalud } from "@public/productosSalud"

import { 
  //Línea Omega
  omega5000, omega42, omega47, omega50, omega500, omega600, omega1000, omega1800, omega3600, omega5000M,
  
  //Cajeros
  grgH22, grgH34, videoTeller, cajeroExpress,
  
  //Línea Salud
  totemParaTurnosWeb, arcoMulti , camaraTermica , ozono , terminalAcceso , termoInfra, cabina, clinicas,

  //Soluciones
  coolPay, omega47abc, omega47identidad} from '@public'

export async function generateMetadata({ params }) {

  function definirLinea() {
    if (params.linea === 'lineaOmega'){
        return productosOmega
    } 
    else if (params.linea === 'cajeros'){
        return cajeros
    }
    else if (params.linea === 'lineaSalud') {
        return productosSalud
    }
}

  const productoBuscado = definirLinea().find((item) => item.urlName === params.producto);

      return {
        title: productoBuscado.name,
        description: productoBuscado.caracteristicas,
        openGraph: {
          images: productoBuscado.img,
        },
        alternates: {
          canonical: `/productos/${productoBuscado.cat}/${productoBuscado.urlName}`
        },
        
        
      }


}

export default function page({ params }) {
  const linea = params.linea === 'lineaOmega' ? 'Línea Omega' : params.linea === 'cajeros' ? 'Cajeros' : params.linea === 'lineaSalud' ? 'Línea Salud' : '404'

  function definirLinea() {
            if (params.linea === 'lineaOmega'){
                return productosOmega
            } 
            else if (params.linea === 'cajeros'){
                return cajeros
            }
            else if (params.linea === 'lineaSalud') {
                return productosSalud
            }
        }

  const objetoBuscado = definirLinea().find((item) => item.urlName === params.producto);

  return (
    <ProductPage key={linea} linea={linea} img={objetoBuscado.img} name={objetoBuscado.name} car={objetoBuscado.car} tdn={objetoBuscado.tdn} parrafo={objetoBuscado.parrafo} caracteristicas={objetoBuscado.caracteristicas} tipoDeNegocio={objetoBuscado.tipoDeNegocio} isPdf={objetoBuscado.isPdf} isVideo={objetoBuscado.isVideo} />
  )
}
