import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllToys = () => {

    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch('https://bf-toy-cars-server.vercel.app/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    console.log(toys);

    return (
        <div className='mb-10 mt-8'>
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
                            toys.map((toy, index) =><tr 
                            key={toy._id}
                            >
                            <td>{index + 1}</td>
                            <td>{toy.Seller}</td>
                            <td>{toy.ToyName}</td>
                            <td>{toy.Subcategory}</td>
                            <td>{toy.Price}</td>
                            <td>{toy.AvailableQuantity}</td>
                            <td><Link to={`/alltoys/${toy._id}`}><button className='btn bg-red-600 p-3 border-none'>View Details</button></Link></td>
                        </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;