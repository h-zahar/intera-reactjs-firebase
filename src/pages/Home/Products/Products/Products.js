import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://stark-sierra-52397.herokuapp.com/products/featured')
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(error => {
            if (error) {
                window.location.reload();
            }
        });
    }, []);
    return (
        <div>
            <Container className="my-5 pb-5">
                <h2 className="mb-4 text-center pt-5 pb-4">Our Products</h2>
                <Row className="d-flex justify-content-center">
                    {
                        products.map(product => {
                            return <Product key={product._id} product={product} />
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Products;