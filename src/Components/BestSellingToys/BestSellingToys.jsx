import React from 'react';

const BestSellingToys = () => {
    return (
        <div className='text-center mb-20 bg-orange-50 p-4 pb-10 mt-10'>
            <h1 className='text-3xl font-bold text-red-600'>Our Best Selling Toys</h1>
            <p>People like This Kind of toys below. You can choose from here</p>

            <div className='md:flex justify-evenly mt-10'>
                <div className="card card-compact w-60 shadow-xl">
                    <figure><img src="https://m.media-amazon.com/images/I/61VGdLGf2iL.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card card-compact md:w-60 shadow-xl ">
                    <figure><img src="https://i5.walmartimages.com/asr/0a0417d3-e35e-45fa-b026-a2e5bf76d23c.3ba15f20d1a90112cca9b5f8334231ae.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff" alt="Shoes" /></figure>
                </div>
                <div className="card card-compact w-60 shadow-xl ">
                    <figure><img src="https://ae01.alicdn.com/kf/HTB1eCx1VhjaK1RjSZFAq6zdLFXar/Baby-Car-Two-seat-Children-s-Electric-Unisex-Four-wheeled-Car-Off-road-Remote-Control-Toy.jpg_640x640.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card card-compact w-60 shadow-xl ">
                    <figure><img src="https://m.media-amazon.com/images/I/71jrSZJjiHL.jpg" alt="Shoes" /></figure>
                </div>
            </div>
        </div>
    );
};

export default BestSellingToys;