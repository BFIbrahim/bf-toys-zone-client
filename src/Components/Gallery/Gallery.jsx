import React from 'react';
import { Link } from 'react-router-dom';
import Subcategory from '../SubCategory/Subcategory';

const Gallery = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-3xl text-red-600 text-center mt-20 font-bold'>Toys Gallery</h1>
                <p className='mb-5 border-b-2 md:w-2/5 mx-auto pb-2'>Just See our Best Collection from here. This Is Our Toys Gallery</p>
            </div>

            <Subcategory></Subcategory>

            <div className='md:flex md:justify-evenly'>
                <div className="card md:w-96 bg-orange-50 shadow-xl p-4 mb-6">
                    <figure><img src="https://m.media-amazon.com/images/I/41-FTW+LZvL._AC_.jpg" alt="Shoes" /></figure>
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
                            <a target='_blank' href="https://www.amazon.ca/Aosom-Compatible-Battery-Powered-Electric-Parental/dp/B09CDHWBLS">                            <button className="btn  bg-red-600 border-none">Buy Now</button></a>
                        </div>
                    </div>
                </div>
                <div className="card md:w-96 bg-orange-50 shadow-xl p-4  mb-6">
                    <figure><img src="https://m.media-amazon.com/images/I/61U214eflkL._AC_UF894,1000_QL80_.jpg" alt="Shoes" /></figure>
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
                            <a target='_blank' href="https://www.amazon.com/Licensed-Lamborghini-Electric-Suspension-Bluetooth/dp/B09W1WBJ6R?th=1"><button className="btn bg-red-600 border-none">Buy Now</button></a>
                        </div>
                    </div>
                </div>
                <div className="card md:w-96 bg-orange-50 shadow-xl p-4  mb-6">
                    <figure><img src="https://m.media-amazon.com/images/I/81Y4hHPYzyL._AC_UF894,1000_QL80_.jpg" alt="Shoes" /></figure>
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
                            <a target='_blank' href="https://www.amazon.com/Daron-UPS-Pullback-Package-Truck/dp/B008VD9BQM"><button className='btn bg-red-600 border-none'>Buy Now</button></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:flex md:justify-evenly'>
                <div className="card md:w-96 bg-orange-50 shadow-xl p-4 mb-6">
                    <figure><img src="https://m.media-amazon.com/images/I/71yyoiSDS-S._AC_UF894,1000_QL80_.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Lamborgini Toy car</h2>
                        <p className="font-bold text-green-500">Price: $120</p>
                        <div className='flex'>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>
                        </div>
                        <div className="card-actions justify-end">
                            <a target="_blank" href="https://www.amazon.com/Metal-Model-Light-Sound-Green/dp/B09289WQDH?th=1">   <button className="btn  bg-red-600 border-none">Buy Now</button></a>

                        </div>
                    </div>
                </div>
                <div className="card md:w-96 bg-orange-50 shadow-xl p-4  mb-6">
                    <figure><img src="https://m.media-amazon.com/images/I/71YB465WIqL._AC_SL1500_.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Laxurious Car</h2>
                        <p className="font-bold text-green-500">Price: $100</p>
                        <div className='flex'>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>

                            <span><img className='w-5 me-2' src="https://i.postimg.cc/sxLznRnx/download-removebg-preview.png" alt="" /></span>
                        </div>
                        <div className="card-actions justify-end">
                            <a target='_blank' href="https://www.amazon.ca/BDTCTK-Lexus-Off-Road-Luxury-Model/dp/B08YY4R942"><button className="btn  bg-red-600 border-none">Buy Now</button></a>

                        </div>
                    </div>
                </div>
                <div className="card md:w-96 bg-orange-50 shadow-xl p-4  mb-6">
                    <figure><img src="https://rukminim1.flixcart.com/image/416/416/vehicle-pull-along/g/w/y/electric-police-car-toy-for-kids-with-flashing-lights-and-sirens-original-imaerf8aq54tg2gz.jpeg?q=70" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Police Car</h2>
                        <p className="font-bold text-green-500">Price: $80</p>
                        <div className='flex'>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>

                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>

                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>

                            <span><img className='w-5 me-2' src="https://i.postimg.cc/sxLznRnx/download-removebg-preview.png" alt="" /></span>

                            <span><img className='w-5 me-2' src="https://i.postimg.cc/J0HT3wSR/yellow-star-icon-10-removebg-preview.png" alt="" /></span>

                        </div>
                        <div className="card-actions justify-end">
                            <a target="_blank" href="https://www.flipkart.com/memtes-electric-police-car-toy-kids-flashing-lights-sirens-sounds-bump-go-action-2-front-doors-open/p/itmer36jptbzsydb">                            <button className="btn bg-red-600 border-none">Buy Now</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;