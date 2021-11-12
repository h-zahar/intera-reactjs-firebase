import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    // useEffect(() => {
    //     fetch('')
    //     .then(res => res.json())
    //     .then(data => setMyOrders(data));
    // }, []);
    return (
        <div>
            <Container>
            <h3 className="text-center mt-4 mb-5">My Orders</h3>
            <Row>
                {
                    myOrders.map(myOrder => {
                        return <MyOrder key={myOrder._id} myOrder={myOrder} />
                    })
                }
            </Row>
            </Container>
        </div>
    )
}

export default MyOrders;