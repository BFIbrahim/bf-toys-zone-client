import React from 'react';
import { Link } from 'react-router-dom';
import './Subcategory.css'

const Subcategory = () => {
    return (
        <div>
            <div className='sub-sec flex justify-around md:w-96 mx-auto mb-8 mt-5 font-bold'>
                <Link to='/'>Gallery</Link>
                <Link to='/sportscar'>Sports Car</Link>
                <Link to='/policecar'>Police Car</Link>
                <Link to='/miniftruck'>Mini Fire Truck</Link>
            </div>
        </div>
    );
};

export default Subcategory;