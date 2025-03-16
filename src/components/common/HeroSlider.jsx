import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselImg1 from '../../assets/images/carousel1.jpg';
import CarouselImg2 from '../../assets/images/carousel2.jpg';
import CarouselImg3 from '../../assets/images/carousel3.jpg';

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
                <h1>
                    Crafting dreams with<br />
                    precious and excellence.
                </h1>
                <p>
                    We excel at transforming visions into reality through
                    outstanding craftsmanship and precision.
                </p>
                <div className="mt-4">
                    <a className="btn btn-primary large">Contact Now</a>
                    <a className="btn btn-secondary large ms-2">View Projects</a>
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
                <h1>
                    Renewable Energy<br />
                    Built for Excellence.
                </h1>
                <p>
                    Empowering businesses with sustainable energy solutions.
                </p>
                <div className="mt-4">
                    <a className="btn btn-primary large">Contact Now</a>
                    <a className="btn btn-secondary large ms-2">View Projects</a>
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
                <span>Powering Your Future</span>
                <h1>
                    Renewable Energy<br />
                    Built for Excellence.
                </h1>
                <p>
                    Empowering businesses with sustainable energy solutions.
                </p>
                <div className="mt-4">
                    <a className="btn btn-primary large">Contact Now</a>
                    <a className="btn btn-secondary large ms-2">View Projects</a>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
        </div>
    </section>
  )
}
