import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../Layouts/LoginPage';
import Home from '../Components/Home/Home';
import MyToys from '../Components/MyToys/MyToys';
import Blog from '../Components/Blog/Blog';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage></LoginPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/mytoys',
                element: <MyToys></MyToys>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default Router;