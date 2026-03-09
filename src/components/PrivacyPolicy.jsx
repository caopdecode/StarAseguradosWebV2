import React from "react";
import "../App.css";
import logo from "../assets/IMGs/StarLogo.png";


const PrivacyPolicy = () => {
  return (
    <section className="section privacy-section">
      <div className="privacy-container">
        <div className="privacyTitle">
            <img src={logo} alt="Star Asegurados" className="footer-logo" />
            <h1 className="section-title">Política de Privacidad</h1>
        </div>
        <div className="privacy-content">
          <p className="section-subtitle">Última actualización: Marzo 2026</p>

          <h3>1. Información que recopilamos</h3>
          <p>
            En Star Asegurados recopilamos información personal como nombre,
            número de teléfono, correo electrónico y datos relacionados con
            pólizas de seguros cuando los usuarios utilizan nuestros servicios
            o se comunican con nosotros.
          </p>

          <h3>2. Uso de la información</h3>
          <p>
            La información recopilada se utiliza para gestionar pólizas,
            brindar asesoría en seguros, responder consultas y mejorar nuestros
            servicios.
          </p>

          <h3>3. Uso de WhatsApp</h3>
          <p>
            Podemos utilizar WhatsApp como canal de comunicación para brindar
            atención al cliente, resolver dudas y proporcionar información
            relacionada con nuestros servicios.
          </p>

          <h3>4. Protección de la información</h3>
          <p>
            Implementamos medidas de seguridad para proteger la información
            personal contra accesos no autorizados o uso indebido.
          </p>

          <h3>5. Compartir información</h3>
          <p>
            No vendemos ni compartimos información personal con terceros,
            excepto cuando sea necesario para prestar nuestros servicios o
            cuando sea requerido por ley.
          </p>

          <h3>6. Derechos de los usuarios</h3>
          <p>
            Los usuarios pueden solicitar acceso, corrección o eliminación de
            sus datos personales contactándonos a través de nuestro correo
            electrónico.
          </p>

          <h3>7. Contacto</h3>
          <p>
            Si tienes preguntas sobre esta política puedes escribir a:
            <br />
            <strong>gerencia@starasegurados.com</strong>
          </p>

        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;