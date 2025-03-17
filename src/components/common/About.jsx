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
                  TD Solar is founded and led by Mr. Dwipayan Dey, a highly skilled B-Tech engineer in Electrical Engineering and Govt. contractor, With over 13 years of experience in the distribution sector, including his tenure with a non-governmental organization from 2008 to 2021, Mr. Dey brings a wealth of expertise and passion to the renewable energy industry. Today, as the proprietor of Technical Dwipayan, he leads a team of dedicated professionals who are passionate about driving the transition to clean energy.
                </p>
              </div>
            </div>
          </div>
        </section>     
    )
}

export default About