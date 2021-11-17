import React, { useEffect, useState } from 'react';
import ManageOrder from '../ManageOrder/ManageOrder';
import { Container } from 'react-bootstrap';

const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch('https://stark-sierra-52397.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setAllOrders(data))
        .catch((error) => { 
            if(error) {
                window.location.reload();
            }
         });
    }, []);
    return (
        <div style={{minHeight: '50vh'}} className="mt-3 mb-5">
            <Container>
                <h4 className="text-center mb-4">Manage All Orders</h4><hr />
            </Container>
            <Container className="d-flex flex-wrap justify-content-center mt-5">
                {
                    allOrders.map(order => {
                        return <ManageOrder key={order._id} order={order} allOrders={allOrders} setAllOrders={setAllOrders} />
                    })
                }
            </Container>
        </div>
    )
}

export default ManageOrders;