import React from 'react';
import Subcategory from '../SubCategory/Subcategory';
import { Link } from 'react-router-dom';

const PoliceCar = () => {
    return (
        <div className='text-center'>
            <div className='mx-auto md:w-2/6 border-b-2 text-center mt-5'>
                <h1 className='text-3xl font-bold text-red-600'>Police Car</h1>
                <p>Our Popullar Police cars toy is here</p>
            </div>

            <Subcategory></Subcategory>

            <div className='md:flex md:justify-evenly'>
                <div className="card md:w-96 bg-orange-50 shadow-xl p-4 mb-6">
                    <figure><img src="https://m.media-amazon.com/images/I/4172VaDPrPL.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">smart Police Car</h2>
                        <p className="font-bold text-green-500">Price: $110</p>
                        <div className='flex'>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>
                        </div>
                        <div className="card-actions justify-end">
                            <a target='_blank' href="https://www.amazon.com/JOYLDIAS-Electric-Flashing-Megaphone-Intercom/dp/B0BHQP2CM6">                            <button className="btn  bg-red-600 border-none">Buy Now</button></a>
                        </div>
                    </div>
                </div>
                <div className="card md:w-96 bg-orange-50 shadow-xl p-4  mb-6">
                    <figure><img src="https://i5.walmartimages.com/asr/0e9c3351-0623-4637-8103-e22f4edbe2ac.9658562273d1c9145b09d28ecf032d9c.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Police Car</h2>
                        <p className="font-bold text-green-500 text-start">Price: $99</p>
                        <div className='flex'>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>

                            <span><img className='w-5 me-2' src="https://i.postimg.cc/sxLznRnx/download-removebg-preview.png" alt="" /></span>
                        </div>
                        <div className="card-actions justify-end">
                            <a target='_blank' href="https://www.walmart.com/c/kp/die-cast-police-cars"><button className="btn bg-red-600 border-none">Buy Now</button></a>
                        </div>
                    </div>
                </div>
                <div className="card md:w-96 bg-orange-50 shadow-xl p-4  mb-6">
                    <figure><img src="https://i5.walmartimages.com/asr/1c211409-ac4b-40e3-94e0-6eb347842f2b.674f7867fce7db2fe4b58e45d1265af3.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Regular Police car</h2>
                        <p className="font-bold text-green-500">Price: $87</p>
                        <div className='flex'>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>

                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>

                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>

                            <span><img className='w-5 me-2' src="https://i.postimg.cc/sxLznRnx/download-removebg-preview.png" alt="" /></span>

                            <span><img className='w-5 me-2' src="https://i.postimg.cc/J0HT3wSR/yellow-star-icon-10-removebg-preview.png" alt="" /></span>

                        </div>
                        <div className="card-actions justify-end">
                            <a target='_blank' href="https://www.walmart.com/ip/2022-Ford-Police-Interceptor-Utility-Black-Fishers-Police-Department-Indiana-Hobby-Exclusive-1-64-Diecast-Model-Car-by-Greenlight/164445701"><button className='btn bg-red-600 border-none'>Buy Now</button></a>
                        </div>
                    </div>
                </div>
            </div>

            <Link to='/alltoys'><button className=' mt-4 mb-4 btn bg-red-600 border-none'>View All Toys</button></Link>
        </div>
    );
};

export default PoliceCar;