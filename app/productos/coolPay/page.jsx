import ProductPage from "@components/productos/ProductPage";
import { coolPay } from "@public";

const page = () => {


const objeto = {
  "linea" : 'Sistema de Recaudación',
  "img" : coolPay,
  "name" : 'Sistema Cool Pay',
  "tdn" : false,
  "parrafo" : true,
  "caracteristicas" : ["El Sistema Cool Pay® integra el hardware y software necesario para lograr la más óptima solución de los sistemas de cobro.", "Es una solución ideal para todo aquel negocio que maneje recaudaciones de cobro en efectivo o electrónico, por ende su uso es escalable a varias industrias y negocios, tales como telefonía, estacionamiento, cines, restaurants, clubes, municipios, y la lista podría continuar.", "Principales beneficios:", "- AUMENTAR PUNTOS DE VENTAS DE MANERA ECONÓMICA, FÁCIL Y RÁPIDA.", "- REDUCCIÓN DE COSTO DE PUESTO DE ATENCIÓN MENORES COMISIONES POR TARJETAS", "- REDUCE CONTRATACIÓN DE CONTROLADORES FISCALES DISMINUYE COLAS EN CAJA.", "- AUMENTA BOCAS DE VENTA", "- ATENCIÓN 24/7", "- ELIMINA BILLETES FALSOS", "- ELIMINA FALTANTE DE CAJA", "- RESGUARDO DE VALORES." ],
  "isPdf" :  "https://drive.google.com/file/d/1EHyZyM5DJ4cbXwOBJa2sw5xp1DyWu5SQ/view?usp=drive_link",
}
 

 return (
    <ProductPage linea={objeto.linea} img={objeto.img} name={objeto.name} car={objeto.car} tdn={objeto.tdn} parrafo={objeto.parrafo} caracteristicas={objeto.caracteristicas} isPdf={objeto.isPdf} isVideo={objeto.isVideo} />
  )
}

export default page