import React, { createContext, useContext, useState, useEffect } from 'react';

const DemoDataContext = createContext();

const initialNotices = [
  { id: '1', title: 'বার্ষিক পরীক্ষা ২০২৪ এর সময়সূচী সংক্রান্ত বিজ্ঞপ্তি | Annual Exam 2024 Schedule', date: '2024-10-15', category: 'Academic', status: 'Published', content: 'The comprehensive schedule for the upcoming Annual Examination 2024 has been released. All students are advised to download the PDF from the portal.' },
  { id: '2', title: 'দুর্গাপূজা উপলক্ষে ছুটির বিজ্ঞপ্তি | Durga Puja Holiday Notice', date: '2024-10-12', category: 'Holiday', status: 'Published', content: 'On the occasion of Sharadiya Durga Puja, the school will remain closed from October 18th to October 24th. Normal classes will resume on October 25th.' },
  { id: '3', title: 'এসএসসি ২০২৫ নির্বাচনী পরীক্ষার ফলাফল | SSC 2025 Test Result', date: '2024-10-10', category: 'Exam', status: 'Published', content: 'The results of the SSC 2025 Test Examination have been published. Students can check their results on the official website or the main board.' },
  { id: '4', title: 'অভিভাবক সমাবেশ সংক্রান্ত বিজ্ঞপ্তি | Parent-Teacher Meeting Notice', date: '2024-10-05', category: 'General', status: 'Draft', content: 'A general meeting for all parents of Class 6 to 10 has been scheduled for Saturday, 12th October in the school auditorium to discuss new curriculum guidelines.' }
];

