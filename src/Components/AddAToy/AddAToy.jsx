import React from 'react';

const AddAToy = () => {
    return (
        <div>
            <h1 className='text-red-600 text-3xl font-bold mt-4 mb-8 text-center'>Add Your Toy</h1>
            <div className="card flex-shrink-0 md:w-5/6 mx-auto shadow-2xl bg-base-100">
                <div className="card-body md:w-4/6 mx-auto">
                    <div className="form-control">
                        <input type="text" placeholder="Product Name" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <input type="text" placeholder="Seller Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Picture URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Seller Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Sub Category" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <input type="text" placeholder="Price" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <input type="text" placeholder="Rating" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <input type="text" placeholder="Available Quantity" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <input type="text" placeholder="Product Description" className="input input-bordered py-10" />

                    </div>

                    <div className="form-control mt-6">
                        <button className="btn border-none bg-red-600">Add Product</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AddAToy;