import React, { useContext } from 'react';
import { AuthContext } from '../Components/Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const ParivetRoutes = ({children}) => {
    const {user} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    if(user){
        return children
    }
    // return <Navigate to='/login' state={{from:location}} replace></Navigate>
    return <Navigate state = {{ from: location }} to="/login" replace={true}></Navigate>
};

export default ParivetRoutes;