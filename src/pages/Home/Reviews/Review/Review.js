import React from 'react';
import { Col } from 'react-bootstrap';

const Review = (props) => {
    const { _id, fullName, feedback, rating } = props.review;
    return (
        <Col xs={12} sm={6} md={4} lg={3}>
            <div>
                <h5>{fullName}</h5>
                <p>Rating: {rating}</p>
                <p>{feedback}</p>
            </div>
        </Col>
    )
}

export default Review;