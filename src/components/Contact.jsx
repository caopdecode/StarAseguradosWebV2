import React from "react";
import "../App.css";
import { Mail, Phone, User, MessageCircle } from "lucide-react";
import contactIMG from "../assets/IMGs/Contact.png"

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">

      <div className="contact-container">
        <div className="contact-card image-card"><img src={contactIMG} alt="Imagen Contacto" /></div>

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
            <div className="contact-item">
                <User className="contact-icon" />
                <span>Orlando Osorio</span>
            </div>
            <div className="contact-item">
                <Mail className="contact-icon" />
                <span>gerencia@starasegurados.com</span>
            </div>
            <div className="contact-item">
                <MessageCircle className="contact-icon" />
                <span>+57 3017604515</span>
            </div>

            <div className="contact-item">
                <User className="contact-icon" />
                <span>Andrea Páez</span>
            </div>
            <div className="contact-item">
                <Mail className="contact-icon" />
                <span>andrea.paez@starasegurados.com</span>
            </div>
            <div className="contact-item">
                <MessageCircle className="contact-icon" />
                <span>+57 3008165161</span>
            </div>
          </div>

          <p className="contact-cta">
            ¡<span>Click Aquí</span> y envíanos un mensaje!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
