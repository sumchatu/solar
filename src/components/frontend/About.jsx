import React from 'react'
import Header from '../common/Header';
import Footer from '../common/Footer';
import {default as AboutNew} from '../common/About';
import TeamImg from '../../assets/images/team1.jpg';
import Hero from '../common/Hero';

const About = () => {
  return (
    <>
        {/* Call Header Component */}
          <Header />

        <main>
          {/* Hero Section Starts*/}
            <Hero heroClass='section-about' preHeading='Quality. Integrity. Value.' heading='About Us' text='We excel at transforming visions into reality <br/>
            through outstanding craftsmanship and precise.' />
          {/* Hero Section Ends*/}

          {/* About-us Section Starts*/}
            <AboutNew />
          {/* About-us Section Ends*/}

          <div className='container py-1'>
            <div className='row'>
              <div className='col-md-6'>
                <h2>Why Choose TD Solar?</h2>
                <p>
                  <b>Expertise:</b> With years of experience in the electrical and solar industries, we bring unmatched knowledge and skills to every project.<br />
                  <b>Quality Assurance:</b> We use only the best materials and follow industry standards to ensure long-lasting and efficient solutions.<br />
                  <b>Customer-Centric Approach:</b> Your satisfaction is our priority. We work closely with you to understand your needs and deliver customized solutions.<br />
                  <b>Sustainability:</b> We are passionate about promoting renewable energy and helping our clients reduce their carbon footprint while saving on energy costs.
                </p>
              </div>
              <div className='col-md-6'>
                <h2>Our Vision</h2>
                <p>
                  At TD Solar, we envision a future where clean, renewable energy is accessible to all. Our mission is to provide innovative, affordable, and sustainable energy solutions that benefit both our clients and the environment. We specialize in solar panel installations for residential, commercial, and industrial projects, ensuring efficiency and long-term performance. Through advanced technology and a commitment to excellence, we aim to reduce carbon footprints and promote a greener, more sustainable future for generations to come.
                </p>
              </div>
            </div>
          </div>

          {/* Our Team Section Starts*/}
            <section className='section-8 bg-light py-5'>
              <div className='container'>
                <div className='section-header text-center'>
                  <span>Team</span>
                  <h2>Our Team</h2>
                  <h3>Our skilled professionals specialize in providing solar installation services for residential, commercial, and industrial projects. <br />With expertise and dedication, we deliver reliable, efficient, and sustainable energy solutions tailored to meet diverse needs.</h3>
                </div>
                <div className='row pt-3'>
                  <div className='col-md-6 col-lg-3 mb-3'>
                    <div className='card shadow border-0'>
                      <div className='card-img-top'>
                        <img src={TeamImg} alt='' className='w-100' />
                      </div>
                      <div className='card-body p-4'>
                        <div className='card-title pb-0 mb-0'>
                          Sumanta Das
                        </div>
                        <div className='card-sub-title mb-2'>
                          Web Developer
                        </div>
                        <a href='#'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div> 
                  <div className='col-md-6 col-lg-3 mb-3'>
                    <div className='card shadow border-0'>
                      <div className='card-img-top'>
                        <img src={TeamImg} alt='' className='w-100' />
                      </div>
                      <div className='card-body p-4'>
                        <div className='card-title pb-0 mb-0'>
                          Sumanta Das
                        </div>
                        <div className='card-sub-title mb-2'>
                          Web Developer
                        </div>
                        <a href='#'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div> 
                  <div className='col-md-6 col-lg-3 mb-3'>
                    <div className='card shadow border-0'>
                      <div className='card-img-top'>
                        <img src={TeamImg} alt='' className='w-100' />
                      </div>
                      <div className='card-body p-4'>
                        <div className='card-title pb-0 mb-0'>
                          Sumanta Das
                        </div>
                        <div className='card-sub-title mb-2'>
                          Web Developer
                        </div>
                        <a href='#'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div> 
                  <div className='col-md-6 col-lg-3 mb-3'>
                    <div className='card shadow border-0'>
                      <div className='card-img-top'>
                        <img src={TeamImg} alt='' className='w-100' />
                      </div>
                      <div className='card-body p-4'>
                        <div className='card-title pb-0 mb-0'>
                          Sumanta Das
                        </div>
                        <div className='card-sub-title mb-2'>
                          Web Developer
                        </div>
                        <a href='#'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          {/* Our Team Section Ends*/}

        </main>

        {/* Call Footer Component*/}
        <Footer />
    </>
  )
}

export default About