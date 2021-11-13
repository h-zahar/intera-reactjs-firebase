import React from 'react';
import { Accordion, Container, Row, Col } from 'react-bootstrap';

const Faq = () => {
    return (
        <div style={{backgroundColor: 'white', marginBottom: '50px'}}>
        <Container>
            <Row>
                <h2 className="text-center text-title mt-5 mb-4 py-5">Frequently Asked Questions</h2>
                <Col xs={12} md={6}>
                    <div style={{width: '100%', minHeight: '300px', background: `rgba(0, 0, 0, 0.4) url('https://i.ibb.co/Bg6DKYK/photo-1609098702236-e1adbea149dd.jpg') center center fixed`, backgroundSize: 'cover', backgroundBlendMode: 'darken'}} className="mt-5 mt-md-0 border">
                    </div>
                </Col>

                <Col xs={12} md={6}>
                    <Accordion className="shadow-lg" defaultActiveKey="">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                            
                            <span className="fw-bold">How do I purchase?</span>
                                            
                            </Accordion.Header>
                            <Accordion.Body>
                            To proceed with a purchase, please click on the "Purchase" button at the bottom and submit a order form. Once we receive this your request will be actioned.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><span className="fw-bold">Are they all available?</span></Accordion.Header>
                            <Accordion.Body>
                            All the products displayed whether on homepage or explore page are indeed available.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                            
                            <span className="fw-bold">When will my credit card be charged?</span>
                                            
                            </Accordion.Header>
                            <Accordion.Body>
                            Payment system is coming soon. After that, your card will only be charged if the purchase has been confirmed exactly as quoted. If we are unable to confirm your booking as quoted, you will not be charged.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                            
                            <span className="fw-bold">What if I need to cancel or amend my purchase?</span>
                                            
                            </Accordion.Header>
                            <Accordion.Body>
                            You'll find a cancel button in 'Orders' section of 'Dashboard' to cancel.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default Faq;