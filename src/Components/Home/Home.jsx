import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import BestSellingToys from '../BestSellingToys/BestSellingToys';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Gallery></Gallery>
           <BestSellingToys></BestSellingToys>
        </div>
    );
};

export default Home;