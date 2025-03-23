import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/style.scss';
import Home from './components/frontend/Home';
import About from './components/frontend/About';
import Services from './components/frontend/Services';
import Projects from './components/frontend/Projects';
import Blogs from './components/frontend/Blogs';
import ContactUs from './components/frontend/ContactUs';
import ResidentialService from './components/frontend/services/ResidentialService';
import CommercialService from './components/frontend/services/CommercialService';
import MaintenanceService from './components/frontend/services/MaintenanceService';
import InverterService from './components/frontend/services/InverterService';
import WhatsAppCTA  from './components/common/WhatsAppCTA';
import ScrollToTop from './components/common/ScrollToTop';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/residential" element={<ResidentialService />} />
          <Route path="/services/commercial" element={<CommercialService />} />
          <Route path="/services/maintenance" element={<MaintenanceService />} />
          <Route path="/services/inverters" element={<InverterService />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        {/* Add WhatsApp CTA below */}
        <WhatsAppCTA />
      </BrowserRouter>
    </>
  )
}

export default App
