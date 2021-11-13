import React from 'react';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';
import Products from '../Products/Products/Products';
import Reviews from '../Reviews/Reviews/Reviews';

const Home = () => {
    return (
        <div className="brand-ground">
            <Banner />
            <Products />
            <Reviews />
            <Faq />
        </div>
    )
}

export default Home;