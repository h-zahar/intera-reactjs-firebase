import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ExploreItem = (props) => {
    const { _id, img_i, title, short_description } = props.item;

    const handlePurchase = () => {

    };
    return (
        <Col xm={12} md={6} lg={4} className="gy-5 gx-0">
            <div className="mx-2 shadow-lg rounded">
                <div>
                    <img style={{width: '100%', minHeight: '250px'}} src={img_i} alt="" />
                </div>
                <div className="p-2">
                    <h3 className="mt-3 mb-3">{title}</h3>
                    <p>{short_description}</p>
                </div>
                <div className="text-center">
                    <Link style={{color: 'unset', textDecoration: 'unset'}} to={`/purchase/${_id}`}><button className="mt-3 mb-4 btn-purchase">Purchase</button></Link>
                </div>
            </div>
        </Col>
    )
}

export default ExploreItem;