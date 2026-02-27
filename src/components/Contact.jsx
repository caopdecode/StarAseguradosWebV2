import React from "react";
import "../App.css";
import { Mail, Phone, User, MessageCircle } from "lucide-react";
import contactIMG from "../assets/IMGs/Contact.png"


const Contact = () => {
  return (
    <section id="contact" className="section contact-section">

      <div className="contact-container">
        <div className="contact-card image-card contactIMG"><img src={contactIMG} alt="Imagen Contacto" /></div>

        <div className="contact-card info-card">
          <div className="contact-card-title">
            <h2 className="section-title">¡CONTÁCTANOS!</h2>
            <div className="contact-card-title-sub">
            <p className="section-subtitle">
                En Star Asegurados Ltda estamos siempre disponibles para orientarte y brindarte la mejor asesoría.
            </p>
            <p className="section-subtitle bold">¡Tu tranquilidad es nuestra prioridad!</p>
            </div>
          </div>
          <div className="contactInfo">
            <a
              href="mailto:gerencia@starasegurados.com"
              className="contact-button"
            >
              ¡CONTACTAR!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
