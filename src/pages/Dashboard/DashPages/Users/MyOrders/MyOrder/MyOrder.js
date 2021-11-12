import React from 'react';
import { Col } from 'react-bootstrap';

const MyOrder = (props) => {
    const { _id, img_i, title } = props.myOrder;
    return (
        <Col xs={12} sm={6} md={4} lg={3}>
            <div>
                <img src={img_i} alt="" />
            </div>
            <h4>{title}</h4>
            <div>
                <button>Cancel</button>
            </div>
        </Col>
    )
}

export default MyOrder;