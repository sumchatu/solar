import React from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-md-3'>
            <h3 className='mb-3'>TD SOLAR</h3>
            <div className='pe-5'>
              <p>
                We offer customized Solar Solutions for Every Need, Spanning Residential, Commercial, and Industrial Projects.
              </p>
            </div>
            {/* Social Media Icons */}
            <div className="social-icons mt-3">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="me-3" size="2x" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} className="me-3" size="2x" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="me-3" size="2x" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </div>
          <div className='col-md-3'>
            <h3 className='mb-3'>Our Services</h3>
            <ul>
              <li>
                <NavLink to="/services/residential" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                  Residential Solar Solutions
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/commercial" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                  Commercial Solar Solutions
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/maintenance" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                  Solar System Maintenance & Troubleshooting
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/inverters" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                  Solar Inverters and Controllers Servicing
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='col-md-3'>
            <h3 className='mb-3'>Quick Links</h3>
            <ul>
              <li>
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/blogs" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='col-md-3'>
            <h3 className='mb-3'>Contact Us</h3>
            <ul>
              <li>
                <a href="tel:+919732097320">+91 9775550672</a>
              </li>
              <li>
                <a href="mailto:abc@abc.com">abc@abc.com</a>
              </li>
              <p>
                GN/Shop No. - G2 and G5, <br />Rajnandini Villa,<br />
                Khardaha Thana Road, <br /> Near Avinobo Sweet,<br />
                North 24 Parganas, <br /> Kolkata - 700116
              </p>
            </ul>
          </div>
        </div>
        <hr />
        <div className='text-center pt-4'>
          Copyright © {new Date().getFullYear()} TD Solar. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
