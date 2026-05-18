import React, { useState } from 'react';
import { useDemoData } from '../context/DemoDataContext';

const TeachersPage = () => {
  const { teachers } = useDemoData();
  const [search, setSearch] = useState('');
  const [department, setDepartment] = useState('All');

  const departments = ['All', 'Science', 'Humanities', 'Commerce', 'Mathematics', 'Administration'];

  const filteredTeachers = teachers.filter((teacher) => {
    const matchesSearch = teacher.name.toLowerCase().includes(search.toLowerCase()) || 
      teacher.designation.toLowerCase().includes(search.toLowerCase());
    
    const matchesDept = department === 'All' || teacher.department === department;
    
    return matchesSearch && matchesDept;
  });

  const scrollRef = React.useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-xl overflow-hidden bg-primary-container">
        <div className="absolute inset-0 academic-pattern"></div>
        <div className="relative max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center text-on-primary">
          <h1 className="font-headline-lg text-headline-lg text-on-primary-container mb-4">Our Distinguished Faculty</h1>
          <p className="font-body-lg text-body-lg text-on-primary-container/80 max-w-2xl mx-auto">
            Meet the dedicated educators who are shaping the future leaders of Bangladesh with excellence, integrity, and cultural pride.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-surface-container py-md sticky top-20 z-40">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-surface p-4 rounded-xl shadow-sm border border-outline-variant">
            <div className="w-full md:w-1/3 relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-surface-container-low border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-body-md rounded-lg outline-none" 
                placeholder="Search by name or subject..." 
                type="text"
              />
            </div>
            <div className="relative flex items-center w-full md:w-auto overflow-hidden group/scroll border border-outline-variant rounded-full bg-surface-container-low px-8">
              {/* Left Chevron */}
              <button 
                onClick={() => handleScroll('left')}
                className="absolute left-1 z-10 w-8 h-8 rounded-full bg-white border border-outline-variant shadow-sm flex items-center justify-center text-primary hover:bg-surface-variant active:scale-95 transition-all cursor-pointer opacity-70 hover:opacity-100"
                aria-label="Scroll left"
              >
                <span className="material-symbols-outlined text-sm font-bold">chevron_left</span>
              </button>

              {/* Scroll Container */}
              <div 
                ref={scrollRef}
                className="flex gap-2 overflow-x-auto py-2 w-full md:max-w-[500px] lg:max-w-[700px] xl:max-w-none no-scrollbar scroll-smooth whitespace-nowrap"
              >
                {departments.map((dept) => (
                  <button 
                    key={dept}
                    onClick={() => setDepartment(dept)}
                    className={`px-5 py-1.5 rounded-full font-label-md text-label-md shrink-0 transition-colors cursor-pointer ${
                      department === dept 
                        ? 'bg-primary text-on-primary' 
                        : 'bg-surface-variant text-on-surface-variant hover:bg-outline-variant'
                    }`}
                  >
                    {dept === 'All' ? 'All Departments' : dept}
                  </button>
                ))}
              </div>

              {/* Right Chevron */}
              <button 
                onClick={() => handleScroll('right')}
                className="absolute right-1 z-10 w-8 h-8 rounded-full bg-white border border-outline-variant shadow-sm flex items-center justify-center text-primary hover:bg-surface-variant active:scale-95 transition-all cursor-pointer opacity-70 hover:opacity-100"
                aria-label="Scroll right"
              >
                <span className="material-symbols-outlined text-sm font-bold">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-xl max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop min-h-[40vh]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
          {filteredTeachers.map((teacher, index) => {
            const initials = teacher.name.split(' ').map(n => n[0]).join('').substring(0,2).toUpperCase();
            return (
              <div key={teacher.id || index} className="bg-white rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow group flex flex-col overflow-hidden">
                <div className={`h-4 w-full ${index % 2 === 0 ? 'bg-primary' : 'bg-secondary'} rounded-t-xl`}></div>
                <div className="p-6 flex flex-col items-center text-center flex-grow">
                  <div className="relative w-32 h-32 mb-6">
                    {teacher.image ? (
                      <img alt={teacher.name} className="w-32 h-32 rounded-full object-cover border-4 border-surface-container" src={teacher.image} />
                    ) : (
                      <div className="w-32 h-32 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container text-headline-md font-bold border-4 border-surface-container">
                        {initials}
                      </div>
                    )}
                    <div className="absolute bottom-0 right-0 bg-secondary-container p-1 rounded-full border-2 border-surface">
                      <span className="material-symbols-outlined text-[16px] text-on-secondary-container" data-weight="fill">verified</span>
                    </div>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">{teacher.name}</h3>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary-container/10 text-primary font-label-md text-label-md mb-3">
                    {teacher.department}
                  </span>
                  <p className="font-body-md text-body-md text-on-surface-variant">{teacher.designation}</p>
                  <p className="text-xs text-on-surface-variant mt-2">{teacher.email}</p>
                </div>
                <div className="p-4 border-t border-outline-variant flex justify-center gap-4">
                  <button className="text-primary hover:text-secondary-container transition-colors"><span className="material-symbols-outlined">mail</span></button>
                  <button className="text-primary hover:text-secondary-container transition-colors"><span className="material-symbols-outlined">school</span></button>
                </div>
              </div>
            );
          })}
          {filteredTeachers.length === 0 && (
            <div className="col-span-full text-center py-12 text-on-surface-variant font-body-lg">
              No faculty members found in this department.
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-surface-container-high py-xl">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-primary rounded-2xl p-xl flex flex-col md:flex-row items-center justify-between gap-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 academic-pattern -mr-20 -mt-20 opacity-20 transform rotate-45"></div>
            <div className="relative z-10 text-center md:text-left text-on-primary">
              <h2 className="font-headline-md text-headline-md text-on-primary mb-2">Want to join our faculty?</h2>
              <p className="font-body-md text-body-md text-on-primary/80">We are always looking for passionate educators to join our team.</p>
            </div>
            <button className="relative z-10 bg-secondary text-on-secondary px-8 py-3 rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity">View Career Openings</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeachersPage;
