import React from 'react';
import { Route, Routes } from "react-router-dom";
import About from './About';
import HomePage from './home_page';
import Login from './login_page';
import ProdDetails from './ProdDetails';
import SignUp from './SignUp';


export const AllRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            {/* <Route path="./About" element={<About />}></Route> */}
            <Route path="/login" element={<Login />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path='/signup' element={<SignUp />} />
            <Route path='/product/:id' element={<ProdDetails />} />
        </Routes>

    )
}
