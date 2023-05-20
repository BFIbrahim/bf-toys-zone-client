import React from 'react';
import Subcategory from '../SubCategory/Subcategory';

const MiniFireTruck = () => {
    return (
        <div>
            <div className='mx-auto md:w-2/6 border-b-2 text-center mt-5'>
                <h1 className='text-3xl font-bold text-red-600'>Mini Fire Truck</h1>
                <p>Mini Fire truck toy is here</p>
            </div>

            <Subcategory></Subcategory>

            <div className='md:flex md:justify-evenly'>
                <div className="card md:w-96 bg-orange-50 shadow-xl p-4 mb-6">
                    <figure><img src="https://m.media-amazon.com/images/I/51bt9IaQdAL.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">smart Fire truck</h2>
                        <p className="font-bold text-green-500">Price: $110</p>
                        <div className='flex'>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>
                        </div>
                        <div className="card-actions justify-end">
                            <a target='_blank' href="https://www.amazon.com/Motorized-Rotating-Electric-Realistic-Toddlers/dp/B08DC16HHH">                            <button className="btn  bg-red-600 border-none">Buy Now</button></a>
                        </div>
                    </div>
                </div>
                <div className="card md:w-96 bg-orange-50 shadow-xl p-4  mb-6">
                    <figure><img src="https://m.media-amazon.com/images/I/51+xGDFwAuL.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Music Fire Truck</h2>
                        <p className="font-bold text-green-500">Price: $99</p>
                        <div className='flex'>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>

                            <span><img className='w-5 me-2' src="https://i.postimg.cc/sxLznRnx/download-removebg-preview.png" alt="" /></span>
                        </div>
                        <div className="card-actions justify-end">
                            <a target='_blank' href="https://www.amazon.com/Vehicle-Die-cast-Friction-Extending-Toddler/dp/B07WLSCFQG"><button className="btn bg-red-600 border-none">Buy Now</button></a>
                        </div>
                    </div>
                </div>
                <div className="card md:w-96 bg-orange-50 shadow-xl p-4  mb-6">
                    <figure><img src="https://drivenbybattat.com/wp-content/uploads/2017/06/WH1001-PR-B.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Regular Fire truck</h2>
                        <p className="font-bold text-green-500">Price: $87</p>
                        <div className='flex'>
                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>

                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>

                            <span><img className='w-5 me-2' src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" /></span>

                            <span><img className='w-5 me-2' src="https://i.postimg.cc/sxLznRnx/download-removebg-preview.png" alt="" /></span>

                            <span><img className='w-5 me-2' src="https://i.postimg.cc/J0HT3wSR/yellow-star-icon-10-removebg-preview.png" alt="" /></span>

                        </div>
                        <div className="card-actions justify-end">
                            <a target='_blank' href="https://drivenbybattat.com/product/standard-fire-truck/"><button className='btn bg-red-600 border-none'>Buy Now</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiniFireTruck;