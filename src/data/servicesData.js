import vidaImage from "../assets/IMGs/Services/Vida.png";
import saludImage from "../assets/IMGs/Services/Salud.png";
import hogarImage from "../assets/IMGs/Services/Hogar.png";
import vehiculosImage from "../assets/IMGs/Services/Vehiculos.png";
import educacionImage from "../assets/IMGs/Services/Educacion.png";
import motocicletaImage from "../assets/IMGs/Services/Motocicletas.png";
import arrendamientoImage from "../assets/IMGs/Services/Arrendamiento.png";
import bicicletaImage from "../assets/IMGs/Services/Bicicleta.png";
import cumplimientoImage from "../assets/IMGs/Services/Cumplimiento.png";
import rcEmpresas from "../assets/IMGs/Services/rcEmpresas.png";
import rcProfesional from "../assets/IMGs/Services/rcProfesional.png";
import rcContractual from "../assets/IMGs/Services/rcContractual.png";
import rcExtracontractual from "../assets/IMGs/Services/Extracontractual.png";
import credVehiculos from "../assets/IMGs/Services/credVehiculos.png";
import credMotosAltoCilindraje from "../assets/IMGs/Services/CredMotosAltoCilindraje.png";

const servicesData = {
  "Vida": {
    consiste: "El seguro de vida es mucho más que una póliza: es una forma de proteger lo que más valoras. Te brinda seguridad económica y respaldo financiero para ti y tus seres queridos ante cualquier imprevisto. Con opciones flexibles de pago y beneficios adicionales, este seguro se adapta a cada etapa de tu vida, ofreciéndote la tranquilidad de saber que tu futuro y el de tu familia están protegidos.",
    coberturas: [
      "Enfermedades graves.",
      "Incapacidad por enfermedad o accidente.",
      "Renta por hospitalización.",
      "Accidentes.",
      "Básico de vida."
    ],
    cta: "Cotiza tu seguro de vida con Star Asegurados y protege tu futuro",
    frase: "Asegura hoy el bienestar de quienes más quieres y vive con la tranquilidad de estar protegido ",
    enlace: "https://wa.link/0ec9tb",
    image: vidaImage
  },
  "Salud": {
    consiste: "El seguro de salud te ofrece tranquilidad y respaldo médico inmediato, con acceso ilimitado a consultas con especialistas, exámenes, tratamientos ambulatorios, prótesis y ayudas diagnósticas. Garantiza atención experta y oportuna ante enfermedades, accidentes o cirugías, brindando protección integral para ti y tu familia.",
    coberturas: [
      "Consultas externa especialitas.",
      "Hospitalización y cirugía.",
      "Médico en casa.",
      "Urgencias.",
      "Laboratorios clínicos."
    ],
    cta: "Cotiza tu seguro de salud con Star Asegurados y protege tu bienestar.",
    frase: "Cuida tu salud y la de tu familia con un respaldo que te acompaña siempre ",
    enlace: "https://wa.link/nvrhuu",
    image: saludImage
  },
  "Hogar": {
    consiste: "El seguro de hogar protege tu vivienda y todo lo que hay en ella, brindándote respaldo ante imprevistos y tranquilidad para tu familia. Cubre tanto la estructura del inmueble como los bienes dentro del hogar, incluyendo electrodomésticos, muebles y objetos personales. Esta póliza resguarda tu patrimonio familiar frente a daños por accidentes, fenómenos naturales o actos de terceros, asegurando la protección integral de tu hogar y quienes lo habitan.",
    coberturas: [
      "Contra incendios.",
      "Daños por agua.",
      "Corriente débil.",
      "Sustracción.",
      "Edificio.",
      "Terremotos."
    ],
    cta: "Cotiza tu seguro de hogar con Star Asegurados y protege tu patrimonio.",
    frase: "Tu casa merece la protección que te dé tranquilidad todos los días ",
    enlace: "https://wa.link/q2c3d3",
    image: hogarImage
  },
  "Vehículos": {
    consiste: "El seguro de vehículos te brinda protección integral y tranquilidad al conducir, cubriendo tu automóvil frente a accidentes, robos o daños materiales y personales. Más allá de proteger el vehículo, este seguro resguarda la vida del conductor, sus acompañantes y su patrimonio, ofreciendo respaldo económico ante cualquier imprevisto. Diseñado para todo tipo de vehículos, garantiza seguridad y confianza antes, durante y después de cada trayecto, permitiéndote disfrutar de la movilidad con total tranquilidad.",
    coberturas: [
      "Responsabilidad Civil Extracontractual.",
      "Pérdida total y parcial por daños ó hurtos."
    ],
    cta: "Cotiza tu seguro de vehículo con Star Asegurados y maneja con tranquilidad.",
    frase: "Conduce con confianza sabiendo que tú y tu vehículo están protegidos ",
    enlace: "https://wa.link/r5atm0",
    image: vehiculosImage
  },
  "Educación": {
    consiste: "El seguro de educación te permite planear y ahorrar de forma organizada para cubrir los costos de estudio tuyos o de tus seres queridos. Ayuda a financiar matrículas, manutención y programas académicos en cualquier nivel, incluso en el exterior. Además, es un seguro libre de obligaciones financieras: si dejas de pagarlo, no generas deuda y puedes recibir el capital acumulado en las fechas pactadas. Una forma segura de construir el respaldo educativo del futuro.",
    coberturas: [
      "Costos de matrícula.",
      "Gastos de manutención.",
      "Plan Vida Escolar.",
      "Plan Vida Complemento."
    ],
    cta: "Cotiza tu seguro de educación con Star Asegurados y construye tu futuro académico.",
    frase: "Asegura hoy las oportunidades educativas del mañana ",
    enlace: "https://wa.link/vvb7v0",
    image: educacionImage
  },
  "Motocicletas": {
    consiste: "El seguro de motocicletas te ofrece protección completa y asistencia permanente frente a los riesgos de accidentes o robo, brindando tranquilidad en cada recorrido. Cubre motos de alto y bajo cilindraje, incluyendo modelos eléctricos, y ofrece beneficios como revisiones preventivas gratuitas, asesoría mecánica, peritajes sin costo y servicio de grúa a nivel nacional. Es la forma más segura de proteger tu inversión y disfrutar la movilidad con el respaldo y la confianza que necesitas día a día.",
    coberturas: [
      "Pérdidad totales por daños ó hurtos.",
      "Asistencia por varada.",
      "Asistencia jurídica.",
      "Responsabilidad Civil Extracontractual."
    ],
    cta: "Cotiza tu seguro de motocicleta con Star Asegurados y conduce con confianza.",
    frase: "Tu moto merece la protección que te acompañe en cada kilómetro ",
    enlace: "https://wa.link/wncepu",
    image: motocicletaImage
  },
  "Arrendamiento": {
    consiste: "El seguro de arrendamiento ofrece seguridad y respaldo financiero a los propietarios, garantizando el pago de los cánones de alquiler y gastos adicionales en caso de incumplimiento por parte del arrendatario. Esta cobertura protege tus ingresos y asegura la estabilidad económica de tu inversión inmobiliaria, brindando tranquilidad ante cualquier imprevisto relacionado con tus propiedades en alquiler.",
    coberturas: [
      "Pago de canon de arrendamiento.",
      "Cuotas de administración.",
      "Reembolso de valor de servicios públicos."
    ],
    cta: "Cotiza tu seguro de arrendamiento con Star Asegurados y garantiza tus ingresos.",
    frase: "Protege tu renta y asegura la tranquilidad de tu inversión ",
    enlace: "https://wa.link/exfsjt",
    image: arrendamientoImage
  },
  "Bicicletas": {
    consiste: "El seguro para bicicletas te brinda protección integral en caso de pérdida total por robo o daños, y te respalda si sufres un incidente o causas un accidente que afecte a otra persona o bien material. Incluye asistencias especializadas, como asesoría mecánica, orientación en postura y acondicionamiento físico, además de servicios de revisión y alistamiento para mantener tu bici en óptimas condiciones. Este seguro también contempla apoyo legal en reclamaciones civiles o penales, ofreciéndote tranquilidad y acompañamiento en tus desplazamientos diarios, tanto en bicicletas tradicionales como eléctricas.",
    coberturas: [
      "Daños a terceros.",
      "Gastos defensa judicial.",
      "Accidentes personales.",
      "Pérdidas totales por daño o hurto"
    ],
    cta: "Cotiza tu seguro de bicicleta con Star Asegurados y pedalea seguro.",
    frase: "Pedalea con confianza sabiendo que tu bicicleta está protegida ",
    enlace: "https://wa.link/s7n69f",
    image: bicicletaImage
  },
  "RC Empresas": {
    consiste: "El seguro de responsabilidad civil para empresas protege a tu organización frente a reclamaciones por daños o perjuicios causados a terceros durante el desarrollo de sus actividades. Cubre afectaciones a bienes, personas o entornos derivados de operaciones, empleados, visitantes o procesos internos, ofreciendo respaldo financiero y legal para garantizar la continuidad del negocio. Es una solución esencial para empresas que buscan operar con seguridad, confianza y cumplimiento normativo.",
    coberturas: [],
    cta: "Cotiza tu RC Empresas con Star Asegurados y opera con tranquilidad.",
    frase: "Protege tu empresa frente a imprevistos ",
    enlace: "https://wa.link/rcrmkv",
    image: rcEmpresas
  },
  "RC Profesional": {
    consiste: "El seguro de responsabilidad civil profesional protege a especialistas y prestadores de servicios frente a reclamaciones por errores, omisiones o negligencias en el ejercicio de su profesión. Brinda respaldo económico y legal ante posibles demandas que puedan afectar el patrimonio y la reputación del profesional, garantizando tranquilidad al ofrecer servicios en sectores como salud, ingeniería, arquitectura, asesoría, tecnología y más.",
    coberturas: [],
    cta: "Cotiza tu RC Profesional con Star Asegurados y respalda tu labor.",
    frase: "Ejercer con confianza también es parte de tu profesión ",
    enlace: "https://wa.link/jip899",
    image: rcProfesional
  },
  "RC Contractual": {
    consiste: "El seguro de responsabilidad civil contractual cubre los daños o perjuicios causados a terceros derivados del incumplimiento o ejecución de un contrato. Protege a empresas y personas que adquieren responsabilidades pactadas y que puedan enfrentar reclamaciones por afectaciones durante la prestación de servicios, suministro, obras o acuerdos formales. Es una garantía clave para mantener relaciones comerciales seguras y cumplir compromisos establecidos.",
    coberturas: [],
    cta: "Cotiza tu seguro de vehículo con Star Asegurados y maneja con tranquilidad.",
    frase: "Conduce con confianza sabiendo que tú y tu vehículo están protegidos ",
    enlace: "https://wa.link/i3nlhl",
    image: rcContractual
  },
  "RC Extracontractual": {
    consiste: "El seguro de responsabilidad civil extracontractual ofrece protección frente a reclamaciones por daños o lesiones ocasionadas a terceros sin existir un contrato previo, ya sea por actividades cotidianas, comerciales, accidentes, instalaciones o personas bajo responsabilidad. Cubre perjuicios materiales, personales y morales, brindando apoyo financiero y asistencia legal para enfrentar reclamaciones imprevistas.",
    coberturas: [],
    cta: "Cotiza tu RC Extracontractual con Star Asegurados y actúa con tranquilidad.",
    frase: "Respaldo total ante daños a terceros fuera de un contrato ",
    enlace: "https://wa.link/6wnyax",
    image: rcExtracontractual
  },
  "Cumplimiento de Contrato": {
    consiste: "El seguro de cumplimiento garantiza que las obligaciones pactadas en un contrato se cumplan correctamente, protegiendo a empresas y personas frente a posibles incumplimientos de contratistas. Ofrece respaldo en contratos comerciales, órdenes de compra y ofertas mercantiles, asegurando la correcta ejecución de compromisos y aportando seguridad jurídica y confianza en cada proceso contractual.",
    coberturas: [
      "Cumplimiento",
      "Correcta inversión de anticipos",
      "Pago de salarios",
      "Calidad del servicio",
      "Calidad del suministro",
      "Estabilidad"
    ],
    cta: "Cotiza tu seguro de cumplimiento con Star Asegurados y protege tus acuerdos.",
    frase: "Asegura la ejecución confiable de tus contratos y proyectos ",
    enlace: "https://wa.link/d8xyl3",
    image: cumplimientoImage
  },
  "Cred. Vehículos": {
    consiste: "Los créditos para vehículos permiten financiar la compra de un carro nuevo o usado con planes de pago flexibles, tasas competitivas y opciones que se ajustan a tu capacidad financiera. Este servicio facilita el acceso a movilidad segura y moderna, ofreciendo acompañamiento durante todo el proceso para que puedas adquirir tu vehículo sin afectar tu estabilidad económica y con total tranquilidad.",
    coberturas: [],
    cta: "Solicita tu crédito para vehículo con Star Asegurados y estrena sin complicaciones.",
    frase: "Haz realidad tu próximo vehículo con una financiación hecha para ti ",
    enlace: "https://wa.link/jhc55q",
    image: credVehiculos
  },
  "Cred. Motos de Alto Cilindraje": {
    consiste: "Los créditos para motos de alto cilindraje están diseñados para quienes buscan potencia, rendimiento y libertad en la carretera, permitiendo financiar motocicletas nuevas o usadas con cuotas cómodas y condiciones favorables. Este servicio te ofrece planes ajustados a tu presupuesto, asesoría durante el proceso y respaldo seguro para que disfrutes una moto de alto desempeño sin afectar tu economía.",
    coberturas: [],
    cta: "Solicita tu crédito para moto de alto cilindraje con Star Asegurados y rueda con libertad.",
    frase: "Lleva tu pasión sobre dos ruedas con una financiación a tu medida ",
    enlace: "https://wa.link/igj18o",
    image: credMotosAltoCilindraje
  }
  // Puedes seguir agregando los demás servicios aquí...
};

export default servicesData;
