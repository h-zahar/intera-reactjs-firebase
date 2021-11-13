import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../../../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch(`https://stark-sierra-52397.herokuapp.com/orders/${user?.email}`)
        .then(res => res.json())
        .then(data => setMyOrders(data));
    }, []);
    return (
        <div style={{minHeight: '60vh'}}>
            <Container className="mb-5">
            <h4 className="text-center my-4">My Orders</h4><hr />
            <Row>
                {
                    myOrders.map(myOrder => {
                        return <MyOrder key={myOrder._id} myOrder={myOrder} myOrders={myOrders} setMyOrders={setMyOrders} />
                    })
                }
            </Row>
            </Container>
        </div>
    )
}

export default MyOrders;