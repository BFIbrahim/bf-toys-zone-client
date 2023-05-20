import React from 'react';
import Subcategory from '../SubCategory/Subcategory';
import { Link } from 'react-router-dom';

const SportsCar = () => {
    return (
        <div className='text-center'>

            <div className='mx-auto md:w-2/6 border-b-2 text-center mt-5'>
                <h1 className='text-3xl font-bold text-red-600'>Sports Car</h1>
                <p>Our Popullar Sports cars toy is here</p>
            </div>

            <Subcategory></Subcategory>

            <div className='md:flex md:justify-evenly'>
                <div className="card md:w-96 bg-orange-50 shadow-xl p-4 mb-6">
                    <figure><img src="https://m.media-amazon.com/images/I/71Tc4KwjZ2S.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Sports Car</h2>
                        <p className="font-bold text-green-500">Price: $110</p>
                        <div className='flex'>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>
                        </div>
                        <div className="card-actions justify-end">
                            <a target='_blank' href="https://bangladesh.desertcart.com/products/326566515-toy-cars-sian-fkp-3-metal-model-car-with-light-and-sound-pull-back-toy-car-for-boys-age-3-year-old-blue">                            <button className="btn  bg-red-600 border-none">Buy Now</button></a>
                        </div>
                    </div>
                </div>
                <div className="card md:w-96 bg-orange-50 shadow-xl p-4  mb-6">
                    <figure><img src="https://img.fruugo.com/product/7/36/158079367_max.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Laxurious Sports Car</h2>
                        <p className="font-bold text-green-500">Price: $99</p>
                        <div className='flex'>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>

                            <span><img className='w-5 me-2' src="https://i.postimg.cc/sxLznRnx/download-removebg-preview.png" alt="" /></span>
                        </div>
                        <div className="card-actions justify-end">
                            <a target='_blank' href="https://www.fruugo.kr/kids-car-toy-for-124-porsche-911-gt2-rs-sports-car-static-die-cast-vehicles-collectible-model-car-y/p-58337032-118452927?language=en"><button className="btn bg-red-600 border-none">Buy Now</button></a>
                        </div>
                    </div>
                </div>
                <div className="card md:w-96 bg-orange-50 shadow-xl p-4  mb-6">
                    <figure><img src="https://media.4rgos.it/s/Argos/9529276_R_SET?$Main768$&w=620&h=620" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Daron UPS Toy car</h2>
                        <p className="font-bold text-green-500">Price: $87</p>
                        <div className='flex'>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>

                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>

                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>

                            <span><img className='w-5 me-2' src="https://i.postimg.cc/sxLznRnx/download-removebg-preview.png" alt="" /></span>

                            <span><img className='w-5 me-2' src="https://i.postimg.cc/J0HT3wSR/yellow-star-icon-10-removebg-preview.png" alt="" /></span>

                        </div>
                        <div className="card-actions justify-end">
                            <a target='_blank' href="https://www.argos.co.uk/product/9529276"><button className='btn bg-red-600 border-none'>Buy Now</button></a>
                        </div>
                    </div>
                </div>
            </div>

            <Link to='/alltoys'><button className=' mt-4 mb-4 btn bg-red-600 border-none'>View All Toys</button></Link>
        </div>
    );
};

export default SportsCar;