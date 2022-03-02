import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import { HomeRouter } from './HomeRouter';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRouter';
import { AdminRoute } from './AdminRouter';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/*" element={
                        <PublicRoute>
                            <HomeRouter />
                        </PublicRoute>
                    }
                    />
                    <Route exact path="/admin/*" element={
                        <PrivateRoute>
                            <AdminRoute />
                        </PrivateRoute>
                    }
                    />
                    {/* <Route path="/adminRoute" element={ <HomeRouter /> }/> */}
                </Routes>
            </div>
        </Router>
    )
}
