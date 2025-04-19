import React, { useState } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Hero from '../common/Hero';
import loadingImg from '../../assets/images/loading-waiting.gif';

const ContactUs = () => {
  // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  // API URL
  const apiUrl = 'https://script.google.com/macros/s/AKfycbxbtbA9E-Hbz3UnfjHTqVCyFUU7olLP4N0zsqTVSaiK_gpiV2uzoNmYudltcEeMYw_E/exec';

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true);

    // Create the data object
    const formData = {
      name,
      email,
      mobile,
      subject,
      message,
    };

    try {
      // Make the POST request to Google Apps Script
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log('Success:', data);
      setLoading(false);
      

      // Check if the request was successful
      if (response.ok) {
        setStatus('Your message has been sent successfully!');
      } else {
        setStatus('Failed to send your message. Please try again.');
      }

      // Clear the form after submission
      setName('');
      setEmail('');
      setMobile('');
      setSubject('');
      setMessage('');
    } catch (error) {
      console.error('Error:', error);
      setStatus('Something went wrong. Please try again later.');
    }
  };

  return (
    <>
      {/* Call Header Component */}
      <Header />

      <main>
        {/* Hero Section Starts*/}
        <Hero
          heroClass="section-contact"
          preHeading="Quality. Integrity. Value."
          heading="Contact Us"
          text="We excel at transforming visions into reality <br/>through outstanding craftsmanship and precise."
        />
        {/* Hero Section Ends */}

        {/* Contact Us Starts*/}
        <section className="section-9 py-5">
          <div className="container">
            <div className="section-header text-center">
              <span>Contact Us</span>
              <h3>
                Our dedicated experts are here to help you with any of your questions, contact us by
                <br />
                filling out the form below and we will be in touch shortly.
              </h3>
            </div>
            <div className="row mt-5">
              <div className="col-md-3">
                <div className="card shadow border-0 mb-3">
                  <div className="card-body p-3">
                    <h3>Call Us</h3>
                    <div>
                      <a href="tel:+919775550672">9775550672</a>
                    </div>
                    <div>
                      <a href="tel:+918777414403">8777414403</a>
                    </div>
                  </div>
                </div>
                <div className="card shadow border-0 mb-3">
                  <div className="card-body p-3">
                    <h3 className="mt-4">Write us</h3>
                    <div>
                      <a href="mailto:contact@tdsolar.in">contact@tdsolar.in</a>
                    </div>
                    <div>
                      <a href="mailto:sales@tdsolar.in">sales@tdsolar.in</a>
                    </div>
                  </div>
                </div>
                <div className="card shadow border-0 mb-3">
                  <div className="card-body p-3">
                    <h3 className="mt-4">Visit Us</h3>
                    <div>
                      <u> Our office is located at:</u> <br />
                      <b>TD Solar (Technical Dwipayan)</b>
                      <br />
                      GN/Shop No. - G2 and G5, Rajnandini Villa, Khardaha
                      <br />
                      Khardaha Thana Road
                      <br />
                      North 24 Parganas, Kolkata - 700116
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="card shadow border-0">
                  <div className="card-body p-5">
                    { (!status) &&
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <label className="form-label">Name</label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="col-md-6 mb-4">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div className="col-md-6 mb-4">
                          <label className="form-label">Phone No</label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Phone No."
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            required
                          />
                        </div>
                        <div className="col-md-6 mb-4">
                          <label className="form-label">Subject</label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <label className="form-label">Message</label>
                          <textarea
                            placeholder="Message"
                            rows={5}
                            className="form-control form-control-lg"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                          ></textarea>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary large mt-3">
                        Submit
                      </button>
                    </form>
                    }
                    {status && <div className="status-message mt-3">{status}</div>}
                    {loading && <img src={loadingImg} alt="TD Solar loading" style={{ height: '100px' }} />}
                  </div>
                </div>
              </div>
              {/* Google Map Section */}
              <div className="col-md-12">
                <div className="mt-4">
                  <h3>Find Us Here</h3>
                  <iframe
                    title="Google Map"
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
  );
};

export default ContactUs;
