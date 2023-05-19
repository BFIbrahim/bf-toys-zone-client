import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        <div className="navbar flex justify-between align-middle bg-orange-100">
            <div>
                <h1 className='text-3xl font-bold'>
                    <span className='text-blue-500'>BF</span>
                    <span className='text-black ml-2'>Toy</span>
                    <span className='text-red-600 ml-2'>Cars</span>
                </h1>
            </div>

            <div className=' flex gap-4 font-bold nav-content text-gray-600'>
                <Link to="/">All Toys</Link>
                <Link to='/mytoys'>My Toys</Link>
                <Link to="/blog">Blog</Link>
            </div>

            <div>
                <img className='w-10 h-10 ml-4' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
            </div>

        </div>
    );
};

export default Navigation;