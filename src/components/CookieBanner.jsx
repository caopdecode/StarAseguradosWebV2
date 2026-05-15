import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";
import "../App.css";

const CONSENT_KEY = "star-cookie-consent";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (consent === "accepted") {
      grantAnalytics();
    } else if (!consent) {
      setVisible(true);
    }
  }, []);

  const grantAnalytics = () => {
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
      });
    }
  };

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    grantAnalytics();
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem(CONSENT_KEY, "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Aviso de cookies">
      <div className="cookie-banner-content">
        <Cookie className="cookie-icon-svg" size={28} strokeWidth={1.5} />
        <div className="cookie-text">
          <p className="cookie-title">Usamos cookies</p>
          <p className="cookie-desc">
            Utilizamos cookies analíticas para entender cómo se usa nuestro sitio y mejorar tu
            experiencia. Tu privacidad es importante para nosotros.{" "}
            <a
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="cookie-link"
            >
              Política de Privacidad
            </a>
          </p>
        </div>
        <div className="cookie-actions">
          <button className="cookie-btn cookie-accept" onClick={handleAccept}>
            Aceptar
          </button>
          <button className="cookie-btn cookie-reject" onClick={handleReject}>
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
