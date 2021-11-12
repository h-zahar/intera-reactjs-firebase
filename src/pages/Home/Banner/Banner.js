import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

const Banner = () => {
    return (
        <div style={{background: 'rgba(0, 0, 0, 0.75)'}}>
            <Carousel style={{width: '100%', opacity: '1'}} fade controls={false}>
                <Carousel.Item interval={8000} style={{transition: 'all 2s ease-in-out', background: `rgba(0, 0, 0, 0.75) url('./images/ban-bg/3.jpg') center center fixed`, backgroundSize: 'cover', backgroundBlendMode: 'darken', borderLeft: '2px solid black', borderRight: '2px solid black'}}>
                    <Container style={{minHeight: '501px'}} className="text-light d-flex justify-content-center align-items-center">
                        <div className="text-center">
                            <p>Terracotta Lovers are awesome, you know!</p>
                            <h1>Welcome in your Intera</h1>
                            <p>Your Empire of Terracotta</p>
                        </div>
                    </Container>
                </Carousel.Item>
                <Carousel.Item interval={8000} style={{transition: 'all 2s ease-in-out', background: `rgba(0, 0, 0, 0.75) url('./images/ban-bg/2.jpg') center center fixed`, backgroundSize: 'cover', backgroundBlendMode: 'darken', borderLeft: '2px solid black', borderRight: '2px solid black'}}>
                    <Container style={{minHeight: '501px'}} className="text-light d-flex justify-content-center align-items-center">
                        <div className="text-center">
                            <p>Terracotta Lovers are awesome, you know!</p>
                            <h1>Welcome in your Intera</h1>
                            <p>Your Empire of Terracotta</p>
                        </div>
                    </Container>
                </Carousel.Item>
                <Carousel.Item interval={8000} style={{transition: 'all 2s ease-in-out', background: `rgba(0, 0, 0, 0.75) url('./images/ban-bg/1.jpg') center center fixed`, backgroundSize: 'cover', backgroundBlendMode: 'darken', borderLeft: '2px solid black', borderRight: '2px solid black'}}>
                    <Container style={{minHeight: '501px'}} className="text-light d-flex justify-content-center align-items-center">
                        <div className="text-center">
                            <p>Terracotta Lovers are awesome, you know!</p>
                            <h1>Welcome in your Intera</h1>
                            <p>Your Empire of Terracotta</p>
                        </div>
                    </Container>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Banner;