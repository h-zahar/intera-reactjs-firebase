import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Purchase = () => {
    const { user, isAdmin } = useAuth();
    const { id } = useParams();
    const [productDetails, setProductDetails] = useState({});

    const history = useHistory();
    let redirected_uri = '/dashboard';
    if (isAdmin) {
        redirected_uri = '/dashboard/admin/all-orders';
    }
    else if (!isAdmin) {
        redirected_uri = '/dashboard/user/orders';
    }
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        data.isShipped = false;
        
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(data => { })
        .finally(() => { history.push(redirected_uri) });

    }

    useEffect(() => {
        console.log(id);
        fetch(`http://localhost:5000/products/${id}`)
        .then(res => res.json())
        .then(data => setProductDetails(data));
    }, []);
    
    return (
        <div style={{minHeight: '46.5vh'}}>
            {
                productDetails?.title && user?.displayName &&
                <form style={{maxWidth: '450px', minWidth: '280px'}} className="d-flex flex-column p-5 shadow-lg rounded" onSubmit={handleSubmit(onSubmit)}>
                <h4 className="text-center mb-3">Place Order</h4>
                <input className="my-2" placeholder="Full Name" {...register("fullName", { required: true})} defaultValue={user?.displayName} />
                {errors.fullName && <span className="mb-2 text-danger">Something's not correct</span>}

                <input className="my-2" placeholder="Email" type="email" {...register("email", { required: true })} defaultValue={user?.email} />
                {errors.email && <span className="mb-2 text-danger">Something's not correct</span>}

                <input className="my-2" placeholder="Product" {...register("title", { required: true })} defaultValue={productDetails?.title} />
                {errors.offerName && <span className="mb-2 text-danger">Something's not correct</span>}

                <input className="my-2" placeholder="Phone Number" {...register("phoneNumber", { required: true, pattern: /^[0-9]+$/i })} />
                {errors.phoneNumber && <span className="mb-2 text-danger">Something's not correct</span>}

                <input className="my-2" placeholder="Address" {...register("address", { required: true })} />
                {errors.address && <span className="mb-2 text-danger"> Something's not correct</span>}

                <p className="mt-3 text-center">Status: <span className="text-danger">Pending</span></p>

                <input className="btn-submit my-2 py-2" type="submit" value="Purchase" />
            </form>
            }
        </div>
    )
}

export default Purchase;