import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Purchase = () => {
    const { user, isAdmin } = useAuth();
    const { id } = useParams();
    const [productDetails, setProductDetails] = useState({});

    const history = useHistory();
    let redirected_uri = '/dashboard';
    if (isAdmin) {
        redirected_uri = '/dashboard/admin/all-orders';
    }
    else if (!isAdmin) {
        redirected_uri = '/dashboard/user/orders';
    }
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        data.isShipped = false;
        
        fetch('https://stark-sierra-52397.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(data => { })
        .catch((error) => { 
            if(error) {
                window.location.reload();
            }
         })
        .finally(() => { history.push(redirected_uri) });

    }

    useEffect(() => {
        fetch(`https://stark-sierra-52397.herokuapp.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProductDetails(data))
        .catch((error) => { 
            if(error) {
                window.location.reload();
            }
         });
    }, []);
    
    return (
        <div style={{minHeight: '46.5vh'}}>
            {
                productDetails?.title && user?.displayName &&
                <Container>
                <Row className="d-flex justify-content-center">
                    <Col md={12} lg={6}>
                        <form style={{maxWidth: '450px', minWidth: '280px'}} className="d-flex flex-column p-5 shadow-lg rounded mx-auto" onSubmit={handleSubmit(onSubmit)}>
                            <h4 className="text-center mb-3">Place Order</h4>
                            <input className="my-2" placeholder="Full Name" {...register("fullName", { required: true})} defaultValue={user?.displayName} />
                            {errors.fullName && <span className="mb-2 text-danger">Something's not correct</span>}

                            <input className="my-2" placeholder="Email" type="email" {...register("email", { required: true })} defaultValue={user?.email} />
                            {errors.email && <span className="mb-2 text-danger">Something's not correct</span>}

                            <input className="my-2" placeholder="Product" {...register("title", { required: true })} defaultValue={productDetails?.title} />
                            {errors.offerName && <span className="mb-2 text-danger">Something's not correct</span>}

                            <input className="my-2" placeholder="Phone Number" {...register("phoneNumber", { required: true, pattern: /^[0-9]+$/i })} />
                            {errors.phoneNumber && <span className="mb-2 text-danger">Something's not correct</span>}

                            <input className="my-2" placeholder="Address" {...register("address", { required: true })} />
                            {errors.address && <span className="mb-2 text-danger"> Something's not correct</span>}

                            <p className="mt-3 text-center">Status: <span className="text-danger">Pending</span></p>

                            <input className="btn-submit my-2 py-2" type="submit" value="Purchase" />
                        </form>
                    </Col>

                    <Col md={12} lg={6}>
                        <div className="my-md-2 my-5 py-md-0 py-4 text-center">
                            <h2>{productDetails?.title}</h2>
                            <p className="mb-5">{productDetails.short_description}</p>
                            <div><img className="w-100" src={productDetails?.img_i} alt="" /></div>
                        </div>
                    </Col>

                </Row>
                </Container>
            }
        </div>
    )
}

export default Purchase;