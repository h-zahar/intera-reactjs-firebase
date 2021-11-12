import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../../hooks/useAuth';

const MyReview = () => {
    const { user } = useAuth();
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const postData = {email: user?.email, fullName: user?.displayName, userImg: user?.photoURL, ...data};
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
                    <input className="px-2" placeholder="Give Rating (0 - 5)" type="number" {...register("rating", { min: 0, max: 5, required: true })} />
                    <textarea className="px-2" style={{resize: 'none'}} placeholder="Write Feedback (Max 100 Characters)" {...register("feedback", { maxLength: 100})}/>
                    <input type="submit" />
                </form>
            </div>
            </Container>
        </div>
    )
}

export default MyReview;