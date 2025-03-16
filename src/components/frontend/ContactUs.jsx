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
                            <span></span>
                            <h2>Contact Us</h2>
                            <p>Our dedicated experts are here to help you with any of your questions, contact us by<br/>
                            filling out the form below and we will be in touch shortly.</p>
                        </div>
                        <div className='row mt-5'>
                            <div className='col-md-3'>
                                <div className='card shadow border-0 mb-3'>
                                    <div className='card-body p-4'>
                                        <h3>Call Us</h3>
                                        <div>
                                            <a href='#'>+91 9732097320</a>
                                        </div>
                                        <div>
                                            <a href='#'>+91 9732197321</a>
                                        </div>

                                        <h3 className='mt-4'>You can write us</h3>
                                        <div>
                                            <a href='#'>abc@abc.com</a>
                                        </div>
                                        <div>
                                            <a href='#'>info@abc.com</a>
                                        </div>
                                        
                                        <h3 className='mt-4'>Visit Us</h3>
                                        <div>B-18X, TD Solar House<br/>
                                            Kolkata, West-Bengal<br/>
                                            700056
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