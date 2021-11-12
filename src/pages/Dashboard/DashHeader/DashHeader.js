import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const DashHeader = ({ url }) => {
    return (
        <div style={{marginTop: '76.7px'}}>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle className="ms-auto" aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <div className="d-flex">
                                <Nav.Link as={NavLink} exact to={`${url}/orders`}>My Orders</Nav.Link>
                            </div>
                            <div className="d-flex">
                                <Nav.Link as={NavLink} to={`${url}/review`}>My Revirew</Nav.Link>
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