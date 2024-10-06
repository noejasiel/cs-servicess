import { FaBalanceScale, FaRegBuilding, FaChartLine, FaUsersCog, FaSync, FaMoneyCheck, FaGavel, FaCloud, FaCreditCard } from "react-icons/fa";
import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    (<div className="max-w-5xl mx-auto px-8 z-50">
      <HoverEffect items={projects} />
    </div>)
  );
}

export const projects = [
  {
    title: "Finanzas",
    description:
      "Procesos, políticas y procedimientos en el área de tesorería y finanzas, incluyendo desarrollo de equipos de trabajo de alto rendimiento y reingeniería de procesos financieros.",
    icon: <FaBalanceScale />,
    link: "#",
  },
  {
    title: "Desarrollo de equipos",
    description:
      "Impulsamos equipos de trabajo de alto rendimiento, promoviendo un ambiente de cooperación y mejora continua.",
    icon: <FaUsersCog />,
    link: "#",
  },
  {
    title: "Reingeniería de procesos",
    description:
      "Rediseñamos procesos clave para maximizar la eficiencia operativa y administrativa, adaptándonos a las necesidades del cliente.",
    icon: <FaSync />,
    link: "#",
  },
  {
    title: "Planeación financiera",
    description:
      "Ayudamos en la planeación y proyección financiera para garantizar el manejo óptimo de recursos y presupuestos.",
    icon: <FaChartLine />,
    link: "#",
  },
  {
    title: "Gestión en Tesorería",
    description:
      "Optimización del manejo y desarrollo de actividades en Tesorería para mejorar la eficiencia en la gestión de recursos.",
    icon: <FaMoneyCheck />,
    link: "#",
  },
  {
    title: "Operaciones",
    description:
      "Realizamos análisis FODA y reingeniería de procesos en áreas operativas y administrativas, mejorando el rendimiento global de la empresa.",
    icon: <FaRegBuilding />,
    link: "#",
  },
  {
    title: "Asesoría legal",
    description:
      "Brindamos asesoría legal especializada para empresas, incluyendo gobierno corporativo y cumplimiento normativo.",
    icon: <FaGavel />,
    link: "#",
  },
  {
    title: "Infraestructura en la nube",
    description:
      "Ofrecemos soluciones de infraestructura y sistemas para la nube, asegurando la mejor tecnología para tu negocio.",
    icon: <FaCloud />,
    link: "#",
  },
  {
    title: "Asesoría para SOFOMES y FINTECH",
    description:
      "Consultoría especializada para instituciones financieras como SOFOMES, SOFIPOS y FINTECH, optimizando su operación.",
    icon: <FaCreditCard />,
    link: "#",
  }
];