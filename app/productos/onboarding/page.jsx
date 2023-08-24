import ProductPage from "@components/productos/ProductPage";
import { omega47identidad } from "@public";

export const metadata = {
  title: 'Onboarding',
  description: 'El proceso de onboarding con validación de identidad y reconocimiento facial combina la verificación de documentación y la identidad de una persona con la tecnología de reconocimiento facial para asegurar que la persona que se registra es quien dice ser.',
  openGraph: {
    images: '/images/productos/soluciones/omega47identidad.png',
  },
  alternates: {
    canonical: '/productos/onboarding'
  }
}

export default function page() {


const objeto = {
  "linea" : 'Onboarding / Validación de Identidad',
  "img" : omega47identidad,
  "name" : 'Sistema Ω-47-Identidad',
  "tdn" : false,
  "parrafo" : true,
  "caracteristicas" : ["El proceso de onboarding con validación de identidad y reconocimiento facial combina la verificación de documentación y la identidad de una persona con la tecnología de reconocimiento facial para asegurar que la persona que se registra es quien dice ser.", 
  "Este novedoso sistema de IA que permite realizar validaciones fidedignas de rostro y documentación, y consecuentemente genera registros altamente confiables de acreditación de las personas.", "La operatoria es muy intuitiva, el usuario se acerca con su documento y lo posiciona en donde la grafica lo indica. En ese momento la Ω-47-IDENTIDAD, procede a validar el documento con un proceso altamente confiable de IA a través de tecnología especifica que comprueba la integridad del documento, extrae la información , fotografía y toda la información del chip , si lo tuviera. Concluidos estos pasos, se acredita la veracidad del documento, para poder continuar con los procesos de autenticación de la persona.", "Nuestro Ω-47-IDENTIDAD respeta las normas que son las que riegen hoy los controles de calidad en el proceso de reconociendo facial. A su vez la calidad de imagen se ayorna al las exigencias del informe técnico para la toma de la imagen.", "Nuestra tecnología de reconocimiento facial se encuentra instalada en el la NASA, el FBI y el departamento de estado de los EEUU." ],
  "isPdf" :  "https://drive.google.com/file/d/1xa55d2-tiNsdZApydf3eIwI4xuF5LtMc/view?usp=drive_link",
  "isVideo" : "https://drive.google.com/file/d/1PIydIiHzAboi0RTjJy2GGl6q2TtpHScH/view?usp=drive_link"
}
 
 return (
    <ProductPage linea={objeto.linea} img={objeto.img} name={objeto.name} car={objeto.car} tdn={objeto.tdn} parrafo={objeto.parrafo} caracteristicas={objeto.caracteristicas} isPdf={objeto.isPdf} isVideo={objeto.isVideo} />
  )

}

