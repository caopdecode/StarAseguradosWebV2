import React from "react";
import { motion } from "framer-motion";

const ModalService = ({ service, onClose }) => {
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
          <p>Aquí irá la información del producto {service}.</p>
        </div>
        <div className="modal-right">IMAGEN alusiva aquí</div>
      </motion.div>
    </motion.div>
  );
};

export default ModalService;
