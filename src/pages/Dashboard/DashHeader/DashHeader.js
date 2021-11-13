import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const DashHeader = ({ url }) => {
    const { isAdmin, isAdminLoading, logOut } = useAuth();
    return (
        <div>
            <h2 style={{borderBottom: '1px solid rgba(255, 255, 255, 0.2)'}} className="text-center pt-3 pb-3 my-0 bg-dark text-light"><Link style={{color: 'unset', textDecoration: 'unset'}} to={`${url}`}>
                {
                    isAdmin && !isAdminLoading &&
                    <span>Admin Board</span>
                }

                {
                    !isAdmin && !isAdminLoading &&
                    <span>Dashboard</span>
                }
            </Link></h2>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle className="mx-auto" aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            {
                                !isAdmin && !isAdminLoading &&
                                <div className="d-flex">
                                    <Nav.Link as={NavLink} exact to={`${url}/user/orders`}>Orders</Nav.Link>
                            </div>
                            }

                            {
                                !isAdmin && !isAdminLoading &&
                                <div className="d-flex">
                                    <Nav.Link as={NavLink} exact to={`${url}/user/review`}>Review</Nav.Link>
                                </div>
                            }

                            {
                                !isAdmin && !isAdminLoading &&
                                <div className="d-flex">
                                    <Nav.Link as={NavLink} exact to={`${url}/user/pay`}>Pay</Nav.Link>
                                </div>
                            }

                            {
                                isAdmin && !isAdminLoading &&
                                <div className="d-flex">
                                    <Nav.Link as={NavLink} exact to={`${url}/admin/all-orders`}>All Orders</Nav.Link>
                                </div>
                            }

                            {
                                isAdmin && !isAdminLoading &&
                                <div className="d-flex">
                                    <Nav.Link as={NavLink} exact to={`${url}/admin/products`}>Manage Products</Nav.Link>
                                </div>
                            }

                            {
                                isAdmin && !isAdminLoading &&
                                <div className="d-flex">
                                    <Nav.Link as={NavLink} exact to={`${url}/admin/add-product`}>Add Product</Nav.Link>
                                </div>
                            }

                            {
                                isAdmin && !isAdminLoading &&
                                <div className="d-flex">
                                    <Nav.Link as={NavLink} exact to={`${url}/admin/make-admin`}>Make Admin</Nav.Link>
                                </div>
                            }

                            {
                                !isAdminLoading &&
                                <div>
                                <button className="my-md-0 my-2 py-md-1 ms-md-2 ms-0 btn-logout-dash rounded" onClick={logOut}>Logout</button>
                                </div>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default DashHeader;