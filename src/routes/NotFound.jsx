import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-600 to-pink-600">
            <div className="text-white text-center">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <p className="text-2xl mb-8">Oops! Page Not Found</p>
                <p className="text-lg"></p>
                <Link to='/'><button className="bg-white text-purple-600 px-4 py-2 mt-8 rounded shadow hover:bg-gray-100">Go Back</button></Link>
            </div>
        </div>
    );
};

export default NotFound;