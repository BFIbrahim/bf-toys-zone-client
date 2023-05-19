import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='mx-auto text-center bg-orange-50 md:w-2/4 md:rounded-md py-10 my-20'>
            <h1 className='text-3xl font-bold text-red-600 mt-5'>Please Login</h1>
            <form>
                <input className='border mt-5 p-3 w-96 rounded-md' type="email" name='email' placeholder='Your Email' /><br />
                <input className='border mt-5 p-3 w-96 rounded-md' type="password" name="password" id="" placeholder='Passord'/><br />
                <input className='submit-btn border mt-5 p-3 w-96 rounded-md bg-red-600 border-none text-white font-bold' type="submit" value="Submit" />

                <p>or</p>
                <p className='google-btn flex justify-center mt-3 border w-96 p-3 mx-auto bg-gray-100 rounded-md'>Login With <img className='w-20 ms-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="" /></p>

                <p className='mt-3 '>You Have't any account <Link to='/register' className='text-red-600 font-bold'>Please Register</Link></p>
            </form>
        </div>
    );
};

export default Login;