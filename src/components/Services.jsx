import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ModalService from "./ModalServices";
import serviceImage from "../assets/IMGs/Services.png";
import starIcon from "../assets/IMGs/Vector.svg"; // estrella

const Services = () => {
  const [openCategory, setOpenCategory] = useState(null);
  const [selected, setSelected] = useState(null);

  const servicesSeg = [
    "Vida", "Salud", "Hogar", "Vehículos", "Educación", "Motocicletas",
    "Arrendamiento", "Bicicletas", "RC Empresas", "RC Profesional",
    "RC Contractual", "RC Extracontractual", "Cumplimiento de Contrato"
  ];

  const servicesFin = [
    "Cred. Vehículos", "Cred. Motos de Alto Cilindraje"
  ];

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <section id="services" className="section services-section">
      <motion.div
        className="services-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* IMAGEN */}
        <div className="services-card image-card">
          <img src={serviceImage} alt="Servicios Star Asegurados" />
        </div>

        {/* LISTADO */}
        <div className="services-card list-card">
          <div className="services-card-title">
            <h2>NUESTROS PRODUCTOS</h2>
            <p>Selecciona una categoría</p>
          </div>

          {/* === SEGUROS === */}
          <div className="accordion">
            <button
              className={`accordion-header ${openCategory === "seguros" ? "open" : ""}`}
              onClick={() => toggleCategory("seguros")}
            >
              <img src={starIcon} alt="" />
              Seguros
            </button>

            <AnimatePresence>
              {openCategory === "seguros" && (
                <motion.ul
                  className="accordion-content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  {servicesSeg.map((s) => (
                    <li key={s}>
                      <button onClick={() => setSelected(s)}>
                        <img src={starIcon} alt="" />
                        {s}
                      </button>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {/* === CRÉDITOS === */}
          <div className="accordion">
            <button
              className={`accordion-header ${openCategory === "creditos" ? "open" : ""}`}
              onClick={() => toggleCategory("creditos")}
            >
              <img src={starIcon} alt="" />
              Créditos
            </button>

            <AnimatePresence>
              {openCategory === "creditos" && (
                <motion.ul
                  className="accordion-content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  {servicesFin.map((c) => (
                    <li key={c}>
                      <button onClick={() => setSelected(c)}>
                        <img src={starIcon} alt="" />
                        {c}
                      </button>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* MODAL */}
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
