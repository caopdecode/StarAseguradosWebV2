import React, { useState, useEffect } from "react";
import "../App.css";
import logo from "../assets/IMGs/StarLogo.png";
import instagramIcon from "../assets/navicons/InstagramIcon.svg";
import { Users } from "lucide-react";

const fetchVisitCount = async (isFirstVisit) => {
  const endpoints = isFirstVisit
    ? [
        { url: "https://api.counterapi.dev/v1/starasegurados/visits/up",   parse: (d) => d.count ?? d.value },
        { url: "https://api.countapi.xyz/hit/starasegurados.com/visits",   parse: (d) => d.value },
      ]
    : [
        { url: "https://api.counterapi.dev/v1/starasegurados/visits",      parse: (d) => d.count ?? d.value },
        { url: "https://api.countapi.xyz/get/starasegurados.com/visits",   parse: (d) => d.value },
      ];

  for (const { url, parse } of endpoints) {
    try {
      const res = await fetch(url);
      if (!res.ok) continue;
      const data = await res.json();
      const count = parse(data);
      if (typeof count === "number" && !isNaN(count)) return count;
    } catch {}
  }
  return null;
};

const Footer = () => {
  const [visitCount, setVisitCount] = useState(null);

  useEffect(() => {
    const isFirstVisit = !sessionStorage.getItem("visit-counted");
    if (isFirstVisit) sessionStorage.setItem("visit-counted", "true");

    fetchVisitCount(isFirstVisit).then((count) => {
      if (count !== null) setVisitCount(count);
    });
  }, []);

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
          <a href="https://www.instagram.com/staraseguradosltda" target="_blank"><img src={instagramIcon} alt="Instagram" className="social-icon" /></a>
        </div>
      </div>
      <div className="footer-bottom">
        {visitCount !== null && (
          <div className="footer-visit-counter">
            <Users size={13} strokeWidth={1.8} />
            <span>{visitCount.toLocaleString("es-CO")}</span>
          </div>
        )}
        <div className="footer-bottom-main">
          © 2026 Star Asegurados Ltda. Todos los derechos reservados. <br />
          <a
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Política de Privacidad
          </a>
          <br />Sitio web diseñado por <span><a href="https://www.caopdecode.com" target="_blank">CaopDecode</a>.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
