import React, { useEffect, useState } from 'react';

const AllToys = () => {

    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    console.log(toys);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Seller</th>
                            <th>Toy</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            toys.map((toy, index) =>                         <tr>
                            <td>{index + 1}</td>
                            <td>{toy.Seller}</td>
                            <td>{toy.Toy_Name}</td>
                            <td>{toy.Sub_category}</td>
                            <td>{toy.Price}</td>
                            <td>{toy.Available_Quantity}</td>
                            <td><button className='btn bg-red-600 p-3 border-none'>View Details</button></td>
                        </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;