import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../Layouts/LoginPage';
import Home from '../Components/Home/Home';
import MyToys from '../Components/MyToys/MyToys';
import Blog from '../Components/Blog/Blog';
import AllToys from '../Components/AllToys/AllToys';
import AddAToy from '../Components/AddAToy/AddAToy';

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
                path:'/alltoys',
                element: <AllToys></AllToys>
            },
            {
                path:'/mytoys',
                element: <MyToys></MyToys>
            },
            {
                path:'/addAToy',
                element: <AddAToy></AddAToy>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default Router;