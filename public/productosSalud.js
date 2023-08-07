import { totemParaTurnosWeb, arcoMulti , camaraTermica , ozono , terminalAcceso , termoInfra, cabina } from '@public'

export const productosSalud = [
    {
        "id": 0,
        "name": "Cabina de Atención",
        "img": cabina,
        "cat": "lineaSalud",
        "urlName": "cabinaDeAtencion",
        "car": true,
        "tdn": false,
        "parrafo": true,
        "caracteristicas": [
            "En los últimos años hemos implementado soluciones con sucursales autónomas para que las institucines puedan realizar operaciones remotas sin la necesidad de tener personas físicas.",
            "Debido al éxito que tiene el proyecto, ya que este método de atención en las instituciones favorece en forma exponencial la capilaridad del sistema y la accesibilidad al público -y en este caso pacientes-, decidimos llevar este concepto de atención, al sistema de atención médica primaria.",
            "De aquí surge la CABINA POWER (Cabina de Atención Primaria Diagnostica), este tipo de solución es óptima para distribuir en todo lugar en donde la aparatología médica básica es escasa, al igual que la presencia de profesionales médicos, o que el acceso físico de los mismos sea dificultoso por problemas geográficos, climáticos, de seguridad o de infraestructura, (Montañas, ríos, falta de rutas, consultorios, etc…).",
            "La misma pude operar las 24 horas los 7 días de la semana. Las CABINA POWER se focalizan en el ámbito de la salud, donde estas se convierten es un instrumento muy eficaz tanto para los efectores o financiadores, públicos como privados o sindicales.",
            "Almacenamiento de las 10 últimas lecturas.",
            " El principio de operatividad de la CABINA POWER se basa en la combinación de la autoatención con aparatología básica y la video consulta médica. ",
            ],
        "isPdf" :  "https://drive.google.com/file/d/11DqhZtEh5TlYB2IeqT5o0gHQDbexzyw3/view?usp=drive_link",
    },
    {
        "id": 1,
        "name": "Termómetro Infrarrojo",
        "img": termoInfra,
        "cat": "lineaSalud",
        "urlName": "termometroInfrarrojo",
        "car": true,
        "tdn": false,
        "parrafo": false,
        "caracteristicas": [
            "Sensor confiable diseñado en Alemania.",
            "Posee una alta precisión y sensibilidad",
            "Alarma por temperatura elevada.",
            "Opciones de escala de medición (°C/ °F)",
            "Almacenamiento de las 10 últimas lecturas.",
            "Posee 3 tipos diferentes de colores para usarlo en la pantalla para mejor lectura.",
            "Se toma la lectura de temperatura entre 5-8 cm de la frente del paciente."
            ]
    },
    {
        "id": 2,
        "name": "Arco Multifunción",
        "img": arcoMulti,
        "cat": "lineaSalud",
        "urlName": "arcoMultifuncion",
        "car": true,
        "tdn": false,
        "parrafo": false,
        "caracteristicas": [
            
            "Área de disminución de carga viral de la parte inferior del cuerpo",
            "Dispenser electrónico de alcohol de gel para manos.",
            "Posee sensor de medición de temperatura corporal por proximidad y alarma lumínica para detección de temperatura fuera de rango.",
            "Es de fácil instalación",
            "Recomendado para accesos masivos."
          ]
    },
    {
        "id": 3,
        "name": "Desinfección con Ozono",
        "img": ozono,
        "cat": "lineaSalud",
        "urlName": "desinfeccionConOzono",
        "car": true,
        "tdn": false,
        "parrafo": true,
        "caracteristicas": [
            "Es un servicio de limpieza que garantiza los ambientes desinfectados para tu lugar de trabajo eliminando el 99% de los virus. El Ozono destruye numerosos virus, bacterias y hongos, es muy eficaz para la familia del coronavirus.",
            "Este, penetra en la membrana celular, disminuyendo la carga vírica y evitando su propagación. El tratamiento requiere ser llevado a cabo por manos expertas para asegurar el beneficio y la seguridad con efectividad."
          ]
    },
    {
        "id": 4,
        "name": "Terminal de Acceso",
        "img": terminalAcceso,
        "cat": "lineaSalud",
        "urlName": "terminalDeAcceso",
        "car": true,
        "tdn": false,
        "parrafo": false,
        "caracteristicas": [
            "Este equipo permite el reconocimiento facial para control de acceso con medición de temperatura.", 
            "Reconoce el uso de tapabocas y registra hasta 50.000 rostros.", 
            "Monitoreo remoto para mayor control.",
            "Ideales para empresas"
          ]
    },
    {
        "id": 5,
        "name": "Totem Turnos Web",
        "img": totemParaTurnosWeb,
        "cat": "lineaSalud",
        "urlName": "totemTurnosWeb",
        "car": true,
        "tdn": false,
        "parrafo": true,
        "caracteristicas": [
            "Ante la nueva realidad, ofrecemos una manera de volver a atender al cliente, segura, fácil, rápida y eficaz. Con TURNOS WEB",
            "Este software tiene como objetivo evitar conglomeraciones, tiempos de espera, contacto social, brindar la mayor seguridad y protección a clientes y personal , a fin de volver a atender."
          ]
    },
    {
        "id": 6,
        "name": "Cámara Térmica",
        "img": camaraTermica,
        "cat": "lineaSalud",
        "urlName": "camaraTermica",
        "car": true,
        "tdn": false,
        "parrafo": true,
        "caracteristicas": [
            "Sabemos lo importante que es hoy controlar el nivel de temperatura de las personas que ingresan a un edificio.",

            "La cámara térmica es un producto estratégico con una resolución de 1080p, es compatible con aplicaciones multiterminales, lo que permite a los clientes ver las áreas afectadas en cualquier momento en cualquier lugar.",

            "Es un sistema de detección de doble luz totalmente integrado para humanos que detecta la temperatura corporal."
          ]
    },

]