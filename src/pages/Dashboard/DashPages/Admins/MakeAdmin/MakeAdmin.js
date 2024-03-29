import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, formState: { errors }, reset, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch(`https://api-intera.onrender.com/users/${data.email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => { 
            if (data) {
                reset();
            }
         })
        .catch(error => {
            if (error) {
                window.location.reload();
            }
        });
    };
    return (
        <div>
            <p className="mt-5 text-center"><strong>Enter the Email of to be Admin</strong></p>
            <div className="d-flex justify-content-center mb-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="email" {...register("email", { required: true})} />
                    {errors.email && <span className="mb-2 text-danger">Something's not correct</span>}
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}

export default MakeAdmin;