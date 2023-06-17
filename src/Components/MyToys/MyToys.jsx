import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToys = () => {

  const { user } = useContext(AuthContext)
  const email = user?.email
  // console.log(email);
  const [myToy, setMytoy] = useState([])

  useEffect(() => {
    fetch(`https://bf-toy-cars-server.vercel.app/toys`)
      .then(res => res.json())
      .then(data => {
        setMytoy(data);
      })
  }, []);


  const hundleDelete = item => {
    console.log(item[0]?._id);

    fetch(`https://bf-toy-cars-server.vercel.app/toys/${item[0]?._id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Deleted!',
            showConfirmButton: false,
            timer: 1500
          })
      })

  }


  const filteredToys = myToy?.filter(toy => toy.userEmail === email);

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
                <td><Link><button onClick={() => hundleDelete(filteredToys)} className='btn bg-red-600 p-3 border-none'>Delete</button></Link></td>
              </tr>)
            }



          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;