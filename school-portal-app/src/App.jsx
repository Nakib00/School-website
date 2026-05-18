import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import AdminLayout from './components/layout/AdminLayout';
import { DemoDataProvider } from './context/DemoDataContext';

// Public Pages
import HomePage from './pages/HomePage';
import NoticeBoardPage from './pages/NoticeBoardPage';
import NoticeDetailPage from './pages/NoticeDetailPage';
import ResultsPage from './pages/ResultsPage';
import GalleryPage from './pages/GalleryPage';
import TeachersPage from './pages/TeachersPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import Dashboard from './pages/admin/Dashboard';
import ManageNotices from './pages/admin/ManageNotices';
import ManageTeachers from './pages/admin/ManageTeachers';
import ManageResults from './pages/admin/ManageResults';
import ManageGallery from './pages/admin/ManageGallery';

function App() {
  return (
    <DemoDataProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="notice-board" element={<NoticeBoardPage />} />
            <Route path="notice/:id" element={<NoticeDetailPage />} />
            <Route path="results" element={<ResultsPage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="teachers" element={<TeachersPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="notices" element={<ManageNotices />} />
            <Route path="teachers" element={<ManageTeachers />} />
            <Route path="results" element={<ManageResults />} />
            <Route path="gallery" element={<ManageGallery />} />
          </Route>
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </DemoDataProvider>
  );
}

export default App;
