import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, formState: { errors }, reset, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('https://api-intera.onrender.com/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data?.acknowledged) {
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
            <div style={{minHeight: '45vh'}} className="my-5 d-flex justify-content-center">
                <form style={{maxWidth: '450px', minWidth: '280px'}} className="d-flex flex-column p-5 shadow-lg rounded" onSubmit={handleSubmit(onSubmit)}>
                    <h4 className="text-center mb-3">Entry</h4>
                    <input className="my-2" placeholder="Title" {...register("title", { required: true})} />
                    {errors.title && <span className="mb-2 text-danger">Something's not correct</span>}

                    <textarea className="my-2" placeholder="Short Description (Max 70 Characters)" {...register("short_description", { required: true, maxLength: 70 })} />
                    {errors.short_description && <span className="mb-2 text-danger">Something's not correct</span>}

                    <input className="my-2" placeholder="Image URL" {...register("img_i", { required: true })} />
                    {errors.img_i && <span className="mb-2 text-danger">Something's not correct</span>}

                    <input className="my-2 py-2" type="submit" value="Submit" />
                </form> 
            </div>
        </div>
    )
}

export default AddProduct;