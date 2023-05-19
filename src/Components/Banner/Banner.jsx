import React from 'react';
import './Banner.css'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='bg-orange-100'>
            <div className='md:flex w-5/6 m-auto justify-center header-wrap'>
                <div className='align-middle'>
                    <h1 className='text-5xl mb-3 font-bold'>Welcome To BF Toy <span className='text-red-600'>Cars</span></h1>
                    <p>"Rev up the excitement with BF Toy Cars! Explore our collection of high-quality toy cars for all ages. Unleash your inner racer and fuel your imagination today!"</p>

                    <Link to='/alltoys'><button className=' mt-4 mb-4 btn bg-red-600 border-none'>View All Toys</button></Link>
                </div>

                <div className='banner-Image hidden lg:block'>
                    <img src="https://i.postimg.cc/3NLjp9Zj/Header-Car-PNG.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;