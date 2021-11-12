import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const DashHeader = ({ url }) => {
    return (
        <div>
            <h2 style={{borderBottom: '1px solid rgba(255, 255, 255, 0.2)'}} className="text-center pt-3 pb-3 my-0 bg-dark text-light">Dashboard</h2>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle className="mx-auto" aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <div className="d-flex">
                                <Nav.Link as={NavLink} exact to={`${url}/orders`}>Orders</Nav.Link>
                            </div>
                            <div className="d-flex">
                                <Nav.Link as={NavLink} to={`${url}/review`}>Review</Nav.Link>
                            </div>
                            <div className="d-flex">
                                <Nav.Link as={NavLink} to={`${url}/pay`}>Pay</Nav.Link>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default DashHeader;