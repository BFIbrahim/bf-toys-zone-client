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
              filteredToys?.map((toy, index) => <tr
                key={toy._id}
              >
                <td>{index + 1}</td>
                <td>{toy.Seller}</td>
                <td>{toy.Toy_Name}</td>
                <td>{toy.Sub_category}</td>
                <td>{toy.Price}</td>
                <td>{toy.Available_Quantity}</td>
                <td><Link to={`/alltoys/${toy._id}`}><button className='btn bg-red-600 p-3 border-none'>View Details</button></Link></td>
              </tr>)
            }



          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;