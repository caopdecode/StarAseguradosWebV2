import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../App.css";
import logoSura from "../assets/IMGs/Aliados/logoSura.png";
import logoEquidad from "../assets/IMGs/Aliados/logoEquidad.png";
import logoBolivar from "../assets/IMGs/Aliados/logoSegurosBolivar.png";
import logoEstado from "../assets/IMGs/Aliados/logoSegurosDelEstado.png";
import logoMundial from "../assets/IMGs/Aliados/LogoSegurosMundial.png";
import logoSBS from "../assets/IMGs/Aliados/logoSbs.png";
import logoZurich from "../assets/IMGs/Aliados/logoZurich.png";
import logoQualitas from "../assets/IMGs/Aliados/LogoQualitas.png";
import logoCrediSeguro from "../assets/IMGs/Aliados/LogoCrediseguro.png";
import logoCrediestado from "../assets/IMGs/Aliados/LogoCrediestado.png";
import logoFinesa from "../assets/IMGs/Aliados/LogoFinesa.png";
import logoSufi from "../assets/IMGs/Aliados/LogoSufi.png";
import logoBancoOccidente from "../assets/IMGs/Aliados/LogoBancoOccidente.png";
import logoBancoFinandina from "../assets/IMGs/Aliados/BancoFinandina.png";

const aseguradoras = [
  { id: 1,  name: "Sura",              phone: "#888",  image: logoSura },
  { id: 2,  name: "Equidad Seguros",   phone: "#324",  image: logoEquidad },
  { id: 3,  name: "Seguros Bolívar",   phone: "#322",  image: logoBolivar },
  { id: 4,  name: "Seguros del Estado",phone: "#388",  image: logoEstado },
  { id: 5,  name: "Seguros Mundial",   phone: "#935",  image: logoMundial },
  { id: 6,  name: "SBS",               phone: "#360",  image: logoSBS },
  { id: 7,  name: "Zurich",            phone: "#723",  image: logoZurich },
  { id: 8,  name: "Qualitas",          phone: "#963",  image: logoQualitas },
];

const financieras = [
  { id: 9,  name: "CrediSeguro",        phone: "+57 3164739140",    image: logoCrediSeguro },
  { id: 10, name: "Crediestado",        phone: "+57 (601) 6912101", image: logoCrediestado },
  { id: 11, name: "Finesa Vehículos",   phone: "+57 3160172064",    image: logoFinesa },
  { id: 12, name: "Sufi",               phone: "018000517834",      image: logoSufi },
  { id: 13, name: "Banco de Occidente", phone: "018000514652",      image: logoBancoOccidente },
 // { id: 14, name: "Banco Finandina",    phone: "018000514652",      image: logoBancoFinandina },
];

const AliadoCard = ({ aliado, index, onSelect }) => (
  <motion.div
    className="aliado-card"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.35, delay: (index % 4) * 0.07 }}
    whileHover={{ scale: 1.05 }}
    onClick={() => onSelect(aliado)}
  >
    <img src={aliado.image} alt={aliado.name} className="aliado-logo" />
  </motion.div>
);

const Aliados = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="aliados-section">
      <motion.div
        className="aliados-inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="aliados-title">NUESTROS ALIADOS</h2>
        <p className="aliados-subtitle">
          Trabajamos junto a las principales compañías del país para ofrecerte respaldo, confianza y soluciones a tu medida.
        </p>
        <p className="aliados-hint">
          Haz clic en el logo para ver la línea de atención directa
        </p>

        <div className="aliados-category-label">
          <span>Aseguradoras</span>
        </div>
        <div className="aliados-grid aliados-grid-4">
          {aseguradoras.map((a, i) => (
            <AliadoCard key={a.id} aliado={a} index={i} onSelect={setSelected} />
          ))}
        </div>

        <div className="aliados-category-label">
          <span>Entidades Financieras</span>
        </div>
        <div className="aliados-grid aliados-grid-3">
          {financieras.map((a, i) => (
            <AliadoCard key={a.id} aliado={a} index={i} onSelect={setSelected} />
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="modal-overlayAllies"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="modal-card"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelected(null)}>✕</button>
              <h3 className="modal-title">Línea de Atención</h3>
              <h4 className="modal-subtitle">{selected.name}</h4>
              <h2 className="modal-phone">{selected.phone}</h2>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Aliados;
