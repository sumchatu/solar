import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselImg1 from '../../assets/images/carousel1.jpg';
import CarouselImg2 from '../../assets/images/carousel2.jpg';
import CarouselImg3 from '../../assets/images/carousel3.jpg';
import CarouselImg4 from '../../assets/images/carousel4.jpg';

export const HeroSlider = () => {
  return (
    <section className="section-1">
        <div className="hero d-flex align-items-center">
        <div className="container-fluid">
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={CarouselImg1}
                alt="First slide"
                />
                <Carousel.Caption>
                <span>Welcome To TD Solar</span>
                <h2>
                    Power Your Home with the Sun - Clean, Reliable, and Affordable Solar Energy by <br />TD Solar!
                </h2>
                <p>
                    Switch to solar today and save on electricity bills while reducing your carbon footprint. Let TD Solar handle the setup – hassle-free!
                </p>
                <div className="mt-4">
                    <a href='/contact' className="btn btn-primary small">Contact Now</a>
                    <a href='/projects' className="btn btn-secondary small ms-2">View Projects</a>
                </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={CarouselImg2}
                alt="Second slide"
                />
                <Carousel.Caption>
                <span>Powering Your Future</span>
                <h2>
                    Go Solar, Save Big – Harness the Power of the Sun with TD Solar!
                </h2>
                <p>
                    With TD Solar’s expert installations, enjoy unlimited energy savings and a greener planet. Start your solar journey now!
                </p>
                <div className="mt-4">
                    <a href='/contact' className="btn btn-primary small">Contact Now</a>
                    <a href='/projects' className="btn btn-secondary small ms-2">View Projects</a>
                </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={CarouselImg3}
                alt="Third slide"
                />
                <Carousel.Caption>
                <span>Trust Built In</span>
                <h2>
                    Your Trusted Partner in Solar Energy – TD Solar’s Custom Solutions for Every Home!
                </h2>
                <p>
                    From design to installation, TD Solar provides top-quality Solar PV systems tailored to your needs. Experience energy independence today!
                </p>
                <div className="mt-4">
                    <a href='/contact' className="btn btn-primary small">Contact Now</a>
                    <a href='/projects' className="btn btn-secondary small ms-2">View Projects</a>
                </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={CarouselImg4}
                alt="Fourth slide"
                />
                <Carousel.Caption>
                <span>Simply Sustainable</span>
                <h2>
                    Solar Made Simple – Affordable, Efficient, and Eco-Friendly Energy Solutions by <br/>TD Solar!
                </h2>
                <p>
                    Join the renewable energy revolution with TD Solar’s seamless Solar PV setups. Save money and protect the environment effortlessly.
                </p>
                <div className="mt-4">
                    <a href='/contact' className="btn btn-primary small">Contact Now</a>
                    <a href='/projects' className="btn btn-secondary small ms-2">View Projects</a>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
        </div>
    </section>
  )
}
