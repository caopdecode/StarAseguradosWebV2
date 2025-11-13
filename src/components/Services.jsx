import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ModalService from "./ModalServices";
import serviceImage from "../assets/IMGs/Services.png";

const Services = () => {
  const [selected, setSelected] = useState(null);

  const servicesSeg = [
    "Vida", "Salud", "Hogar", "Vehículos", "Educación", "Motocicletas",
    "Arrendamiento", "Bicicletas", "RC Empresas", "RC Profesional",
    "RC Contractual", "RC Extracontractual", "Cumplimiento de Contrato"
  ];

  const servicesFin = [
    "Vehículos", "Motos de Alto Cilindraje"
  ]

  return (
    <section id="services" className="section services-section">
    <motion.div
      className="services-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="services-card image-card"><img src={serviceImage} alt="" /></div>
      <div className="services-card list-card">
        <div className="services-card-title">
          <h2>NUESTROS PRODUCTOS</h2>
          <p>¡Selecciona uno y conoce más!</p>
        </div>
        <div className="all-services">
        <div className="seguros-services">
          <h3>Seguros</h3>
          <ul className="seguros-list">
            {servicesSeg.map((s) => (
              <li key={s}>
                <button onClick={() => setSelected(s)}>{s}</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="creditos-services">
          <h3>Créditos</h3>
          <ul className="creditos-list">
              {servicesFin.map((c) => (
                  <li key={c}>
                      <button onClick={() => setSelected(c)}>{c}</button>
                  </li>
              ))}
          </ul>
        </div>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <ModalService service={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </motion.div>
    </section>
  );
};

export default Services;
