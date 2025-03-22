import React from 'react';
import Aboutimg from '../../assets/images/about-us.jpg';

const About = () => {
  return (
       
        <section className='section-2 py-3'>
          <div className='container py-5'>
            <div className='row'>
              <div className='col-md-6'>
                <img src={Aboutimg} className='w-100' />
              </div>
              <div className='col-md-6'>
                <span>About Us – TD Solar</span>
                <h3>Welcome to TD Solar, your trusted partner in renewable energy solutions!</h3>
                <p>
                   We are a leading provider of solar PV setups, electrical contracting, and technical consultancy services, proudly serving clients across West Bengal. At TD Solar, we are committed to delivering high-quality, sustainable energy solutions that empower homes, businesses, and communities.
                </p>
                <h3>Who We Are</h3>
                <p>
                  TD Solar is founded and led by Mr. Dwipayan Dey, a highly skilled B-Tech engineer in Electrical Engineering and a licensed Government contractor. With over 13 years of extensive experience in the power distribution sector, including his tenure with a non-governmental organization from 2008 to 2021, Mr. Dey brings a wealth of expertise, innovation, and passion to the renewable energy industry. His vast knowledge spans across solar power solutions, electrical system design, project management, and quality assurance, ensuring that every project meets the highest standards.<br />
                  Today, as the proprietor of Technical Dwipayan, he leads a team of dedicated professionals who are committed to delivering top-notch solar installation services for residential, commercial, and industrial projects. Under his leadership, the company focuses on offering cutting-edge solar technologies, ensuring energy efficiency, and reducing carbon footprints. Mr. Dey’s vision is to make sustainable and affordable energy accessible to all, contributing significantly to India’s journey toward a greener and more sustainable future.
                </p>
              </div>
            </div>
          </div>
        </section>     
    )
}

export default About