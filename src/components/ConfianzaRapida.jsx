import React from "react";
import { motion } from "framer-motion";
import { Award, Users, CheckCircle, Shield } from "lucide-react";
import logoSura from "../assets/IMGs/Aliados/logoSura.png";
import logoBolivar from "../assets/IMGs/Aliados/logoSegurosBolivar.png";
import logoEstado from "../assets/IMGs/Aliados/logoSegurosDelEstado.png";
import logoZurich from "../assets/IMGs/Aliados/logoZurich.png";
import logoSBS from "../assets/IMGs/Aliados/logoSbs.png";

const features = [
  {
    Icon: Award,
    title: "+10 años de experiencia",
    desc: "Una década acompañando a familias y empresas de Cartagena en sus decisiones de aseguramiento.",
  },
  {
    Icon: Users,
    title: "8 aseguradoras aliadas",
    desc: "Comparamos entre las mejores opciones del mercado para encontrar la póliza ideal para ti.",
  },
  {
    Icon: CheckCircle,
    title: "Asesoría 100% gratuita",
    desc: "Nuestro servicio de asesoría no tiene ningún costo. Tú decides sin presión ni compromisos.",
  },
  {
    Icon: Shield,
    title: "Supervisados por la SFC",
    desc: "Operamos bajo la regulación de la Superintendencia Financiera de Colombia.",
  },
];

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const ConfianzaRapida = () => {
  return (
    <section className="confianza-section">
      <motion.div
        className="confianza-inner"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="confianza-header">
          <h2 className="confianza-title">¿Por qué elegirnos?</h2>
          <p className="confianza-subtitle">
            Somos intermediarios certificados — trabajamos para ti, no para la aseguradora.
          </p>
        </div>

        <div className="confianza-cards">
          {features.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="confianza-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <div className="confianza-card-icon">
                <Icon size={28} strokeWidth={1.8} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </motion.div>
          ))}
        </div>

        <a
          href="https://wa.me/573216632745?text=Hola%2C%20me%20interesa%20cotizar%20un%20seguro"
          className="cta-primary confianza-cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
          Consultar sin compromiso
        </a>
      </motion.div>
    </section>
  );
};

export default ConfianzaRapida;
