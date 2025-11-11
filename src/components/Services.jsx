import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ModalService from "./ModalServices";

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
    <motion.div
      className="services-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="services-card image-card">IMAGEN AQUÍ</div>
      <div className="services-card list-card">
        <h2>NUESTROS PRODUCTOS</h2>
        <p>¡Selecciona uno y conoce más!</p>
        <h3>Seguros</h3>
        <ul>
          {servicesSeg.map((s) => (
            <li key={s}>
              <button onClick={() => setSelected(s)}>{s}</button>
            </li>
          ))}
        </ul>
        <h3>Créditos</h3>
        <ul>
            {servicesFin.map((c) => (
                <li key={c}>
                    <button onClick={() => setSelected(c)}>{c}</button>
                </li>
            ))}
        </ul>
      </div>

      <AnimatePresence>
        {selected && (
          <ModalService service={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Services;
