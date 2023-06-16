import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const MyToys = () => {

  const { user } = useContext(AuthContext)
  const email = user?.email
  // console.log(email);
  const [myToy, setMytoy] = useState()

  useEffect(() => {
    fetch(`http://localhost:5000/toys`)
      .then(res => res.json())
      .then(data => {
        setMytoy(data);
      })
  }, []);

  console.log(myToy);
  // console.log(email);

  const filteredToys = myToy?.filter(toy => toy.userEmail === email);
  console.log(filteredToys);


  return (
    <div className='mb-10 mt-8'>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {
              filteredToys?.map((toy, index) => <tr
                key={toy._id}
              >
                <td>{index + 1}</td>
                <td>{toy.ToyName}</td>
                <td>{toy.Subcategory}</td>
                <td>{toy.Price}</td>
                <td>{toy.AvailableQuantity}</td>
                <td><Link><button className='btn bg-red-600 p-3 border-none'>Delete</button></Link></td>
              </tr>)
            }



          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;