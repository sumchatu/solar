import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import About from '../common/About';
import ProjectImg from '../../assets/images/construction2.jpg';
import BlogImg from '../../assets/images/construction3.jpg';
import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg';
import Icon3 from '../../assets/images/icon-3.svg';
import Icon4 from '../../assets/images/icon-1.svg';
import AvatarImg from '../../assets/images/author-2.jpg';
import ServiceImg1 from '../../assets/images/serviceImg1.jpg';
import ServiceImg2 from '../../assets/images/serviceImg2.jpg';
import ServiceImg3 from '../../assets/images/serviceImg3.jpg';
import ServiceImg4 from '../../assets/images/serviceImg4.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { HeroSlider } from '../common/HeroSlider';

const home = () => {
  return (
    <>
      {/* Call Header Component */}
      <Header />

      <main>
        {/* Hero Slider Starts*/}
          <HeroSlider />
        {/* Hero Slider Ends*/}

        {/* About-us Section Starts*/}
          <About />
        {/* About-us Section Ends*/}

        {/* Our Services Starts*/}
        <section className='section-3 bg-light py-2'>
          <div className='container-fluid py-5'>
            <div className='section-header text-center'>
              <span>our services</span>
              <h2>From Consultation to Installation</h2>
              <h3>At TD Solar, we offer a wide range of services to meet your energy needs:</h3>
            </div>
            <div className='row pt-4'>
              <div className='col-md-3 col-lg-3'>
                <div className='item'>
                  <div className='service-image'>
                    <img src={ServiceImg1} alt='' className='w-100' />
                  </div>
                  <div className='service-body'>
                    <div className='service-title'>
                      <h3>
                        Solar PV Solutions
                      </h3>
                    </div>
                    <div className='service-content'>
                      <p>As a WBSEDCL-empanelled solar contractor, we design and install efficient solar power systems for residential, commercial, and government projects.</p>
                    </div>
                    {/* <a href='/services' className='btn btn-primary small'>Read More</a> */}
                    <NavLink
                      to="/services"
                      className={({ isActive }) =>
                        `btn btn-primary small ${isActive ? 'active-link' : ''}`
                      }
                    >
                      Read More
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-lg-3'>
                <div className='item'>
                  <div className='service-image'>
                    <img src={ServiceImg2} alt='' className='w-100' />
                  </div>
                  <div className='service-body'>
                    <div className='service-title'>
                      <h3>Government Electrical Contracting</h3>
                    </div>
                    <div className='service-content'>
                      <p>We provide reliable electrical contracting services for government projects, ensuring quality and compliance.</p>
                    </div>
                    {/* <a href='/services' className='btn btn-primary small'>Read More</a> */}
                    <NavLink
                      to="/services"
                      className={({ isActive }) =>
                        `btn btn-primary small ${isActive ? 'active-link' : ''}`
                      }
                    >
                      Read More
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-lg-3'>
                <div className='item'>
                  <div className='service-image'>
                    <img src={ServiceImg3} alt='' className='w-100' />
                  </div>
                  <div className='service-body'>
                    <div className='service-title'>
                      <h3>Technical Consultancy</h3>
                    </div>
                    <div className='service-content'>
                      <p>Our expert team offers tailored technical consultancy to help you make informed decisions about your energy needs</p>
                    </div>
                    {/* <a href='/services' className='btn btn-primary small'>Read More</a> */}
                    <NavLink
                      to="/services"
                      className={({ isActive }) =>
                        `btn btn-primary small ${isActive ? 'active-link' : ''}`
                      }
                    >
                      Read More
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-lg-3'>
                <div className='item'>
                  <div className='service-image'>
                    <img src={ServiceImg4} alt='' className='w-100' />
                  </div>
                  <div className='service-body'>
                    <div className='service-title'>
                      <h3>Technical Training School</h3>
                    </div>
                    <div className='service-content'>
                      <p>We believe in empowering the next generation of technicians through our specialized training programs.</p>
                    </div>
                    {/* <a href='/services' className='btn btn-primary small'>Read More</a> */}
                    <NavLink
                      to="/services"
                      className={({ isActive }) =>
                        `btn btn-primary small ${isActive ? 'active-link' : ''}`
                      }
                    >
                      Read More
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Services Ends*/}

        {/* Why Choose-us Starts*/}
        <section className='section-4 py-3'>
          <div className='container py-5'>
          <div className='section-header text-center'>
              <span>Why Choose TD Solar?</span>
              <h2>Empowering a Greener Future with Sustainable Energy Solutions</h2>
              <h3>At TD Solar, we envision a future where clean, renewable energy is accessible to all. <br />Our mission is to provide innovative, affordable, and sustainable energy solutions that benefit both our clients and the environment.</h3>
            </div>
            <div className='row pt-4'>
              <div className='col-md-3'>
                <div className='card shadow border-0 p-4'>
                  <div className='card-icon'>
                    <img src={Icon1} alt='' />
                  </div>
                  <div className='card-title mt-3'>
                    <h3>Expertise:</h3>
                  </div>
                  <p>
                    With years of experience in the electrical and solar industries, we bring unmatched knowledge and skills to every project.
                  </p>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='card shadow border-0 p-4'>
                  <div className='card-icon'>
                    <img src={Icon3} alt='' />
                  </div>
                  <div className='card-title mt-3'>
                    <h3>Quality Assurance: </h3>
                  </div>
                  <p>
                    We use only the best materials and follow industry standards to ensure long-lasting and efficient solutions.
                  </p>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='card shadow border-0 p-4'>
                  <div className='card-icon'>
                    <img src={Icon2} alt='' />
                  </div>
                  <div className='card-title mt-3'>
                    <h3>Driven by you: </h3>
                  </div>
                  <p>
                    Your satisfaction is our priority. We work closely with you to understand your needs and deliver customized solutions.
                  </p>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='card shadow border-0 p-4'>
                  <div className='card-icon'>
                    <img src={Icon4} alt='' />
                  </div>
                  <div className='card-title mt-3'>
                    <h3>Sustainability: </h3>
                  </div>
                  <p>
                    Passionate about renewable energy, reducing carbon footprints, and cutting energy costs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Why Choose-us Ends*/}

        {/* Our Projects Starts*/}
        <section className='section-3 bg-light py-3'>
          <div className='container-fluid py-5'>
            <div className='section-header text-center'>
              <span>our projects</span>
              <h2>Discover our diverse range of projects</h2>
              <h3>We specialize in solar panel installation services for residential, commercial, <br />and industrial projects, ensuring reliable and sustainable energy solutions tailored to meet diverse needs.</h3>
            </div>
            <div className='row pt-4'>
              <div className='col-md-3 col-lg-3'>
                <div className='item'>
                  <div className='service-image'>
                    <img src={ProjectImg} alt='' className='w-100' />
                  </div>
                  <div className='service-body'>
                    <div className='service-title'>
                      <h3>Kolkata Projects</h3>
                    </div>
                    <div className='service-content'>
                      <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques. Unlike general construction</p>
                    </div>
                    {/* <a href='/projects' className='btn btn-primary'>Read More</a> */}
                    <NavLink
                      to="/projects"
                      className={({ isActive }) =>
                        `btn btn-primary small ${isActive ? 'active-link' : ''}`
                      }
                    >
                      Read More
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-lg-3'>
                <div className='item'>
                  <div className='service-image'>
                    <img src={ProjectImg} alt='' className='w-100' />
                  </div>
                  <div className='service-body'>
                    <div className='service-title'>
                      <h3>Kolkata Projects</h3>
                    </div>
                    <div className='service-content'>
                      <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques. Unlike general construction</p>
                    </div>
                    {/* <a href='/projects' className='btn btn-primary small'>Read More</a> */}
                    <NavLink
                      to="/projects"
                      className={({ isActive }) =>
                        `btn btn-primary small ${isActive ? 'active-link' : ''}`
                      }
                    >
                      Read More
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-lg-3'>
                <div className='item'>
                  <div className='service-image'>
                    <img src={ProjectImg} alt='' className='w-100' />
                  </div>
                  <div className='service-body'>
                    <div className='service-title'>
                      <h3>Kolkata Projects</h3>
                    </div>
                    <div className='service-content'>
                      <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques. Unlike general construction</p>
                    </div>
                    {/* <a href='/projects' className='btn btn-primary small'>Read More</a> */}
                    <NavLink
                      to="/projects"
                      className={({ isActive }) =>
                        `btn btn-primary small ${isActive ? 'active-link' : ''}`
                      }
                    >
                      Read More
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-lg-3'>
                <div className='item'>
                  <div className='service-image'>
                    <img src={ProjectImg} alt='' className='w-100' />
                  </div>
                  <div className='service-body'>
                    <div className='service-title'>
                      <h3>Kolkata Projects</h3>
                    </div>
                    <div className='service-content'>
                      <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques. Unlike general construction</p>
                    </div>
                    {/* <a href='/projects' className='btn btn-primary small'>Read More</a> */}
                    <NavLink
                      to="/projects"
                      className={({ isActive }) =>
                        `btn btn-primary small ${isActive ? 'active-link' : ''}`
                      }
                    >
                      Read More
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Projects Ends*/}

        {/* Testimonials Starts*/}
        <section className='section-5 py-5'>
          <div className='container'>
            <div className='section-header text-center'>
              <span>Testimonials</span>
              <h2>What people are saying about us</h2>
              <h3>We offer a diverse array of solar energy solutions, spanning residential, commercial, and industrial projects.</h3>
            </div>
            <Swiper
                modules={[Pagination]}
                spaceBetween={20} // Reduce space for smaller devices
                slidesPerView={1} // Default to 1 slide on smaller screens
                breakpoints={{
                  640: { slidesPerView: 1, spaceBetween: 10 }, // Small screens
                  768: { slidesPerView: 2, spaceBetween: 20 }, // Tablets
                  1024: { slidesPerView: 3, spaceBetween: 30 }, // Laptops and above
                }}
                pagination={{ clickable: true }}
              >

              <SwiperSlide>
                <div className='card shadow border-0'>
                  <div className='card-body p-5'>
                    <div className='rating'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                    </div>
                    <div className='content pt-4 pb-2'>
                      <p>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque recusandae officiis tenetur minima similique aliquid dicta facilis sequi vero, beatae inventore natus eveniet possimus quas quae nemo! Laudantium, id veritatis.
                      </p>
                    </div>
                    <hr/>
                    <div className='d-flex meta'>
                      <div>
                        <img src={AvatarImg} alt='' width={50} />
                      </div>
                      <div className='ps-3'>
                        <div className='name'>John Doe</div>
                        <div>CEO</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='card shadow border-0'>
                  <div className='card-body p-5'>
                    <div className='rating'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                    </div>
                    <div className='content pt-4 pb-2'>
                      <p>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque recusandae officiis tenetur minima similique aliquid dicta facilis sequi vero, beatae inventore natus eveniet possimus quas quae nemo! Laudantium, id veritatis.
                      </p>
                    </div>
                    <hr/>
                    <div className='d-flex meta'>
                      <div>
                        <img src={AvatarImg} alt='' width={50} />
                      </div>
                      <div className='ps-3'>
                        <div className='name'>John Doe</div>
                        <div>CEO</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='card shadow border-0'>
                  <div className='card-body p-5'>
                    <div className='rating'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                    </div>
                    <div className='content pt-4 pb-2'>
                      <p>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque recusandae officiis tenetur minima similique aliquid dicta facilis sequi vero, beatae inventore natus eveniet possimus quas quae nemo! Laudantium, id veritatis.
                      </p>
                    </div>
                    <hr/>
                    <div className='d-flex meta'>
                      <div>
                        <img src={AvatarImg} alt='' width={50} />
                      </div>
                      <div className='ps-3'>
                        <div className='name'>John Doe</div>
                        <div>CEO</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='card shadow border-0'>
                  <div className='card-body p-5'>
                    <div className='rating'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                    </div>
                    <div className='content pt-4 pb-2'>
                      <p>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque recusandae officiis tenetur minima similique aliquid dicta facilis sequi vero, beatae inventore natus eveniet possimus quas quae nemo! Laudantium, id veritatis.
                      </p>
                    </div>
                    <hr/>
                    <div className='d-flex meta'>
                      <div>
                        <img src={AvatarImg} alt='' width={50} />
                      </div>
                      <div className='ps-3'>
                        <div className='name'>John Doe</div>
                        <div>CEO</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        {/* Testimonials Ends*/}

        {/* Blogs & News Starts*/}
        <section className='section-6 bg-light py-5'>
          <div className='container'>
            <div className='section-header text-center'>
              <span>Blog & News</span>
              <h2> Articles & blog posts</h2>
              <h3>We offer a diverse array of solar energy solutions, spanning residential, commercial, and industrial projects.</h3>
            </div>
            <div className='row pt-3'>
              <div className='col-md-4'>
                <div className='card shadow border-0'>
                  <div className='card-img-top'>
                    <img src={BlogImg} alt='' className='w-100' />
                  </div>
                  <div className='card-body p-4'>
                    <div className='mb-3'>
                      <a href='#' className='title'>Dummy blog title</a>
                    </div>
                    {/* <a href='/blogs' className='btn btn-primary small'>Read More</a> */}
                    <NavLink
                      to="/blogs"
                      className={({ isActive }) =>
                        `btn btn-primary small ${isActive ? 'active-link' : ''}`
                      }
                    >
                      Read More
                    </NavLink>
                  </div>
                </div>
              </div> 
              <div className='col-md-4'>
                <div className='card shadow border-0'>
                  <div className='card-img-top'>
                    <img src={BlogImg} alt='' className='w-100' />
                  </div>
                  <div className='card-body p-4'>
                    <div className='mb-3'>
                      <a href='#' className='title'>Dummy blog title</a>
                    </div>
                    {/* <a href='/blogs' className='btn btn-primary small'>Read More</a> */}
                    <NavLink
                      to="/blogs"
                      className={({ isActive }) =>
                        `btn btn-primary small ${isActive ? 'active-link' : ''}`
                      }
                    >
                      Read More
                    </NavLink>
                  </div>
                </div>
              </div> 
              <div className='col-md-4'>
                <div className='card shadow border-0'>
                  <div className='card-img-top'>
                    <img src={BlogImg} alt='' className='w-100' />
                  </div>
                  <div className='card-body p-4'>
                    <div className='mb-3'>
                      <a href='#' className='title'>Dummy blog title</a>
                    </div>
                    {/* <a href='/blogs' className='btn btn-primary small'>Read More</a> */}
                    <NavLink
                      to="/blogs"
                      className={({ isActive }) =>
                        `btn btn-primary small ${isActive ? 'active-link' : ''}`
                      }
                    >
                      Read More
                    </NavLink>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </section>
        {/* Blogs & News Ends*/}

      </main>

      {/* Call Footer Component*/}
      <Footer />
    </>
  )
}

export default home