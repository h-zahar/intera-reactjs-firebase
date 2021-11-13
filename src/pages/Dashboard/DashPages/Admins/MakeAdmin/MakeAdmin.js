import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch(`http://localhost:5000/users/${data.email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => console.log(data));
    };
    return (
        <div>
            <p className="mt-5 text-center"><strong>Enter the Email of to be Admin</strong></p>
            <div className="d-flex justify-content-center mb-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="email" {...register("email", { required: true})} />
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}

export default MakeAdmin;