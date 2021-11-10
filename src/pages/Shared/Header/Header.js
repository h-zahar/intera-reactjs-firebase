import React from 'react';
import logo from '../../../logo.svg';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                <Navbar.Brand as={NavLink} exact to="/">
                    <img
                        alt=""
                        src={logo}
                        width="120"
                        height="50"
                        className="d-inline-block align-top"
                        />{' '}
                </Navbar.Brand>
                <Nav className="ms-auto">
                <Nav.Link as={NavLink} exact to="/">Home</Nav.Link>
                <Nav.Link as={NavLink} to="/explore">Explore</Nav.Link>
                <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;