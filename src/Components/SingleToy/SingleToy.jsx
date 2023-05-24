import React from 'react';

const SingleToy = ({ toy, index }) => {
    console.log(index);
    console.log(toy);
    return (
        <div>
            
                <tr>
                    <th>{index}</th>
                    <th>{toy.Seller}</th>
                </tr>

        </div>
    );
};

export default SingleToy;