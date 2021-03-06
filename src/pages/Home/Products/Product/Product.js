import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { _id, img_i, title, short_description } = props.product;

    return (
        <Col sm={6} md={4} lg={3} style={{background: 'rgba(255, 255, 255, 0.48)', borderTop: '1px solid rgba(0, 0, 0, 0.3)', borderBottom: '1px solid rgba(0, 0, 0, 0.3)', borderLeft: '1px solid rgba(0, 0, 0, 0.1)', borderRight: '1px solid rgba(0, 0, 0, 0.1)'}} className="pt-3 gy-4">
            <div>
                <div>
                    <img style={{minHeight: '175px', maxWidth: '100%'}} src={img_i} alt="" />
                </div>

                <h4 className="mt-3 mb-4 text-center">{title}</h4>

                <div>
                    <p>{short_description}</p>
                </div>

                <div className="text-center">
                    <Link style={{color: 'unset', textDecoration: 'unset'}} to={`/purchase/${_id}`}><button className="mt-3 mb-4 btn-purchase">Purchase</button></Link>
                </div>
            </div>
        </Col>
    )
}

export default Product;