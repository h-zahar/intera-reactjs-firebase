import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import ExploreItem from '../ExploreItem/ExploreItem';

const Explore = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setItems(data));
    }, []);
    return (
        <div style={{minHeight: '80vh'}}>
            <Container className="mb-5">
                <h2 className="mt-5 pt-2 mb-5 text-center">Explore Items</h2>
                <Row className="d-flex justify-content-center">
                    {
                        items.map(item => {
                            return <ExploreItem key={item._id} item={item} />
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Explore;