import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='mx-auto text-center bg-orange-50 md:w-2/4 md:rounded-md py-10 my-20'>
            <h1 className='text-3xl font-bold text-red-600 mt-5'>Please Register</h1>
            <form>
                <input className='border mt-5 p-3 w-96 rounded-md' type="Name" name='Name' placeholder='Name' /><br />

                <input className='border mt-5 p-3 w-96 rounded-md' type="email" name='email' placeholder='Email' /><br />

                <input className='border mt-5 p-3 w-96 rounded-md' type="password" name="password" id="" placeholder='Password'/><br />

                <input className='border mt-5 p-3 w-96 rounded-md' type="photoUrl" name='PhotoUrl' placeholder='PhotoUrl' /><br />

                <input className='text-center submit-btn border mt-5 p-3 w-96 rounded-md bg-red-600 border-none text-white font-bold' type="Register" value="Register" />

                <p>or</p>
                <p className='google-btn flex justify-center mt-3 border w-96 p-3 mx-auto bg-gray-100 rounded-md'>Register With <img className='w-20 ms-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="" /></p>

                <p className='mt-3 '>You Have already An Account <Link to='/login' className='text-red-600 font-bold'>Please Login</Link></p>
            </form>
        </div>
    );
};

export default Register;