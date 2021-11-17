import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://stark-sierra-52397.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
        .catch((error) => { 
            if(error) {
                window.location.reload();
            }
         });
    }, []);
    return (
        <div>
            <Container style={{borderTop: '1px solid rgba(0, 0, 0, 0.5)'}} className="mt-5 pt-3 pb-2">
                <h2 className="mb-5 text-center">Reviews</h2>
                <Row className="d-flex justify-content-center">
                    {
                        reviews.map(review => {
                            return <Review key={review._id} review={review} />
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Reviews;