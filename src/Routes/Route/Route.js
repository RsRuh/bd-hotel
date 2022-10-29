import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Destination from '../../Pages/Destination';
import FindAprt from '../../Pages/FindAprt';
import Home from '../../Pages/Home';
import Login from '../../Pages/Login';
import Register from '../../Pages/Register';
       

    export const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children:[ 
                {
                    path: '/', element: <Home></Home>,
                    loader: ()=> fetch('http://localhost:5000/location')
                },
                {
                    path: '/booking-form/:id', element: <Destination></Destination>,
                    loader: ({params})=> fetch(`http://localhost:5000/booking-form/${params.id}`)
                },
                {
                    path: '/login', element: <Login></Login>
                },
                {
                    path: '/register', element: <Register></Register>
                },
                {
                    path: '/blog', element: <FindAprt></FindAprt>        
                },
            ]
        }
    ])

