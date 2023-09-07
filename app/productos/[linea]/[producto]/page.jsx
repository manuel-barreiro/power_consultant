import ProductPage from "@components/productos/ProductPage"

import { productosOmega } from "@public/productosOmega"
import { cajeros } from "@public/cajeros"
import { productosSalud } from "@public/productosSalud"
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  // Combina los tres arrays en uno solo
  const allProds = productosOmega.concat(cajeros, productosSalud);

  // Devuelvo los static params en la forma [ { linea: 'lineaOmega', producto: 'omega500' }, { linea: 'lineaOmega', producto: 'omega50' }, ...]
  return allProds.map((item) => ({
            linea: item.cat, producto: item.urlName
            })
          )
}

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
    else {
      notFound()
    }
}

  const productoBuscado = definirLinea().find((item) => item.urlName === params.producto);

  if (!productoBuscado) {
    notFound()
  }

      return {
        title: productoBuscado.name,
        description: productoBuscado.caracteristicas,
        openGraph: {
          images: `/images/productos/${productoBuscado.cat}/${productoBuscado.urlName}.png`,
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
