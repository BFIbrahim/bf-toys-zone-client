import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import BestSellingToys from '../BestSellingToys/BestSellingToys';
import Sponsor from '../Sponsor/Sponsor';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Gallery></Gallery>
           <BestSellingToys></BestSellingToys>
           <Sponsor></Sponsor>
        </div>
    );
};

export default Home;