import eje from "../../assets/Images/eje1.jpg";
import eje2 from "../../assets/Images/eje2.jpg";
import eje3 from "../../assets/Images/eje3.jpeg";
import eje4 from "../../assets/Images/eje4.jpeg";
import eje5 from "../../assets/Images/eje5.jpeg";

import { Vision } from "../../Components/Vision/Vision";
import "./vision.css";

export const Compania = () => {
  return (
    <>
      <Vision
        imageUrl={eje}
        contenido="logo"
        titulo="Eje 1: Tarifas diferenciadas y simplificación"
        parrafo="La Nueva Ley de Emprendimiento en Colombia, específicamente en su primer eje, se enfoca en ofrecer tarifas diferenciadas y simplificación para los emprendedores. Esto incluye la reducción de costos y trámites administrativos, facilitando el acceso a servicios y recursos necesarios para la creación y crecimiento de nuevas empresas. Esta iniciativa busca incentivar el emprendimiento y la formalización de negocios, mejorando el entorno empresarial y haciendo más accesible el proceso para nuevos emprendedores en el país."
      />

      <Vision
        imageUrl={eje2}
        contenido="logo"
        titulo="Eje 2: Acceso a las compras públicas
"
        parrafo="Este eje busca garantizar un acceso justo a los mercados de compras públicas para las MIPYMES de Colombia,
         permitiéndoles competir equitativamente con productos y servicios de calidad. Para lograrlo, 
         las MIPYMES podrán participar en procesos de mínima cuantía y en la tienda virtual del Estado, aumentando sus
          oportunidades de vender a entidades públicas. Además, se incluirán criterios de competencia que favorecerán a MIPYMES 
          lideradas por mujeres, empresas de beneficio e interés colectivo, y encadenamientos productivos"
      />
      <Vision
        imageUrl={eje3}
        contenido="logo"
        titulo="Eje 3: Financiamiento
"
        parrafo="El tercer eje de la Nueva Ley de Emprendimiento en Colombia se enfoca en facilitar el acceso al financiamiento 
        para emprendedores. Esto incluye la creación de incentivos fiscales para inversionistas, el establecimiento de fondos
         de capital emprendedor, y la implementación de programas de garantías para préstamos. Además, busca conectar a emprendedores
          con redes de inversionistas y ofrecer subvenciones para apoyar la innovación. Este eje tiene como objetivo reducir las barreras
           financieras y proporcionar un entorno más accesible para el crecimiento de nuevas empresas."
      />
      <Vision
        imageUrl={eje4}
        contenido="logo"
        titulo="Eje 4: Institucionalidad
"
        parrafo="El cuarto eje de la Nueva Ley de Emprendimiento en Colombia busca fortalecer la institucionalidad para apoyar a los emprendedores. Esto incluye mejorar la coordinación entre entidades gubernamentales, crear oficinas especializadas en emprendimiento, y capacitar al personal para ofrecer mejor asistencia. Además, se implementarán sistemas de seguimiento y evaluación de políticas de emprendimiento. El objetivo es establecer un marco institucional robusto que facilite la formalización y el crecimiento de nuevas empresas."
      />
      <Vision
        imageUrl={eje5}
        contenido="logo"
        titulo="Eje 5: Educación y desarrollo de habilidades para el emprendimiento
"
        parrafo="El quinto eje  se enfoca en la educación y el desarrollo de habilidades para emprendedores. Este eje busca promover la formación y capacitación de futuros empresarios a través de programas educativos especializados, talleres prácticos y asesoramiento. Se pretende integrar el emprendimiento en los currículos educativos, ofrecer formación continua para emprendedores y facilitar el acceso a recursos educativos. El objetivo es preparar mejor a los emprendedores con las habilidades necesarias para iniciar y gestionar sus negocios de manera efectiva."
      />
    </>
  );
};
