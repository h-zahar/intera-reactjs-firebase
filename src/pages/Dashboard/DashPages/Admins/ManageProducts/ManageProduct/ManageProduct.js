import React from 'react';

const ManageProduct = (props) => {
    const { _id, title } = props.product;
    const { allProducts, setAllProducts } = props;

    const handleDelete = (id) => {
        if(!window.confirm('Do you really wanna delete?')) {
            return;
        }

        fetch(`https://stark-sierra-52397.herokuapp.com/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'Application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount === 1) {
                const remaining = allProducts.filter(single => single._id !== id);
                setAllProducts(remaining);
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
            <div className="shadow-lg mx-3 my-2 px-3 py-4 text-center">
                <h5 className="text-success">{title}</h5>
                <p className="text-secondary"><strong>{_id}</strong></p>
                <div>
                    <button onClick={() => handleDelete(_id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default ManageProduct;