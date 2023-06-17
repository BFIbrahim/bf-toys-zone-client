import React, { useContext } from 'react';
import { useForm } from "react-hook-form"
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';


const AddAToy = () => {

    const {user} = useContext(AuthContext)
    const userEmail = user?.email

    const { register, handleSubmit, watch } = useForm();
    const onSubmit = data => {
        console.log(data)

        const {Seller, ToyName, Subcategory, Price, AvailableQuantity, ImageURL} = data;
        const newToy = {Seller, ToyName, Subcategory, Price, AvailableQuantity, ImageURL,userEmail: userEmail}

        fetch('https://bf-toy-cars-server.vercel.app/toys', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newToy)
        })
        .then(res => res.json())
        .then(addedToy => {
           Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Product Added',
            showConfirmButton: false,
            timer: 1500
          })
        })

        



    };

    return (
        <div>
            <h1 className='text-red-600 text-3xl font-bold mt-4 mb-8 text-center'>Add Your Toy</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 md:w-5/6 mx-auto shadow-2xl bg-base-100">
                <div className="card-body md:w-4/6 mx-auto">
                    <div className="form-control">
                        <input type="text"
                            {...register("ToyName", { required: true })}
                            placeholder="Toy Name" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <input type="text"
                            {...register("Seller", { required: true })}
                            placeholder="Seller Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text"
                            {...register("ImageURL", { required: true })}
                            placeholder="Picture URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text"placeholder="Seller Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text"
                            {...register("Subcategory", { required: true })}
                            placeholder="Sub Category" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <input type="text"
                            {...register("Price", { required: true })}
                            placeholder="Price" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <input type="text"
                            {...register("rating", { required: true })}
                            placeholder="Rating" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <input type="text"
                            {...register("AvailableQuantity", { required: true })}
                            placeholder="Available Quantity" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <input type="text" placeholder="Product Description" className="input input-bordered py-10" />

                    </div>

                    <div className="form-control mt-6">
                        <button className="btn border-none bg-red-600">Add Product</button>
                    </div>
                </div>


            </form>
        </div>
    );
};

export default AddAToy;