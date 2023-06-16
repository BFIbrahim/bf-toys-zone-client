import React, { useContext } from 'react';
import { AuthContext } from '../Components/Provider/AuthProvider';
import { useLocation, Navigate } from 'react-router-dom';

const ParivetRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    console.log(user);

    if(loading){
        return <div>Loading</div>
    }
    // return <Navigate to='/login' state={{from:location}} replace></Navigate>

    return (
        user ? <div>{ children }</div> : <Navigate to={ '/login' } state={ { from: location } } replace />
    );
};

export default ParivetRoutes;