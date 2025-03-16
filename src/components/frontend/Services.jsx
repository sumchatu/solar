import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Hero from '../common/Hero';
import ServiceImg from '../../assets/images/construction1.jpg';

const Services = () => {
  return (
    <>
        {/* Call Header Component */}
        <Header />

        <main>
            {/* Hero Section Starts*/}
                <Hero heroClass='section-services' preHeading='Quality. Integrity. Value.' heading='Services' text='We excel at transforming visions into reality <br/>
                through outstanding craftsmanship and precise.' />
            {/* Hero Section Ends*/}

            {/* Our Services Starts*/}
                <section className='section-3 bg-light py-5'>
                    <div className='container py-5'>
                    <div className='section-header text-center'>
                        <span>our services</span>
                        <h2>From Consultation to Installation</h2>
                        <p>We offer customized Solar Solutions for Every Need, spanning residential, commercial, and industrial projects.</p>
                    </div>
                    <div className='row pt-4'>
                        <div className='col-md-4 col-lg-4'>
                        <div className='item'>
                            <div className='service-image'>
                            <img src={ServiceImg} alt='' className='w-100' />
                            </div>
                            <div className='service-body'>
                            <div className='service-title'>
                                <h3>Residential Solar solutions</h3>
                            </div>
                            <div className='service-content'>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, blanditiis! Ipsa sunt nostrum hic qui sed! Odit quos veniam, corporis ullam debitis tempora necessitatibus. Adipisci blanditiis laboriosam accusamus voluptate delectus!</p>
                            </div>
                            <a href='/services/residential' className='btn btn-primary small'>Read More</a>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-4 col-lg-4'>
                        <div className='item'>
                            <div className='service-image'>
                            <img src={ServiceImg} alt='' className='w-100' />
                            </div>
                            <div className='service-body'>
                            <div className='service-title'>
                                <h3>Commercial Solar solutions</h3>
                            </div>
                            <div className='service-content'>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim obcaecati dignissimos consequatur eum. Laboriosam non atque fugit exercitationem. Totam qui est laboriosam accusamus suscipit blanditiis iure vero quo culpa tenetur!</p>
                            </div>
                            <a href='/services/commercial' className='btn btn-primary small'>Read More</a>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-4 col-lg-4'>
                        <div className='item'>
                            <div className='service-image'>
                            <img src={ServiceImg} alt='' className='w-100' />
                            </div>
                            <div className='service-body'>
                            <div className='service-title'>
                                <h3>Solar system maintenance & troubleshooting</h3>
                            </div>
                            <div className='service-content'>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam itaque dignissimos molestiae nesciunt quibusdam esse nam asperiores quisquam, accusamus ex mollitia architecto adipisci veritatis! Officia asperiores nostrum praesentium sint repellendus.</p>
                            </div>
                            <a href='/services/maintenance' className='btn btn-primary small'>Read More</a>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-4 col-lg-4'>
                        <div className='item'>
                            <div className='service-image'>
                            <img src={ServiceImg} alt='' className='w-100' />
                            </div>
                            <div className='service-body'>
                            <div className='service-title'>
                                <h3>Solar Inverters and controllers servicing</h3>
                            </div>
                            <div className='service-content'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsam delectus facere ducimus eum quia minus. Magni ducimus quia corporis. Deleniti provident cupiditate hic dignissimos sequi, amet laudantium repudiandae! Distinctio</p>
                            </div>
                            <a href='/services/inverters' className='btn btn-primary small'>Read More</a>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-4 col-lg-4'>
                        <div className='item'>
                            <div className='service-image'>
                            <img src={ServiceImg} alt='' className='w-100' />
                            </div>
                            <div className='service-body'>
                            <div className='service-title'>
                                <h3>Solar training</h3>
                            </div>
                            <div className='service-content'>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam corrupti, cupiditate iure voluptatem iste consectetur eveniet molestiae? Quaerat reprehenderit sunt provident porro atque hic cupiditate! Qui saepe sed cupiditate?</p>
                            </div>
                            <a href='#' className='btn btn-primary small'>Read More</a>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-4 col-lg-4'>
                        <div className='item'>
                            <div className='service-image'>
                            <img src={ServiceImg} alt='' className='w-100' />
                            </div>
                            <div className='service-body'>
                            <div className='service-title'>
                                <h3>Solar workshop training</h3>
                            </div>
                            <div className='service-content'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque soluta, nemo saepe molestias voluptatum, blanditiis tempora adipisci ullam quibusdam tempore dolorem odit, recusandae doloremque sunt a veritatis totam vel accusamus!</p>
                            </div>
                            <a href='#' className='btn btn-primary small'>Read More</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            {/* Our Services Ends*/}
        </main>

        {/* Call Footer Component*/}
        <Footer />
    </>
  )
}

export default Services