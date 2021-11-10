import React from 'react';
import logo from '../../../logo.svg';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="md" bg="light" variant="light">
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
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            
                            <Nav.Link as={NavLink} exact to="/">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/explore">Explore</Nav.Link>

                            {
                                !user?.email &&
                                <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                            }

                            {
                                !user?.email &&
                                <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
                            }

                            {
                                user?.email &&
                                <span>{user?.displayName}</span>
                            }
                            
                            {
                                user?.email &&
                                <button onClick={logOut}>Logout</button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;