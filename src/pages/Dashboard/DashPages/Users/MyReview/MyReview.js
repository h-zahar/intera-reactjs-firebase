import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../../hooks/useAuth';
import Rating from 'react-rating';

const MyReview = () => {
    const { user } = useAuth();
    const { register, handleSubmit } = useForm();
    const [rating, setRating] = useState(0);

    const onSubmit = data => {
        const postData = {email: user?.email, fullName: user?.displayName, userImg: user?.photoURL, rating, ...data};
        console.log(postData);
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(data => console.log(data));
    };

    return (
        <div>
            <Container>
            <div style={{width: '100%'}} className="mb-4">
                <form style={{maxWidth: '400px', minWidth: '250px'}} className="form-sizing d-flex flex-column py-4 px-5 mx-auto shadow-lg rounded" onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="text-center">Review</h3>
                    <div className="fs-3 text-center mt-3 mb-4">
                        <small className="fs-6">Double Tap on Your Rating!</small>
                        <Rating
                            initialRating='0'
                            emptySymbol="fa-regular fa-star"
                            fullSymbol="fa-solid fa-star"
                            fractions={4}
                            onChange={(rate) => setRating(rate)}
                        />
                    </div>
                    <textarea className="px-2" style={{resize: 'none'}} placeholder="Write Feedback (Max 100 Characters)" {...register("feedback", { maxLength: 100})}/>
                    <input type="submit" />
                </form>
            </div>
            </Container>
        </div>
    )
}

export default MyReview;