import React from "react";
import { motion } from "framer-motion";
import StarLogo from "../assets/IMGs/StarLogoWhite.png"

const AboutUs = () => {
  return (
    <div className="about-section">
    <motion.div
      className="about-container"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="about-card logo"><img src={StarLogo} alt="Star Asegurados Ltda Logo" /></div>
      <div className="about-card info">
        <h2>SOBRE NOSOTROS</h2>
        <div className="star-info">
        <h3>¿Quiénes Somos?</h3>
        <p>
          En Star Asegurados Ltda contamos con más de 10 años de experiencia brindando soluciones integrales de aseguramiento. Nos destacamos por nuestro compromiso y filosofía de servicio, ofreciendo un portafolio que cubre todos los ámbitos de riesgo.
        </p>

        <h3>Nuestra Misión</h3>
        <p>
          Brindamos servicios de protección integral respaldados por sólidas aseguradoras, ofreciendo asesoría profesional y personalizada en la contratación y gestión de pólizas.
        </p>

        <h3>Nuestra Visión</h3>
        <p>
          Ser una compañía reconocida por brindar asesoría integral en seguros, diseñando estrategias que minimicen riesgos y fomenten relaciones basadas en ética, transparencia y confianza.
        </p>
        </div>
      </div>
    </motion.div>
    </div>
  );
};

export default AboutUs;