import React from 'react';
import { Col } from 'react-bootstrap';
import Rating from 'react-rating';

const Review = (props) => {
    const { _id, fullName, userImg, feedback, rating } = props.review;
    return (
        <Col xs={12} sm={6} md={4} lg={3}>
            <div style={{background: 'white', overflowX: 'hidden'}} className="text-center py-5 px-2 rounded shadow-lg">
                <div className="d-flex justify-content-center">
                    {
                        userImg &&
                        <img style={{width: '50px', height: '50px', borderRadius: '50px'}} src={userImg} alt="" />
                    }
                    {
                        !userImg &&
                        <div style={{width: '50px', height: '50px', border: '1px solid rgba(0, 0, 0, 0.4)', borderRadius: '50px', backgroundColor: 'rgba(0, 0, 0, 0.15)'}} className="d-flex justify-content-center align-items-center">
                            <i className="fs-4 fa-solid fa-user text-secondary"></i>
                        </div>
                    }
                </div>
                <p className="mt-3"><strong>{fullName}</strong></p>
                    <p>
                        <Rating
                        initialRating={rating}
                        readonly
                        emptySymbol="fa-regular fa-star"
                        fullSymbol="fa-solid fa-star"
                        fractions={4}
                        /><br />
                        <span className="mx-2">({rating})</span>
                    </p>
                <p>{feedback}</p>
            </div>
        </Col>
    )
}

export default Review;