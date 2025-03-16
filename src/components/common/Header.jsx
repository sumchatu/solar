import React from 'react';
import { NavLink } from 'react-router-dom'; // For route awareness
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import LogoImg from '../../assets/images/tdlogo.png';

const Header = () => {
  return (
    <header>
      <div className="container d-flex align-items-center justify-content-between">
        <Navbar expand="lg" className="w-100">
          <Navbar.Brand href="/" className="logo">
            <img src={LogoImg} alt="TD Solar Logo" style={{ height: '50px' }} />
          </Navbar.Brand>
          <span>TD Solar</span>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* Each Nav.Link is wrapped with NavLink for dynamic active class */}
              <Nav.Link as={NavLink} to="/" activeclassname="active">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" activeclassname="active">
                About Us
              </Nav.Link>
              <Nav.Link as={NavLink} to="/services" activeclassname="active">
                Services
              </Nav.Link>
              <Nav.Link as={NavLink} to="/projects" activeclassname="active">
                Projects
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact" activeclassname="active">
                Contact Us
              </Nav.Link>
              <Nav.Link as={NavLink} to="/blogs" activeclassname="active">
                Blog
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
