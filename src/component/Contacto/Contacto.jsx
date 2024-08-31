import React from 'react';
import './Contacto.css'; // Verifica que el archivo esté en la ruta correcta

function Contacto() {
  return (
    <div className="contact-container"> {/* Asegúrate de que esta clase esté definida en Contacto.css */}
      <h2 className="contact-title">Contáctanos</h2> {/* Verifica que el estilo para esta clase esté en Contacto.css */}
      <div className="contact-content"> {/* Asegúrate de que esta clase esté definida en Contacto.css */}
        <form className="contact-form"> {/* Verifica que el estilo para esta clase esté en Contacto.css */}
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" placeholder="Tu nombre" required />
          
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" placeholder="Tu correo electrónico" required />
          
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" rows="4" placeholder="Escribe tu mensaje aquí" required></textarea>
          
          <button type="submit" className="submit-button">Enviar</button> {/* Verifica que el estilo para esta clase esté en Contacto.css */}
        </form>
        
        <div className="contact-info"> {/* Asegúrate de que esta clase esté definida en Contacto.css */}
          <p><strong>Teléfono:</strong> +123 456 7890</p>
          <p><strong>Correo Electrónico:</strong> contacto@ejercicioapp.com</p>
          <p><strong>Dirección:</strong> Calle Ejercicio 123, Ciudad Activa, Mundo Fitness</p>
        </div>
      </div>
    </div>
  );
}

export default Contacto; 