import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'

const ContactUs = () => {
  return (
    <>
        {/* Call Header Component */}
        <Header />

        <main>
            {/* Hero Section Starts*/}
                <Hero heroClass='section-contact' preHeading='Quality. Integrity. Value.' heading='Contact Us' text='We excel at transforming visions into reality <br/>
                through outstanding craftsmanship and precise.' />
            {/* Hero Section Ends*/}

            {/* Contact Us Starts*/}
                <section className='section-9 py-5'>
                    <div className='container'>
                        <div className='section-header text-center'>
                            <span>Contact Us</span>
                            <h3>Our dedicated experts are here to help you with any of your questions, contact us by<br/>
                            filling out the form below and we will be in touch shortly.</h3>
                        </div>
                        <div className='row mt-5'>
                            <div className='col-md-3'>
                                <div className='card shadow border-0 mb-3'>
                                    <div className='card-body p-2'>
                                        <h3>Call Us</h3>
                                        <div>
                                            <a href='#'>+91 9775550672</a>
                                        </div>
                                        <div>
                                            <a href='#'>+91 9775550672</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='card shadow border-0 mb-3'>
                                    <div className='card-body p-2'>
                                        <h3 className='mt-4'>Write us</h3>
                                        <div>
                                            <a href='#'>abc@abc.com</a>
                                        </div>
                                        <div>
                                            <a href='#'>info@abc.com</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='card shadow border-0 mb-3'>
                                    <div className='card-body p-2'>          
                                        <h3 className='mt-4'>Visit Us</h3>
                                        <div>
                                           <u> Our office is located at:</u> <br />
                                            <b>TD Solar (Technical Dwipayan)</b>
                                            <br />
                                            GN/Shop No. - G2 and G5, Rajnandini Villa, Khardaha<br />
                                            Khardaha Thana Road<br />
                                            North 24 Parganas, Kolkata - 700116
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-9'>
                                <div className='card shadow border-0'>
                                    <div className='card-body p-5'>
                                        <form action=''>
                                            <div className='row'>
                                                <div className='col-md-6 mb-4'>
                                                    <label htmlFor="" className='form-label'>Name</label>
                                                    <input type='text' className='form-control form-control-lg' placeholder='Enter Your Name' />
                                                </div>
                                                <div className='col-md-6 mb-4'>
                                                    <label htmlFor="" className='form-label'>Email</label>
                                                    <input type='text' className='form-control form-control-lg' placeholder='Enter Your Email' />
                                                </div>
                                                <div className='col-md-6 mb-4'>
                                                    <label htmlFor="" className='form-label'>Phone No</label>
                                                    <input type='text' className='form-control form-control-lg' placeholder='Phone No.' />
                                                </div>
                                                <div className='col-md-6 mb-4'>
                                                    <label htmlFor="" className='form-label'>Subject</label>
                                                    <input type='text' className='form-control form-control-lg' placeholder='Subject' />
                                                </div>
                                                <div>
                                                    <label htmlFor="" className='form-label'>Message</label>
                                                    <textarea name="" id="" placeholder='Message' rows={5} className='form-control form-control-lg'></textarea>
                                                </div>
                                            </div>
                                            <button className='btn btn-primary large mt-3'>Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/* Google Map Section */}
                            <div className='col-md-12'>
                                <div className='mt-4'>
                                    <h3>Find Us Here</h3>
                                    <iframe
                                        title="Google Map"
                                        // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.965867571443!2d<YOUR_LONGITUDE>!3d<YOUR_LATITUDE>!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8bb64a5c5b867%3A0x7ad2f9ee7e5a285f!5e0!3m2!1sen!2sin!4v1618209027489!5m2!1sen!2sin"
                                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3680.1937897259777!2d88.36657962307875!3d22.72103739891615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRajnandini%20Villa%2C%20Khardaha%2C%20North%2024%20Parganas%2C%20Kolkata%20-%20700116!5e0!3m2!1sen!2sin!4v1743096913504!5m2!1sen!2sin"
                                        width="100%"
                                        height="500"
                                        style={{ border: 2 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            {/* Contact Us Ends*/}
        </main>

        {/* Call Footer Component*/}
        <Footer />
    </>
  )
}

export default ContactUs