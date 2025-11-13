import React from "react";
import { motion } from "framer-motion";
import servicesData from "../data/servicesData";

const ModalService = ({ service, onClose }) => {
  const data = servicesData[service];

  if (!data) {
    return (
      <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <motion.div className="modal-content" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}>
          <button className="close-btn" onClick={onClose}>✕</button>
          <p>No hay información disponible para este servicio.</p>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        <button className="close-btn" onClick={onClose}>✕</button>

        <div className="modal-left">
          <h2>{service}</h2>

          <h4>¿En qué consiste?</h4>
          <p>{data.consiste}</p>

          <h4>Coberturas</h4>
          <ul>
            {data.coberturas.map((c, i) => <li key={i}>{c}</li>)}
          </ul>

          <p className="cta">{data.cta}</p>

          <p>
            {data.frase}
            <a href={data.enlace} target="_blank" rel="noopener noreferrer">
              aquí
            </a>.
          </p>
        </div>

        <div className="modal-right">
          IMAGEN alusiva aquí
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ModalService;