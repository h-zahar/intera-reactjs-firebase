import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    const [productDetails, setProductDetails] = useState({});

    useEffect(() => {
        console.log(id);
        fetch(`http://localhost:5000/products/${id}`)
        .then(res => res.json())
        .then(data => setProductDetails(data));
    }, []);
    
    return (
        <div style={{minHeight: '46.5vh'}}>
            {
                productDetails?.title &&
                <div>
                    {productDetails.title}
                </div>
            }
        </div>
    )
}

export default Purchase;