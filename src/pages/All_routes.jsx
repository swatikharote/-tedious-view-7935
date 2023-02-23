import React from 'react';
import { Route, Routes } from "react-router-dom";
import Login from './login_page';


export const AllRoutes = () => {
    return (

        <Routes>
            <Route path="/"></Route>
            {/* <Route path="./About" element={<About />}></Route> */}
            <Route path="/login" element={<Login />}></Route>

        </Routes>

    )
}
