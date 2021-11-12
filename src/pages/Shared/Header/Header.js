import React from 'react';
import logo from '../../../logo.svg';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, isLoading, logOut } = useAuth();
    return (
        <div>
            <Navbar className="bg-header" collapseOnSelect expand="md" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand as={NavLink} exact to="/">
                        <img
                            alt="Intera"
                            src={logo}
                            width="120"
                            height="50"
                            className="d-inline-block align-top"
                            />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <div className="d-flex">
                                <Nav.Link as={NavLink} exact to="/">Home</Nav.Link>
                            </div>
                            
                            <div className="d-flex">
                                <Nav.Link as={NavLink} to="/explore">Explore</Nav.Link>
                            </div>

                            {
                                (!isLoading && !user?.email) &&
                                <div className="d-flex">
                                    <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                                </div>
                            }

                            {
                                (!isLoading && !user?.email) &&
                                <div className="d-flex">
                                    <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
                                </div>
                            }

                            {
                                (!isLoading && user?.email) &&
                                <div>
                                    <p className="my-2 mx-md-2 mx-0 text-danger">Hello <span className="text-success">{user?.displayName.split(' ')[0]}!</span></p>
                                </div>
                            }

                            {
                                <div className="d-flex">
                                    <Nav.Link as={NavLink} to='/dashboard/orders'>Dashboard</Nav.Link>
                                </div>
                            }
                            
                            {
                                (!isLoading && user?.email) &&
                                <div>
                                    <button className="my-md-0 my-2 py-md-1 ms-md-2 ms-0" onClick={logOut}>Logout</button>
                                </div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;