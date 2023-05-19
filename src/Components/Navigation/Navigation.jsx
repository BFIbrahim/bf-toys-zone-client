import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        <div className='bg-orange-100'>
            <div className="navbar md:px-10">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/'><li><a>Home</a></li></Link>
                        <Link to='/alltoys'><li><a>All Toys</a></li></Link>
                        <Link to='/mytoys'><li><a>My Toys</a></li></Link>
                        <Link to='addAToy'><li><a>Add A Toy</a></li></Link>
                        <Link to='blog'><li><a>Blog</a></li></Link>
                        </ul>
                    </div>
                    <img className='w-10 me-3' src="https://i.postimg.cc/3JYs9CGQ/Logo.png" alt="" />
                    <a className="hidden ms-0 lg:block btn btn-ghost normal-case text-3xl font-bold">Toy <span className='text-red-600'> Cars</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Link to='/'><li><a>Home</a></li></Link>
                        <Link to='/alltoys'><li><a>All Toys</a></li></Link>
                        <Link to='/mytoys'><li><a>My Toys</a></li></Link>
                        <Link to='addAToy'><li><a>Add A Toy</a></li></Link>
                        <Link to='blog'><li><a>Blog</a></li></Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    <img className='w-10' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                    
                    <button className='btn bg-red-600 border-none ms-4 me-4 py-0 px-2'>Login</button>
                    <button className='px-2 btn bg-red-600 border-none'>Logout</button>
                </div>
            </div>
        </div>
    );
};


export default Navigation;