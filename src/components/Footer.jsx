import React from "react";
import "../App.css";
import logo from "../assets/IMGs/StarLogo.png";
import instagramIcon from "../assets/navicons/InstagramIcon.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <img src={logo} alt="Star Asegurados" className="footer-logo" />
          <div className="footer-circles">
            <div className="circle"></div>
            <div className="circle circle-2"></div>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-text">¡SÍGUENOS EN NUESTRAS REDES SOCIALES!</p>
          <img src={instagramIcon} alt="Instagram" className="social-icon" />
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 Star Asegurados Ltda. Todos los derechos reservados. Sitio web diseñado por <span>caopdecode.</span>
      </div>
    </footer>
  );
};

export default Footer;
