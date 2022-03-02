import React from 'react';
import { BrowserRouter as Router,
    Routes, 
    Route
} from 'react-router-dom';
import { AdminHomePage } from '../components/AdminScreen/AdminHomePage';
import { AnnouncementPage } from '../components/AdminScreen/AnnouncementPage';
import { ElectionPage } from '../components/AdminScreen/ElectionPage';
import { AdminNav } from '../components/AdminScreen/Nav/AdminNav';
import { PositionPage } from '../components/AdminScreen/PositionPage';
import { RequirementPage } from '../components/AdminScreen/RequirementPage';
import { RolePage } from '../components/AdminScreen/RolePage';

export const AdminRoute = () => {
    return (
        <>
            <div className="wrapperAdmin">
            <AdminNav />
            
                <Routes>
                    <Route path="/adminHome" element={<AdminHomePage />} />
                    <Route path="/election" element={<ElectionPage />} />
                    <Route path="/requirement" element={<RequirementPage />} />
                    <Route path="/position" element={<PositionPage />} />
                    <Route path="/announcement" element={<AnnouncementPage />} />
                    <Route path="/role" element={<RolePage />} />
                </Routes>
            </div>
        </> 
    )
}