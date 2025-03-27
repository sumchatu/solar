import React, { useState } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Hero from '../common/Hero';
import ProjectImg from '../../assets/images/construction2.jpg';
import Project1Img from '../../assets/images/project1.jpg';
import Project2Img from '../../assets/images/project2.jpg';
import Project3Img from '../../assets/images/project3.jpg';

import { Modal, Button, Carousel } from 'react-bootstrap';


const Projects = () => {
    const [showModal, setShowModal] = useState(false); // State to control the modal
    const [modalData, setModalData] = useState({}); // State to store dynamic data for modal

    // Array of projects with dynamic data
    const projects = [
        {
            id: 1,
            title: "Kolkata Projects",
            description: "Specialty construction focuses on projects requiring specialized skills, materials, and techniques.",
            images: [Project1Img, Project2Img, Project3Img]
        },
        {
            id: 2,
            title: "Residential Projects",
            description: "Residential solar projects provide sustainable energy solutions for homes.",
            images: [
                "../../assets/images/residential1.jpg",
                "../../assets/images/residential2.jpg",
                "../../assets/images/residential3.jpg"
            ]
        }
        // Add more projects as needed
    ];

    const handleOpenModal = (project) => {
        setModalData(project); // Set the project-specific data
        setShowModal(true); // Show the modal
    };

    const handleCloseModal = () => setShowModal(false); // Close the modal

    return (
        <>
            {/* Call Header Component */}
            <Header />

            <main>
                {/* Hero Section Starts */}
                <Hero 
                    heroClass='section-projects' 
                    preHeading='Quality. Integrity. Value.' 
                    heading='Our Projects' 
                    text='We excel at transforming visions into reality <br/>
                    through outstanding craftsmanship and precise.' 
                />
                {/* Hero Section Ends */}

                {/* Our Projects Section */}
                <section className='section-3 bg-light py-5'>
                    <div className='container py-5'>
                        <div className='section-header text-center'>
                            <span>our projects</span>
                            <h2>Discover our diverse range of projects</h2>
                            <h3>We offer a diverse array of solar energy solutions, spanning residential, commercial, and industrial projects.</h3>
                        </div>
                        <div className='row pt-4'>
                            {projects.map((project) => (
                                <div className='col-md-4 col-lg-4' key={project.id}>
                                    <div className='item'>
                                        <div className='service-image'>
                                            <img src={ProjectImg} alt={project.title} className='w-100' />
                                        </div>
                                        <div className='service-body'>
                                            <div className='service-title'>
                                                <h3>{project.title}</h3>
                                            </div>
                                            <div className='service-content'>
                                                <p>{project.description}</p>
                                            </div>
                                            <Button 
                                                variant="primary" 
                                                onClick={() => handleOpenModal(project)}>
                                                Read More
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* Our Projects Ends */}
            </main>

            {/* Modal Component */}
            <Modal 
                show={showModal} 
                onHide={handleCloseModal} 
                dialogClassName="transparent-dark-modal" /* Custom class for styling */
            >
                <Modal.Header closeButton>
                    <Modal.Title>{modalData.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{modalData.description}</p>
                    <Carousel>
                        {modalData.images && modalData.images.map((image, index) => (
                            <Carousel.Item key={index}>
                                <img src={image} alt={`Slide ${index + 1}`} className="d-block w-100" />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Call Footer Component */}
            <Footer />
        </>
    );
};

export default Projects;
