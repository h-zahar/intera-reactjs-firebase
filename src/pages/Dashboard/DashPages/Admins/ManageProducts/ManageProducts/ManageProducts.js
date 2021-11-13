import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('https://stark-sierra-52397.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setAllProducts(data));
    }, []);
    return (
        <Container style={{minHeight: '40vh'}} className="mb-5">
            <h4 className="text-center mt-3 mb-4">Products</h4><hr />
            <div className="d-flex flex-wrap justify-content-center">
                {
                    allProducts.map(product => {
                        return <ManageProduct key={product._id} product={product} allProducts={allProducts} setAllProducts={setAllProducts} />
                    })
                }
            </div>
        </Container>
    )
}

export default ManageProducts;