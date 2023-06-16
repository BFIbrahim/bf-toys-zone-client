import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {

    const data = useLoaderData()
    console.log(data);


    return (
        <div>
            <h1>This Is details page</h1>
        </div>
    );
};

export default ToyDetails;