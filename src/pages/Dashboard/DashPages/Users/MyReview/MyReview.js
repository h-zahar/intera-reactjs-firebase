import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const MyReview = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <Container>
            <div style={{width: '100%'}} className="mb-4">
                <form style={{maxWidth: '400px', minWidth: '250px'}} className="form-sizing d-flex flex-column py-4 px-5 mx-auto shadow-lg rounded" onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="text-center">Review</h3>
                    <input placeholder="Give Rating (0 - 5)" type="number" {...register("rating", { min: 0, max: 5, required: true })} />
                    <textarea placeholder="Write Feedback" {...register("feedback", { required: true})}/>
                    <input type="submit" />
                </form>
            </div>
            </Container>
        </div>
    )
}

export default MyReview;