import ProductPage from "@components/productos/ProductPage";
import { omega47abc } from "@public";

export const metadata = {
  title: "Control Fronterizo",
  description:
    'Sabemos lo importante que es hoy agilizar los procesos en el lobby de migración de los puestos fronterizos, puertos y aeropuertos, sin perder los altos niveles de seguridad. También el factor estratégico de abrir nuevas bocas de acceso internacional al país para facilitar el desarrollo económico regional, poder aumentar a bajo costo, la capilaridad y la accesibilidad del sistema migratorio a fin de agilizar los accesos.", "Cualquiera de los modelos de este producto, pueden utilizarse en los distintos puestos de ingreso al país. La ventaja de operar las 24 hs. los 7 días de la semana sin requerir de RRHH adicionales, convierte a esta solución en una herramienta extraordinaria para poder realizar una migración rápida y segura.',
  openGraph: {
    images: "/images/productos/soluciones/omega47abc.png",
    title: "Control Fronterizo",
    description:
      'Sabemos lo importante que es hoy agilizar los procesos en el lobby de migración de los puestos fronterizos, puertos y aeropuertos, sin perder los altos niveles de seguridad. También el factor estratégico de abrir nuevas bocas de acceso internacional al país para facilitar el desarrollo económico regional, poder aumentar a bajo costo, la capilaridad y la accesibilidad del sistema migratorio a fin de agilizar los accesos.", "Cualquiera de los modelos de este producto, pueden utilizarse en los distintos puestos de ingreso al país. La ventaja de operar las 24 hs. los 7 días de la semana sin requerir de RRHH adicionales, convierte a esta solución en una herramienta extraordinaria para poder realizar una migración rápida y segura.',
    url: "www.powerconsultant.com.ar/productos/controlFronterizo",
  },
  alternates: {
    canonical: "/productos/controlFronterizo",
  },
};

export default function page() {
  const objeto = {
    linea: "Sistema de Control Fronterizo",
    img: omega47abc,
    name: "Sistema Ω-47-ABC",
    tdn: false,
    parrafo: true,
    caracteristicas: [
      "El Sistema Ω-47-ABC es una solución que integra el hardware necesario y el más sofisticado software.",
      "Sabemos lo importante que es hoy agilizar los procesos en el lobby de migración de los puestos fronterizos, puertos y aeropuertos, sin perder los altos niveles de seguridad. También el factor estratégico de abrir nuevas bocas de acceso internacional al país para facilitar el desarrollo económico regional, poder aumentar a bajo costo, la capilaridad y la accesibilidad del sistema migratorio a fin de agilizar los accesos.",
      "Cualquiera de los modelos de este producto, pueden utilizarse en los distintos puestos de ingreso al país. La ventaja de operar las 24 hs. los 7 días de la semana sin requerir de RRHH adicionales, convierte a esta solución en una herramienta extraordinaria para poder realizar una migración rápida y segura.",
      "El sistema, recopila, analiza y provee información inteligente acerca de la identidad y movimientos de los migrantes entrantes y salientes para facilitar la toma de decisiones en la prevención de ilícitos.",
      "El sistema cuenta con funciones de identificación de las personas y su documentación de viaje o tránsito.",
      "Consulta y alerta contra listas de impedimentos locales y de interpol.",
    ],
    isPdf: "",
    isVideo: "",
  };

  // "isPdf" :  "https://drive.google.com/file/d/19sFOdgEMZsZbbyvUh9nuOPwFIIwBTxCw/view?usp=drive_link",
  //   "isVideo" : "https://drive.google.com/file/d/1rZtnGIACmxRezxbWH426N3AiYW6iyKp9/view?usp=drive_link"

  return (
    <ProductPage
      linea={objeto.linea}
      img={objeto.img}
      name={objeto.name}
      car={objeto.car}
      tdn={objeto.tdn}
      parrafo={objeto.parrafo}
      caracteristicas={objeto.caracteristicas}
      isPdf={objeto.isPdf}
      isVideo={objeto.isVideo}
    />
  );
}
