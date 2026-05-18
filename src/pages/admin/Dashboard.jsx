import React from 'react';
import { useDemoData } from '../../context/DemoDataContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { notices } = useDemoData();

  return (
    <>
      {/* Page Header */}
      <div className="mb-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="font-headline-md text-headline-md font-bold text-on-surface">Good morning, Admin</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Here is what's happening in your school today.</p>
        </div>
        <div className="flex gap-3">
          <Link to="/admin/notices" className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-label-md text-label-md flex items-center gap-2 shadow-md hover:bg-on-primary-fixed-variant transition-all">
            <span className="material-symbols-outlined" data-icon="add">add</span>
            New Update
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md mb-lg">
        {/* Stat Card 1 */}
        <div className="bg-white p-md rounded-xl border border-outline-variant shadow-[0px_4px_12px_rgba(26,92,42,0.05)] border-t-4 border-primary">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-primary-fixed/30 rounded-lg text-primary">
              <span className="material-symbols-outlined fill-icon" data-icon="campaign">campaign</span>
            </div>
            <span className="text-[12px] font-bold text-primary px-2 py-1 bg-primary/5 rounded">Live</span>
          </div>
          <p className="font-label-md text-label-md text-on-surface-variant">Total Notices</p>
          <h3 className="text-4xl font-bold mt-1">{notices.length}</h3>
        </div>
        {/* Stat Card 2 */}
        <div className="bg-white p-md rounded-xl border border-outline-variant shadow-[0px_4px_12px_rgba(26,92,42,0.05)] border-t-4 border-blue-600">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
              <span className="material-symbols-outlined fill-icon" data-icon="group">group</span>
            </div>
            <span className="text-[12px] font-bold text-blue-600 px-2 py-1 bg-blue-50 rounded">Active</span>
          </div>
          <p className="font-label-md text-label-md text-on-surface-variant">Teachers</p>
          <h3 className="text-4xl font-bold mt-1">31</h3>
        </div>
        {/* Stat Card 3 */}
        <div className="bg-white p-md rounded-xl border border-outline-variant shadow-[0px_4px_12px_rgba(26,92,42,0.05)] border-t-4 border-secondary">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-secondary-fixed/30 rounded-lg text-secondary">
              <span className="material-symbols-outlined fill-icon" data-icon="description">description</span>
            </div>
            <span className="text-[12px] font-bold text-secondary px-2 py-1 bg-secondary/5 rounded">Pending 3</span>
          </div>
          <p className="font-label-md text-label-md text-on-surface-variant">Results PDF</p>
          <h3 className="text-4xl font-bold mt-1">18</h3>
        </div>
        {/* Stat Card 4 */}
        <div className="bg-white p-md rounded-xl border border-outline-variant shadow-[0px_4px_12px_rgba(26,92,42,0.05)] border-t-4 border-teal-600">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-teal-100 rounded-lg text-teal-600">
              <span className="material-symbols-outlined fill-icon" data-icon="collections">collections</span>
            </div>
            <span className="text-[12px] font-bold text-teal-600 px-2 py-1 bg-teal-50 rounded">New 5</span>
          </div>
          <p className="font-label-md text-label-md text-on-surface-variant">Gallery Posts</p>
          <h3 className="text-4xl font-bold mt-1">12</h3>
        </div>
      </div>

      {/* Dashboard Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md">
        {/* Recent Activity */}
        <div className="bg-white rounded-xl border border-outline-variant shadow-[0px_4px_12px_rgba(26,92,42,0.05)] overflow-hidden">
          <div className="px-md py-4 border-b border-outline-variant flex justify-between items-center">
            <h4 className="font-headline-sm text-headline-sm">Recent activity</h4>
            <button className="text-primary font-label-md text-label-md hover:underline transition-all">View all</button>
          </div>
          <div className="p-md space-y-6">
            {notices.slice(0,2).map((notice, i) => (
              <div key={i} className="flex gap-4 group">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0 shadow-[0_0_8px_rgba(26,92,42,0.4)]"></div>
                <div className="flex-1">
                  <p className="font-body-md text-body-md text-on-surface">Notice published — <span className="font-semibold">{notice.title}</span></p>
                  <p className="text-[13px] text-outline mt-1">{notice.date}</p>
                </div>
              </div>
            ))}
            <div className="flex gap-4 group">
              <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
              <div className="flex-1">
                <p className="font-body-md text-body-md text-on-surface">Teacher profile updated — <span className="font-semibold">M. Rahman, Dept. of Physics</span></p>
                <p className="text-[13px] text-outline mt-1">5 hours ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl border border-outline-variant shadow-[0px_4px_12px_rgba(26,92,42,0.05)] overflow-hidden">
          <div className="px-md py-4 border-b border-outline-variant">
            <h4 className="font-headline-sm text-headline-sm">Quick actions</h4>
          </div>
          <div className="p-md space-y-3">
            <Link to="/admin/notices" className="w-full flex items-center justify-between p-4 rounded-lg bg-surface-container-low hover:bg-primary-fixed/20 transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-fixed/40 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined" data-icon="post_add">post_add</span>
                </div>
                <span className="font-label-md text-label-md font-bold">Manage notices</span>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors" data-icon="chevron_right">chevron_right</span>
            </Link>
            <Link to="/admin/teachers" className="w-full flex items-center justify-between p-4 rounded-lg bg-surface-container-low hover:bg-blue-50 transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  <span className="material-symbols-outlined" data-icon="person_add">person_add</span>
                </div>
                <span className="font-label-md text-label-md font-bold">Manage teachers</span>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:text-blue-600 transition-colors" data-icon="chevron_right">chevron_right</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
