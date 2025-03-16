import React from 'react';
import Aboutimg from '../../assets/images/about-us.jpg';

const About = () => {
  return (
       
        <section className='section-2 py-5'>
          <div className='container py-5'>
            <div className='row'>
              <div className='col-md-6'>
                <img src={Aboutimg} className='w-100' />
              </div>
              <div className='col-md-6'>
                <span>about us</span>
                <h2>Revolutionizing Energy with Smart Solar Solutions</h2>
                <p>At TD SOLAR, we are committed to providing top-notch solar solutions that make renewable energy accessible, efficient, and cost-effective. With expertise in solar panel installation, maintenance, and customized energy solutions, we help homeowners and businesses transition to a sustainable future. Our team of professionals ensures seamless service from consultation to execution, guaranteeing optimal performance and long-term savings.</p>
                <p>Switch to solar today and take control of your energy future!</p>
              </div>
            </div>
          </div>
        </section>     
    )
}

export default About