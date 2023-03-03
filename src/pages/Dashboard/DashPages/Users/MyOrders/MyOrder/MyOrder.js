import React from 'react';
import { Col } from 'react-bootstrap';

const MyOrder = (props) => {
    const { _id, title, isShipped } = props.myOrder;
    const { myOrders, setMyOrders } = props;

    const handleDelete = (id) => {
        if(!window.confirm('Are you sure to cancel?')) {
            return;
        }
        fetch(`https://api-intera.onrender.com/orders/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'aplplication/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data?.deletedCount === 1) {
                const remaining = myOrders.filter(single => single._id !== id);
                setMyOrders(remaining);
            }
        })
        .catch(error => {
            if (error) {
                window.location.reload();
            }
        });
    }

    return (
        <Col xs={12} sm={6} md={4} lg={3} className="border d-flex justify-content-center py-3 mx-2 gy-2 shadow-lg">
            <div>
                <h4>{title}</h4>
                <p className="my-3 text-secondary">{_id}</p>
                <div>
                    {
                        !isShipped ?
                        <p className="my-3">Status: <span className="text-danger">Pending</span></p> :
                        <p className="my-3">Status: <span className="text-success">Shipped</span></p>
                    }
                </div>
                <div>
                    <button style={{background: 'none', border: 'none'}} onClick={() => handleDelete(_id)}><span className="text-danger">Cancel?</span></button>
                </div>
            </div>
        </Col>
    )
}

export default MyOrder;