import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ModalService from "./ModalServices";
import servicesData from "../data/servicesData";

const seguroProducts = [
  { name: "Vida",                     tagline: "Protege tu futuro y el de tu familia" },
  { name: "Salud",                    tagline: "Respaldo médico inmediato cuando más lo necesitas" },
  { name: "Hogar",                    tagline: "Cuida tu vivienda y patrimonio familiar" },
  { name: "Vehículos",                tagline: "Maneja con total tranquilidad" },
  { name: "Educación",                tagline: "Invierte en el futuro académico" },
  { name: "Motocicletas",             tagline: "Cobertura integral para tu moto" },
  { name: "Arrendamiento",            tagline: "Protege tus ingresos como arrendador" },
  { name: "Bicicletas",               tagline: "Pedalea sin preocupaciones" },
  { name: "RC Empresas",              tagline: "Protege tu empresa frente a terceros" },
  { name: "RC Profesional",           tagline: "Respaldo ante errores en tu ejercicio" },
  { name: "RC Contractual",           tagline: "Garantiza tus obligaciones contractuales" },
  { name: "RC Extracontractual",      tagline: "Protección frente a daños a terceros" },
  { name: "RC Alojamientos Turísticos",      tagline: "Protección frente a daños a terceros" },
  { name: "Cumplimiento Estatal y Particular", tagline: "Seguridad en tus acuerdos y proyectos" },
  { name: "Maquinaria y Equipo de Contratistas", tagline: "Seguridad en tus acuerdos y proyectos" },
  { name: "Construcción", tagline: "Seguridad en tus acuerdos y proyectos" },

];

const creditProducts = [
  { name: "Cred. Vehículos",                tagline: "Financia tu vehículo con facilidad" },
  { name: "Cred. Motos de Alto Cilindraje", tagline: "Crédito para motos de alta gama" },
];

const Services = () => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (name) => setSelected(name);

  const ProductCard = ({ name, tagline, index }) => (
    <motion.div
      className="services-grid-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: (index % 5) * 0.06 }}
      onClick={() => handleSelect(name)}
    >
      <div className="services-grid-card-img-wrap">
        <img src={servicesData[name]?.image} alt={name} loading="lazy" />
      </div>
      <div className="services-grid-card-body">
        <h3>{name}</h3>
        <p>{tagline}</p>
      </div>
      <button
        className="services-grid-card-cta"
        onClick={(e) => { e.stopPropagation(); handleSelect(name); }}
      >
        Ver más
      </button>
    </motion.div>
  );

  return (
    <div className="services-section">
      <motion.div
        className="services-inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="services-header">
          <h2 className="services-title">NUESTROS PRODUCTOS</h2>
          <p className="services-subtitle">
            Selecciona el producto que necesitas para ver detalles y cotizar por WhatsApp
          </p>
        </div>

        <div className="services-category-label">
          <span>Seguros</span>
        </div>
        <div className="services-grid">
          {seguroProducts.map(({ name, tagline }, i) => (
            <ProductCard key={name} name={name} tagline={tagline} index={i} />
          ))}
        </div>

        <div className="services-category-label">
          <span>Créditos</span>
        </div>
        <div className="services-grid services-grid-credits">
          {creditProducts.map(({ name, tagline }, i) => (
            <ProductCard key={name} name={name} tagline={tagline} index={i} />
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selected && (
          <ModalService service={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;
