import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel style={{width: '100%'}} controls={false}>
                <Carousel.Item interval={8000} style={{transition: 'all 2.5s ease-in-out', minHeight: '501px', background: `rgba(0, 0, 0, 0.75) url('./images/ban-bg/3.jpg') center center fixed`, backgroundSize: 'cover', backgroundBlendMode: 'darken', borderLeft: '2px solid black', borderRight: '2px solid black'}}>
                    <Container>
                        <Row>
                            <Col>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perspiciatis repudiandae cumque asperiores aliquid fuga, hic veritatis praesentium nobis labore odit deleniti? Adipisci praesentium tempore unde libero ex similique fuga provident? Nobis sed iusto eligendi officiis facere veritatis ipsam quibusdam?
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item interval={8000} style={{transition: 'all 2.5s ease-in-out', minHeight: '501px', background: `rgba(0, 0, 0, 0.75) url('./images/ban-bg/2.jpg') center center fixed`, backgroundSize: 'cover', backgroundBlendMode: 'darken', borderLeft: '2px solid black', borderRight: '2px solid black'}}>
                    <Container>
                        <Row>
                            <Col>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perspiciatis repudiandae cumque asperiores aliquid fuga, hic veritatis praesentium nobis labore odit deleniti? Adipisci praesentium tempore unde libero ex similique fuga provident? Nobis sed iusto eligendi officiis facere veritatis ipsam quibusdam?
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item interval={8000} style={{transition: 'all 2.5s ease-in-out', minHeight: '501px', background: `rgba(0, 0, 0, 0.75) url('./images/ban-bg/1.jpg') center center fixed`, backgroundSize: 'cover', backgroundBlendMode: 'darken', borderLeft: '2px solid black', borderRight: '2px solid black'}}>
                    <Container>
                        <Row>
                            <Col>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perspiciatis repudiandae cumque asperiores aliquid fuga, hic veritatis praesentium nobis labore odit deleniti? Adipisci praesentium tempore unde libero ex similique fuga provident? Nobis sed iusto eligendi officiis facere veritatis ipsam quibusdam?
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Banner;