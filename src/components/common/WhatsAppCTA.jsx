import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function WhatsAppCTA() {
  const whatsappNumber = '+919775550672'; // Replace with the actual WhatsApp number
  // const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const message = encodeURIComponent("Hello, I would like to inquire about your services."); // Replace with your desired message
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="whatsapp-cta">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-cta whatsapp-icon" size="6x" />
        </a>
    </div>
  );
}

export default WhatsAppCTA;
