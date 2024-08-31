import React from 'react';
import './Footer.css'; // Archivo CSS para estilos específicos

function Footer() {
  return (
    <footer className="footer-container">
      <p className="footer-text">&copy; 2024 FITPULSE. Todos los derechos reservados. Hecho por Murati</p>
      <div className="footer-links">
        <a href="#terms">Términos y Condiciones</a>
        <a href="#privacy">Política de Privacidad</a>
        <a href="#contact">Contáctanos</a>
      </div>
    </footer>
  );
}

export default Footer;