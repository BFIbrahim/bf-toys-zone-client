import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';



const Register = () => {

    const {createUser} = useContext(AuthContext)

    const hundleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value
        console.log(name, email, password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'registration Successfull',
                showConfirmButton: false,
                timer: 1500
              })
        })
        .catch(error => {
            console.log(error.message);
        })
    }


    return (
        <div className='mx-auto text-center bg-orange-50 md:w-2/4 md:rounded-md py-10 my-20'>
            <h1 className='text-3xl font-bold text-red-600 mt-5'>Please Register</h1>
            <form onSubmit={hundleRegister}>
                <input className='border mt-5 p-3 w-96 rounded-md' type="text" name='name' placeholder='Name' /><br />

                <input className='border mt-5 p-3 w-96 rounded-md' type="email" name='email' placeholder='Email' /><br />

                <input className='border mt-5 p-3 w-96 rounded-md' type="password" name="password" id="" placeholder='Password' /><br />

                <input className='border mt-5 p-3 w-96 rounded-md' type="photoUrl" name='PhotoUrl' placeholder='PhotoUrl' /><br />

                <input className='text-center submit-btn border mt-5 p-3 w-96 rounded-md bg-red-600 border-none text-white font-bold' type="submit" value="Register" />

                <p className='mt-3 '>You Have already An Account <Link to='/login' className='text-red-600 font-bold'>Please Login</Link></p>
            </form>
        </div>
    );
};

export default Register;