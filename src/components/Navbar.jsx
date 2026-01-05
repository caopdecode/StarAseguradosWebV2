import React, { useState, useEffect } from "react";
import homeIcon from "../assets/navicons/HomeIcon.svg";
import aboutIcon from "../assets/navicons/AboutIcon.svg";
import servicesIcon from "../assets/navicons/ServicesIcon.svg";
import aliadosIcon from "../assets/navicons/AlliesIcon.svg";
import contactIcon from "../assets/navicons/ContactIcon.svg";


import "../App.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [hovered, setHovered] = useState(null);

  const sections = [
    { id: "home", icon: <img src={homeIcon} alt="Inicio" className="nav-icon" />, label: "Inicio" },
    { id: "about", icon: <img src={aboutIcon} alt="Sobre Nosotros" className="nav-icon" />, label: "Sobre Nosotros" },
    { id: "services", icon: <img src={servicesIcon} alt="Servicios" className="nav-icon" />, label: "Productos" },
    { id: "aliados", icon: <img src={aliadosIcon} alt="Aliados" className="nav-icon" />, label: "Aliados" },
    { id: "contact", icon: <img src={contactIcon} alt="Contacto" className="nav-icon" />, label: "Contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar">
      {sections.map((s) => (
        <div
          key={s.id}
          className={`nav-btn ${activeSection === s.id ? "active" : ""}`}
          onClick={() => document.getElementById(s.id).scrollIntoView({ behavior: "smooth" })}
          onMouseEnter={() => setHovered(s.id)}
          onMouseLeave={() => setHovered(null)}
        >
          {s.icon}
          {hovered === s.id && <span className="tooltip">{s.label}</span>}
        </div>
      ))}
    </div>
  );
};

export default Navbar;