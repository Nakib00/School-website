import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const AdminLayout = () => {
  const location = useLocation();
  const [isAdminMobileMenuOpen, setIsAdminMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: 'dashboard' },
    { name: 'Notices', path: '/admin/notices', icon: 'campaign' },
    { name: 'Teachers', path: '/admin/teachers', icon: 'group' },
    { name: 'Results', path: '/admin/results', icon: 'description' },
    { name: 'Gallery', path: '/admin/gallery', icon: 'collections' },
  ];

  return (
    <div className="text-on-surface bg-[#f5f5f0] min-h-screen">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-primary-container text-on-primary flex items-center justify-between px-6 shadow-sm">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsAdminMobileMenuOpen(true)}
            className="md:hidden text-on-primary cursor-pointer hover:opacity-80 p-1.5 rounded-full hover:bg-on-primary/10 transition-colors"
            aria-label="Open admin menu"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
          <div className="w-10 h-10 bg-secondary-container rounded-full hidden sm:flex items-center justify-center border-2 border-secondary">
            <span className="material-symbols-outlined text-on-secondary-container" data-icon="school">school</span>
          </div>
          <h1 className="font-headline-md text-headline-sm md:text-headline-md font-bold tracking-tight text-on-primary">স্কুল অ্যাডমিন</h1>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/" className="text-sm border border-on-primary px-3 py-1 rounded hover:bg-on-primary hover:text-primary transition-colors">
            View Site
          </Link>
          <button className="relative p-2 hover:bg-on-primary/10 rounded-full transition-colors">
            <span className="material-symbols-outlined text-on-primary" data-icon="notifications">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-primary-container"></span>
          </button>
          <div className="flex items-center gap-3 pl-4 border-l border-on-primary/20">
            <div className="text-right hidden sm:block">
              <p className="font-label-md text-label-md leading-none">Admin User</p>
              <p className="text-[12px] opacity-70">Super Admin</p>
            </div>
            <img alt="Admin Avatar" className="w-10 h-10 rounded-full object-cover border-2 border-on-primary/30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs-a6-V52n_jya-T_imZmzbGIPXZnwEYZM6u5W-g7sIJN42P8FMDeZViM4b0lOu8TRD0D8oAScY1sbj_4Ckzphag4vjF_GBK-KM74OvKoNyxCYMGLL1TsJFx0H5zEOwyUB67X4KGu4ogu9FPVjS_9AXQb2WDAfmNPVALsux3vIsQuV6nViYLPp7Mxi0RnNeyJvqjSflo4X9zLcRCuoSIOuCBII_PO6No-fUSyrc27MDFSD3WAS_Jr0IfuYkIbN2ffTJG6JIoNCZBVb" />
          </div>
        </div>
      </header>

      {/* Mobile Admin Sidebar Overlay */}
      {isAdminMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden bg-on-surface/40 backdrop-blur-sm transition-opacity">
          <aside className="w-[240px] bg-white h-full shadow-lg flex flex-col py-6 relative border-r border-outline-variant">
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 pb-4 border-b border-outline-variant mb-4">
              <span className="font-headline-md text-headline-sm font-bold text-primary">স্কুল অ্যাডমিন</span>
              <button 
                onClick={() => setIsAdminMobileMenuOpen(false)}
                className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                aria-label="Close admin menu"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            {/* Navigations */}
            <nav className="flex-1 space-y-1 font-label-md text-label-md">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link 
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsAdminMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-6 py-3 transition-all group ${
                      isActive 
                        ? 'border-l-4 border-primary-container bg-[#eaf3de] text-primary' 
                        : 'text-on-surface-variant hover:bg-surface-container-low hover:text-primary'
                    }`}
                  >
                    <span className="material-symbols-outlined" data-icon={item.icon}>{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              
              <div className="pt-6 pb-2 px-6">
                <span className="text-[12px] font-bold uppercase tracking-wider text-outline">System</span>
              </div>
              <a onClick={() => setIsAdminMobileMenuOpen(false)} className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all group" href="#">
                <span className="material-symbols-outlined" data-icon="settings">settings</span>
                <span>Settings</span>
              </a>
              <Link to="/admin" onClick={() => setIsAdminMobileMenuOpen(false)} className="flex items-center gap-3 px-6 py-3 text-error hover:bg-error-container/20 transition-all group">
                <span className="material-symbols-outlined" data-icon="logout">logout</span>
                <span>Logout</span>
              </Link>
            </nav>
          </aside>
          {/* Backdrop Click */}
          <div className="flex-grow cursor-pointer" onClick={() => setIsAdminMobileMenuOpen(false)}></div>
        </div>
      )}

      <div className="flex pt-20">
        {/* Sidebar Navigation */}
        <aside className="fixed left-0 bottom-0 top-20 w-[220px] bg-white border-r border-outline-variant hidden md:flex flex-col py-6">
          <nav className="flex-1 space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link 
                  key={item.name}
                  to={item.path}
                  className={`flex items-center gap-3 px-6 py-3 transition-all group ${
                    isActive 
                      ? 'border-l-4 border-primary-container bg-[#eaf3de] text-primary' 
                      : 'text-on-surface-variant hover:bg-surface-container-low hover:text-primary'
                  }`}
                >
                  <span className={`material-symbols-outlined ${isActive ? 'fill-icon' : 'group-hover:scale-110'}`} data-icon={item.icon}>{item.icon}</span>
                  <span className="font-label-md text-label-md">{item.name}</span>
                </Link>
              );
            })}
            
            <div className="pt-6 pb-2 px-6">
              <span className="text-[12px] font-bold uppercase tracking-wider text-outline">System</span>
            </div>
            <a className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all group" href="#">
              <span className="material-symbols-outlined group-hover:scale-110" data-icon="settings">settings</span>
              <span className="font-label-md text-label-md">Settings</span>
            </a>
            <Link to="/admin" className="flex items-center gap-3 px-6 py-3 text-error hover:bg-error-container/20 transition-all group">
              <span className="material-symbols-outlined group-hover:scale-110" data-icon="logout">logout</span>
              <span className="font-label-md text-label-md">Logout</span>
            </Link>
          </nav>
          {/* Sidebar Footer Pattern */}
          <div className="mt-auto px-6 opacity-20">
            <div className="h-20 jamdani-border rounded-lg"></div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 md:ml-[220px] p-6 lg:p-md">
          <Outlet />
        </main>
      </div>
      
      {/* Bottom Margin for Mobile Spacing */}
      <div className="h-20 lg:hidden"></div>
    </div>
  );
};

export default AdminLayout;
