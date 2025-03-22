import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Hero from '../common/Hero';
import ServiceImg1 from '../../assets/images/serviceImg1.jpg';
import ServiceImg2 from '../../assets/images/serviceImg2.jpg';
import ServiceImg3 from '../../assets/images/serviceImg3.jpg';
import ServiceImg4 from '../../assets/images/serviceImg4.jpg';
import ServiceImg5 from '../../assets/images/serviceImg5.jpg';
import ServiceImg6 from '../../assets/images/serviceImg6.jpg';

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
                <section className='section-3 bg-light py-1'>
                <div className='container py-5'>
                    <div className='section-header text-center'>
                        <h2>OUR SERVICES- TD SOLAR</h2>
                        <p>At TD Solar, we are dedicated to providing comprehensive and high-quality energy solutions to meet your needs.<br /> Whether you’re looking to switch to solar power, require electrical contracting services, <br />or need expert technical consultancy, we’ve got you covered. Here’s a detailed look at the services we offer:</p>
                    </div>
                    <br />
                    <div className='container py-3'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <span>Solar PV Solutions</span>
                                <p>
                                    As a WBSEDCL-empanelled solar contractor, we specialize in designing, installing, and maintaining solar power systems for residential, commercial, and government projects. Our solar solutions are tailored to maximize energy efficiency, reduce electricity bills, and promote sustainability.
                                </p>
                            </div>
                            <div className='col-md-12'>
                                <center><h2>What We Offer?</h2></center>
                                <p>
                                    <b>Custom Solar System Design:</b> We assess your energy needs and design a solar PV system that fits your requirements and budget.<br />
                                    <b>High-Quality Installation:</b> Our team of experts ensures seamless installation using the best materials and equipment. <br />
                                    <b>Maintenance and Support:</b> We provide regular maintenance services to keep your solar system running at peak efficiency.<br />
                                    <b>Government Subsidy Assistance:</b> We help you navigate government schemes and subsidies to make solar energy more affordable.
                                </p>
                            </div>
                            <div className='col-md-12'>
                                <center><h2>Why Choose Us?</h2></center>
                                <p align='center'>
                                    <ul>
                                        <li>
                                            Expertise in solar technology and installation.
                                        </li>
                                        <li>
                                            Use of premium-quality solar panels and components.
                                        </li>
                                        <li>
                                            Commitment to delivering long-lasting and efficient solutions.
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <hr /> <br />
                        <div className='row'>
                            <div className='col-md-12'>
                                <span>Government Electrical Contracting</span>
                                <p>
                                    TD Solar is a trusted name in government electrical contracting. We provide reliable and high-quality electrical services for government projects, ensuring compliance with all safety and regulatory standards.
                                </p>
                            </div>
                            <div className='col-md-12'>
                                <center><h2>What We Offer?</h2></center>
                                <p>
                                    <b>Electrical Infrastructure Development: </b> We design and install electrical systems for government buildings, institutions, and public facilities.<br />
                                    <b>Project Management: </b> Our team manages every aspect of the project, from planning to execution, ensuring timely and cost-effective delivery. <br />
                                    <b>Quality Assurance: </b> We adhere to strict quality standards to ensure the safety and durability of our work.<br />
                                </p>
                            </div>
                            <div className='col-md-12'>
                                <center><h2>Why Choose Us?</h2></center>
                                <p align='center'>
                                    <ul>
                                        <li>
                                            Proven track record in government projects.
                                        </li>
                                        <li>
                                        	Skilled team with extensive experience in electrical contracting.
                                        </li>
                                        <li>
                                        	Commitment to delivering projects on time and within budget.
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <hr /> <br />
                        <div className='row'>
                            <div className='col-md-12'>
                                <span>Electrical Goods Shop</span>
                                <p>
                                    From solar panels and inverters to electrical components and accessories, our shop offers high-quality products to support your energy projects. We source only the best materials to ensure durability and performance.
                                </p>
                            </div>
                            <div className='col-md-12'>
                                <center><h2>What We Offer?</h2></center>
                                <p>
                                    <b>Solar Panels and Inverters: </b> Premium-quality products for your solar installations.<br />
                                    <b>Electrical Components: </b> Reliable components for all your electrical needs. <br />
                                    <b>Expert Advice: </b> Our team is available to help you choose the right products for your projects.
                                </p>
                            </div>
                            <div className='col-md-12'>
                                <center><h2>Why Choose Us?</h2></center>
                                <p align='center'>
                                    <ul>
                                        <li>
                                        	Competitive pricing.
                                        </li>
                                        <li>
                                        	Wide range of high-quality products.
                                        </li>
                                        <li>
                                        	Trusted by homeowners, businesses, and government clients.
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <center><span>Overview of Our Services</span></center>
                    <div className='row pt-4'>
                        <div className='col-md-4 col-lg-4'>
                            <div className='item'>
                            <div className='service-image'>
                                <img src={ServiceImg1} alt='' className='w-100' />
                            </div>
                            <div className='service-body'>
                                <div className='service-title'>
                                <h3>
                                    Solar PV Solutions– Harness the Power of the Sun!
                                </h3>
                                </div>
                                <div className='service-content'>
                                <p>
                                    Switch to clean, renewable energy with TD Solar’s expert Solar PV solutions. As a WBSEDCL-empanelled contractor, we design, install, and maintain high-quality solar power systems for homes, businesses, and government projects. Our customized solar solutions help you save on electricity bills, reduce your carbon footprint, and achieve energy independence. From initial consultation to seamless installation and ongoing maintenance, we ensure a hassle-free experience. Let us help you harness the power of the sun for a brighter, greener future!
                                </p>
                                </div>
                                {/* <a href='/services/residential' className='btn btn-primary small'>Read More</a> */}
                            </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-4'>
                            <div className='item'>
                            <div className='service-image'>
                                <img src={ServiceImg2} alt='' className='w-100' />
                            </div>
                            <div className='service-body'>
                                <div className='service-title'>
                                <h3>Government Electrical Contracting – Reliable and Efficient Services</h3>
                                </div>
                                <div className='service-content'>
                                <p>
                                    TD Solar is a trusted name in government electrical contracting. We provide reliable and high-quality electrical services for government projects, ensuring compliance with safety and regulatory standards. Our team manages every aspect of the project, from planning to execution, delivering timely and cost-effective solutions. Whether it’s electrical infrastructure development or project management, we are committed to excellence. Partner with us for dependable electrical contracting services that meet your needs.
                                </p>
                                </div>
                                {/* <a href='/services/commercial' className='btn btn-primary small'>Read More</a> */}
                            </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-4'>
                            <div className='item'>
                            <div className='service-image'>
                                <img src={ServiceImg3} alt='' className='w-100' />
                            </div>
                            <div className='service-body'>
                                <div className='service-title'>
                                <h3>Technical Consultancy – Expert Guidance for Your Energy Needs</h3>
                                </div>
                                <div className='service-content'>
                                <p>
                                    Need expert advice on your energy projects? TD Solar offers customized technical consultancy services to help you make informed decisions. From energy audits and project planning to regulatory compliance, our team provides transparent and reliable guidance. Whether you’re planning a solar installation or upgrading your electrical systems, we’re here to help. Trust TD Solar for expert consultancy that delivers results.
                                </p>
                                </div>
                                {/* <a href='/services/maintenance' className='btn btn-primary small'>Read More</a> */}
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='row pt-4'>
                        <div className='col-md-4 col-lg-4'>
                            <div className='item'>
                            <div className='service-image'>
                                <img src={ServiceImg4} alt='' className='w-100' />
                            </div>
                            <div className='service-body'>
                                <div className='service-title'>
                                <h3>
                                    Technical Training School – Empowering the Next Generation
                                </h3>
                                </div>
                                <div className='service-content'>
                                <p>
                                    At TD Solar, we believe in empowering the next generation of technicians and engineers. Our technical training school offers specialized programs in renewable energy and electrical technologies. With hands-on training, expert instructors, and career support, we equip students with the skills needed to excel in the industry. Join us to build a successful career in the growing field of renewable energy!
                                </p>
                                </div>
                                {/* <a href='/services/residential' className='btn btn-primary small'>Read More</a> */}
                            </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-4'>
                            <div className='item'>
                            <div className='service-image'>
                                <img src={ServiceImg5} alt='' className='w-100' />
                            </div>
                            <div className='service-body'>
                                <div className='service-title'>
                                <h3>Electrical Goods Shop – Premium Products for Your Projects</h3>
                                </div>
                                <div className='service-content'>
                                <p>
                                    Looking for high-quality electrical and solar products? Visit TD Solar’s electrical goods shop! We offer a wide range of premium products, including solar panels, inverters, and electrical components. Our team is available to help you choose the right products for your projects. With competitive pricing and reliable quality, we are your one-stop shop for all your energy needs.
                                </p>
                                </div>
                                {/* <a href='/services/commercial' className='btn btn-primary small'>Read More</a> */}
                            </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-4'>
                            <div className='item'>
                            <div className='service-image'>
                                <img src={ServiceImg6} alt='' className='w-100' />
                            </div>
                            <div className='service-body'>
                                <div className='service-title'>
                                <h3>Why Choose TD Solar? – Your Trusted Energy Partner</h3>
                                </div>
                                <div className='service-content'>
                                <p>
                                    TD Solar is your trusted partner for all your energy needs. With years of experience, a customer-centric approach, and a commitment to sustainability, we deliver high-quality solar and electrical solutions. From solar PV setups and government contracting to technical consultancy and training, we offer end-to-end services under one roof. Let’s work together to create a brighter, greener future!
                                </p>
                                </div>
                                {/* <a href='/services/maintenance' className='btn btn-primary small'>Read More</a> */}
                            </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className='container py-3'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <span>Why Choose TD Solar for Your Energy Needs?</span>
                                <p>
                                    <b>Expertise: </b> With years of experience in the electrical and solar industries, we bring unmatched knowledge and skills to every project.<br />
                                    <b>Quality Assurance: </b> We use only the best materials and follow industry standards to ensure long-lasting and efficient solutions.<br />
                                    <b>Customer-Centric Approach: </b>Your satisfaction is our priority. We work closely with you to understand your needs and deliver customized solutions.<br />
                                    <b>Commitment to Sustainability: </b> We are passionate about promoting renewable energy and helping our clients reduce their carbon footprint while saving on energy costs.
                                </p>
                            </div>
                            <div className='col-md-12'>
                                <center><span>Let’s Work Together!</span></center>
                                <p>
                                    Whether you’re looking to switch to solar power, need electrical contracting services, or require technical consultancy, TD Solar is here to help. Contact us today to learn more about our services and how we can assist you in achieving your energy goals.
                                </p>
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