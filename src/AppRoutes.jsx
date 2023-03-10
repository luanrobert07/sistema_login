import React from "react";


import{
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage/index"
import HomePage from './pages/HomePage';

import {AuthProvider} from "./contexts/auth"

const AppRoutes = () =>{
    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<LoginPage/>}/>
                    <Route exact path="/" element={<HomePage/>}/>
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes;