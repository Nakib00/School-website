import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const MainLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getNavLinkClass = () => ({ isActive }) => 
    `${isActive ? "text-primary border-b-2 border-primary pb-1" : "text-on-surface-variant hover:text-primary"} transition-colors`;

  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden min-h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <header className="bg-surface docked full-width top-0 sticky z-50 shadow-sm border-b border-outline-variant">
        <nav className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <span className="font-headline-md text-headline-md font-bold text-primary">Academy BD</span>
          </div>
          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 font-label-md text-label-md">
            <NavLink to="/" className={getNavLinkClass()}>Home</NavLink>
            <NavLink to="/notice-board" className={getNavLinkClass()}>Notice Board</NavLink>
            <NavLink to="/results" className={getNavLinkClass()}>Results</NavLink>
            <NavLink to="/gallery" className={getNavLinkClass()}>Gallery</NavLink>
            <NavLink to="/teachers" className={getNavLinkClass()}>Teachers</NavLink>
            <NavLink to="/about" className={getNavLinkClass()}>About</NavLink>
            <NavLink to="/contact" className={getNavLinkClass()}>Contact</NavLink>
            <NavLink to="/admin" className={({ isActive }) => `${isActive ? "text-primary border-primary bg-primary/5" : "text-on-surface-variant hover:text-primary border-outline-variant"} border px-2 py-1 rounded transition-colors`}>Admin</NavLink>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-md hover:opacity-90 transition-opacity">BN/EN</button>
            <button 
              onClick={() => setIsMobileMenuOpen(true)} 
              className="md:hidden text-primary cursor-pointer hover:opacity-80 transition-opacity"
              aria-label="Open mobile menu"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Nav Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden bg-on-surface/40 backdrop-blur-sm transition-opacity">
          <div className="w-[280px] bg-surface h-full shadow-lg flex flex-col p-6 relative border-r border-outline-variant">
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-4 border-b border-outline-variant mb-6">
              <span className="font-headline-md text-headline-sm font-bold text-primary">Academy BD</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                aria-label="Close mobile menu"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            {/* Drawer Links */}
            <div className="flex flex-col gap-4 font-label-md text-label-md">
              <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)} className={getNavLinkClass()}>Home</NavLink>
              <NavLink to="/notice-board" onClick={() => setIsMobileMenuOpen(false)} className={getNavLinkClass()}>Notice Board</NavLink>
              <NavLink to="/results" onClick={() => setIsMobileMenuOpen(false)} className={getNavLinkClass()}>Results</NavLink>
              <NavLink to="/gallery" onClick={() => setIsMobileMenuOpen(false)} className={getNavLinkClass()}>Gallery</NavLink>
              <NavLink to="/teachers" onClick={() => setIsMobileMenuOpen(false)} className={getNavLinkClass()}>Teachers</NavLink>
              <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)} className={getNavLinkClass()}>About</NavLink>
              <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={getNavLinkClass()}>Contact</NavLink>
              <NavLink to="/admin" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => `${isActive ? "text-primary border-primary bg-primary/5" : "text-on-surface-variant hover:text-primary border-outline-variant"} border px-2 py-1 rounded transition-colors w-fit mt-4`}>Admin</NavLink>
            </div>
          </div>
          {/* Backdrop Click */}
          <div className="flex-grow cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}></div>
        </div>
      )}

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-primary full-width bottom-0 border-t-4 border-secondary mt-auto">
        <div className="w-full py-xl px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto grid grid-cols-1 md:grid-cols-4 gap-lg">
          <div className="md:col-span-2 space-y-6">
            <div className="font-headline-md text-headline-md font-bold text-on-primary">Academy BD</div>
            <p className="text-on-primary/80 font-body-md max-w-[448px]">
                Building a foundation for lifelong learning and success. Our institution is dedicated to academic rigor, character building, and cultural heritage.
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full border border-on-primary/30 flex items-center justify-center hover:bg-secondary transition-colors" href="#"><span className="material-symbols-outlined text-on-primary">public</span></a>
              <a className="w-10 h-10 rounded-full border border-on-primary/30 flex items-center justify-center hover:bg-secondary transition-colors" href="#"><span className="material-symbols-outlined text-on-primary">share</span></a>
              <a className="w-10 h-10 rounded-full border border-on-primary/30 flex items-center justify-center hover:bg-secondary transition-colors" href="#"><span className="material-symbols-outlined text-on-primary">video_library</span></a>
            </div>
          </div>
          <div className="space-y-4">
            <h5 className="text-secondary font-label-md uppercase tracking-widest">Quick Links</h5>
            <ul className="space-y-2 font-body-md text-on-primary/80">
              <li><a className="hover:text-secondary transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-secondary transition-colors" href="#">Terms of Service</a></li>
              <li><a className="hover:text-secondary transition-colors" href="#">Academic Calendar</a></li>
              <li><a className="hover:text-secondary transition-colors" href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-secondary font-label-md uppercase tracking-widest">Contact Info</h5>
            <ul className="space-y-3 font-body-md text-on-primary/80">
              <li className="flex gap-2"><span className="material-symbols-outlined text-secondary">location_on</span> Dhaka, Bangladesh</li>
              <li className="flex gap-2"><span className="material-symbols-outlined text-secondary">call</span> +880 2 1234567</li>
              <li className="flex gap-2"><span className="material-symbols-outlined text-secondary">mail</span> info@academybd.edu</li>
            </ul>
          </div>
        </div>
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-8 border-t border-on-primary/10 text-center md:text-left">
          <p className="text-on-primary/60 font-body-md">© 2024 Academy BD. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
