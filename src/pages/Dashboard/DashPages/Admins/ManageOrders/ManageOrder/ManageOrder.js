import React from 'react';

const ManageOrder = (props) => {
    const {order} = props;
    const { _id, title, fullName, email, address, phoneNumber, isShipped } = props.order;
    const { allOrders, setAllOrders } = props;

    const handleShipping = (id) => {
        fetch(`http://localhost:5000/orders`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            order.isShipped = data.isShipped;
            const updated = allOrders.map(single => {
                if (single._id === id) {
                    single.isShipped = order.isShipped;
                    return single;
                }
                else {
                    return single;
                }
            });
            setAllOrders(updated);
        })
    };

    const handleDelete = (id) => {
        if(!window.confirm('Are you sure to cancel?')) {
            return;
        }
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'aplplication/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data?.deletedCount === 1) {
                const remaining = allOrders.filter(single => single._id !== id);
                setAllOrders(remaining);
            }
        });
    }

    return (
        <div>
            <div style={{border: '1px solid rgba(0, 0, 0, 0.5)'}} className="px-3 py-4 mx-1 my-2">
                <p>1. ID: <span className="text-primary">{_id}</span></p>
                <p>2. Email: <span className="text-primary">{email}</span></p>
                <p>3. Product: {title}</p>
                <p>4. Orderer: {fullName}</p> 
                <p>5. Address: {address}</p>
                <p>6. Cell No: {phoneNumber}</p>
                <p>7. {
                    !isShipped &&
                    <button style={{background: 'none', border: 'none'}} onClick={() => handleShipping(_id)}><span className="text-danger">Pending</span></button>
                }
                {
                    isShipped &&
                    <button style={{background: 'none', border: 'none'}}><span className="text-success" onClick={() => handleShipping(_id)}>Shipped</span></button>
                }</p>
                <p>8. <button style={{background: 'none', border: 'none'}}><span className="text-danger" onClick={() => handleDelete(_id)}>Cancel?</span></button></p>
            </div>
        </div>
    )
}

export default ManageOrder;