const initialTeachers = [
  { id: '1', name: 'Dr. Mohammad Rahman', designation: 'Principal', department: 'Administration', email: 'rahman.principal@academybd.edu', phone: '+880 1711-223344', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYLlncRxbUU3wOah7G2_Hvvco8n1H6CZlCPDGebJsMbyPzY8BaGIwieW4f6KgxSXuK9Rk1M_vgbYf3uiEV1zwn_bygG-It2oEN4j0X2_GJuQ4Z-vqXkTVH01mZW52t3VZIUSHLQqSTFsDFWa_3iStu1DCh9xjmYqFzvzDkVN0hjZSY2ZPUL_tREF8xGmOGcmJ532ZSGeMF6JYyaK6Zi_5FHMyhN6gvGcYKO6Z27B-17XX4nx-hayd9Gu1dr25qqgWmNKkUNN1d35vI' },
  { id: '2', name: 'Mrs. Fatema Begum', designation: 'Vice Principal', department: 'Science', email: 'fatema.vp@academybd.edu', phone: '+880 1711-556677', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDs-a6-V52n_jya-T_imZmzbGIPXZnwEYZM6u5W-g7sIJN42P8FMDeZViM4b0lOu8TRD0D8oAScY1sbj_4Ckzphag4vjF_GBK-KM74OvKoNyxCYMGLL1TsJFx0H5zEOwyUB67X4KGu4ogu9FPVjS_9AXQb2WDAfmNPVALsux3vIsQuV6nViYLPp7Mxi0RnNeyJvqjSflo4X9zLcRCuoSIOuCBII_PO6No-fUSyrc27MDFSD3WAS_Jr0IfuYkIbN2ffTJG6JIoNCZBVb' },
  { id: '3', name: 'Mr. Anisul Haque', designation: 'Senior Teacher', department: 'Mathematics', email: 'anisul.math@academybd.edu', phone: '+880 1711-889900', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDs-a6-V52n_jya-T_imZmzbGIPXZnwEYZM6u5W-g7sIJN42P8FMDeZViM4b0lOu8TRD0D8oAScY1sbj_4Ckzphag4vjF_GBK-KM74OvKoNyxCYMGLL1TsJFx0H5zEOwyUB67X4KGu4ogu9FPVjS_9AXQb2WDAfmNPVALsux3vIsQuV6nViYLPp7Mxi0RnNeyJvqjSflo4X9zLcRCuoSIOuCBII_PO6No-fUSyrc27MDFSD3WAS_Jr0IfuYkIbN2ffTJG6JIoNCZBVb' }
];

const initialResults = [
  { id: '1', title: 'SSC Examination Result 2024', examType: 'SSC', date: '2024-06-15', pdfUrl: '#' },
  { id: '2', title: 'Class 10 Half Yearly Exam Result 2024', examType: 'Half Yearly', date: '2024-05-10', pdfUrl: '#' },
  { id: '3', title: 'Class 9 Terminal Exam Result 2024', examType: 'Terminal', date: '2024-04-02', pdfUrl: '#' }
];

const initialGallery = [
  { id: '1', title: 'Science Lab Experiments', category: 'Academic', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPeSzkfvrf6o-eNjLOFdls5ilBaW9467YtFOwVuAHlNAypGAcG8tnaqtFKtsYy8lvx570K7Iw5JEV9xnQEmZw2X3qj3GUUOdG70N6L0U95zwtMtHUya8Di99mSI1MwaSwOwoVvJDeuPXT2jlr_xCcQBVv2t7ZpzpIaJZciCK1qn2fjlZZeUwHoxtG0GSrSG00DDGhXPkfm5S_qNZFR7hqOK3M_52szrPTWStZRXUkO5cnNWoZKmLOR-SBmnJbUAqYf55VeHaKmjK4c', date: '2024-05-18' },
  { id: '2', title: 'School Library Reading Session', category: 'Facilities', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmVXLPAjGdPam_BsinyhC6hpoku7x-P_dnnpxA84-e1aXWZ3Gs_1EuR8q38n69UTvdDByJuH6Bo5Qx8nsHEN-N-LzrEfHcYTb0-zukif76rc3PiX_h07GegYSlntKbSuLIKCnM4mASVLSDLW6Q6McQxVF85EhqSOPQymkJNbrlSgCV34ZVHZRL-s8p9--yTlPWCeI4espepDeYM3lyPD2uzPOa4hFARYrD4V3x3YFeopt4aQ0igo547OFe8sL9DBzRhXrvXTN9wN-d', date: '2024-05-15' },
  { id: '3', title: 'Annual Sports Ground football tournament', category: 'Sports', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcYBm2ay5f161A2Nk_L-wDOGseqwajptJv5OTR1deo4bA7dWjpG1hkVXXzyxz6BYjh_uzFTgX53jAIOoWNgpca5XlYEq5GHctQir144tFFbuSHAcX--K1MshW2PcoiGeX_yEmqodIpcSsPe4dvUQ6X---vxHCCoz22C42k2Vuabj3FakK9vE8KRdT_3CHN_Fq7VhbNfES2xC8qjttgBlP5160BSYdCqWktw7agoHNBPJ6M_H76S6ppsQLQaHgBcdXH_rUTuHLptCsF', date: '2024-05-10' }
];

export const DemoDataProvider = ({ children }) => {
  const [notices, setNotices] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [results, setResults] = useState([]);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    // Notices
    const savedNotices = localStorage.getItem('school_notices');
    if (savedNotices) setNotices(JSON.parse(savedNotices));
    else {
      setNotices(initialNotices);
      localStorage.setItem('school_notices', JSON.stringify(initialNotices));
    }

    // Teachers
    const savedTeachers = localStorage.getItem('school_teachers');
    if (savedTeachers) setTeachers(JSON.parse(savedTeachers));
    else {
      setTeachers(initialTeachers);
      localStorage.setItem('school_teachers', JSON.stringify(initialTeachers));
    }

    // Results
    const savedResults = localStorage.getItem('school_results');
    if (savedResults) setResults(JSON.parse(savedResults));
    else {
      setResults(initialResults);
      localStorage.setItem('school_results', JSON.stringify(initialResults));
    }

    // Gallery
    const savedGallery = localStorage.getItem('school_gallery');
    if (savedGallery) setGallery(JSON.parse(savedGallery));
    else {
      setGallery(initialGallery);
      localStorage.setItem('school_gallery', JSON.stringify(initialGallery));
    }
  }, []);

  // CRUD Notices
  const addNotice = (notice) => {
    const updated = [notice, ...notices];
    setNotices(updated);
    localStorage.setItem('school_notices', JSON.stringify(updated));
  };
  const updateNotice = (id, updatedNotice) => {
    const updated = notices.map(n => n.id === id ? { ...n, ...updatedNotice } : n);
    setNotices(updated);
    localStorage.setItem('school_notices', JSON.stringify(updated));
  };
  const deleteNotice = (id) => {
    const updated = notices.filter(n => n.id !== id);
    setNotices(updated);
    localStorage.setItem('school_notices', JSON.stringify(updated));
  };

  // CRUD Teachers
  const addTeacher = (teacher) => {
    const updated = [teacher, ...teachers];
    setTeachers(updated);
    localStorage.setItem('school_teachers', JSON.stringify(updated));
  };
  const updateTeacher = (id, updatedTeacher) => {
    const updated = teachers.map(t => t.id === id ? { ...t, ...updatedTeacher } : t);
    setTeachers(updated);
    localStorage.setItem('school_teachers', JSON.stringify(updated));
  };
  const deleteTeacher = (id) => {
    const updated = teachers.filter(t => t.id !== id);
    setTeachers(updated);
    localStorage.setItem('school_teachers', JSON.stringify(updated));
  };

  // CRUD Results
  const addResult = (result) => {
    const updated = [result, ...results];
    setResults(updated);
    localStorage.setItem('school_results', JSON.stringify(updated));
  };
  const updateResult = (id, updatedResult) => {
    const updated = results.map(r => r.id === id ? { ...r, ...updatedResult } : r);
    setResults(updated);
    localStorage.setItem('school_results', JSON.stringify(updated));
  };
  const deleteResult = (id) => {
    const updated = results.filter(r => r.id !== id);
    setResults(updated);
    localStorage.setItem('school_results', JSON.stringify(updated));
  };

  // CRUD Gallery
  const addGallery = (item) => {
    const updated = [item, ...gallery];
    setGallery(updated);
    localStorage.setItem('school_gallery', JSON.stringify(updated));
  };
  const updateGallery = (id, updatedItem) => {
    const updated = gallery.map(g => g.id === id ? { ...g, ...updatedItem } : g);
    setGallery(updated);
    localStorage.setItem('school_gallery', JSON.stringify(updated));
  };
  const deleteGallery = (id) => {
    const updated = gallery.filter(g => g.id !== id);
    setGallery(updated);
    localStorage.setItem('school_gallery', JSON.stringify(updated));
  };

  return (
    <DemoDataContext.Provider value={{
      notices, addNotice, updateNotice, deleteNotice,
      teachers, addTeacher, updateTeacher, deleteTeacher,
      results, addResult, updateResult, deleteResult,
      gallery, addGallery, updateGallery, deleteGallery
    }}>
      {children}
    </DemoDataContext.Provider>
  );
};

export const useDemoData = () => useContext(DemoDataContext);
