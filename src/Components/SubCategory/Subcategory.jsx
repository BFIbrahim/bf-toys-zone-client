import React from 'react';
import { Link } from 'react-router-dom';

const Subcategory = () => {
    return (
        <div>
            <div className='flex justify-around md:w-96 mx-auto mb-10 font-bold'>
                <Link to='/'>Gallery</Link>
                <Link to='/sportscar'>Sports Car</Link>
                <Link to='/policecar'>Police Car</Link>
                <Link to='/miniftruck'>Mini Fire Truck</Link>
            </div>
        </div>
    );
};

export default Subcategory;