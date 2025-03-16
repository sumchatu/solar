import React from 'react';
// import './WhatsAppCTA.scss'; // Add custom styling for your WhatsApp CTA if needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function WhatsAppCTA() {
  const whatsappNumber = '+919073117649'; // Replace with the actual WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="whatsapp-cta">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-cta whatsapp-icon" size="6x" />
        </a>
    </div>
  );
}

export default WhatsAppCTA;
