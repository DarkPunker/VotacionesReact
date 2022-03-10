import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';
import { AdminHomePage } from '../components/AdminScreen/AdminHomePage';
import { AnnouncementPage } from '../components/AdminScreen/AnnouncementPage';
import { ElectionPage } from '../components/AdminScreen/ElectionPage';
import { ManageAnnouncement } from '../components/AdminScreen/ManageAnnouncement';
import { ManageElection } from '../components/AdminScreen/ManageElection';
import { ManagePostulation } from '../components/AdminScreen/ManagePostulation';
import { AdminNav } from '../components/AdminScreen/Nav/AdminNav';
import { PositionPage } from '../components/AdminScreen/PositionPage';
import { RequirementPage } from '../components/AdminScreen/RequirementPage';
import { RolePage } from '../components/AdminScreen/RolePage';
import { VotesAnnoumPage } from '../components/AdminScreen/VotesAnnoumPage';
import { VotesPage } from '../components/AdminScreen/VotesPage';

export const AdminRoute = () => {
  return (
    <>
      <div className="wrapperAdmin">
        <AdminNav />

        <Routes>
          <Route path="/adminHome" element={<AdminHomePage />} />
          <Route path="/manageelection" element={<ElectionPage />} />
          <Route path="/manageelection/:id" element={<ElectionPage />} />
          <Route path="/requirement" element={<RequirementPage />} />
          <Route path="/position" element={<PositionPage />} />
          <Route path="/announcement" element={<AnnouncementPage />} />
          <Route path="/maganeannouncement" element={<ManageAnnouncement />} />
          <Route path="/role" element={<RolePage />} />
          <Route path="/elections" element={<ManageElection />} />
          <Route path="/managepostulation/:id" element={<ManagePostulation />} />
          <Route path="/votes" element={<VotesPage />} />
          <Route path="/votesannou/:id" element={<VotesAnnoumPage />} />
        </Routes>
      </div>
    </>
  )
}