import React from 'react';
import { useForm } from "react-hook-form"


const AddAToy = () => {

    const { register, handleSubmit, watch } = useForm();
    const onSubmit = data => {
        console.log(data)

        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(addedToy => {
            console.log(addedToy);
        })



    };

    return (
        <div>
            <h1 className='text-red-600 text-3xl font-bold mt-4 mb-8 text-center'>Add Your Toy</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 md:w-5/6 mx-auto shadow-2xl bg-base-100">
                <div className="card-body md:w-4/6 mx-auto">
                    <div className="form-control">
                        <input type="text"
                            {...register("Toy_Name", { required: true })}
                            placeholder="Toy Name" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <input type="text"
                            {...register("Seller", { required: true })}
                            placeholder="Seller Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text"
                            {...register("picURL", { required: true })}
                            placeholder="Picture URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text"
                            placeholder="Seller Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text"
                            {...register("Sub_category", { required: true })}
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
                            {...register("Available_Quantity", { required: true })}
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