import React from 'react';
import { Col } from 'react-bootstrap';

const ExploreItem = (props) => {
    const { img_i, title, short_description } = props.item;

    const handlePurchase = () => {

    };
    return (
        <Col sm={6} md={4} className="gy-5 gx-0">
            <div className="mx-2 shadow-lg rounded">
                <div>
                    <img style={{width: '100%', minHeight: '250px'}} src={img_i} alt="" />
                </div>
                <div className="p-2">
                    <h3 className="mt-3 mb-3">{title}</h3>
                    <p>{short_description}</p>
                </div>
                <div className="text-center">
                    <button className="mt-3 mb-5" onClick={handlePurchase}>Puchase</button>
                </div>
            </div>
        </Col>
    )
}

export default ExploreItem;