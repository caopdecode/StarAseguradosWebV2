import React from "react";
import { motion } from "framer-motion";
import StarLogo from "../assets/IMGs/StarLogo.png";

const Landing = () => {
  return (
    <motion.div
      className="landing-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="logo-placeholder"><img src={StarLogo} alt="Logo Star Asegurados Ltda" /></div>
      <h2>
        <span className="green-text">Star</span> con nosotros <br />
        <span className="green-text">aseguras</span> tus sueños
      </h2>
    </motion.div>
  );
};

export default Landing;