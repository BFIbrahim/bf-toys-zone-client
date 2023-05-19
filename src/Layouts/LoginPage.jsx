import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Components/Navigation/Navigation';
import Footer from '../Components/Footer/Footer';

const LoginPage = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginPage;