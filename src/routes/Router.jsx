import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Components/Home/Home';
import MyToys from '../Components/MyToys/MyToys';
import Blog from '../Components/Blog/Blog';
import AllToys from '../Components/AllToys/AllToys';
import AddAToy from '../Components/AddAToy/AddAToy';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import SportsCar from '../Components/SportsCar/SportsCar';
import PoliceCar from '../Components/PoliceCar/PoliceCar';
import MiniFireTruck from '../Components/MiniFireTruck/MiniFireTruck';
import ParivetRoutes from './ParivetRoutes';
import ToyDetails from '../Components/ToyDetails/ToyDetails';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/alltoys',
                element: <AllToys></AllToys>
            },
            {
                path: '/alltoys/:id',
                element: <ParivetRoutes>
                    <ToyDetails></ToyDetails>,
                </ParivetRoutes>,
                   
                loader: ({ params }) => fetch(`http://localhost:5000/toys/${params?.id}`)

            },
            {
                path: '/mytoys',
                element: <ParivetRoutes>
                    <MyToys></MyToys>
                </ParivetRoutes>


            },
            {
                path: '/addAToy',
                element: <ParivetRoutes>
                    <AddAToy></AddAToy>
                </ParivetRoutes>

            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/sportscar',
                element: <SportsCar></SportsCar>
            },
            {
                path: '/policecar',
                element: <PoliceCar></PoliceCar>
            },
            {
                path: '/miniftruck',
                element: <MiniFireTruck></MiniFireTruck>

            }
        ]
    }
])

export default Router;