import React, { useContext } from 'react';
import { AuthContext } from '../Components/Provider/AuthProvider';
import { useLocation } from 'react-router-dom';

const ParivetRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(user){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default ParivetRoutes;