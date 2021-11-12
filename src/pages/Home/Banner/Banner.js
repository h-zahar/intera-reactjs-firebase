import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div style={{boxShadow: '-3px -3px 7px rgba(73, 53, 47, 0.699)', background: 'rgba(0, 0, 0, 0.8)'}}>
            <Carousel style={{width: '100%', opacity: '1'}} fade controls={false}>
                <Carousel.Item interval={8000} style={{transition: 'all 2s ease-in-out', background: `rgba(0, 0, 0, 0.75) url('./images/ban-bg/3.jpg') center center fixed`, backgroundSize: 'cover', backgroundBlendMode: 'darken', borderLeft: '2px solid black', borderRight: '2px solid black'}}>
                    <Container style={{minHeight: '501px'}} className="text-light d-flex justify-content-center align-items-center">
                        <div className="text-center">
                            <p className="mb-0">Terracotta lovers are awesome, you know!</p>
                            <h1 className="mt-5 mb-4">Welcome to <span className="brand">Intera</span></h1>
                            <p>Your Empire of Terracotta</p>
                        </div>
                    </Container>
                </Carousel.Item>
                <Carousel.Item interval={8000} style={{transition: 'all 2s ease-in-out', background: `rgba(0, 0, 0, 0.75) url('./images/ban-bg/2.jpg') center center fixed`, backgroundSize: 'cover', backgroundBlendMode: 'darken', borderLeft: '2px solid black', borderRight: '2px solid black'}}>
                    <Container style={{minHeight: '501px'}} className="text-light d-flex justify-content-center align-items-center">
                        <div className="text-center">
                            <p className="mb-0">Awesome people need awesome place :3</p>
                            <h1 className="mt-5 mb-4">Welcome to <span className="brand">Intera</span></h1>
                            <p>Your Palace of Terracotta</p>
                        </div>
                    </Container>
                </Carousel.Item>
                <Carousel.Item interval={8000} style={{transition: 'all 2s ease-in-out', background: `rgba(0, 0, 0, 0.75) url('./images/ban-bg/1.jpg') center center fixed`, backgroundSize: 'cover', backgroundBlendMode: 'darken', borderLeft: '2px solid black', borderRight: '2px solid black'}}>
                    <Container style={{minHeight: '501px'}} className="text-light d-flex justify-content-center align-items-center">
                        <div className="text-center">
                            <p className="mb-0">So, here we are.. For you, by you, with you :D</p>
                            <h1 className="mt-5 mb-4">Welcome to <span className="brand">Intera</span></h1>
                            <p>Your Ocean of Terracotta</p>
                        </div>
                    </Container>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Banner;