import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {

    const data = useLoaderData()
    const { ToyName, ImageURL, Price, AvailableQuantity, Seller, Subcategory } = data

    return (
        <div>
            <h1 className='text-3xl font-bold text-red-500 text-center mt-6'>Toy Details Here</h1>

            <div>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row gap-x-28">
                        <img src={ImageURL} className="max-w-sm rounded-lg" />
                        <div>
                            <h1 className="text-4xl font-bold">{ToyName}</h1>
                            <h1 className='mt-4 text-2xl font-semibold'>Price: <span className='text-2xl mt-4 text-green-500 font-semibold '>{Price}</span></h1>

                            <p className='mt-1'> <span className='font-semibold'>Seller: </span>{Seller}</p>

                            <p><span className='font-semibold'>Availabe Quantity:</span>  {AvailableQuantity}</p>
                            <p><span className='font-semibold'>Subcategory:</span> {Subcategory}</p>

                             <button >Buy Now</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;