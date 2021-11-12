import React from 'react';
import { Col } from 'react-bootstrap';

const Product = (props) => {
    const { _id, img_i, title, short_description } = props.product;

    return (
        <Col xs={12} sm={6} md={4} lg={3}>
            <div>
                <div>
                    <img src={img_i} alt="" />
                </div>

                <h3>{title}</h3>

                <div>
                    <p>{short_description}</p>
                </div>
            </div>
        </Col>
    )
}

export default Product;