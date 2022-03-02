import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import { ForgotPassword } from '../components/Auth/ForgotPassword';
import { LoginPage } from '../components/Auth/LoginPage';
import { Signup } from '../components/Auth/Signup';
import { HomePage } from '../components/HomeScreen/HomePage';
import { MainNav } from '../components/HomeScreen/Nav/MainNav';


export const HomeRouter = () => {
    return (
        <>
            <MainNav />
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                </Routes>
            </div>
        </>
    )
}
